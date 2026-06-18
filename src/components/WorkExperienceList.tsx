/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Briefcase, Calendar, Building, CheckCircle2, ChevronRight, X, ArrowUpRight, TrendingUp, Layers } from "lucide-react";
import { WORK_EXPERIENCES } from "../data";
import { CampaignDetail } from "../types";

export default function WorkExperienceList() {
  const [selectedCase, setSelectedCase] = useState<CampaignDetail | null>(null);
  const [activeCompanyIdx, setActiveCompanyIdx] = useState<number>(0);

  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pastel border border-purple-100">
              <Briefcase className="w-3.5 h-3.5 text-brand-primary" />
              <span className="text-[11px] font-bold text-brand-primary tracking-wider uppercase font-mono">Professional Experience</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              실무에서 이끌어낸 브랜도의 지표 변화
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              성공 사례 카드를 누르면 구체적인 데이터 추출, 분석 가설, 유서 저니 설계 과정이 적힌 마케팅 케이스 스터디를 확인할 수 있습니다.
            </p>
          </div>
        </div>

        {/* WORK TABLE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: COMPANY TABS */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <div className="text-left mb-2">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">Company list</span>
            </div>
            {WORK_EXPERIENCES.map((work, idx) => (
              <button
                key={work.company}
                onClick={() => setActiveCompanyIdx(idx)}
                className={`w-full p-6 text-left rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                  activeCompanyIdx === idx
                    ? "bg-neutral-950 border-neutral-950 text-white shadow-xl shadow-neutral-900/15"
                    : "bg-neutral-50 hover:bg-neutral-100 border-neutral-200/60 text-neutral-800"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-display text-xs font-black ${
                  activeCompanyIdx === idx ? "bg-brand-primary text-white" : "bg-neutral-200 text-neutral-700"
                }`}>
                  {work.company.substring(0, 2)}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm tracking-tight">{work.company}</h3>
                  <p className={`text-xs ${activeCompanyIdx === idx ? "text-purple-300" : "text-neutral-500"} font-medium`}>
                    {work.position} · {work.type}
                  </p>
                  <p className={`text-[11px] font-mono ${activeCompanyIdx === idx ? "text-neutral-400" : "text-neutral-400"}`}>
                    {work.duration}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: DETAILED CAMPAIGN CARS ON THE CORRESPONDING COMPANY */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <div className="text-left pb-2 border-b border-purple-50 flex items-center justify-between">
              <span className="text-[11px] font-bold text-brand-primary uppercase tracking-widest font-mono">
                {WORK_EXPERIENCES[activeCompanyIdx].company} - 캠페인 프로젝트 이력
              </span>
              <span className="text-xs font-semibold text-neutral-400">
                총 {WORK_EXPERIENCES[activeCompanyIdx].campaigns.length}개 캠페인
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {WORK_EXPERIENCES[activeCompanyIdx].campaigns.map((camp, cIdx) => (
                <div
                  key={cIdx}
                  onClick={() => setSelectedCase(camp)}
                  className="group bg-neutral-50 hover:bg-white border border-neutral-100 hover:border-brand-soft p-6 sm:p-8 rounded-3xl transition-all duration-300 cursor-pointer hover:shadow-lg relative overflow-hidden flex flex-col justify-between"
                  id={`campaign-card-${activeCompanyIdx}-${cIdx}`}
                >
                  {/* Absolute subtle metric bubble on top corner */}
                  {camp.metrics && camp.metrics.length > 0 && (
                    <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-brand-pastel border border-purple-100 rounded-full px-3 py-1 font-mono text-xs font-bold text-brand-primary">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{camp.metrics[0].label}: {camp.metrics[0].value}</span>
                    </div>
                  )}

                  <div className="space-y-4 max-w-xl text-left">
                    <span className="inline-block text-[10px] font-mono text-brand-primary font-bold px-2 py-0.5 rounded-md bg-brand-pastel">
                      CAMPAIGN #{cIdx + 1}
                    </span>
                    <h4 className="font-display font-black text-lg sm:text-xl text-neutral-900 group-hover:text-brand-primary transition-colors pr-20 leading-snug">
                      {camp.title}
                    </h4>
                    <p className="text-xs text-neutral-500 font-medium">
                      기간: {camp.duration}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed font-sans line-clamp-2">
                      {camp.overview}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-neutral-200/60 items-center justify-between">
                    <div className="flex flex-wrap gap-1 max-w-[80%]">
                      {camp.tags.map((tg, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 text-[10px] font-medium font-mono text-neutral-500 bg-neutral-100 rounded-xs">
                          #{tg}
                        </span>
                      ))}
                    </div>
                    
                    <span className="text-[11px] font-bold text-brand-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>자세히 보기</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DETAILS POPUP OVERLAY/MODAL */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs animate-fade-in">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl max-h-[85vh] overflow-y-auto scrollbar-hide text-left border border-purple-100">
              
              {/* Sticky Modal Top Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 px-6 sm:px-8 py-5 border-b border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                  <span className="text-xs font-bold text-neutral-400 font-mono tracking-widest uppercase">MARKETING CASE DEEP DIVE</span>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-1 px-3 text-sm text-neutral-400 hover:text-neutral-950 hover:bg-neutral-100 rounded-full cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5 inline mr-1" />
                  <span className="text-xs font-bold font-mono">CLOSE</span>
                </button>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Title and tags */}
                <div className="space-y-4">
                  <span className="inline-block text-[10px] uppercase font-mono font-bold tracking-wider text-brand-primary px-2.5 py-1 rounded-sm bg-brand-pastel border border-purple-100">
                    {WORK_EXPERIENCES[activeCompanyIdx].company} · {WORK_EXPERIENCES[activeCompanyIdx].position}
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-neutral-950 tracking-tight leading-snug">
                    {selectedCase.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-neutral-400 font-medium">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-brand-primary" /> {selectedCase.duration}</span>
                  </div>
                </div>

                {/* Overviews */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block font-mono">1. CAMPAIGN OVERVIEW</span>
                  <p className="text-neutral-700 text-sm leading-relaxed font-sans">{selectedCase.overview}</p>
                </div>

                {/* Problems and analytical findings */}
                <div className="space-y-2 bg-rose-50/50 p-5 rounded-2xl border border-rose-100/60">
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block font-mono">2. PROBLEM & DATA ANALYSIS (문제 분석)</span>
                  <p className="text-neutral-800 text-sm leading-relaxed font-sans font-medium">{selectedCase.problem}</p>
                </div>

                {/* Solutions designed */}
                <div className="space-y-2 bg-brand-pastel/30 p-5 rounded-2xl border border-purple-100/60">
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block font-mono">3. CRM STRATEGIES & SOLUTIONS (문제 해결)</span>
                  <p className="text-neutral-800 text-sm leading-relaxed font-sans">{selectedCase.solution}</p>
                </div>

                {/* Outcome achievements bullet lists */}
                <div className="space-y-4 pt-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block font-mono">4. CAMPAIGN METRIC ACHIEVEMENTS (성과 전람)</span>
                  <div className="space-y-2.5">
                    {selectedCase.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-100 hover:border-brand-soft hover:bg-white duration-200">
                        <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                        <p className="text-neutral-800 text-sm font-semibold font-sans leading-relaxed">{res}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Metric highlights tags */}
                {selectedCase.metrics && selectedCase.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                    {selectedCase.metrics.map((met, mIdx) => (
                      <div key={mIdx} className="bg-brand-pastel/10 rounded-2xl p-4 border border-purple-50 text-center">
                        <span className="text-[10px] text-neutral-400 block font-bold font-mono">{met.label}</span>
                        <span className="text-2xl font-extrabold text-brand-primary font-mono">{met.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags block */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {selectedCase.tags.map((tg, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 text-[10.5px] font-semibold text-neutral-500 bg-neutral-50 rounded-md border border-neutral-100 font-mono">
                      #{tg}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
