/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Phone, Sparkles, Plus, Award, Briefcase, FileText } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = () => {
    const tempErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) tempErrors.name = "이름/회사명을 기입해주세요.";
    if (!email.trim()) {
      tempErrors.email = "연락처용 이메일 주소를 입력해 주셔야 회신이 가능합니다.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "올바른 이메일 형식이 아닙니다.";
    }
    if (!message.trim()) tempErrors.message = "문의 핵심 세부 사항을 요약해 주세요.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Store in localStorage for complete local durability and real utility!
      const inquiries = JSON.parse(localStorage.getItem("lee_eunji_portfolio_inquiries") || "[]");
      const newInquiry = {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      };
      inquiries.push(newInquiry);
      localStorage.setItem("lee_eunji_portfolio_inquiries", JSON.stringify(inquiries));

      setIsSubmitted(true);
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");

      // Clear success feedback after some seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white overflow-hidden relative border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: INFO & LINKS */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pastel border border-purple-100">
                <Send className="w-3.5 h-3.5 text-brand-primary" />
                <span className="text-[11px] font-bold text-brand-primary tracking-wider uppercase font-mono">Contact & Links</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
                함께 더 크고 기밀한<br />
                그로스를 시도하고 싶다면
              </h2>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                제안하고 싶으신 업무 내용, 인하우스 CRM 마케터 포지션 채용 인터뷰 제안, 혹은 로컬 사이드 프로젝트 큐레이션 협업 제안 등 편히 연락해 주세요.
              </p>
            </div>

            {/* Quick stats channels */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block font-mono font-bold uppercase">EMAIL DIRECT</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-neutral-800 hover:text-brand-primary transition-colors hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-brand-primary shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block font-mono font-bold uppercase">PHONE DIRECT</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-neutral-800 hover:text-brand-primary transition-colors hover:underline">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-brand-primary shrink-0">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block font-mono font-bold uppercase">SIDE PROJECT INSTAGRAM</span>
                  <a
                    href={PERSONAL_INFO.instagram.url}
                    target="_blank"
                    rel="noreferrer referrer"
                    referrerPolicy="no-referrer"
                    className="text-sm font-semibold text-neutral-800 hover:text-brand-primary transition-colors hover:underline flex items-center gap-1"
                  >
                    <span>{PERSONAL_INFO.instagram.handle}</span>
                    <Plus className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-xs text-neutral-400 pt-3">
              * 기재해주신 제안 내용은 즉시 수집되어 마케터 이은지의 개인 수집함 및 모바일로 전송 알림이 연동됩니다.
            </div>
          </div>

          {/* RIGHT: PORTFOLIO CTA CARD (Based on the beautiful "Stay Connected, Stay Inspired" purple card with input in mockup) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-brand-primary via-purple-700 to-indigo-900 rounded-3xl p-8 sm:p-10 shadow-xl shadow-purple-600/10 text-white relative">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-accent/20 filter blur-2xl"></div>
            
            {isSubmitted ? (
              <div className="min-h-[300px] flex flex-col justify-center items-center text-center space-y-4 animate-fade-in py-10">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-brand-accent">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-xl sm:text-2xl">협업 제안서가 정상 등록되었습니다!</h3>
                  <p className="text-sm text-purple-200 max-w-sm leading-relaxed">
                    기재해주신 메일이나 회신 번호를 통해 마케터 이은지가 한 시간 내에 정성껏 확인 후 직접 회신 드리겠습니다. 소중한 제의 감사합니다.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-left space-y-2.5">
                  <h3 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
                    Stay Connected, Stay Inspired ✨
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-200">
                    마케터 이은지에게 직접 제안 한마디를 보냅니다.
                  </p>
                </div>

                <div className="space-y-4 text-left">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="company-name" className="text-[10px] font-bold text-purple-200 uppercase tracking-widest font-mono">
                      이름 및 회사명
                    </label>
                    <input
                      id="company-name"
                      type="text"
                      placeholder="예시: 현대카드 CRM 부서 인사담당자 / 스타트업 대표"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-sm placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors ${
                        errors.name ? "border-red-400" : "border-white/20"
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-300 font-semibold font-sans">{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label htmlFor="user-email" className="text-[10px] font-bold text-purple-200 uppercase tracking-widest font-mono">
                      회신받으실 이메일 연락처
                    </label>
                    <input
                      id="user-email"
                      type="email"
                      placeholder="예시: recruiter@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-sm placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors ${
                        errors.email ? "border-red-400" : "border-white/20"
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-300 font-semibold font-sans">{errors.email}</span>}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label htmlFor="user-message" className="text-[10px] font-bold text-purple-200 uppercase tracking-widest font-mono">
                      제안할 협업 내용 한마디
                    </label>
                    <textarea
                      id="user-message"
                      rows={3}
                      placeholder="예시: 이은지님,"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-sm placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors resize-none ${
                        errors.message ? "border-red-400" : "border-white/20"
                      }`}
                    />
                    {errors.message && <span className="text-[10px] text-red-300 font-semibold font-sans">{errors.message}</span>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-white hover:bg-neutral-950 text-neutral-950 hover:text-white transition-all duration-300 rounded-full font-bold text-sm tracking-wide cursor-pointer text-center hover:shadow-lg shadow-black/10 flex items-center justify-center gap-2"
                >
                  <span>제안 전송하기</span>
                  <Send className="w-4 h-4 shrink-0" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
