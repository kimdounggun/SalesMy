"use client";

import { Smartphone, Bell, MessageCircle } from "lucide-react";
import { SectionFade } from "./SectionFade";

const features = [
  {
    icon: Smartphone,
    title: "모바일 최적화",
    desc: "어떤 폰에서도 완벽하게 보임",
  },
  {
    icon: Bell,
    title: "DB 알림 시스템",
    desc: "카톡·문자·메일로 실시간 알림",
  },
  {
    icon: MessageCircle,
    title: "간편한 수정",
    desc: "카톡으로 내용만 보내주면 수정 끝",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionFade>
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            핵심 기능
          </h2>
        </SectionFade>

        {/* 모바일: 단순화된 카드 */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {features.map((item, i) => (
            <SectionFade key={item.title} delayOrder={1 + i}>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-bgGray/50 p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-primary/70">{item.desc}</p>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
