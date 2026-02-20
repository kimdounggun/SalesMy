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
      <div className="relative rounded-[2rem] border-[8px] border-primary bg-primary p-1.5 shadow-2xl sm:rounded-[2.5rem] sm:border-[10px] sm:p-2 lg:rounded-[3rem] lg:border-[12px]">
        <div
          ref={scrollRef}
          className="phone-scroll relative aspect-[9/19] w-[200px] overflow-y-auto overflow-x-hidden rounded-[1.5rem] bg-white sm:w-[240px] sm:rounded-[1.75rem] lg:w-[280px] lg:rounded-[2.25rem]"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {/* 이미지 컨테이너: 스크롤 가능하도록 설정 */}
          <div className="w-full">
            <img
              src="/phone-profile.png"
              alt="휴대폰에서 본 보험 전문가 프로필 화면"
              className="block w-full h-auto select-none pointer-events-none"
              style={{
                display: "block",
                maxWidth: "100%",
                objectFit: "contain",
                objectPosition: "top",
              }}
              draggable={false}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
