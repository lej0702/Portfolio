/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GraduationCap, Award, BookOpen, Clock, CheckCircle, ChevronRight, Coins, Target } from "lucide-react";
import { EDUCATION, OTHER_ACTIVITIES } from "../data";

export default function EducationActivities() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pastel border border-purple-100">
              <GraduationCap className="w-3.5 h-3.5 text-brand-primary" />
              <span className="text-[11px] font-bold text-brand-primary tracking-wider uppercase font-mono">Academic & Co-curricularss</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              기본기 탄탄한 경영학 인재와<br />
              성장을 실천한 동아리 리더 활동
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              마케팅 실무 데이터를 다루는 든든한 학술 이론과 교내 마케팅 동아리에서 입증한 주도적인 주도력 및 기획안 가치를 가집니다.
            </p>
          </div>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: EDUCATION STATS PANEL */}
          <div className="lg:col-span-4 bg-brand-pastel/30 rounded-3xl p-6 sm:p-8 border border-purple-100/60 flex flex-col justify-between space-y-8 text-left relative overflow-hidden">
            <div className="absolute top-[-30px] right-[-30px] w-48 h-48 rounded-full bg-purple-200/20 filter blur-2xl -z-10"></div>
            
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest font-mono">1. ACADEMIC DEGREE</span>
              <div className="space-y-1.5">
                <span className="text-xs text-neutral-400 font-mono">{EDUCATION.duration}</span>
                <h3 className="font-display font-black text-2xl text-neutral-950 tracking-tight leading-none">
                  {EDUCATION.school}
                </h3>
                <p className="text-sm font-semibold text-neutral-700">
                  {EDUCATION.major} 학사 졸업
                </p>
              </div>
            </div>

            {/* GPA statistics visualization */}
            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-xs space-y-4">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block font-mono">OFFICIAL ACADEMIC GPA</span>
              <div className="flex items-baseline gap-1.5 justify-center py-2">
                <span className="text-5xl font-black font-display text-brand-primary font-mono">
                  {EDUCATION.gpa.split(" / ")[0]}
                </span>
                <span className="text-base text-neutral-400 font-semibold font-mono">
                  / {EDUCATION.gpa.split(" / ")[1]}
                </span>
              </div>
              <p className="text-xs text-neutral-500 text-center leading-relaxed">
                재무, 마케팅, 인사 조직 등 비즈니스 경영 이론의 확고한 기초 체력을 다졌습니다.
              </p>
            </div>

            <div className="pt-2 border-t border-purple-100">
              <div className="flex items-center gap-2.5 text-xs text-brand-primary">
                <Award className="w-4 h-4 shrink-0" />
                <span className="font-semibold">학점 백분율 우수 및 성실성 확인</span>
              </div>
            </div>
          </div>

          {/* RIGHT: OTHER ACTIVITIES - ABC MARKETING TIMELINE */}
          <div className="lg:col-span-8 bg-neutral-50/50 rounded-3xl p-6 sm:p-8 border border-neutral-100 flex flex-col justify-between text-left space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">2. EXTRA-CURRICULAR CLUB PROJECTS</span>
              <h3 className="font-display font-bold text-xl text-neutral-950 tracking-tight">
                {OTHER_ACTIVITIES[0].title}
              </h3>
              <p className="text-xs text-neutral-500 font-mono">
                활동 기간: {OTHER_ACTIVITIES[0].duration}
              </p>
            </div>

            {/* Cases bullet block */}
            <div className="space-y-4">
              {OTHER_ACTIVITIES[0].details.map((detail, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-neutral-100 hover:border-brand-soft hover:shadow-xs duration-300 flex gap-4"
                >
                  {/* Dynamic Index Badge */}
                  <div className="w-7 h-7 rounded-full bg-brand-pastel shrink-0 flex items-center justify-center font-mono text-xs font-bold text-brand-primary">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1.5">
                    {idx === 2 && (
                      <span className="inline-block text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-sans mb-1">
                        🏆 최우수 마케팅 서포터즈 수상
                      </span>
                    )}
                    {idx === 3 && (
                      <span className="inline-block text-[9px] font-bold text-brand-primary bg-brand-pastel px-2 py-0.5 rounded-sm font-sans mb-1">
                        📢 동아리 리브랜딩 성과
                      </span>
                    )}
                    <p className="text-sm text-neutral-700 leading-relaxed font-sans font-medium">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
