"use client";

import Link from "next/link";
import { Smartphone, Bell, MessageCircle } from "lucide-react";
import { SectionFade } from "./SectionFade";

const features = [
  {
    icon: Smartphone,
    title: "모바일 최적화",
    desc: "어떤 폰에서도 완벽하게 보입니다. 고객이 링크만 눌러도 당신의 프로필이 깔끔하게 펼쳐집니다.",
  },
  {
    icon: Bell,
    title: "DB 알림 시스템",
    desc: "고객이 문의를 남기면 카톡·문자·메일로 실시간 알림. 놓치는 문의 없이 바로 응대하세요.",
  },
  {
    icon: MessageCircle,
    title: "간편한 수정",
    desc: "카톡으로 내용만 보내주면 수정 끝. 개발자 찾을 필요 없이 유지보수가 쉽습니다.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionFade>
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            핵심 기능
          </h2>
        </SectionFade>
        <SectionFade delayOrder={1}>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-primary/70">
            영업 효율을 높이는 세 가지 축
          </p>
        </SectionFade>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {features.map((item, i) => (
            <SectionFade key={item.title} delayOrder={2 + i}>
              <div className="rounded-2xl border border-gray-200 bg-bgGray/50 p-6 sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary/70">{item.desc}</p>
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
