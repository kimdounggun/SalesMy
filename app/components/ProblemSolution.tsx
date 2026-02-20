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
    <section id="problem" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionFade>
          <h2 className="text-center text-2xl font-bold text-primary break-keep sm:text-3xl">
            <span className="whitespace-nowrap">남들은 이렇게</span>{" "}
            <span className="whitespace-nowrap">영업하고 있습니다</span>
          </h2>
        </SectionFade>
        <SectionFade delayOrder={1}>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-primary/70 break-keep sm:text-lg">
            <span className="whitespace-nowrap">기존 명함</span> vs <span className="whitespace-nowrap">SalesMy</span>
          </p>
        </SectionFade>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:items-stretch">
          <SectionFade delayOrder={2} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border-2 border-red-100 bg-red-50/50 p-5 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 text-red-600">
                <X className="h-5 w-5 shrink-0" />
                <span className="font-semibold">기존 명함</span>
              </div>
              <ul className="mt-4 flex-1 space-y-3 break-keep">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-primary/80">
                    <span className="mt-0.5 shrink-0 text-red-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionFade>

          <SectionFade delayOrder={3} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border-2 border-accent/30 bg-accent/5 p-5 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 text-accent">
                <Check className="h-5 w-5 shrink-0" />
                <span className="font-semibold">SalesMy</span>
              </div>
              <ul className="mt-4 flex-1 space-y-3 break-keep">
                {ourWay.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-medium text-primary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionFade>
        </div>

        <SectionFade delayOrder={4} className="mt-10 text-center">
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
