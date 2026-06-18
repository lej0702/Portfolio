/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { CORE_COMPETENCIES, GLOBAL_METRICS } from "../data";

// Helper to resolve string icons dynamically from lucide-react
function renderIcon(iconName: string, className: string = "w-6 h-6") {
  const IconComponent = (Icons as any)[iconName];
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  return <Icons.Sparkles className={className} />;
}

export default function Competencies() {
  return (
    <section id="competencies" className="py-20 md:py-28 bg-white overflow-hidden border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* LOGO TRUST BAR: Sourced from Tech Skills in resume */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-6 font-mono">
            CORE MARKETING TECH STACK & PLATFORMS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-y-4 opacity-75">
            <div className="flex items-center gap-2 gray-logo hover:opacity-100 duration-200">
              <Icons.Database className="w-5 h-5 text-neutral-500" />
              <span className="font-display font-bold text-neutral-700 tracking-tight text-sm">SQL QUERYING</span>
            </div>
            <div className="flex items-center gap-2 gray-logo hover:opacity-100 duration-200">
              <Icons.BarChart3 className="w-5 h-5 text-neutral-500" />
              <span className="font-display font-semibold text-neutral-700 tracking-tight text-sm">AMPLITUDE</span>
            </div>
            <div className="flex items-center gap-2 gray-logo hover:opacity-100 duration-200">
              <Icons.PieChart className="w-5 h-5 text-neutral-500" />
              <span className="font-display font-semibold text-neutral-700 tracking-tight text-sm">TABLEAU v2024</span>
            </div>
            <div className="flex items-center gap-2 gray-logo hover:opacity-100 duration-200">
              <Icons.Activity className="w-5 h-5 text-neutral-500" />
              <span className="font-display font-semibold text-neutral-700 tracking-tight text-sm">GA4 + GTM</span>
            </div>
            <div className="flex items-center gap-2 gray-logo hover:opacity-100 duration-200">
              <Icons.Mail className="w-5 h-5 text-neutral-500" />
              <span className="font-display font-semibold text-neutral-700 tracking-tight text-sm">CRM CAMPAIGN</span>
            </div>
            <div className="flex items-center gap-2 gray-logo hover:opacity-100 duration-200">
              <Icons.Figma className="w-5 h-5 text-neutral-500" />
              <span className="font-display font-semibold text-neutral-700 tracking-tight text-sm">FIGMA DESIGN</span>
            </div>
          </div>
        </div>

        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pastel border border-purple-100">
              <Icons.Award className="w-3.5 h-3.5 text-brand-primary" />
              <span className="text-[11px] font-bold text-brand-primary tracking-wider uppercase font-mono">My Core Strengths</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              고객 인게이지먼트를 완성하는<br />
              이은지만의 3가지 마케팅 경쟁력
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              정밀한 통계 데이터 분석에 기반하여, 고객의 행동 흐름을 유기적으로 촉진하며 비즈니스의 장기적인 그로스 설루션을 구축합니다.
            </p>
          </div>
        </div>

        {/* COMPETENCIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_COMPETENCIES.map((comp, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 hover:bg-neutral-900 border border-neutral-100 hover:border-neutral-800 p-8 rounded-3xl transition-all duration-300 group flex flex-col justify-between h-full relative"
              id={`competency-card-${idx}`}
            >
              {/* Card Corner Graphic Decorator */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-neutral-200/50 flex items-center justify-center group-hover:border-neutral-800/80 transition-colors">
                <Icons.ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-accent transition-colors duration-300" />
              </div>

              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-brand-pastel group-hover:bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:text-brand-accent transition-all duration-300 mb-8 border border-purple-100 group-hover:border-none">
                  {renderIcon(comp.iconName, "w-6 h-6")}
                </div>

                {/* Info Text */}
                <h3 className="font-display font-bold text-lg text-neutral-900 group-hover:text-white transition-colors duration-300 mb-3">
                  {comp.title}
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed mb-6 font-sans">
                  {comp.summary}
                </p>
              </div>

              {/* Metric Highlights at the bottom of card */}
              <div className="pt-6 border-t border-neutral-200/60 group-hover:border-neutral-800 flex items-baseline justify-between transition-colors">
                <div className="text-left">
                  <span className="text-[10px] text-neutral-400 group-hover:text-neutral-500 uppercase font-bold block font-mono">KEY METRIC</span>
                  <span className="text-xs text-neutral-600 group-hover:text-neutral-400 font-sans tracking-tight block">
                    {comp.metricLabel}
                  </span>
                </div>
                <span className="text-2xl font-bold font-display text-brand-primary group-hover:text-brand-accent tracking-tighter shrink-0 ml-2 font-mono">
                  {comp.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DYNAMIC METRIC STATEMENT BLOCK (Sourced from the layout "4.96 Stars / 25k+ Subscribers" banner in the template illustration) */}
        <div className="mt-20 py-12 px-6 bg-brand-pastel/50 rounded-3xl border border-purple-100 flex flex-col md:flex-row items-center justify-around gap-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-purple-200/20 filter blur-xl -z-10"></div>
          {GLOBAL_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1.5 transition-transform hover:scale-105 duration-300">
              <span className="text-4xl md:text-[46px] font-bold font-display text-neutral-950 tracking-tighter font-mono">
                {metric.value}
              </span>
              <span className="text-xs md:text-sm text-neutral-500 font-medium tracking-tight">
                {metric.description}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
