/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BookOpen, BookMarked, Clock, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { MARKETING_INSIGHTS } from "../data";

export default function MarketingInsights() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleInsight = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="insights" className="py-20 md:py-28 bg-neutral-50 border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pastel border border-purple-100">
              <BookMarked className="w-3.5 h-3.5 text-brand-primary" />
              <span className="text-[11px] font-bold text-brand-primary tracking-wider uppercase font-mono">Expert Growth Insights</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              CRM과 퍼널 최적화를 향한 이은지의 생각
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              정교한 실험 가설 설계부터 성과 리포트 도출까지의 실제 실무 접근 방식과 문제해결 노하우를 담은 정기 발행 매거진 아티클입니다.
            </p>
          </div>
        </div>

        {/* ARTICLES LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: INTRO PANEL */}
          <div className="lg:col-span-4 bg-neutral-950 text-white rounded-3xl p-8 border border-neutral-900 flex flex-col justify-between space-y-12 text-left relative overflow-hidden">
            {/* Visual Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-primary/15 filter blur-2xl"></div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-accent">
                <BookOpen className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="font-display text-2xl font-black tracking-tight leading-snug">
                Latest<br />
                Growth Articles
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans pt-1">
                주관적인 감이 아닌 데이터 분석을 통한 객관적 피드백 수립이 주는 파워에 대한 실무자의 관점을 기술했습니다.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800/80">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold block mb-1 font-mono">INSIDE THE DOMAIN</span>
              <span className="text-xs text-brand-accent font-semibold font-mono">#CRM_Strategy #Segment_Analysis #CTR_Optimization</span>
            </div>
          </div>

          {/* RIGHT: ACCORDION ARTICLES LIST */}
          <div className="lg:col-span-8 space-y-4">
            {MARKETING_INSIGHTS.map((insight) => {
              const isExpanded = expandedId === insight.id;
              return (
                <div
                  key={insight.id}
                  className={`bg-white border rounded-3xl transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-brand-soft ring-4 ring-brand-pastel/30 shadow-md"
                      : "border-neutral-100 hover:border-brand-soft shadow-2xs hover:shadow-xs"
                  }`}
                >
                  {/* Article Summary Head Row */}
                  <button
                    onClick={() => toggleInsight(insight.id)}
                    className="w-full p-6 sm:p-8 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-0.5 text-[10px] font-bold text-white bg-neutral-950 rounded-sm font-mono tracking-wide">
                          {insight.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-[10.5px] font-mono font-medium text-neutral-400">
                          <Clock className="w-3 h-3 text-brand-primary" /> {insight.readTime}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-neutral-900 group-hover:text-brand-primary tracking-tight leading-snug pr-4">
                        {insight.title}
                      </h4>
                      <p className="text-neutral-500 text-xs sm:text-sm font-sans leading-relaxed">
                        {insight.summary}
                      </p>
                    </div>

                    {/* Toggle Indicator Button */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-neutral-100 transition-all ${
                      isExpanded ? "bg-brand-primary text-white border-brand-primary" : "bg-neutral-50 text-neutral-400"
                    }`}>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Article Body Content with nice motion fading */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-neutral-50 animate-slide-up text-left">
                      <div className="bg-neutral-50/60 p-6 rounded-2xl border border-neutral-100/60 space-y-4">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-brand-accent shrink-0" />
                          <span className="text-[10px] font-bold text-neutral-400 tracking-wider block font-mono">ARTICLE BODY INSIDE (전문화적 성찰)</span>
                        </div>
                        <p className="text-neutral-700 text-sm leading-relaxed font-sans whitespace-pre-line">
                          {insight.content}
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
