'use client';

import { motion } from 'motion/react';
import { 
  Heart, 
  Zap, 
  Coffee, 
  Globe, 
  Code, 
  Palette, 
  Target, 
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const skills = [
  {
    category: 'Design',
    items: ['UI/UX Design', 'Visual Identity', 'Prototyping', 'Design Systems', 'User Research'],
    icon: Palette
  },
  {
    category: 'Development',
    items: ['Next.js / React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'API Integration'],
    icon: Code
  },
  {
    category: 'Strategy',
    items: ['Product Roadmapping', 'Conversion Optimization', 'Technical SEO', 'Brand Strategy', 'A/B Testing'],
    icon: Target
  }
];

const philosophies = [
  {
    title: 'Outcome Over Output',
    desc: 'I don&apos;t just count the hours or the lines of code. I measure success by the tangible impact the work has on your business goals.'
  },
  {
    title: 'Empathy-Driven Design',
    desc: 'Every pixel and every function should serve the user. By understanding their pain points, we build solutions that truly resonate.'
  },
  {
    title: 'Technical Excellence',
    desc: 'Clean code and polished design aren&apos;t just "nice to haves"—they are the foundation of a product that scales and lasts.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />

      {/* Hero / Intro */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">The Person Behind the Work</p>
              <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-none">
                Hi, I&apos;m <span className="text-[#7C3AED]">Faisal.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#0F0F0F]/60 leading-relaxed font-medium mb-8">
                I&apos;m a Creative Developer and Solution Designer based in Dhaka, working with clients globally to build high-conversion digital products.
              </p>
              <div className="flex gap-4">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <Link key={i} href="#" className="w-12 h-12 rounded-full border border-[#0F0F0F]/10 flex items-center justify-center hover:bg-[#0F0F0F] hover:text-[#F5F5F5] transition-all">
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden bg-[#0F0F0F]/5"
            >
              <Image 
                src="https://picsum.photos/seed/faisal-about/1000/1000" 
                alt="Faisal Hossen" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">My Story</h2>
              <div className="space-y-6 text-lg text-[#0F0F0F]/60 leading-relaxed">
                <p>
                  My journey into the digital world started with a simple curiosity: <span className="text-[#0F0F0F] font-bold">how do things work?</span> What began as tinkering with HTML and CSS in my bedroom has evolved into a career dedicated to solving complex business problems through strategic design and development.
                </p>
                <p>
                  Over the past 5+ years, I&apos;ve had the privilege of working with startups and established agencies alike. I&apos;ve learned that the most successful projects aren&apos;t just the ones that look the best—they&apos;re the ones that are built with a deep understanding of the user and a clear focus on results.
                </p>
                <p>
                  Today, I bridge the gap between creative vision and technical execution. I believe that a developer who understands design and a designer who understands code is a powerful combination for any business.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#0F0F0F]/5">
                  <Image src="https://picsum.photos/seed/story1/600/800" alt="Story 1" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 rounded-3xl bg-[#7C3AED] text-white">
                  <Heart className="w-8 h-8 mb-4" />
                  <p className="font-bold text-xl">Driven by passion and a commitment to excellence.</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="p-8 rounded-3xl bg-[#0F0F0F] text-white">
                  <Globe className="w-8 h-8 mb-4 text-[#7C3AED]" />
                  <p className="font-bold text-xl">Working with clients from across the globe.</p>
                </div>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#0F0F0F]/5">
                  <Image src="https://picsum.photos/seed/story2/600/800" alt="Story 2" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">Expertise</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Skills & Tools</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white border border-[#0F0F0F]/5 hover:border-[#7C3AED]/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mb-8 group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-6">{skill.category}</h3>
                <ul className="space-y-4">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#0F0F0F]/60 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-[#0F0F0F] text-[#F5F5F5] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Zap className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-20">
            <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">My Philosophy</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">How I Think</h2>
            <p className="text-[#F5F5F5]/60 text-lg leading-relaxed">
              I believe that great digital products are built at the intersection of empathy, strategy, and technical excellence. Here are the principles that guide my work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {philosophies.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-[#7C3AED] font-mono font-bold text-xl mb-6">0{i + 1}</div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-[#F5F5F5]/40 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#7C3AED] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 blur-[100px] pointer-events-none"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Let&apos;s build something <br /> remarkable.</h2>
              <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Whether you have a fully-formed idea or just the beginnings of a vision, I&apos;m here to help you bring it to life.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link 
                  href="/contact" 
                  className="bg-[#0F0F0F] text-[#F5F5F5] px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-[#0F0F0F] transition-all duration-300 flex items-center gap-3"
                >
                  <Mail className="w-6 h-6" />
                  Get in Touch
                </Link>
                <Link 
                  href="/work" 
                  className="text-white font-bold flex items-center gap-2 hover:underline group"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
