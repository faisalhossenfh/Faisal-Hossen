'use client';

import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const projectData = {
  'nexus-ai': {
    title: 'Nexus AI Platform',
    category: 'SaaS Design & Dev',
    overview: 'Nexus is an enterprise-grade AI analytics platform that helps data scientists and business analysts visualize complex datasets and generate predictive models with ease.',
    problem: 'The client faced a significant challenge in user retention. Their existing tool was powerful but overly complex, leading to a steep learning curve and high churn rates among non-technical users.',
    solution: 'I redesigned the entire user interface from the ground up, focusing on a "progressive disclosure" strategy. We simplified the initial dashboard while keeping advanced features accessible through a modular workspace system.',
    process: [
      { title: 'Research', desc: 'Conducted 20+ user interviews to identify core friction points in the existing workflow.' },
      { title: 'Prototyping', desc: 'Developed high-fidelity interactive prototypes to test the new modular interface.' },
      { title: 'Development', desc: 'Built the frontend using Next.js and integrated real-time data streams via WebSockets.' },
      { title: 'Testing', desc: 'Iterative A/B testing on key features to ensure usability and performance.' }
    ],
    results: [
      '45% increase in user retention over 6 months.',
      'Reduced onboarding time from 2 weeks to 3 days.',
      'Successfully secured $12M in Series B funding post-redesign.'
    ],
    image: 'https://picsum.photos/seed/nexus/1920/1080',
    tags: ['Next.js', 'Tailwind', 'OpenAI', 'TypeScript'],
    link: 'https://nexus-ai.example.com'
  },
  // Fallback for other slugs
  'default': {
    title: 'Project Case Study',
    category: 'Design & Development',
    overview: 'A deep dive into the strategic process and technical execution of this high-impact digital project.',
    problem: 'Identifying the core challenges and business obstacles that needed to be overcome to achieve success.',
    solution: 'The strategic approach and creative solutions implemented to solve the identified problems effectively.',
    process: [
      { title: 'Discovery', desc: 'Uncovering requirements and setting clear objectives.' },
      { title: 'Design', desc: 'Crafting the visual and interactive experience.' },
      { title: 'Build', desc: 'Transforming designs into performant, scalable code.' },
      { title: 'Launch', desc: 'Deploying and optimizing for real-world performance.' }
    ],
    results: [
      'Significant improvement in key performance indicators.',
      'Enhanced user engagement and satisfaction metrics.',
      'Positive business impact and ROI.'
    ],
    image: 'https://picsum.photos/seed/project/1920/1080',
    tags: ['Next.js', 'Strategy', 'UX/UI'],
    link: '#'
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectData[slug as keyof typeof projectData] || projectData['default'];

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold text-[#0F0F0F]/40 hover:text-[#7C3AED] transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div className="max-w-3xl">
                <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">{project.category}</p>
                <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none">{project.title}</h1>
              </div>
              <Link 
                href={project.link} 
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#0F0F0F] text-[#F5F5F5] px-8 py-4 rounded-full text-base font-bold hover:bg-[#7C3AED] transition-all duration-300"
              >
                Live Project
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-3xl overflow-hidden bg-[#0F0F0F]/5 shadow-2xl"
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Left Column: Overview & Details */}
            <div className="lg:col-span-8 space-y-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-xl text-[#0F0F0F]/70 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </span>
                    The Problem
                  </h3>
                  <p className="text-[#0F0F0F]/60 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    The Solution
                  </h3>
                  <p className="text-[#0F0F0F]/60 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-12">The Process</h2>
                <div className="space-y-12">
                  {project.process.map((step, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#0F0F0F]/10 flex items-center justify-center font-mono font-bold text-sm group-hover:bg-[#0F0F0F] group-hover:text-[#F5F5F5] transition-all">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                        <p className="text-[#0F0F0F]/60 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Meta & Results */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div className="p-8 rounded-3xl bg-white border border-[#0F0F0F]/5">
                  <h3 className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest mb-6">Key Results</h3>
                  <ul className="space-y-6">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-1" />
                        <span className="font-bold text-lg leading-tight">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-[#0F0F0F]/5 text-sm font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-32 px-6 bg-[#0F0F0F] text-[#F5F5F5]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-8">Next Project</p>
          <Link href="/work/lumina-ecommerce" className="group">
            <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter group-hover:text-[#7C3AED] transition-colors">Lumina E-Commerce</h2>
            <div className="inline-flex items-center gap-3 text-xl font-bold border-b-2 border-[#7C3AED] pb-2 group-hover:gap-6 transition-all">
              View Case Study
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
