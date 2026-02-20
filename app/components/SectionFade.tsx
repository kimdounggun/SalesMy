"use client";

import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

type SectionFadeProps = {
  children: React.ReactNode;
  className?: string;
  delayOrder?: number;
  as?: keyof typeof motion;
};

export function SectionFade({
  children,
  className = "",
  delayOrder = 0,
  as = "div",
}: SectionFadeProps) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={defaultVariants}
      custom={delayOrder}
      className={className}
    >
      {children}
    </Component>
  );
}
