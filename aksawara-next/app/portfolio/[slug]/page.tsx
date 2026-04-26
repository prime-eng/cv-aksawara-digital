"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/lib/portfolioData";

/* ================= FIX VARIANTS ================= */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const imageCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function PortfolioDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) return <div>Not found</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-[#071521] py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* BACK */}
        <motion.div variants={fadeInLeft} initial="hidden" animate="visible">
          <Link href="/portfolio" className="text-blue-500 mb-6 inline-block">
            ← Kembali
          </Link>
        </motion.div>

        {/* ================= GALLERY ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((image, idx) => (
            <motion.div
              key={idx}
              variants={imageCardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.03,
              }}
              className="group cursor-pointer"
              onClick={() =>
                setSelectedImage({ src: image.src, alt: image.alt })
              }>
              {/* CARD */}
              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="relative h-56 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-2xl">🔍</span>
                </div>

                {/* COUNTER */}
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  {idx + 1}/{project.images.length}
                </div>
              </motion.div>

              {/* ✅ CAPTION (FIX: gak hilang lagi) */}
              {image.caption && (
                <p className="text-center text-gray-500 dark:text-gray-400 mt-2 text-sm">
                  {image.caption}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-lg"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl">
              ✕
            </button>

            {/* ✅ ALT TEXT */}
            {selectedImage.alt && (
              <p className="text-white text-center mt-3">{selectedImage.alt}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
