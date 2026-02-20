"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import { SectionFade } from "./SectionFade";

const oldWay = [
  "연락처만 띡 보냄",
  "고객이 누구인지 모름",
  "신뢰도 낮음",
];

const ourWay = [
  "프로필 + 후기 + 경력 한눈에",
  "고객이 스스로 연락처를 남김 (DB 수집)",
  "전문가 이미지 구축",
];

export function ProblemSolution() {
  return (
    <section id="problem" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionFade>
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            남들은 이렇게 영업하고 있습니다
          </h2>
        </SectionFade>
        <SectionFade delayOrder={1}>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-primary/70 sm:text-lg">
            기존 명함 vs SalesMy
          </p>
        </SectionFade>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16">
          <SectionFade delayOrder={2}>
            <div className="rounded-2xl border-2 border-red-100 bg-red-50/50 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-red-600">
                <X className="h-5 w-5" />
                <span className="font-semibold">기존 명함</span>
              </div>
              <ul className="mt-4 space-y-3">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-primary/80">
                    <span className="mt-0.5 text-red-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionFade>

          <SectionFade delayOrder={3}>
            <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-accent">
                <Check className="h-5 w-5" />
                <span className="font-semibold">SalesMy</span>
              </div>
              <ul className="mt-4 space-y-3">
                {ourWay.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-medium text-primary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionFade>
        </div>

        <SectionFade delayOrder={4} className="mt-10 text-center">
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
