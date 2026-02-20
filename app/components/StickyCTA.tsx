"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/90 md:hidden"
    >
      <a
        href="https://pf.kakao.com/_eBxjyn"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition active:scale-95 hover:bg-accent/90 touch-manipulation"
      >
        무료 상담 신청하기
        <ArrowRight className="h-5 w-5" />
      </a>
    </motion.div>
  );
}
