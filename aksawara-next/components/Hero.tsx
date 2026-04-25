"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden
      bg-white dark:bg-[#0B1C2C] text-black dark:text-white">
      {/* BACKGROUND DARK */}
      <img
        src="/img/bg.png"
        className="absolute inset-0 w-full h-full object-cover hidden dark:block opacity-40"
      />

      {/* BACKGROUND LIGHT */}
      <img
        src="/img/bg-light.png"
        className="absolute inset-0 w-full h-full object-cover block dark:hidden opacity-60"
      />

      {/* OVERLAY GRADIENT (BIAR TRANSISI HALUS) */}
      <div
        className="absolute inset-0 
        bg-gradient-to-b 
        from-white/80 
        via-white/60 
        to-white
        dark:from-[#0B1C2C]/70 
        dark:via-[#0B1C2C]/80 
        dark:to-[#0B1C2C]"
      />

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full animate-pulse"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold">
          Aksawara Digital
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-600 dark:text-gray-300">
          Inovatif, Profesional, dan Mudah Diakses
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex gap-4 justify-center flex-wrap">
          {/* BUTTON 1 */}
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition shadow-md hover:scale-105">
            Lihat Layanan
          </button>

          {/* BUTTON 2 */}
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-gray-400 dark:border-white text-black dark:text-white px-6 py-3 rounded-full transition hover:bg-black/5 dark:hover:bg-white/10">
            Konsultasi Gratis
          </button>
        </motion.div>
      </div>

      {/* GRADIENT BAWAH (BIAR NYAMBUNG KE SECTION BERIKUTNYA) */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 
        bg-gradient-to-b 
        from-transparent 
        to-white 
        dark:to-[#0B1C2C]"
      />
    </section>
  );
}
