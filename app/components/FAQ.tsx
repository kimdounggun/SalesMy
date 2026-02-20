"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionFade } from "./SectionFade";

const faqs = [
  {
    q: "제작 기간은 얼마나 걸리나요?",
    a: "영업일 기준 2~3일 내에 완성해 드립니다. 급하신 경우 별도 문의 주시면 가능한 범위에서 조정해 드립니다.",
  },
  {
    q: "수정은 되나요?",
    a: "Basic은 1회 무료 수정, Pro 이상은 월 1회 무료 수정이 포함됩니다. 추가 수정은 건당 비용이 발생할 수 있으며, Premium은 무제한 수정이 가능합니다.",
  },
  {
    q: "환불 되나요?",
    a: "서비스에 불만족하신 경우 100% 환불해 드립니다. 제작 완료 전 취소도 가능하며, 완료 후 7일 이내 이슈가 있으시면 전액 환불 정책을 적용해 드립니다.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-bgGray px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionFade>
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            자주 묻는 질문
          </h2>
        </SectionFade>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <SectionFade key={faq.q} delayOrder={i}>
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-primary hover:bg-gray-50 sm:px-6"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  {faq.q}
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    className="shrink-0 text-primary/60"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-100"
                    >
                      <p className="px-5 py-4 text-sm leading-relaxed text-primary/80 sm:px-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
