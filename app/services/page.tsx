'use client';

import { motion } from 'motion/react';
import { 
  Zap, 
  Target, 
  Layers, 
  TrendingUp, 
  Search, 
  Palette, 
  Code, 
  BarChart, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const services = [
  {
    title: 'Full-Stack Development',
    outcome: 'Scalable products that grow with your business.',
    description: 'I build robust, high-performance web applications using modern tech stacks like Next.js, TypeScript, and Node.js. My focus is on security, speed, and long-term maintainability.',
    benefits: [
      'Lightning-fast page loads',
      'SEO-optimized architecture',
      'Seamless API integrations',
      'Mobile-first responsive design'
    ],
    icon: Code,
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    title: 'UI/UX Design',
    outcome: 'Interfaces that turn visitors into loyal customers.',
    description: 'Design is more than just aesthetics; it\'s about solving problems. I create user-centric interfaces that are intuitive, accessible, and strategically designed to drive action.',
    benefits: [
      'High-fidelity interactive prototypes',
      'User research & persona mapping',
      'Conversion-focused visual systems',
      'Accessibility (WCAG) compliance'
    ],
    icon: Palette,
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    title: 'Conversion Optimization',
    outcome: 'Maximize the value of every single visitor.',
    description: 'I analyze user behavior and implement data-driven refinements to your existing product. Through A/B testing and performance audits, I help you squeeze more revenue from your current traffic.',
    benefits: [
      'In-depth performance audits',
      'User behavior heatmaps & analysis',
      'Hypothesis-driven A/B testing',
      'Landing page optimization'
    ],
    icon: TrendingUp,
    color: 'bg-green-500/10 text-green-500'
  },
  {
    title: 'Technical Strategy',
    outcome: 'A clear roadmap to achieve your business goals.',
    description: 'Don\'t build in the dark. I help you define your product roadmap, select the right technology stack, and architect a solution that avoids technical debt and scales effectively.',
    benefits: [
      'Product roadmapping & scoping',
      'Tech stack selection & consulting',
      'Architecture design & review',
      'Scalability planning'
    ],
    icon: Target,
    color: 'bg-orange-500/10 text-orange-500'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    desc: 'We start by defining your business goals, target audience, and the core problem we are solving. This ensures every decision is aligned with your objectives.'
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    desc: 'I create high-fidelity prototypes that allow you to feel the product before development begins. This is where we refine the user experience and visual identity.'
  },
  {
    step: '03',
    title: 'Agile Development',
    desc: 'Using an iterative approach, I build the product in stages, allowing for continuous feedback and adjustments. You\'ll see progress in real-time.'
  },
  {
    step: '04',
    title: 'Launch & Optimization',
    desc: 'After a rigorous testing phase, we launch. But the work doesn\'t stop there—I monitor performance and optimize for maximum impact.'
  }
];

import { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'services'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setServices(data);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'services');
    });
    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />

      {/* Intro Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">Services</p>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-none">
              Strategic Solutions for <span className="text-[#7C3AED]">Digital Growth.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#0F0F0F]/60 leading-relaxed font-medium">
              I help ambitious brands bridge the gap between their vision and a high-performing digital reality. My approach is outcome-driven, combining strategic design with technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {loading ? (
            <div className="text-center py-20 text-[#0F0F0F]/40 font-bold">Loading services...</div>
          ) : services.length === 0 ? (
            <div className="text-center py-20 text-[#0F0F0F]/40 font-bold">No services found. Add some in the dashboard!</div>
          ) : (
            services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-[#0F0F0F]/5 group hover:border-[#7C3AED]/20 transition-all duration-500"
              >
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-7">
                    <div className={`w-16 h-16 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center mb-8`}>
                      <Code className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h2>
                    <p className="text-xl text-[#7C3AED] font-bold mb-6">{service.outcome}</p>
                    <p className="text-[#0F0F0F]/60 text-lg leading-relaxed mb-8 max-w-2xl">
                      {service.description}
                    </p>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 font-bold text-[#0F0F0F] hover:text-[#7C3AED] transition-colors group/link"
                    >
                      Discuss this service
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  {service.benefits && service.benefits.length > 0 && (
                    <div className="lg:col-span-5 bg-[#F5F5F5] rounded-3xl p-8 md:p-10">
                      <h3 className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest mb-6">What you get</h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit: string) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-1" />
                            <span className="font-bold text-[#0F0F0F]/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-[#0F0F0F] text-[#F5F5F5] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">The Methodology</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">How we work <br /> together.</h2>
              <p className="text-[#F5F5F5]/60 text-lg leading-relaxed mb-12">
                I follow a structured, transparent process designed to minimize risk and maximize results. You&apos;ll be involved at every key stage, ensuring the final product exceeds your expectations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold">
                  <Zap className="w-4 h-4 text-[#7C3AED]" />
                  Agile Workflow
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold">
                  <Layers className="w-4 h-4 text-[#7C3AED]" />
                  Modular Design
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center font-mono font-bold text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-[#F5F5F5] transition-all">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-[#F5F5F5]/40 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Ready to start your <br /> next project?</h2>
              <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Let&apos;s discuss how we can achieve your business goals through strategic design and development.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link 
                  href="/contact" 
                  className="bg-[#0F0F0F] text-[#F5F5F5] px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-[#0F0F0F] transition-all duration-300"
                >
                  Book a Strategy Call
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
