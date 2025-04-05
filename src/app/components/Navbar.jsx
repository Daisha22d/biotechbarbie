"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [navBackground, setNavBackground] = useState('bg-pink-50');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground('bg-gray-800');
      } else {
        setNavBackground('bg-pink-50');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full transition-colors duration-300 border-b-4 border-pink-400 ${navBackground} text-white z-50`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1>
          <Link href="/">
            <img src="/DDpink.png" alt="Daisha Drayton Logo" className="h-12" />
          </Link>
        </h1>
        <div className="space-x-6">
          <Link href="#home" className="hover:underline text-pink-400">Home</Link> 
          <Link href="#about" className="hover:underline text-pink-400">About</Link> 
          <Link href="#contact" className="hover:underline text-pink-400">Contact</Link> 
        </div>
      </div>
    </nav>
  );
}