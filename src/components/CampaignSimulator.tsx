/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BarChart3, TrendingUp, HelpCircle, Layers, CheckCircle2, Zap, ArrowRight, RefreshCcw } from "lucide-react";

interface SimulationData {
  id: string;
  tabLabel: string;
  title: string;
  category: string;
  beforeValue: string;
  afterValue: string;
  metricLabel: string;
  description: string;
  dataHypothesis: string;
  strategyList: string[];
  chartData?: { label: string; before: number; after: number }[];
  highlightMetric: { label: string; value: string };
  roasBadge?: string;
}

const CAMPAIGN_SIMULATION_DATA: SimulationData[] = [
  {
    id: "hyundai",
    tabLabel: "카드 이용 금액 확대",
    title: "타깃 특성 기반 카드 가맹점 이용처 다각화 캠페인",
    category: "Hyundai Card - Segment Strategy",
    beforeValue: "G마켓/옥션 가맹점에서만 소비 (52%)",
    afterValue: "타 가맹점 이용률 +2% (매월 복리 성장)",
    metricLabel: "월 평균 타사 이용 유입",
    description: "스마일카드 회원 중 52% 가량이 G마켓/옥션에서만 카드를 이용하고 있는 상황으로, 간편 결제 서비스(삼성페이/카카오페이 등)에 스마일카드 등록 후 일정 금액 이상 이용 시 혜택을 제공하는 프로모션을 진행했습니다.",
    dataHypothesis: "회원이 간편 결제 서비스 내 카드를 등록 후 이용 습관을 만들어 프로모션 이후에도 카드를 사용하게 될 것이다.",
    strategyList: [
      "G마켓 결제 편중 세그먼트 SQL 정밀 필터링",
      "간편 결제 서비스(삼성페이/카카오페이 등) 활용",
      "프로모션과 관계없이 카드 지속 사용 유도"
    ],
    highlightMetric: { label: "G마켓/옥션 외의 가맹점에서 카드를 이용한 금액", value: "+13%" },
    chartData: [
      { label: "1주차", before: 10, after: 12 },
      { label: "2주차", before: 11, after: 18 },
      { label: "3주차", before: 13, after: 24 },
      { label: "4주차", before: 12, after: 31 },
      { label: "5주차", before: 14, after: 38 }
    ]
  },
  {
    id: "wellica-funnel",
    tabLabel: "자사몰 여정 단골화",
    title: "On-site 개인화 시나리오 기반 퍼널 단계별 전환 설계",
    category: "wellica - Funnel Optimization",
    beforeValue: "잦은 장바구니 이탈 (8.2%)",
    afterValue: "이탈률 감소 & 재구매 건수 +55.8%",
    metricLabel: "이전 장바구니 이탈 vs 잔여 재구매",
    description: "자사 쇼핑몰 고객 행동에서 탐색-고려-구매-재구매 단계를 정립하고, 장바구니 이탈 발생 즉시 실시간 팝업을 띄우며, 첫 구매 30일 시점 재구매 트리거 알림톡 시나리오를 점진적으로 가동해 프로모션 의존적인 단발 매출 구조를 극복했습니다.",
    dataHypothesis: "장바구니 이탈 후 5분 내 온사이트 팝업 혜택 제시 및 구매 30일 차 맞춤 시점 주기는 재구매율을 견인하는 핵심 트리거가 된다.",
    strategyList: [
      "고객 여정 4단계(탐색, 고려, 구매, 재구매) 행동 구조화",
      "장바구니 적재 이탈 즉각 대응 팝업 위젯 A/B 테스트",
      "구매 30일 주기 알림 메시지 완전 자동화 프로세스 구축"
    ],
    highlightMetric: { label: "자사몰 전체 매출 견인", value: "+25.2%" },
    chartData: [
      { label: "탐색단계", before: 90, after: 95 },
      { label: "고려단계", before: 45, after: 68 },
      { label: "결제단계", before: 12, after: 28 },
      { label: "유지단계", before: 6, after: 19 },
      { label: "재구매", before: 3.2, after: 16.5 }
    ]
  },
  {
    id: "wellica-talktalk",
    tabLabel: "네이버 톡톡 채널 개편",
    title: "메신저 레이아웃 & 후킹 카피 전면 개편 캠페인",
    category: "wellica - Channel Conversion",
    beforeValue: "실제 구매 전환 건수 단 1건",
    afterValue: "클릭율 43.8% & 구매 전환율 28.6%",
    metricLabel: "메시지 소통 및 구매 성과",
    description: "정적인 텍스트 위주의 지루한 구성에서 벗어나, 핵심 타깃층인 4050 여성을 대상으로 하는 브랜드 레퍼런스를 분석하였습니다. 할인액과 혜택 종료 기한을 눈에 띄게 배치한 가로형 비주얼 롤링 배너와 후킹 한 줄 카피를 매치했습니다.",
    dataHypothesis: "4050 여성 타깃은 이미지 속에 혜택 수치가 극대화되고 긴장감(마감 기한)이 직관적으로 표기될 때 최적의 클릭 동기를 보인다.",
    strategyList: [
      "4050 여성 행동 주기 맞춤 오후 발송 시간대 조율",
      "텍스트 공지 축소 / 시각적 롤링 카드 배너로 메시지 수정",
      "일정별 반응 CTR 측정에 속하는 성과 보고서 수집 순환"
    ],
    highlightMetric: { label: "광고주 단일 캠페인 최고 ROAS", value: "35,126%" },
    roasBadge: "최대 351.2배 효율성"
  }
];

export default function CampaignSimulator() {
  const [activeCampaign, setActiveCampaign] = useState<SimulationData>(CAMPAIGN_SIMULATION_DATA[1]);
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // Helper for computing scaled heights inside SVG chart gracefully
  const getMaxVal = () => {
    if (!activeCampaign.chartData) return 100;
    const allVals = activeCampaign.chartData.flatMap(d => [d.before, d.after]);
    return Math.max(...allVals, 100);
  };

  const maxVal = getMaxVal();

  return (
    <section id="analytics" className="py-20 md:py-28 bg-neutral-950 text-white overflow-hidden relative">
      {/* Visual Accents */}
      <div className="absolute top-[-50px] right-[-50px] w-96 h-96 rounded-full bg-brand-primary/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 rounded-full bg-brand-accent/5 filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="space-y-4 mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">
            <Zap className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
            <span className="text-[11px] font-bold text-neutral-300 tracking-wider uppercase font-mono">
              Campaign & Data Analytics Simulator
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-neutral-100 to-purple-200 bg-clip-text text-transparent tracking-tight">
            의사결정이 만들어낸 실질적 지표 변화
          </h2>
          <p className="max-w-2xl text-neutral-400 text-sm sm:text-base">
            클릭하여 세그먼트 가설과 검증 데이터를 시뮬레이터 그래프로 확인하세요. <br />
            이은지 마케터가 실제로 데이터를 분석하여 개편한 뒤 성장시킨 실제 비즈니스 기록입니다.
          </p>
        </div>

        {/* SIMULATOR BOARD */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
          {/* TAB SWITCHES */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-neutral-800">
            {CAMPAIGN_SIMULATION_DATA.map((campaign) => (
              <button
                key={campaign.id}
                onClick={() => {
                  setActiveCampaign(campaign);
                  setSimulationStep(0);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-300 ${
                  activeCampaign.id === campaign.id
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/30"
                    : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
                }`}
              >
                {campaign.tabLabel}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT PROFILE INFO */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-left">
                <span className="text-xs font-bold text-brand-accent tracking-widest uppercase font-mono">
                  {activeCampaign.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {activeCampaign.title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {activeCampaign.description}
                </p>

                {/* Case Hypotheses Box */}
                <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800/80 flex gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-brand-accent block font-mono">CORE HYPOTHESIS (핵심 데이터 가설)</span>
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans">{activeCampaign.dataHypothesis}</p>
                  </div>
                </div>

                {/* Core Action points */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[10px] font-bold text-neutral-400 block font-mono">EXECUTION WORKFLOW</span>
                  {activeCampaign.strategyList.map((str, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-medium shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Compare Bar Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-800/60 text-left">
                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 font-mono block">개선 전 (BEFORE)</span>
                  <p className="text-sm font-semibold text-neutral-400 mt-1 line-through">{activeCampaign.beforeValue}</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 relative">
                  <span className="text-[10px] uppercase font-bold text-brand-accent font-mono block">개선 후 (AFTER)</span>
                  <p className="text-sm font-bold text-brand-accent mt-1">{activeCampaign.afterValue}</p>
                  {activeCampaign.roasBadge && (
                    <span className="absolute top-2 right-2 bg-brand-primary text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white">
                      {activeCampaign.roasBadge}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE CHART GRAPH AREA */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-neutral-950 p-6 rounded-3xl border border-neutral-800">
              <div className="flex justify-between items-center mb-6">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 font-mono block">KPI METRIC CHART</span>
                  <span className="text-xs text-neutral-300 font-semibold">{activeCampaign.metricLabel}</span>
                </div>
                <div className="flex gap-3 text-[10px] font-mono">
                  <span className="flex items-center gap-1.5 text-neutral-500">
                    <span className="w-2.5 h-2.5 rounded-xs bg-neutral-700"></span> Before
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-accent">
                    <span className="w-2.5 h-2.5 rounded-xs bg-brand-accent"></span> After
                  </span>
                </div>
              </div>

              {/* SVG DYNAMIC CHART AREA */}
              {activeCampaign.chartData ? (
                <div className="relative h-60 w-full flex items-end justify-between px-2 pt-4">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                    <div className="border-t border-white w-full"></div>
                    <div className="border-t border-white w-full"></div>
                    <div className="border-t border-white w-full"></div>
                    <div className="border-t border-white w-full"></div>
                  </div>

                  {/* Render Columns */}
                  {activeCampaign.chartData.map((data, index) => {
                    const beforePerc = (data.before / maxVal) * 100;
                    const afterPerc = (data.after / maxVal) * 100;

                    return (
                      <div key={index} className="flex flex-col items-center flex-1 h-full justify-end group/bar relative">
                        {/* Hover Popup values */}
                        <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-neutral-800 border border-neutral-700 px-2 py-0.5 rounded-md text-[9px] text-white opacity-0 group-hover/bar:opacity-100 transition-opacity z-20 whitespace-nowrap pointer-events-none select-none font-mono">
                          성장률: +{Math.round(((data.after - data.before) / (data.before || 1)) * 100)}%
                        </div>

                        {/* Bar charts container side-by-side */}
                        <div className="flex items-end gap-1.5 h-[80%] pb-2 justify-center w-full">
                          {/* Before bar */}
                          <div
                            style={{ height: `${beforePerc}%` }}
                            className="w-3 bg-neutral-800 rounded-t-sm transition-all duration-700 hover:bg-neutral-600 cursor-pointer"
                          ></div>
                          {/* After bar with brand-accent color */}
                          <div
                            style={{ height: `${afterPerc}%` }}
                            className="w-4 bg-gradient-to-t from-brand-primary to-brand-accent rounded-t-sm transition-all duration-700 shadow-xs shadow-purple-500/10 hover:brightness-110 cursor-pointer"
                          ></div>
                        </div>

                        {/* Chart label */}
                        <span className="text-[10px] text-neutral-400 font-mono mt-1 select-none">
                          {data.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Showcase for Naver TalkTalk which focuses on exponential math ROAS growth */
                <div className="relative h-60 w-full flex flex-col justify-center items-center px-4 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
                    <TrendingUp className="w-8 h-8 text-brand-accent animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-neutral-500 font-bold uppercase block tracking-widest font-mono">ROAS MULTIPLIER (광고 대비 매출 성장)</span>
                    <span className="text-4xl font-extrabold font-display bg-gradient-to-r from-brand-accent to-purple-300 bg-clip-text text-transparent font-mono">
                      x351.2 배
                    </span>
                    <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed pt-1 font-sans">
                      기존 단 1건만 발생하던 메신저 매출을 타깃 맞춤형 혜택 배너와 후킹 한줄 카피 구조를 정립하여 폭발적인 클릭과 실시간 전환으로 회수했습니다.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Large Single Highlight KPI (Equivalent to the listeners card in bottom) */}
              <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center justify-between text-left">
                <div>
                  <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">FINAL KPI RESULT (목표 성과 달성)</span>
                  <span className="text-xs text-neutral-300 font-sans tracking-tight">{activeCampaign.highlightMetric.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-brand-accent font-mono">
                    {activeCampaign.highlightMetric.value}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
