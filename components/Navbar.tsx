'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F5F5F5]/80 backdrop-blur-md border-b border-[#0F0F0F]/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-12">
        <Link href="/" className="text-xl font-display font-bold tracking-tighter">
          FAISAL<span className="text-[#7C3AED]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-sm font-medium hover:text-[#7C3AED] transition-colors ${pathname === item.href ? 'text-[#7C3AED]' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-[#0F0F0F] text-[#F5F5F5] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#7C3AED] transition-all duration-300"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggler */}
        <button 
          className="md:hidden p-2 text-[#0F0F0F]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F5F5F5] border-b border-[#0F0F0F]/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium hover:text-[#7C3AED] transition-colors ${pathname === item.href ? 'text-[#7C3AED]' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-[#0F0F0F] text-[#F5F5F5] px-6 py-4 rounded-2xl text-center font-bold hover:bg-[#7C3AED] transition-all"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
