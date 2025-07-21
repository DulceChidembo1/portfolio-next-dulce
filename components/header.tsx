"use client";

import { Moon, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-500 dark:border-gray-700 p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-primary">Dulce Chidembue</h1>
      {/* Desktop menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-3 justify-end transition-colors font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={
                  pathname === item.href ? "text-primary" : "hover:text-primary"
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile menu button */}

      <div className="md:hidden flex items-center">
        <div className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
          {/* Dropdown menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50 w-40 animate-fade-in">
              <ul className="flex flex-col py-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={
                        "block px-4 py-2 text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" +
                        (pathname === item.href ? " text-primary font-semibold" : "")
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="ml-2 p-2 rounded bg-gray-200 dark:bg-gray-700 transition-colors"
        aria-label="Toggle dark mode"
      >
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200 " />
      </button>
    </header>
  );
};
