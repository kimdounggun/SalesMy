"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionFade } from "./SectionFade";

export function CTA() {
  return (
    <section id="cta" className="bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mx-auto max-w-3xl">
        <SectionFade>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            나만의 영업 사원, 오늘 시작하세요
          </h2>
        </SectionFade>
        <SectionFade delayOrder={1}>
          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            무료 상담으로 맞춤 견적과 제작 방향을 안내해 드립니다.
          </p>
        </SectionFade>
        <SectionFade delayOrder={2}>
          <a
            href="https://pf.kakao.com/_eBxjyn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accentGold px-8 py-4 text-lg font-semibold text-primary shadow-lg transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-accentGold focus:ring-offset-2 focus:ring-offset-primary"
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
