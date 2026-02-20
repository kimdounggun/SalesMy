"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export function PhoneScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="relative rounded-[2.5rem] border-[10px] border-primary bg-primary p-2 shadow-2xl sm:rounded-[3rem] sm:border-[12px]">
        <div
          ref={scrollRef}
          className="phone-scroll relative aspect-[9/19] w-[240px] overflow-y-auto overflow-x-hidden rounded-[1.75rem] bg-white sm:w-[280px] sm:rounded-[2.25rem]"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {/* 수동 스크롤: 마우스 휠·트랙패드·터치로 직접 내리면서 볼 수 있음 */}
          <div className="min-h-full w-full">
            {/* 고화질: public/phone-profile.png 를 560px 이상 너비로 넣으면 더 선명함 */}
            <img
              src="/phone-profile.png"
              alt="휴대폰에서 본 보험 전문가 프로필 화면"
              className="block w-full select-none pointer-events-none"
              style={{ height: "auto", display: "block" }}
              draggable={false}
              fetchPriority="high"
              width={560}
              height={1200}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
