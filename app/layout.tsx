import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalesMy 셀즈마이 | 상위 1% 영업 전문가의 비즈니스 프로필",
  description:
    "모바일 명함 + DB 수집 올인원. 고객이 스스로 연락처를 남기는 나만의 영업 사원.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="font-sans">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-screen bg-white text-primary">{children}</body>
    </html>
  );
}
