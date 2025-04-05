import { useState, useEffect } from 'react';

export default function Navbar() {
  const [navBackground, setNavBackground] = useState('bg-transparent'); // Initial transparent background

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setNavBackground('bg-gray-800'); // Change background color on scroll
      } else {
        setNavBackground('bg-transparent'); // Return to transparent
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-colors duration-300 ${navBackground} text-white z-50`} // z-50 to ensure it's on top
    >
      <div className="container mx-auto p-4">
        {/* Navbar content (logo, links, etc.) */}
        <div className="flex justify-between items-center">
          <a href="/" className="font-bold text-xl">
            My App
          </a>
          <div className="space-x-4">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}