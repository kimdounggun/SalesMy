"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionFade } from "./SectionFade";
import { PhoneScroll } from "./PhoneScroll";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bgGray to-white px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="min-w-0 space-y-6 sm:space-y-8">
            <SectionFade delayOrder={0}>
              <p className="text-sm font-medium tracking-wide text-primary/70 sm:text-base">
                아직도 종이 명함 사진 찍어서 보내세요?
              </p>
            </SectionFade>
            <SectionFade delayOrder={1}>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.2]">
                상위 1% 영업 전문가들의 <span className="whitespace-nowrap">비밀,</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-accentGold bg-clip-text text-transparent sm:whitespace-nowrap">
                  문의가 쏟아지는 &apos;비즈니스 프로필&apos;
                </span>
              </h1>
            </SectionFade>
            <SectionFade delayOrder={2}>
              <p className="max-w-xl text-base leading-relaxed text-primary/80 sm:text-lg sm:max-w-2xl">
                단순 명함이 아닙니다. 고객을 설득하고, 상담 신청까지 받아내는{" "}
                <strong className="font-semibold text-primary">나만의 영업 사원</strong>입니다.
              </p>
            </SectionFade>
            <SectionFade delayOrder={3}>
              <a
                href="https://pf.kakao.com/_eBxjyn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:px-8 sm:py-4 sm:text-lg"
              >
                내 프로필 만들기
                <ArrowRight className="h-5 w-5" />
              </a>
            </SectionFade>
          </div>

          <SectionFade delayOrder={2} className="relative flex justify-center lg:justify-end">
            <PhoneScroll />
          </SectionFade>
        </div>
      </div>
    </section>
  );
}
