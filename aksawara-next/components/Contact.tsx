"use client";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 px-4 relative overflow-hidden
      bg-white dark:bg-[#0B1C2C] text-black dark:text-white">
      {/* SOFT GLOW (biar gak kosong banget) */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center">
          Hubungi Kami
        </motion.h2>

        <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>

        {/* CONTENT */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-5 rounded-xl
              bg-gray-100 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              hover:border-blue-500 transition">
              <FaPhone className="text-blue-500" />
              <span>+62 819-1475-2905</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-5 rounded-xl
              bg-gray-100 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              hover:border-blue-500 transition">
              <FaEnvelope className="text-blue-500" />
              <span>aksawaradigital@gmail.com</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-5 rounded-xl
              bg-gray-100 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              hover:border-blue-500 transition">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>
                Jl Mekarwangi No 123, Bandung, Jawa Barat, Indonesia, 40912.
              </span>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <h3 className="font-semibold text-lg mb-6">Ikuti Kami</h3>

            <div className="flex gap-5">
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border hover:bg-blue-500 hover:text-white transition">
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border hover:bg-blue-500 hover:text-white transition">
                <FaFacebook />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border hover:bg-blue-500 hover:text-white transition">
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
