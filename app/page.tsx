'use client';

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Code, 
  Palette, 
  Zap, 
  Search, 
  Layout, 
  BarChart, 
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- Components ---

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// --- Components ---

const Hero = () => (
  <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6">
    <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-bold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 text-balance">
          Designing Solutions, <br />
          <span className="text-accent">Building Experiences.</span>
        </h1>
        <p className="text-lg md:text-xl text-dark/60 mb-10 max-w-lg leading-relaxed">
          I&apos;m Faisal Hossen, a Creative Developer and Solution Designer focused on building high-conversion digital products that solve real business problems.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/work" 
            className="bg-dark text-light px-8 py-4 rounded-full text-base font-bold hover:bg-accent transition-all duration-300 flex items-center gap-2 group"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/about" 
            className="border border-dark/10 px-8 py-4 rounded-full text-base font-bold hover:bg-dark hover:text-light transition-all duration-300"
          >
            About Me
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-dark/5"
      >
        <Image 
          src="https://picsum.photos/seed/faisal/800/1000" 
          alt="Faisal Hossen" 
          fill 
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-light">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-light/60 uppercase tracking-widest">Current Focus</p>
              <p className="text-light font-bold">Next.js + AI Integration</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustIndicators = () => (
  <section className="py-12 border-y border-dark/5 bg-white/50">
    <div className="container-custom px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Years Experience', value: '5+' },
          { label: 'Projects Completed', value: '40+' },
          { label: 'Client Satisfaction', value: '100%' },
          { label: 'Conversion Lift', value: '25%+' },
        ].map((stat, i) => (
          <div key={i} className="text-center md:text-left">
            <p className="text-3xl md:text-4xl font-display font-bold text-dark mb-1">{stat.value}</p>
            <p className="text-xs font-mono font-bold text-dark/40 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProjects = () => (
  <section id="work" className="section-padding">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-accent font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-6xl font-bold">Featured Projects</h2>
        </div>
        <Link href="/work" className="text-sm font-bold flex items-center gap-2 hover:text-accent transition-colors group">
          View All Projects
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            slug: 'nexus-ai',
            title: 'Nexus AI Platform',
            category: 'SaaS Design & Dev',
            image: 'https://picsum.photos/seed/nexus/600/800',
          },
          {
            slug: 'lumina-ecommerce',
            title: 'Lumina E-Commerce',
            category: 'Conversion Optimization',
            image: 'https://picsum.photos/seed/lumina/600/800',
          },
          {
            slug: 'vanguard-portfolio',
            title: 'Vanguard Portfolio',
            category: 'Brand Identity',
            image: 'https://picsum.photos/seed/vanguard/600/800',
          }
        ].map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <Link href={`/work/${project.slug}`}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-dark/5">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-light flex items-center justify-center text-dark">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <p className="text-xs font-mono font-bold text-accent uppercase tracking-wider mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="section-padding bg-dark text-light overflow-hidden">
    <div className="container-custom">
      <div className="max-w-2xl mb-20">
        <p className="text-accent font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">My Methodology</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">How I Think</h2>
        <p className="text-light/60 text-lg leading-relaxed">
          I don&apos;t just build websites; I design strategic solutions. My process is rooted in understanding the core business problem before writing a single line of code.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-12 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-light/10 -translate-y-1/2 z-0"></div>
        {[
          { step: '01', title: 'Understand', desc: 'Deep dive into your business goals, audience, and pain points.', icon: Search },
          { step: '02', title: 'Design', desc: 'Crafting a visual system that converts and reinforces your brand.', icon: Palette },
          { step: '03', title: 'Build', desc: 'Clean, performant code using modern tech stacks like Next.js.', icon: Code },
          { step: '04', title: 'Optimize', desc: 'Continuous testing and refinement for maximum performance.', icon: BarChart },
        ].map((item, i) => (
          <div key={i} className="relative z-10 group">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
              <item.icon className="w-8 h-8 text-accent group-hover:text-light" />
            </div>
            <p className="text-accent font-mono font-bold text-sm mb-2">{item.step}</p>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-light/40 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="section-padding">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-accent font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">What I Offer</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Strategic Services</h2>
          <p className="text-dark/60 text-lg leading-relaxed mb-12">
            I provide a comprehensive range of services designed to help your business grow in the digital landscape.
          </p>
          <div className="space-y-6">
            {[
              { title: 'Full-Stack Development', desc: 'Scalable, secure, and performant web applications.' },
              { title: 'UI/UX Design', desc: 'User-centric interfaces that prioritize conversion.' },
              { title: 'Conversion Optimization', desc: 'Data-driven refinements to boost your bottom line.' },
              { title: 'Technical Strategy', desc: 'Roadmapping your product for long-term success.' },
            ].map((service, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-dark/5 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center group-hover:bg-accent group-hover:text-light transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{service.title}</h4>
                  <p className="text-sm text-dark/60">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden bg-dark/5 min-h-[500px]">
          <Image 
            src="https://picsum.photos/seed/services/1000/1200" 
            alt="Services" 
            fill 
            className="object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex flex-col justify-end p-12">
            <p className="text-accent font-mono font-bold text-sm mb-4 uppercase tracking-widest">The Goal</p>
            <h3 className="text-3xl font-bold text-light mb-6">Turning your vision into a high-performing reality.</h3>
            <Link href="/services" className="text-light font-bold flex items-center gap-2 hover:text-accent transition-colors group">
              Explore all services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section-padding bg-dark text-light">
    <div className="container-custom">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-accent font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">Success Stories</p>
        <h2 className="text-4xl md:text-6xl font-bold">What Clients Say</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            quote: "Faisal&apos;s ability to translate complex business requirements into a seamless user experience is unparalleled. Our conversion rate increased by 30% after the redesign.",
            author: "Sarah Jenkins",
            role: "CEO, TechFlow",
            image: "https://picsum.photos/seed/sarah/100/100"
          },
          {
            quote: "Working with Faisal was a game-changer for our startup. He didn&apos;t just build a site; he helped us define our digital strategy from the ground up.",
            author: "David Chen",
            role: "Founder, Lumina",
            image: "https://picsum.photos/seed/david/100/100"
          }
        ].map((t, i) => (
          <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 relative">
            <MessageSquare className="w-12 h-12 text-accent/20 absolute top-10 right-10" />
            <p className="text-xl italic leading-relaxed mb-8 text-light/80">&quot;{t.quote}&quot;</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image src={t.image} alt={t.author} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold">{t.author}</p>
                <p className="text-sm text-light/40">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Blog = () => (
  <section id="blog" className="section-padding">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-accent font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">Insights</p>
          <h2 className="text-4xl md:text-6xl font-bold">Latest Thinking</h2>
        </div>
        <Link href="/blog" className="text-sm font-bold flex items-center gap-2 hover:text-accent transition-colors group">
          Read All Posts
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'The Future of AI in Web Development',
            date: 'March 24, 2026',
            category: 'Technology',
            image: 'https://picsum.photos/seed/blog1/600/400',
            slug: 'future-of-ai-web-dev'
          },
          {
            title: 'Designing for Conversion: A Practical Guide',
            date: 'March 15, 2026',
            category: 'Design',
            image: 'https://picsum.photos/seed/blog2/600/400',
            slug: 'designing-for-conversion'
          },
          {
            title: 'Why Performance is the Most Important Feature',
            date: 'March 02, 2026',
            category: 'Performance',
            image: 'https://picsum.photos/seed/blog3/600/400',
            slug: 'performance-first-feature'
          }
        ].map((post, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-dark/5">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-mono font-bold bg-dark/5 px-2 py-0.5 rounded uppercase text-dark/60">{post.category}</span>
                <span className="text-[10px] font-mono font-bold text-dark/30 uppercase">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="contact" className="section-padding bg-accent text-light overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
      <Zap className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
    </div>
    <div className="container-custom relative z-10 text-center">
      <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter">Let&apos;s build something <br /> remarkable together.</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <Link 
          href="/contact" 
          className="bg-dark text-light px-12 py-6 rounded-full text-xl font-bold hover:bg-light hover:text-dark transition-all duration-300 flex items-center gap-3"
        >
          <Mail className="w-6 h-6" />
          Get in Touch
        </Link>
        <p className="text-light/60 font-mono text-sm uppercase tracking-widest">Or call me at +1 (555) 123-4567</p>
      </div>
    </div>
  </section>
);

import { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, query, onSnapshot, where, limit } from 'firebase/firestore';

export default function HomePage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Featured Projects
    const projectsQ = query(collection(db, 'projects'), where('featured', '==', true), limit(3));
    const unsubscribeProjects = onSnapshot(projectsQ, (snapshot) => {
      setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Fetch Services
    const servicesQ = query(collection(db, 'services'), limit(3));
    const unsubscribeServices = onSnapshot(servicesQ, (snapshot) => {
      setServices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Fetch Blog Posts
    const postsQ = query(collection(db, 'blogPosts'), where('published', '==', true), limit(3));
    const unsubscribePosts = onSnapshot(postsQ, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });

    return () => {
      unsubscribeProjects();
      unsubscribeServices();
      unsubscribePosts();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustIndicators />
      
      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-accent font-mono font-bold text-sm mb-4 uppercase tracking-widest">Featured Work</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected projects that <br /> drive real impact.</h2>
            </div>
            <Link href="/work" className="text-dark font-bold flex items-center gap-2 hover:text-accent transition-colors group">
              View all projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <Link href={project.link || '#'}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-dark/5">
                    {project.image && (
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold bg-accent/10 text-accent px-2 py-0.5 rounded uppercase tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-accent font-mono font-bold text-sm mb-4 uppercase tracking-widest">Expertise</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">How I help your <br /> business grow.</h2>
              <div className="space-y-6 mb-12">
                {services.map((service) => (
                  <div key={service.id} className="flex gap-6 p-6 rounded-2xl hover:bg-dark/5 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-light transition-all">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                      <p className="text-dark/60 leading-relaxed">{service.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/services" className="bg-dark text-light px-8 py-4 rounded-full font-bold hover:bg-accent transition-all duration-300 inline-flex items-center gap-2">
                View all services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden bg-dark/5 min-h-[500px]">
              <Image 
                src="https://picsum.photos/seed/services/1000/1200" 
                alt="Services" 
                fill 
                className="object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex flex-col justify-end p-12">
                <p className="text-accent font-mono font-bold text-sm mb-4 uppercase tracking-widest">The Goal</p>
                <h3 className="text-3xl font-bold text-light mb-6">Turning your vision into a high-performing reality.</h3>
                <Link href="/services" className="text-light font-bold flex items-center gap-2 hover:text-accent transition-colors group">
                  Explore all services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Blog */}
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-accent font-mono font-bold text-sm mb-4 uppercase tracking-widest">Insights</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Thoughts on design, <br /> code, and strategy.</h2>
            </div>
            <Link href="/blog" className="text-dark font-bold flex items-center gap-2 hover:text-accent transition-colors group">
              Read all articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-dark/5">
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
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono font-bold bg-dark/5 px-2 py-0.5 rounded uppercase text-dark/60">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
