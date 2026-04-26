"use client";

import { useRef } from "react";

export default function GlowCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    cardRef.current?.style.setProperty("--x", `${x}px`);
    cardRef.current?.style.setProperty("--y", `${y}px`);
    cardRef.current?.style.setProperty("--rotateX", `${rotateX}deg`);
    cardRef.current?.style.setProperty("--rotateY", `${rotateY}deg`);
  };

  const handleLeave = () => {
    cardRef.current?.style.setProperty("--rotateX", `0deg`);
    cardRef.current?.style.setProperty("--rotateY", `0deg`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="relative p-[1px] rounded-xl group transition duration-300"
      style={{
        transform:
          "perspective(800px) rotateX(var(--rotateX)) rotateY(var(--rotateY))",
      }}>
      {/* GLOW */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `
            radial-gradient(
              250px circle at var(--x) var(--y),
              rgba(59,130,246,0.7),
              transparent 60%
            )
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative bg-white dark:bg-[#0B1C2C] rounded-xl p-6 transition duration-300 group-hover:-translate-y-2 group-hover:scale-[1.02]">
        {children}
      </div>
    </div>
  );
}
