'use client';

import { useState, useEffect } from 'react';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from '@/firebase';
import { signInWithPopup, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import { motion } from 'motion/react';
import { 
  Plus, 
  Trash2, 
  Edit2, 
  LogOut, 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  Settings,
  Save,
  X,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

const ADMIN_EMAIL = "devfhfahim@gmail.com";

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'projects' | 'blog' | 'services'>('projects');
  const [items, setItems] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user || user.email !== ADMIN_EMAIL) return;

    const collectionName = activeTab === 'blog' ? 'blogPosts' : activeTab;
    const q = query(collection(db, collectionName));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, collectionName);
    });

    return () => unsubscribe();
  }, [user, activeTab]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => signOut(auth);

  const openModal = (item: any = null) => {
    setEditingItem(item);
    setFormData(item || getDefaultFormData(activeTab));
    setIsModalOpen(true);
  };

  const getDefaultFormData = (tab: string) => {
    if (tab === 'projects') return { title: '', description: '', image: '', category: '', link: '', featured: false };
    if (tab === 'blog') return { title: '', slug: '', excerpt: '', content: '', image: '', category: '', published: false };
    if (tab === 'services') return { title: '', outcome: '', description: '', benefits: [], icon: '' };
    return {};
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const collectionName = activeTab === 'blog' ? 'blogPosts' : activeTab;
    
    try {
      if (editingItem) {
        await updateDoc(doc(db, collectionName, editingItem.id), formData);
      } else {
        await addDoc(collection(db, collectionName), {
          ...formData,
          createdAt: new Date().toISOString()
        });
      }
      setIsModalOpen(false);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, collectionName);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    const collectionName = activeTab === 'blog' ? 'blogPosts' : activeTab;
    try {
      await deleteDoc(doc(db, collectionName, id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, collectionName);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">Loading...</div>;

  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-6">
        <div className="max-w-md w-full bg-white p-12 rounded-[2.5rem] shadow-sm text-center">
          <div className="w-20 h-20 bg-[#7C3AED]/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Settings className="w-10 h-10 text-[#7C3AED]" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Admin Access</h1>
          <p className="text-[#0F0F0F]/60 mb-8">Please sign in with your authorized Google account to manage your portfolio.</p>
          <button 
            onClick={handleLogin}
            className="w-full bg-[#0F0F0F] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#7C3AED] transition-all"
          >
            Sign in with Google
          </button>
          <Link href="/" className="inline-block mt-8 text-sm font-bold text-[#0F0F0F]/40 hover:text-[#7C3AED]">Back to Website</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0F0F0F] text-white p-8 flex flex-col">
        <div className="mb-12">
          <h2 className="text-xl font-bold tracking-tighter">Faisal Dashboard</h2>
          <p className="text-white/40 text-xs font-mono mt-1">v1.0.0</p>
        </div>
        
        <nav className="flex-1 space-y-2">
          {[
            { id: 'projects', label: 'Projects', icon: Briefcase },
            { id: 'blog', label: 'Blog Posts', icon: FileText },
            { id: 'services', label: 'Services', icon: LayoutDashboard },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === tab.id ? 'bg-[#7C3AED] text-white' : 'text-white/60 hover:bg-white/5'}`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
              {user.photoURL && <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" />}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">{user.displayName}</p>
              <p className="text-xs text-white/40 truncate">{user.email}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-400 hover:bg-red-400/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold capitalize">{activeTab}</h1>
            <p className="text-[#0F0F0F]/40 font-medium">Manage your {activeTab} content</p>
          </div>
          <button 
            onClick={() => openModal()}
            className="bg-[#7C3AED] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#0F0F0F] transition-all"
          >
            <Plus className="w-5 h-5" />
            Add New
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-3xl border border-[#0F0F0F]/5 shadow-sm group">
              {item.image && (
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-[#F5F5F5]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 truncate">{item.title}</h3>
              <p className="text-[#0F0F0F]/40 text-sm mb-6 line-clamp-2">{item.description || item.excerpt}</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => openModal(item)}
                  className="flex-1 bg-[#F5F5F5] text-[#0F0F0F] py-2 rounded-xl font-bold text-sm hover:bg-[#7C3AED] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Edit2 className="w-4 h-4" /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#0F0F0F]/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white w-full max-w-2xl rounded-[2.5rem] p-10 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">{editingItem ? 'Edit' : 'Add New'} {activeTab}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-[#F5F5F5] rounded-full transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest ml-2">Title</label>
                <input 
                  type="text" 
                  value={formData.title || ''} 
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#7C3AED] focus:bg-white transition-all outline-none font-medium"
                  required
                />
              </div>

              {activeTab === 'blog' && (
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest ml-2">Slug</label>
                  <input 
                    type="text" 
                    value={formData.slug || ''} 
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#7C3AED] focus:bg-white transition-all outline-none font-medium"
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest ml-2">Image URL</label>
                <input 
                  type="text" 
                  value={formData.image || ''} 
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#7C3AED] focus:bg-white transition-all outline-none font-medium"
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest ml-2">
                  {activeTab === 'services' ? 'Outcome' : 'Category'}
                </label>
                <input 
                  type="text" 
                  value={activeTab === 'services' ? (formData.outcome || '') : (formData.category || '')} 
                  onChange={(e) => setFormData({...formData, [activeTab === 'services' ? 'outcome' : 'category']: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#7C3AED] focus:bg-white transition-all outline-none font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest ml-2">
                  {activeTab === 'blog' ? 'Excerpt' : 'Description'}
                </label>
                <textarea 
                  value={activeTab === 'blog' ? (formData.excerpt || '') : (formData.description || '')} 
                  onChange={(e) => setFormData({...formData, [activeTab === 'blog' ? 'excerpt' : 'description']: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#7C3AED] focus:bg-white transition-all outline-none font-medium resize-none"
                  rows={3}
                />
              </div>

              {activeTab === 'blog' && (
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest ml-2">Content (Markdown)</label>
                  <textarea 
                    value={formData.content || ''} 
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#7C3AED] focus:bg-white transition-all outline-none font-medium resize-none"
                    rows={10}
                  />
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-2xl">
                  <input 
                    type="checkbox" 
                    checked={formData.featured || false} 
                    onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                    className="w-5 h-5 accent-[#7C3AED]"
                  />
                  <span className="font-bold text-sm">Featured on Homepage</span>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-[#0F0F0F] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#7C3AED] transition-all flex items-center justify-center gap-3"
              >
                <Save className="w-5 h-5" />
                {editingItem ? 'Update' : 'Create'} {activeTab}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
