'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F5F5F5]/80 backdrop-blur-md border-b border-[#0F0F0F]/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-12 lg:px-24">
        <Link href="/" className="text-xl font-display font-bold tracking-tighter">
          FAISAL<span className="text-[#7C3AED]">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'About', href: '/about' },
            { name: 'Work', href: '/work' },
            { name: 'Services', href: '/services' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' },
          ].map((item) => (
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
      </div>
    </nav>
  );
};
