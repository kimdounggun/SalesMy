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
    desc: "허위매물 걱정 없는 '인증 딜러' 페이지",
  },
  {
    icon: Dumbbell,
    title: "트레이너/강사",
    desc: "비포애프터 사진과 후기로 수강생 모집",
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
        <SectionFade delayOrder={1}>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-primary/70 break-keep">
            프리랜서부터 영업직까지, 한 번 만들면 계속 쓰는 나만의 프로필
          </p>
        </SectionFade>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:items-stretch">
          {items.map((item, i) => (
            <SectionFade key={item.title} delayOrder={2 + i} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-accent/30 hover:shadow-md sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-primary break-keep whitespace-nowrap">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-primary/70 break-keep">{item.desc}</p>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
