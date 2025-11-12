'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1E3D] shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-[#F8B400] p-2 rounded-lg transition-transform group-hover:scale-105">
              <svg 
                className="w-6 h-6 text-[#0A1E3D]" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5 13.5 12.59l-4-4L2 16.09z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">
              Market <span className="text-[#F8B400]">Dojo</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-[#F8B400] transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-[#F8B400] transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/courses" 
              className="text-white hover:text-[#F8B400] transition-colors font-medium"
            >
              Courses
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-[#F8B400] transition-colors font-medium"
            >
              Contact
            </Link>
            <Link 
              href="/courses" 
              className="bg-[#F8B400] text-[#0A1E3D] px-6 py-2 rounded-full font-semibold hover:bg-[#ffcc33] transition-all hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
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
                className="text-white hover:text-[#F8B400] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-[#F8B400] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/courses" 
                className="text-white hover:text-[#F8B400] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-[#F8B400] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/courses" 
                className="bg-[#F8B400] text-[#0A1E3D] px-6 py-2 rounded-full font-semibold hover:bg-[#ffcc33] transition-all text-center"
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
