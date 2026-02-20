"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Star, ChevronDown } from "lucide-react";
import { SectionFade } from "./SectionFade";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "99,000",
    originalPrice: "150,000",
    discount: 34,
    unit: "1회",
    desc: "기본 프로필 + 전화/카톡 링크 (평생 소장)",
    features: ["모바일 프로필 페이지", "전화/카톡 링크", "평생 소장", "1회 수정 무료"],
    cta: "지금 신청하기",
    highlight: false,
  },
  {
    name: "Pro",
    price: "199,000",
    originalPrice: "300,000",
    discount: 33,
    unit: "+ 월 1만",
    desc: "상담 DB 수집 폼 + 실시간 알림 + 구글 시트 연동",
    features: [
      "Basic 포함",
      "상담 신청 폼 (DB 수집)",
      "실시간 알림 (카톡/문자/메일)",
      "구글 시트 연동",
      "월 1회 무료 수정",
    ],
    cta: "지금 신청하기",
    highlight: true,
  },
  {
    name: "Premium",
    price: "상담 문의",
    unit: "",
    desc: "맞춤형 디자인 + PG 결제 연동 등 커스텀 개발",
    features: ["Pro 포함", "맞춤 디자인", "PG 결제 연동", "무제한 수정"],
    cta: "상담 신청",
    highlight: false,
  },
];

export function Pricing() {
  const [showAllPlans, setShowAllPlans] = useState(false);
  const recommendedPlan = plans.find((p) => p.highlight) || plans[1];
  const otherPlans = plans.filter((p) => !p.highlight);

  return (
    <section id="pricing" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionFade>
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            요금 안내
          </h2>
        </SectionFade>

        {/* 모바일: 추천 플랜만 먼저 노출 */}
        <div className="mt-8 md:hidden">
          <SectionFade delayOrder={1}>
            <div className="relative flex flex-col rounded-2xl border-2 border-accent bg-accent/5 p-5 shadow-lg shadow-accent/10">
              <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                <Star className="h-3.5 w-3.5" />
                추천
              </div>
              <h3 className="mt-2 text-xl font-bold text-primary">{recommendedPlan.name}</h3>
              <div className="mt-2">
                {"originalPrice" in recommendedPlan && recommendedPlan.originalPrice && (
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-sm text-primary/50 line-through">
                      {recommendedPlan.originalPrice}원
                    </span>
                    <span className="text-xs font-semibold text-red-500">지금만 특가</span>
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">
                    {recommendedPlan.price}
                  </span>
                  {recommendedPlan.unit && (
                    <span className="text-sm text-primary/70">원/{recommendedPlan.unit}</span>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm text-primary/70">{recommendedPlan.desc}</p>
              <ul className="mt-4 space-y-2">
                {recommendedPlan.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-primary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://pf.kakao.com/_eBxjyn"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-xl bg-accent py-3.5 text-center text-sm font-semibold text-white transition active:scale-95 hover:bg-accent/90 touch-manipulation"
              >
                {recommendedPlan.cta}
              </a>
            </div>
          </SectionFade>

          {/* 펼쳐보기 버튼 */}
          <button
            type="button"
            onClick={() => setShowAllPlans(!showAllPlans)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white py-3 text-sm font-semibold text-primary transition active:scale-95 hover:border-accent/50 touch-manipulation"
          >
            {showAllPlans ? "플랜 접기" : "다른 플랜 보기"}
            <ChevronDown className={`h-4 w-4 transition-transform ${showAllPlans ? "rotate-180" : ""}`} />
          </button>

          {/* 다른 플랜들 */}
          <AnimatePresence>
            {showAllPlans && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-4 overflow-hidden"
              >
                {otherPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="flex flex-col rounded-2xl border-2 border-gray-200 bg-white p-5"
                  >
                    <h3 className="text-lg font-bold text-primary">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-xl font-bold text-primary">{plan.price}</span>
                      {plan.unit && (
                        <span className="text-sm text-primary/70">원/{plan.unit}</span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-primary/70">{plan.desc}</p>
                    <a
                      href="https://pf.kakao.com/_eBxjyn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block w-full rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white transition active:scale-95 hover:bg-primary/90 touch-manipulation"
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 데스크톱: 기존 3단 레이아웃 */}
        <div className="mt-12 hidden grid-cols-3 gap-8 lg:mt-16 md:grid lg:items-stretch">
          {plans.map((plan, i) => (
            <SectionFade key={plan.name} delayOrder={2 + i} className="h-full">
              <div
                className={`relative flex h-full min-h-[420px] flex-col rounded-2xl border-2 p-8 ${
                  plan.highlight
                    ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    <Star className="h-3.5 w-3.5" />
                    BEST
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                <div className="mt-2">
                  {"originalPrice" in plan && plan.originalPrice && (
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-sm text-primary/50 line-through">
                        {plan.originalPrice}원
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-primary sm:text-3xl">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="text-sm text-primary/70">원/{plan.unit}</span>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm text-primary/70">{plan.desc}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-primary">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://pf.kakao.com/_eBxjyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
