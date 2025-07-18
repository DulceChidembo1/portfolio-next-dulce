"use client";

import { Moon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
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
    <header className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-p border-gray-200  dark:border-gray-700 p-4 items-center flex justify-between">
      <h1 className="text-xl font-bold text-primary">Dulce Chidembue</h1>
      <nav>
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
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 transition-colors"
        aria-label="Toggle dark mode"
      >
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200 " />
      </button>
    </header>
  );
};
