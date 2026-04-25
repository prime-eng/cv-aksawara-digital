"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Home, User, Briefcase, Image, Phone } from "lucide-react";

const links = [
  { name: "Home", id: "home", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Services", id: "services", icon: Briefcase },
  { name: "Portfolio", id: "portfolio", icon: Image },
  { name: "Contact", id: "contact", icon: Phone },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // 🔥 SCROLL DETECT + ACTIVE SECTION
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 LOCK SCROLL SAAT MENU BUKA
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/80 dark:bg-[#0B1C2C]/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 text-black dark:text-white">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/img/logo-dark.png"
            className="w-10 md:w-12 hidden dark:block"
          />
          <img
            src="/img/logo-light.png"
            className="w-10 md:w-12 block dark:hidden"
          />
          <span className="font-bold text-lg md:text-xl">AKSAWARA DIGITAL</span>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 text-sm items-center">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="flex items-center gap-2 relative pb-1 group">
                <Icon size={16} />

                <span
                  className={`transition ${
                    active === link.id
                      ? "text-blue-500"
                      : "text-gray-700 dark:text-white"
                  }`}>
                  {link.name}
                </span>

                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300
                  ${active === link.id ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>
            );
          })}

          <ThemeToggle />
        </div>

        {/* HAMBURGER */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* MENU */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-white dark:bg-[#0B1C2C] z-50 p-6 flex flex-col shadow-xl">
              {/* HEADER */}
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg text-black dark:text-white">
                  Menu
                </span>

                <button onClick={() => setOpen(false)} className="text-2xl">
                  ✕
                </button>
              </div>

              {/* LIST */}
              <div className="flex flex-col gap-3">
                {links.map((link) => {
                  const Icon = link.icon;

                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition active:scale-95
                      ${
                        active === link.id
                          ? "bg-blue-500/10 text-blue-500"
                          : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                      }`}>
                      <Icon size={20} />
                      <span className="font-medium">{link.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* FOOTER */}
              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-white/10 flex justify-center">
                <ThemeToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
