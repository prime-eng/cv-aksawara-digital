"use client";

import { motion } from "framer-motion";
import { User, Target, Clock } from "lucide-react";
import GlowCard from "./GlowCard";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 text-center bg-gray-100 dark:bg-[#071521]">
      <h2 className="text-3xl font-bold text-black dark:text-white">
        Tentang Kami
      </h2>

      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <GlowCard>
          <User size={40} className="mx-auto text-blue-500 mb-4" />
          <h3 className="font-semibold text-black dark:text-white">Profil</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            Solusi digital modern.
          </p>
        </GlowCard>

        <GlowCard>
          <Target size={40} className="mx-auto text-blue-500 mb-4" />
          <h3 className="font-semibold text-black dark:text-white">
            Visi & Misi
          </h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            Teknologi terbaik.
          </p>
        </GlowCard>

        <GlowCard>
          <Clock size={40} className="mx-auto text-blue-500 mb-4" />
          <h3 className="font-semibold text-black dark:text-white">Sejarah</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            Perjalanan kami.
          </p>
        </GlowCard>
      </div>
    </section>
  );
}
