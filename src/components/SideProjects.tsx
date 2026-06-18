/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Instagram, Flame, Award, Heart, Sparkles, Navigation, Newspaper, Share2, Compass, ArrowUpRight } from "lucide-react";
import { SIDE_PROJECTS } from "../data";
import { SideProject } from "../types";

export default function SideProjects() {
  
  const getProjectIcon = (type: string) => {
    switch (type) {
      case "instagram":
        return <Instagram className="w-5 h-5 text-pink-600" />;
      case "fashion":
        return <Flame className="w-5 h-5 text-orange-500" />;
      case "marketing":
        return <Newspaper className="w-5 h-5 text-blue-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-primary" />;
    }
  };

  const getStyleTheme = (type: string) => {
    switch (type) {
      case "instagram":
        return {
          wrapper: "border-pink-100 hover:border-pink-300 bg-gradient-to-br from-white to-pink-50/10",
          badge: "bg-pink-100 text-pink-700",
          iconBg: "bg-pink-50 border-pink-100",
          dot: "bg-pink-500"
        };
      case "fashion":
        return {
          wrapper: "border-orange-100 hover:border-orange-300 bg-gradient-to-br from-white to-orange-50/10",
          badge: "bg-orange-100 text-orange-700",
          iconBg: "bg-orange-50 border-orange-100",
          dot: "bg-orange-500"
        };
      case "marketing":
        return {
          wrapper: "border-purple-100 hover:border-purple-300 bg-gradient-to-br from-white to-purple-50/10",
          badge: "bg-purple-100 text-purple-700",
          iconBg: "bg-purple-50 border-purple-100",
          dot: "bg-purple-500"
        };
      default:
        return {
          wrapper: "border-purple-100 hover:border-purple-300 bg-gradient-to-br from-white to-purple-50/10",
          badge: "bg-purple-100 text-purple-700",
          iconBg: "bg-purple-50 border-purple-100",
          dot: "bg-purple-500"
        };
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-neutral-50 border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pastel border border-purple-100">
              <Compass className="w-3.5 h-3.5 text-brand-primary animate-spin-slow" />
              <span className="text-[11px] font-bold text-brand-primary tracking-wider uppercase font-mono">Side Projects & Initiatives</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              스스로 빌딩하고 도메인을 개척하는<br />
              이은지의 사이드 프로젝트
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              기획안 제안에 멈추지 않고, 최적의 콘텐츠 포맷 설계 및 오가닉 마케팅 수단을 활용하여 실질 가치를 확보하는 채널을 세팅합니다.
            </p>
          </div>
        </div>

        {/* PROJECTS ROW CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SIDE_PROJECTS.map((proj: SideProject, idx: number) => {
            const theme = getStyleTheme(proj.imageType);
            return (
              <div
                key={idx}
                className={`bg-white border rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full relative group ${theme.wrapper}`}
                id={`project-card-${idx}`}
              >
                {/* Visual Label Corner Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer referrer"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full bg-neutral-50 border border-neutral-100 hover:bg-neutral-950 hover:text-white duration-200 flex items-center justify-center cursor-pointer"
                      title="소셜 링크 방문"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-medium animate-pulse"></span>
                  )}
                </div>

                <div>
                  {/* Icon Block with subtle color background */}
                  <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center mb-6 shadow-2xs ${theme.iconBg}`}>
                    {getProjectIcon(proj.imageType)}
                  </div>

                  {/* Project Info details */}
                  <div className="space-y-2.5 text-left">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-xs tracking-wide uppercase font-mono ${theme.badge}`}>
                        {proj.role}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-display font-bold text-lg text-neutral-950 tracking-tight leading-snug">
                        {proj.title}
                      </h3>
                      {proj.handle && (
                        <span className="text-xs text-brand-primary font-semibold font-mono">
                          {proj.handle}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 font-mono">
                      기간: {proj.duration}
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed font-sans pt-1">
                      {proj.description}
                    </p>
                  </div>

                  {/* Core achievements lists */}
                  <div className="mt-6 pt-5 border-t border-dashed border-neutral-200 text-left space-y-3">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block font-mono">CHIEF OUTCOME</span>
                    {proj.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs">
                        <span className="text-brand-primary shrink-0 mt-1 select-none">•</span>
                        <span className="text-neutral-700 leading-normal font-medium font-sans">
                          {ach}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Styled Tags Row */}
                <div className="flex flex-wrap gap-1 mt-8 pt-4 border-t border-neutral-100">
                  {proj.tags.map((tg, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 text-[9.5px] font-semibold text-neutral-500 bg-neutral-50 rounded-xs border border-neutral-100 font-mono">
                      #{tg}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
