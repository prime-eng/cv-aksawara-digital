"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Website Company Profile",
    image: "/img/portfolio/web1.jpg",
    link: "#",
  },
  {
    title: "UI/UX Landing Page",
    image: "/img/portfolio/web2.jpg",
    link: "#",
  },
  {
    title: "E-Commerce Website",
    image: "/img/portfolio/web3.jpg",
    link: "#",
  },
  {
    title: "Dashboard Admin",
    image: "/img/portfolio/web4.jpg",
    link: "#",
  },
  {
    title: "Dashboard Admin",
    image: "/img/portfolio/web5.jpg",
    link: "#",
  },
  {
    title: "Dashboard Admin",
    image: "/img/portfolio/web6.jpg",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 py-20 px-4 
      bg-white dark:bg-[#071521] 
      text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center">
          Portfolio Kami
        </motion.h2>

        <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>

        {/* GRID */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10">
              {/* IMAGE */}
              <img
                src={item.image}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0 
                bg-black/60 opacity-0 
                group-hover:opacity-100 
                transition duration-300 
                flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>

                  <span className="text-blue-400 text-sm">Lihat Detail →</span>
                </div>
              </div>

              {/* GLOW BORDER */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-500 transition"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
