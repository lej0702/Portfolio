/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowDownRight, Award, Zap, Sparkles, TrendingUp, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data";

// Correct generated images paths from compile steps
const PORTRAIT_IMG = "/src/assets/images/marketer_portrait_illustration_1781777475510.jpg";
const ANALYTICS_IMG = "/src/assets/images/marketing_analytics_dashboard_1781777494194.jpg";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pb-28 bg-gradient-to-b from-purple-50/40 via-white to-white overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-pastel/60 filter blur-3xl -z-10 animate-pulse duration-5000"></div>
      <div className="absolute bottom-10 left-[-10%] w-[350px] h-[350px] rounded-full bg-purple-100/40 filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: INTRO TEXT */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pastel border border-purple-100/80 shadow-xs animate-bounce-slow">
              <Sparkles className="w-4.5 h-4.5 text-brand-primary" />
              <span className="text-xs font-semibold text-brand-primary tracking-wide">
                CRM & Retention Marketing Specialist
              </span>
            </div>

            {/* Main Statement */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-[54px] font-bold text-neutral-900 leading-[1.12] tracking-tight">
              Where <span className="text-brand-primary relative">Data & Empathy</span> <br />
              Come Together. <br />
              <span className="text-neutral-800 text-3xl sm:text-4xl md:text-[42px] font-medium font-sans">
                마케터 <span className="underline decoration-brand-medium decoration-3 underline-offset-4">이은지</span>입니다.
              </span>
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-neutral-600 text-base sm:text-lg leading-relaxed font-sans">
              "숫자 너머에 숨어있는 유저의 페르소나를 완벽히 이해하고, 정교한 세그먼트 최적화와 가치 지향적 시나리오를 설계해 자사몰 충성고객 인گی이지먼트를 높입니다."
            </p>

            {/* Tech tag list */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 text-xs font-semibold text-gray-500 bg-gray-50 rounded-md border border-gray-100 font-mono">SQL</span>
              <span className="px-2.5 py-1 text-xs font-semibold text-gray-500 bg-gray-50 rounded-md border border-gray-100 font-mono">Amplitude</span>
              <span className="px-2.5 py-1 text-xs font-semibold text-gray-500 bg-gray-50 rounded-md border border-gray-100 font-mono">CRM Campaign</span>
              <span className="px-2.5 py-1 text-xs font-semibold text-gray-500 bg-gray-50 rounded-md border border-gray-100 font-mono">Tableau</span>
              <span className="px-2.5 py-1 text-xs font-semibold text-gray-500 bg-gray-50 rounded-md border border-gray-100 font-mono">GA4 + GTM</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollToSection("#contact")}
                className="px-8 py-4 bg-brand-primary text-white text-sm font-semibold rounded-full hover:bg-brand-dark transition-all duration-300 shadow-md shadow-purple-200 transform hover:-translate-y-1 text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Mail className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>커피챗 제안 및 협업하기</span>
              </button>
              <button
                onClick={() => handleScrollToSection("#experience")}
                className="px-8 py-4 bg-white text-neutral-800 border border-neutral-200 text-sm font-semibold rounded-full hover:bg-neutral-50 transition-all duration-300 text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>회사 경험 & 성과 보기</span>
                <ArrowDownRight className="w-4 h-4 text-neutral-500" />
              </button>
            </div>

            {/* Floating Audio Graphic Details from Image */}
            <div className="flex items-center gap-4 pt-4 border-t border-purple-50 w-full max-w-lg">
              <div className="flex -space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-soft border-2 border-white flex items-center justify-center font-display text-[9px] font-bold text-brand-primary">GA4</div>
                <div className="w-8 h-8 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center font-display text-[9px] font-bold text-white">SQL</div>
                <div className="w-8 h-8 rounded-full bg-brand-pastel border-2 border-white flex items-center justify-center font-display text-[9px] font-bold text-purple-700">CRM</div>
              </div>
              <div className="text-left">
                <span className="text-xs text-neutral-400 block font-mono">ACTIVE DOMAINS</span>
                <span className="text-xs font-semibold text-neutral-800">퍼널 분석 · 리텐션 강화 · 채널 레이아웃 혁신</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MODERN MULTI-SHAPE ARCH SYSTEM */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-10 lg:py-0">
            {/* Main Arch Frame - Holding portrait illustration */}
            <div className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[430px] bg-brand-soft arch-frame-tall shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 z-10 overflow-hidden">
              <img
                src={PORTRAIT_IMG}
                alt="이은지 포트폴리오 프로필 일러스트"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* sound wave bar decoration at background */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-end gap-1.5 bg-black/40 backdrop-blur-md px-4 py-3 rounded-full border border-white/20">
                <span className="w-1.5 h-6 bg-brand-accent rounded-full animate-pulse"></span>
                <span className="w-1.5 h-10 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-7 bg-brand-medium rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                <span className="w-1.5 h-12 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-1.5 h-5 bg-brand-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              </div>
            </div>

            {/* Secondary Left Smaller Arch Image - Analytical */}
            <div className="absolute left-[-20px] sm:left-[-40px] bottom-[20px] w-[140px] sm:w-[170px] h-[180px] sm:h-[220px] bg-neutral-900 border-4 border-white arch-frame-leaf shadow-lg z-20 hover:rotate-2 hover:scale-105 transition-all duration-300 overflow-hidden hidden sm:block">
              <img
                src={ANALYTICS_IMG}
                alt="마케팅 데이터 분석 차트 그래픽"
                className="w-full h-full object-cover brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* floating pill 1 - "재구매율 +55.8%!" overlay on right */}
            <div className="absolute top-[15%] right-[-15px] sm:right-[-30px] bg-white rounded-full px-4 py-2.5 shadow-lg border border-purple-100 flex items-center gap-3 z-30 animate-pulse-slow">
              <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-brand-primary">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <div className="text-left font-sans">
                <span className="text-[10px] text-neutral-400 block font-semibold tracking-wider font-mono">ON-SITE CRM</span>
                <span className="text-xs font-bold text-neutral-800">재구매 건수 +55.8% ↑</span>
              </div>
            </div>

            {/* floating pill 2 - "ROAS 35,126%" on left */}
            <div className="absolute bottom-[10%] right-[10%] sm:right-[-10px] bg-neutral-950 text-white rounded-full px-4 py-2.5 shadow-lg flex items-center gap-3 z-30 transform hover:scale-105 transition-transform">
              <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white">
                <Zap className="w-4.5 h-4.5" />
              </div>
              <div className="text-left font-sans">
                <span className="text-[9px] text-purple-300 block font-semibold tracking-wider font-mono">NAVER TALKTALK</span>
                <span className="text-xs font-bold text-brand-accent">최대 ROAS 35,126%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
