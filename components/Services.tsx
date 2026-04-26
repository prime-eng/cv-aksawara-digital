"use client";

import { Code, Brush, Wrench, LineChart } from "lucide-react";
import GlowCard from "./GlowCard";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 py-20 text-center bg-white dark:bg-[#0B1C2C]">
      <h2 className="text-3xl font-bold text-black dark:text-white">
        Layanan Kami
      </h2>

      <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        <GlowCard>
          <Code size={40} className="mx-auto text-blue-500 mb-4" />
          <h3 className="font-semibold text-black dark:text-white">
            Pembuatan Website
          </h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            Website modern & scalable.
          </p>
        </GlowCard>

        <GlowCard>
          <Brush size={40} className="mx-auto text-blue-500 mb-4" />
          <h3 className="font-semibold text-black dark:text-white">
            UI/UX Design
          </h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            Desain intuitif & modern.
          </p>
        </GlowCard>

        <GlowCard>
          <Wrench size={40} className="mx-auto text-blue-500 mb-4" />
          <h3 className="font-semibold text-black dark:text-white">
            Maintenance
          </h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            Support berkala.
          </p>
        </GlowCard>

        <GlowCard>
          <LineChart size={40} className="mx-auto text-blue-500 mb-4" />
          <h3 className="font-semibold text-black dark:text-white">SEO</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            Optimasi mesin pencari.
          </p>
        </GlowCard>
      </div>
    </section>
  );
}
