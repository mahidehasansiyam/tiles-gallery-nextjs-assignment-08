"use client"
import { useState } from 'react';
import { Link, Button } from '@heroui/react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Navbar = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/10 backdrop-blur-sm">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
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

          <Link href='/'>
            <Image src={logo} height={40} width={40} alt="Tiles"></Image>
          </Link>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-tiles">All Tiles</Link>
          </li>
          <li>
            <Link href="/my-profile">My Profile</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="btn">Sign Up</button>
          <button className="btn">Login</button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="flex justify-between items-center border-t border-separator md:hidden p-4">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-tiles" className="block py-2">
                All Tiles
              </Link>
            </li>
            <li>
              <Link href="/my-profile" className="block py-2">
                My Profile
              </Link>
            </li>
          </ul>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
