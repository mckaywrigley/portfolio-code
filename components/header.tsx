"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Header component with navigation links and mobile hamburger menu
export const Header = () => {
  // State to track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle escape key press to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    // Toggle body scroll
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Add escape key listener
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full h-16 px-6 bg-sky-50 dark:bg-zinc-900 border-b border-sky-100/20 fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center w-full h-full relative">
        {/* Logo/Brand section */}
        <div className="text-xl font-bold">
          <Link
            href="/"
            className="bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
          >
            Portfolio
          </Link>
        </div>

        {/* Hamburger menu button - only visible on mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 touch-manipulation focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        {/* Desktop Navigation links - hidden on mobile */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-zinc-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-zinc-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium"
          >
            Projects
          </Link>
        </div>

        {/* Backdrop - only visible when mobile menu is open */}
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile menu - only visible when menu is open */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed right-0 top-[64px] w-full sm:w-80 h-[calc(100vh-64px)] bg-sky-50 dark:bg-zinc-900 shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 space-y-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-3 px-4 text-zinc-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium rounded-lg hover:bg-sky-100/50 dark:hover:bg-zinc-800/50"
            >
              Home
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-3 px-4 text-zinc-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium rounded-lg hover:bg-sky-100/50 dark:hover:bg-zinc-800/50"
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
