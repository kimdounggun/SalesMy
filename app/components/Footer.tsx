"use client";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-primary px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="font-bold text-white">SalesMy</p>
            <p className="mt-1 text-sm text-gray-300">올인원 비즈니스 프로필 · 모바일 명함 + DB 수집</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="transition hover:text-white">
              이용약관
            </a>
            <a href="#" className="transition hover:text-white">
              개인정보처리방침
            </a>
          </div>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-1 border-t border-gray-700 pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <p>상호명: 포르티스 시스템</p>
          <p>사업자등록번호: 741-48-01140</p>
          <p>
            연락처: <a href="tel:010-3752-8818" className="hover:text-white">010-3752-8818</a>
          </p>
          <p>
            이메일:{" "}
            <a href="mailto:fortis_systems@naver.com" className="hover:text-white">
              fortis_systems@naver.com
            </a>
          </p>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500 sm:text-left">
          © {new Date().getFullYear()} SalesMy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
