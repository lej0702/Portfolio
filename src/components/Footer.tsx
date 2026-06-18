/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Mail, Phone, ArrowUp, Instagram } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 text-left space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs font-bold">
                LE
              </div>
              <span className="font-display font-bold text-white tracking-tight text-lg">
                이은지 (Eunji Lee)
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm leading-relaxed">
              "숫자 너머의 유저를 이해하고, 세그먼트별 최적화를 통해 고객 인게이지먼트를 높이는 마케터입니다."
            </p>
          </div>

          {/* QUICK LINKS DIRECTORY */}
          <div className="md:col-span-3 text-left space-y-3.5">
            <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider font-mono">APP DIRECTORY</span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-brand-accent transition-colors">기본 정보 (Home)</a>
              </li>
              <li>
                <a href="#competencies" className="hover:text-brand-accent transition-colors">핵심역량 (Competencies)</a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-brand-accent transition-colors">캠페인 효과 시뮬레이터</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-brand-accent transition-colors">업무 경험 (Experiences)</a>
              </li>
            </ul>
          </div>

          {/* CONTACT METHOD DIRECTORY */}
          <div className="md:col-span-3 text-left space-y-3.5">
            <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider font-mono">CONTACT DIRECTORY</span>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={PERSONAL_INFO.instagram.url}
                target="_blank"
                rel="noreferrer referrer"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 hover:text-brand-accent transition-colors"
              >
                <Instagram className="w-4 h-4 text-brand-primary" />
                <span>글로벌 프로젝트: {PERSONAL_INFO.instagram.handle}</span>
              </a>
            </div>
          </div>

          {/* BACK TO TOP */}
          <div className="md:col-span-1 flex items-center justify-start md:justify-end">
            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-brand-primary hover:text-white duration-300 text-neutral-400 cursor-pointer"
              title="상단으로 이동"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p className="font-mono">
            © 2026 이은지. All Rights Reserved. Sourced codes ready for Github & Vercel deployment.
          </p>
          <div className="flex gap-4 font-mono font-medium">
            <span>Designed with Parity</span>
            <span>·</span>
            <span>CRM & Growth Marketing</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
