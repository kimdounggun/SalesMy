"use client";

import Link from "next/link";
import { Check, Star } from "lucide-react";
import { SectionFade } from "./SectionFade";

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
  return (
    <section id="pricing" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionFade>
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            요금 안내
          </h2>
        </SectionFade>
        <SectionFade delayOrder={1}>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-primary/70">
            목적에 맞는 플랜을 선택하세요
          </p>
        </SectionFade>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8 lg:items-stretch">
          {plans.map((plan, i) => (
            <SectionFade key={plan.name} delayOrder={2 + i} className="h-full">
              <div
                className={`relative flex h-full min-h-[380px] flex-col rounded-2xl border-2 p-5 sm:min-h-[420px] sm:p-6 lg:p-8 ${
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
                {"discount" in plan && plan.discount && (
                  <div className="absolute -top-3 right-4 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
                    {plan.discount}% 할인
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                <div className="mt-2">
                  {"originalPrice" in plan && plan.originalPrice && (
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-sm text-primary/50 line-through">
                        {plan.originalPrice}원
                      </span>
                      <span className="text-xs font-semibold text-red-500">
                        지금만 특가
                      </span>
                    </div>
                  )}
                  <div className="flex flex-wrap items-baseline gap-x-1 gap-y-0 break-keep">
                    <span className="text-2xl font-bold text-primary sm:text-3xl whitespace-nowrap">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="text-sm text-primary/70 whitespace-nowrap">원/{plan.unit}</span>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-primary/70 break-keep">{plan.desc}</p>
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
                  className={`mt-auto block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition active:scale-95 touch-manipulation whitespace-nowrap ${
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

        <SectionFade delayOrder={5} className="mt-12 text-center">
          <a
            href="https://pf.kakao.com/_eBxjyn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition active:scale-95 hover:bg-accent/90 touch-manipulation whitespace-nowrap"
          >
            지금 신청하고 매출 올리기
          </a>
        </SectionFade>
      </div>
    </section>
  );
}
