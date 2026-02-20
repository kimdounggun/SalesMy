"use client";

import Link from "next/link";
import { Check, Star } from "lucide-react";
import { SectionFade } from "./SectionFade";

const plans = [
  {
    name: "Basic",
    price: "99,000",
    unit: "1회",
    desc: "기본 프로필 + 전화/카톡 링크 (평생 소장)",
    features: ["모바일 프로필 페이지", "전화/카톡 링크", "평생 소장", "1회 수정 무료"],
    cta: "문의하기",
    highlight: false,
  },
  {
    name: "Pro",
    price: "199,000",
    unit: "+ 월 1만",
    desc: "상담 DB 수집 폼 + 실시간 알림 + 구글 시트 연동",
    features: [
      "Basic 포함",
      "상담 신청 폼 (DB 수집)",
      "실시간 알림 (카톡/문자/메일)",
      "구글 시트 연동",
      "월 1회 무료 수정",
    ],
    cta: "가장 인기",
    highlight: true,
  },
  {
    name: "Premium",
    price: "상담 문의",
    unit: "",
    desc: "맞춤형 디자인 + PG 결제 연동 등 커스텀 개발",
    features: ["Pro 포함", "맞춤 디자인", "PG 결제 연동", "전담 매니저", "무제한 수정"],
    cta: "상담 신청",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
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
                className={`relative flex h-full min-h-[420px] flex-col rounded-2xl border-2 p-6 sm:p-8 ${
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
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary sm:text-3xl">
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className="text-sm text-primary/70">원/{plan.unit}</span>
                  )}
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
                <Link
                  href="#cta"
                  className={`mt-auto block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </SectionFade>
          ))}
        </div>

        <SectionFade delayOrder={5} className="mt-12 text-center">
          <Link
            href="#cta"
            className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            지금 신청하고 매출 올리기
          </Link>
        </SectionFade>
      </div>
    </section>
  );
}
