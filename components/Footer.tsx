'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Zap } from 'lucide-react';

export const Footer = () => (
  <footer className="py-20 px-6 border-t border-[#0F0F0F]/5 bg-[#F5F5F5]">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-display font-bold tracking-tighter mb-6 block">
            FAISAL<span className="text-[#7C3AED]">.</span>
          </Link>
          <p className="text-[#0F0F0F]/60 max-w-sm leading-relaxed mb-8">
            Strategic solution designer and creative developer helping brands build high-conversion digital products.
          </p>
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="w-10 h-10 rounded-full border border-[#0F0F0F]/10 flex items-center justify-center hover:bg-[#0F0F0F] hover:text-[#F5F5F5] transition-all">
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#0F0F0F]/40">Navigation</h4>
          <ul className="space-y-4">
            {['About', 'Work', 'Services', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase()}`} 
                  className="text-sm font-medium hover:text-[#7C3AED] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#0F0F0F]/40">Legal</h4>
          <ul className="space-y-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm font-medium hover:text-[#7C3AED] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[#0F0F0F]/5 gap-6">
        <p className="text-xs font-mono text-[#0F0F0F]/40 uppercase tracking-widest">© 2026 Faisal Hossen. All rights reserved.</p>
        <p className="text-xs font-mono text-[#0F0F0F]/40 uppercase tracking-widest flex items-center gap-2">
          Built with <Zap className="w-3 h-3 text-[#7C3AED]" /> in Next.js
        </p>
      </div>
    </div>
  </footer>
);
