"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionFade } from "./SectionFade";

export function CTA() {
  return (
    <section id="cta" className="bg-primary px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mx-auto max-w-3xl">
        <SectionFade>
          <h2 className="text-2xl font-bold text-white break-keep sm:text-3xl">
            <span className="whitespace-nowrap">나만의 영업 사원,</span>{" "}
            <span className="whitespace-nowrap">오늘 시작하세요</span>
          </h2>
        </SectionFade>
        <SectionFade delayOrder={1}>
          <p className="mt-4 text-base leading-relaxed text-gray-300 break-keep sm:text-lg">
            무료 상담으로 맞춤 견적과 제작 방향을 안내해 드립니다.
          </p>
        </SectionFade>
        <SectionFade delayOrder={2}>
          <a
            href="https://pf.kakao.com/_eBxjyn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accentGold px-6 py-3.5 text-base font-semibold text-primary shadow-lg transition active:scale-95 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-accentGold focus:ring-offset-2 focus:ring-offset-primary sm:mt-8 sm:px-8 sm:py-4 sm:text-lg touch-manipulation whitespace-nowrap"
          >
            무료 상담 신청하기
            <ArrowRight className="h-5 w-5" />
          </a>
        </SectionFade>
        </div>
      </div>
    </section>
  );
}
