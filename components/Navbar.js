"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-navy-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-accent-red w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
              NV
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight">New Vision</span>
              <span className="block text-xs text-navy-300 -mt-1">Daycare</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-navy-100 hover:text-white transition font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:3473651822"
              className="flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark px-5 py-2.5 rounded-full font-semibold transition"
            >
              <Phone size={18} />
              (347) 365-1822
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-navy-100 hover:text-white py-2 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:3473651822"
              className="flex items-center justify-center gap-2 bg-accent-red hover:bg-accent-red-dark px-5 py-3 rounded-full font-semibold mt-4"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}