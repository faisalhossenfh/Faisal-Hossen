'use client';

import { motion } from 'motion/react';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate submission
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#7C3AED] font-mono font-bold text-sm uppercase tracking-[0.2em] mb-4">Get in Touch</p>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-none">
              Let&apos;s Build Something <span className="text-[#7C3AED]">That Works.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#0F0F0F]/60 leading-relaxed font-medium">
              Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and strategic partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options & Form */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
            {/* Left Column: Direct Options */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest mb-8">Direct Contact</h3>
                <div className="space-y-4">
                  <Link 
                    href="https://wa.me/1234567890" 
                    target="_blank"
                    className="flex items-center justify-between p-6 rounded-2xl bg-white border border-[#0F0F0F]/5 hover:border-[#7C3AED] hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold">WhatsApp</p>
                        <p className="text-sm text-[#0F0F0F]/40">Instant Message</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#0F0F0F]/20 group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all" />
                  </Link>
                  
                  <Link 
                    href="mailto:hello@faisalhossen.com" 
                    className="flex items-center justify-between p-6 rounded-2xl bg-white border border-[#0F0F0F]/5 hover:border-[#7C3AED] hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold">Email</p>
                        <p className="text-sm text-[#0F0F0F]/40">hello@faisalhossen.com</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#0F0F0F]/20 group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>

              {/* Trust Section */}
              <div className="p-8 rounded-3xl bg-[#0F0F0F] text-[#F5F5F5] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/10 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-5 h-5 text-[#7C3AED]" />
                    <span className="text-sm font-bold">Response time: &lt; 24 hours</span>
                  </div>
                  <p className="text-lg text-[#F5F5F5]/60 mb-8 leading-relaxed">
                    &quot;Faisal is incredibly responsive and easy to work with. He truly listens to your needs and delivers beyond expectations.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F5F5F5]/10"></div>
                    <div>
                      <p className="font-bold text-sm">Alex Rivera</p>
                      <p className="text-xs text-[#F5F5F5]/40">Product Lead, Nexus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#0F0F0F]/5 shadow-sm">
                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-[#0F0F0F]/60 mb-8">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-[#7C3AED] font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest ml-2">Name</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="John Doe"
                          className="w-full px-6 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#7C3AED] focus:bg-white transition-all outline-none font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest ml-2">Email</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="john@example.com"
                          className="w-full px-6 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#7C3AED] focus:bg-white transition-all outline-none font-medium"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest ml-2">Project Type</label>
                      <select 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#7C3AED] focus:bg-white transition-all outline-none font-medium appearance-none cursor-pointer"
                      >
                        <option value="">Select a project type</option>
                        <option value="web-dev">Web Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="conversion">Conversion Optimization</option>
                        <option value="strategy">Technical Strategy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-[#0F0F0F]/40 uppercase tracking-widest ml-2">Message</label>
                      <textarea 
                        required 
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full px-6 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#7C3AED] focus:bg-white transition-all outline-none font-medium resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full bg-[#0F0F0F] text-[#F5F5F5] py-5 rounded-2xl font-bold text-lg hover:bg-[#7C3AED] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 group"
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to take the first step?</h2>
            <p className="text-[#0F0F0F]/60 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Don&apos;t let your ideas sit on the shelf. Let&apos;s turn them into a high-performing reality today.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link 
                href="/work" 
                className="text-[#0F0F0F] font-bold flex items-center gap-2 hover:text-[#7C3AED] transition-colors group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0F0F0F]/10 hidden md:block"></div>
              <Link 
                href="/about" 
                className="text-[#0F0F0F] font-bold flex items-center gap-2 hover:text-[#7C3AED] transition-colors group"
              >
                Learn More About Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
