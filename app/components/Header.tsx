"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "기능 소개", href: "#features" },
  { label: "예시 보기", href: "#target" },
  { label: "요금 안내", href: "#pricing" },
  { label: "고객 후기", href: "#review" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
          SalesMy
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary/80 transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#cta"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:inline-flex"
          >
            무료 상담 신청
          </Link>
          <button
            type="button"
            aria-label="메뉴 열기"
            className="rounded-lg p-2 text-primary hover:bg-bgGray md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/20 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.2 }}
              className="absolute right-0 top-0 h-full w-72 max-w-[85vw] border-l border-gray-200 bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between">
                <span className="text-lg font-bold text-primary">SalesMy</span>
                <button
                  type="button"
                  aria-label="메뉴 닫기"
                  className="rounded p-2 hover:bg-bgGray"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#cta"
                  className="mt-4 inline-flex justify-center rounded-full bg-accent px-5 py-3 font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  무료 상담 신청
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
