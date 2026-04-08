'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  Share2, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import ReactMarkdown from 'react-markdown';

export default function BlogDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const q = query(collection(db, 'blogPosts'), where('slug', '==', slug), limit(1));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setPost(querySnapshot.docs[0].data());
        }
        setLoading(false);
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `blogPosts/${slug}`);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">Loading...</div>;
  if (!post) return <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">Post not found.</div>;

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-20 left-0 right-0 h-1 bg-[#7C3AED] z-50 origin-left" 
        style={{ scaleX }}
      />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#0F0F0F]/40 hover:text-[#7C3AED] transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-mono font-bold uppercase tracking-wider">{post.category}</span>
              <div className="flex items-center gap-4 text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tighter leading-[1.1] mb-8">
              {post.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#0F0F0F]/60 leading-relaxed font-medium">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-[2rem] overflow-hidden bg-[#0F0F0F]/5 shadow-2xl"
          >
            {post.image && (
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          {/* Social Share Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-40 flex flex-col gap-4">
              <span className="text-[10px] font-mono font-bold text-[#0F0F0F]/30 uppercase tracking-widest vertical-text mb-4">Share</span>
              {[Twitter, Linkedin, LinkIcon].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-[#0F0F0F]/5 flex items-center justify-center hover:bg-[#0F0F0F] hover:text-[#F5F5F5] transition-all">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 lg:col-start-3">
            <article className="prose prose-lg max-w-none">
              <div className="markdown-body text-lg md:text-xl text-[#0F0F0F]/70 leading-relaxed mb-8">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </article>

            {/* Author */}
            <div className="mt-20 pt-10 border-t border-[#0F0F0F]/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/faisal/100/100" alt="Faisal Hossen" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold">Faisal Hossen</p>
                  <p className="text-sm text-[#0F0F0F]/40">Creative Developer & Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
