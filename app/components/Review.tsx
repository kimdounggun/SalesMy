"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionFade } from "./SectionFade";

const reviews = [
  {
    text: "문의가 2배 늘었어요. 명함 대신 링크 하나만 보내니까 고객이 더 편해하시더라고요.",
    author: "보험설계사 K님",
  },
  {
    text: "고객이 명함 예쁘다고 칭찬해요. 상담 신청 폼 덕분에 리드 관리도 한곳에서 됩니다.",
    author: "재무설계사 L님",
  },
  {
    text: "상담 잡기가 너무 편해졌어요. 알림 오면 바로 전화 걸어서 턴오버가 빨라졌습니다.",
    author: "중고차 딜러 M님",
  },
  {
    text: "수강생 모집할 때 비포애프터랑 후기 보여주니까 설득이 잘 됩니다. 강력 추천해요.",
    author: "PT 트레이너 N님",
  },
];

export function Review() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="review" className="bg-bgGray px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionFade>
          <h2 className="text-center text-2xl font-bold text-primary break-keep sm:text-3xl">
            <span className="whitespace-nowrap">이미 100+명의 전문가가</span>{" "}
            <span className="whitespace-nowrap">사용 중입니다</span>
          </h2>
        </SectionFade>
        <SectionFade delayOrder={1}>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-primary/70">
            실제 사용 후기를 들어보세요
          </p>
        </SectionFade>

        <SectionFade delayOrder={2} className="mx-auto mt-12 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/20" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <p className="text-base leading-relaxed text-primary break-keep sm:text-lg lg:text-xl">
                  &ldquo;{reviews[index].text}&rdquo;
                </p>
                <p className="mt-4 font-medium text-primary/80">— {reviews[index].author}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                aria-label="이전 후기"
                className="rounded-full p-2 text-primary/70 transition active:scale-95 hover:bg-bgGray hover:text-primary touch-manipulation"
                onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`후기 ${i + 1}`}
                    className={`h-2 w-2 rounded-full transition touch-manipulation ${
                      i === index ? "bg-accent w-6" : "bg-gray-300"
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="다음 후기"
                className="rounded-full p-2 text-primary/70 transition active:scale-95 hover:bg-bgGray hover:text-primary touch-manipulation"
                onClick={() => setIndex((i) => (i + 1) % reviews.length)}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
