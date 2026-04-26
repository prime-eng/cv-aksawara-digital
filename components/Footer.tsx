"use client";

export default function Footer() {
  return (
    <footer
      className="
      bg-white/80 dark:bg-[#0B1C2C]/80 
      backdrop-blur-lg
      border-t border-gray-200 dark:border-white/10
      text-black dark:text-white
      py-6
    ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} AKSAWARA DIGITAL. All rights reserved.
        </p>

        {/* OPTIONAL: SOCIAL MINI */}
        <div className="flex justify-center gap-4 mt-3 text-sm opacity-70">
          <span className="hover:text-blue-500 cursor-pointer">Instagram</span>
          <span className="hover:text-blue-500 cursor-pointer">LinkedIn</span>
          <span className="hover:text-blue-500 cursor-pointer">Facebook</span>
        </div>
      </div>
    </footer>
  );
}
