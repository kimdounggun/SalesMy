"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "기능 소개", href: "#features" },
  { label: "예시 보기", href: "#target" },
  { label: "요금 안내", href: "#pricing" },
  { label: "고객 후기", href: "#review" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
          SalesMy
        </Link>

        {/* 데스크톱 네비게이션 */}
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
          {/* 데스크톱 CTA */}
          <Link
            href="#cta"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 md:inline-flex"
          >
            무료 상담 신청
          </Link>

          {/* 모바일: 드롭다운 메뉴 */}
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-bgGray"
              aria-label="메뉴"
            >
              메뉴
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg"
                >
                  <nav className="py-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-medium text-primary transition hover:bg-bgGray"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="#cta"
                      className="mx-2 mt-2 block rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-accent/90"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      무료 상담 신청
                    </Link>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
