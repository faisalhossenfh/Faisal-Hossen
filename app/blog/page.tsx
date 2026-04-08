'use client';

import { motion } from 'motion/react';
import { ArrowRight, Search, ChevronRight, Calendar, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

const categories = ['All', 'Technology', 'Design', 'Performance', 'Business', 'Strategy'];

const posts = [
  {
    slug: 'future-of-ai-web-dev',
    title: 'The Future of AI in Web Development',
    category: 'Technology',
    date: 'March 24, 2026',
    readTime: '8 min read',
    excerpt: 'How artificial intelligence is reshaping the way we build, test, and deploy modern web applications in 2026 and beyond.',
    image: 'https://picsum.photos/seed/blog1/800/500',
    featured: true
  },
  {
    slug: 'designing-for-conversion',
    title: 'Designing for Conversion: A Practical Guide',
    category: 'Design',
    date: 'March 15, 2026',
    readTime: '12 min read',
    excerpt: 'Practical strategies and psychological principles to turn your website visitors into loyal customers.',
    image: 'https://picsum.photos/seed/blog2/800/500',
    featured: false
  },
  {
    slug: 'performance-first-feature',
    title: 'Why Performance is the Most Important Feature',
    category: 'Performance',
    date: 'March 02, 2026',
    readTime: '6 min read',
    excerpt: 'Exploring the direct correlation between page speed and business revenue in the modern digital landscape.',
    image: 'https://picsum.photos/seed/blog3/800/500',
    featured: false
  },
  {
    slug: 'scaling-saas-products',
    title: 'Scaling SaaS Products: From Zero to Series A',
    category: 'Business',
    date: 'February 18, 2026',
    readTime: '15 min read',
    excerpt: 'A deep dive into the technical and strategic challenges of scaling a software product for rapid growth.',
    image: 'https://picsum.photos/seed/blog4/800/500',
    featured: false
  },
  {
    slug: 'minimalism-in-ui',
    title: 'The Art of Minimalism in Modern UI Design',
    category: 'Design',
    date: 'February 05, 2026',
    readTime: '7 min read',
    excerpt: 'Why less is often more when it comes to creating effective and memorable user interfaces.',
    image: 'https://picsum.photos/seed/blog5/800/500',
    featured: false
  },
  {
    slug: 'strategic-problem-solving',
    title: 'Strategic Problem Solving for Developers',
    category: 'Strategy',
    date: 'January 22, 2026',
    readTime: '10 min read',
    excerpt: 'Moving beyond code: how to think like a product owner and solve business problems effectively.',
    image: 'https://picsum.photos/seed/blog6/800/500',
    featured: false
  }
];

import { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, query, onSnapshot, where } from 'firebase/firestore';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const q = query(collection(db, 'blogPosts'), where('published', '==', true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'blogPosts');
    });
    return () => unsubscribe();
  }, []);

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">Insights & Thinking</p>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">The Blog<span className="text-[#7C3AED]">.</span></h1>
            <p className="text-lg text-[#0F0F0F]/60 max-w-xl leading-relaxed">
              Exploring the intersection of design, technology, and business strategy. Thoughts on building the future of the web.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12 px-6 sticky top-20 z-40 bg-[#F5F5F5]/80 backdrop-blur-md border-b border-[#0F0F0F]/5">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-[#0F0F0F] text-[#F5F5F5]' 
                  : 'bg-white border border-[#0F0F0F]/5 text-[#0F0F0F]/60 hover:border-[#7C3AED] hover:text-[#7C3AED]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20 text-[#0F0F0F]/40 font-bold">Loading articles...</div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-[#0F0F0F]/40 font-bold">No articles found. Add some in the dashboard!</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-[#0F0F0F]/5">
                      {post.image && (
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-mono font-bold bg-[#7C3AED]/10 text-[#7C3AED] px-2 py-0.5 rounded uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#7C3AED] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-[#0F0F0F]/60 text-sm leading-relaxed mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all">
                      Read Article
                      <ChevronRight className="w-4 h-4 text-[#7C3AED]" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-[#0F0F0F] text-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/10 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7C3AED]/10 blur-[100px] pointer-events-none"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-6">Newsletter</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Stay ahead of the curve.</h2>
              <p className="text-[#F5F5F5]/60 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Get monthly insights on design, tech, and strategy delivered straight to your inbox. No spam, just value.
              </p>
              <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-grow px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#7C3AED] transition-all"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#7C3AED] text-[#F5F5F5] px-8 py-4 rounded-full font-bold hover:bg-[#F5F5F5] hover:text-[#0F0F0F] transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
