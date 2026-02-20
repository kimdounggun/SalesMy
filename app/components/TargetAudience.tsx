"use client";

import { Briefcase, Car, Dumbbell, BookOpen } from "lucide-react";
import { SectionFade } from "./SectionFade";

const items = [
  {
    icon: Briefcase,
    title: "보험/재무설계사",
    desc: "신뢰도 UP, 상담 DB 자동 수집",
  },
  {
    icon: Car,
    title: "중고차 딜러",
    desc: "허위매물 걱정 없는 인증 딜러 페이지",
  },
  {
    icon: Dumbbell,
    title: "트레이너/강사",
    desc: "비포애프터와 후기로 수강생 모집",
  },
  {
    icon: BookOpen,
    title: "과외/학원",
    desc: "합격 사례와 커리큘럼으로 학부모 설득",
  },
];

export function TargetAudience() {
  return (
    <section id="target" className="bg-bgGray px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionFade>
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            누구에게 필요한가요?
          </h2>
        </SectionFade>

        {/* 모바일: 단순화된 카드 */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {items.map((item, i) => (
            <SectionFade key={item.title} delayOrder={1 + i}>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-primary text-sm">{item.title}</h3>
                  <p className="mt-1 text-xs text-primary/70">{item.desc}</p>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
