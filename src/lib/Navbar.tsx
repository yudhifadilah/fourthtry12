// components/Navbar.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from "@material-tailwind/react";


export function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Menambahkan event listener saat komponen dimount
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav
      className={`w-full p-4 ${isSticky ? 'fixed top-0 bg-white backdrop-blur-lg' : ''}`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-center mt-8">
        <Breadcrumbs fullWidth>
          <a href="/" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
          <a href="https://github.com/yudhifadilah?tab=repositories" className="opacity-60">
            Github
          </a>
          <a href="https://www.linkedin.com/in/w0nderkid/">Linkedin</a>
        </Breadcrumbs>
      </div>
    </nav>
  );
};

export default Navbar;
