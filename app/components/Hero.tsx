"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionFade } from "./SectionFade";
import { PhoneScroll } from "./PhoneScroll";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bgGray to-white px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* 텍스트 영역 */}
          <div className="min-w-0 space-y-4 sm:space-y-6 lg:space-y-8">
            <SectionFade delayOrder={0}>
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl lg:text-[2.75rem] lg:leading-[1.2]">
                <span className="whitespace-nowrap">상위 1% 영업 전문가들의 비밀,</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-accentGold bg-clip-text text-transparent inline-block">
                  <span className="whitespace-nowrap">문의가 쏟아지는</span>{" "}
                  <span className="whitespace-nowrap">&apos;비즈니스 프로필&apos;</span>
                </span>
              </h1>
            </SectionFade>
            
            <SectionFade delayOrder={1}>
              <p className="max-w-xl text-base leading-relaxed text-primary/80 break-keep sm:text-lg sm:max-w-2xl">
                단순 명함이 아닙니다. 고객을 설득하고, 상담 신청까지 받아내는{" "}
                <strong className="font-semibold text-primary whitespace-nowrap">나만의 영업 사원</strong>입니다.
              </p>
            </SectionFade>

            {/* 데스크톱: 메인 CTA (모바일에서는 하단 고정 버튼 사용) */}
            <SectionFade delayOrder={2}>
              <a
                href="https://pf.kakao.com/_eBxjyn"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 md:inline-flex md:px-8 md:py-4 md:text-lg"
              >
                무료 상담 신청하기
                <ArrowRight className="h-5 w-5" />
              </a>
            </SectionFade>
          </div>

          {/* 폰 목업 - 모바일에서도 표시 */}
          <SectionFade delayOrder={2} className="relative flex justify-center lg:justify-end">
            <PhoneScroll />
          </SectionFade>
        </div>
      </div>
    </section>
  );
}
