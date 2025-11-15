'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy shadow-lg">
      <div className="mx-auto w-full pl-2 sm:pl-3 lg:pl-4 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/market-dojo-logo.jpg"
              alt="Market Dojo logo"
              width={40}
              height={40}
              className="h-9 w-auto rounded-lg object-contain"
              priority
            />
            <div className="hidden sm:block leading-tight select-none">
              <div className="uppercase tracking-[0.35em] text-white/90 text-[10px] md:text-xs">
                Master the Market
              </div>
              <div className="uppercase tracking-[0.35em] text-[#F8B400] text-[10px] md:text-xs">
                Train Like a Warrior
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-gold transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-gold transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/courses" 
              className="text-white hover:text-gold transition-colors font-medium"
            >
              Courses
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-gold transition-colors font-medium"
            >
              Contact
            </Link>
            <Link 
              href="/courses" 
              className="bg-gold text-navy px-6 py-2 rounded-full font-semibold hover:bg-gold-light transition-all hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white hover:text-gold transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-gold transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/courses" 
                className="text-white hover:text-gold transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-gold transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/courses" 
                className="bg-gold text-navy px-6 py-2 rounded-full font-semibold hover:bg-gold-light transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
