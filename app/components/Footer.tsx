"use client";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-primary px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-white">SalesMy</p>
            <p className="mt-1 text-sm">올인원 비즈니스 프로필 · 모바일 명함 + DB 수집</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#"
              className="transition hover:text-white"
            >
              이용약관
            </a>
            <a
              href="#"
              className="transition hover:text-white"
            >
              개인정보처리방침
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-sm">
          <p>상호명: (주)셀즈마이</p>
          <p className="mt-1">사업자등록번호: 000-00-00000</p>
          <p className="mt-1">
            연락처: <a href="tel:02-0000-0000" className="hover:text-white">02-0000-0000</a>
          </p>
          <p className="mt-1">
            이메일:{" "}
            <a href="mailto:hello@salesmy.kr" className="hover:text-white">
              hello@salesmy.kr
            </a>
          </p>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} SalesMy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
