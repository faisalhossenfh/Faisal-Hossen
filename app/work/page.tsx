'use client';

import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const projects = [
  {
    slug: 'nexus-ai',
    title: 'Nexus AI Platform',
    category: 'SaaS Design & Dev',
    description: 'A comprehensive AI-driven analytics platform for enterprise data visualization and predictive modeling.',
    image: 'https://picsum.photos/seed/nexus/800/600',
    tags: ['Next.js', 'Tailwind', 'OpenAI']
  },
  {
    slug: 'lumina-ecommerce',
    title: 'Lumina E-Commerce',
    category: 'Conversion Optimization',
    description: 'Redesigning the checkout experience for a high-end fashion retailer, resulting in a 25% increase in sales.',
    image: 'https://picsum.photos/seed/lumina/800/600',
    tags: ['Shopify', 'UX Research', 'A/B Testing']
  },
  {
    slug: 'vanguard-portfolio',
    title: 'Vanguard Portfolio',
    category: 'Brand Identity',
    description: 'A minimal, high-performance portfolio for a leading architectural firm in New York.',
    image: 'https://picsum.photos/seed/vanguard/800/600',
    tags: ['Branding', 'Web Design', 'GSAP']
  },
  {
    slug: 'pulse-fitness',
    title: 'Pulse Fitness App',
    category: 'Mobile UI/UX',
    description: 'A holistic fitness tracking app focused on community engagement and personalized workout plans.',
    image: 'https://picsum.photos/seed/pulse/800/600',
    tags: ['React Native', 'UI Design', 'HealthTech']
  },
  {
    slug: 'horizon-travel',
    title: 'Horizon Travel',
    category: 'Web Application',
    description: 'Streamlining the booking process for luxury travel experiences across the globe.',
    image: 'https://picsum.photos/seed/horizon/800/600',
    tags: ['API Integration', 'Full-Stack', 'Travel']
  },
  {
    slug: 'starlight-studio',
    title: 'Starlight Studio',
    category: 'Creative Agency',
    description: 'An immersive digital experience for a creative agency specializing in 3D motion graphics.',
    image: 'https://picsum.photos/seed/starlight/800/600',
    tags: ['Three.js', 'Motion', 'WebGL']
  }
];

import { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';

export default function WorkPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'projects'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'projects');
    });
    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">Portfolio</p>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">Selected Work<span className="text-[#7C3AED]">.</span></h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <p className="text-lg text-[#0F0F0F]/60 max-w-xl leading-relaxed">
                A collection of projects where strategy meets design and development. Focused on creating impact through digital excellence.
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#0F0F0F]/10 text-sm font-bold hover:bg-[#0F0F0F] hover:text-[#F5F5F5] transition-all">
                  <Filter className="w-4 h-4" />
                  Filter Projects
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20 text-[#0F0F0F]/40 font-bold">Loading projects...</div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20 text-[#0F0F0F]/40 font-bold">No projects found. Add some in the dashboard!</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={project.link || '#'}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#0F0F0F]/5">
                      {project.image && (
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div className="absolute inset-0 bg-[#0F0F0F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#0F0F0F]">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono font-bold bg-[#7C3AED]/10 text-[#7C3AED] px-2 py-0.5 rounded uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#7C3AED] transition-colors">{project.title}</h3>
                    <p className="text-[#0F0F0F]/60 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#0F0F0F] text-[#F5F5F5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Have a project in mind?</h2>
          <p className="text-[#F5F5F5]/60 text-lg mb-12 max-w-xl mx-auto">
            I&apos;m always looking for exciting new challenges and collaborations. Let&apos;s build something remarkable together.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-2 bg-[#7C3AED] text-[#F5F5F5] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#F5F5F5] hover:text-[#0F0F0F] transition-all duration-300 group"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
