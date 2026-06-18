/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Mail, Phone, Instagram, Send, Menu, X, Award } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "홈", href: "#home" },
    { label: "핵심역량", href: "#competencies" },
    { label: "캠페인 효과", href: "#analytics" },
    { label: "업무 경험", href: "#experience" },
    { label: "사이드 프로젝트", href: "#projects" },
    { label: "학력 및 동아리", href: "#education" },
    { label: " Growth 인사이트", href: "#insights" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-purple-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 group font-display text-lg font-bold tracking-tight text-neutral-900"
        >
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs font-semibold shadow-sm transition-transform group-hover:scale-105">
            LE
          </div>
          <span className="flex items-center gap-1.5">
            이은지 <span className="text-xs text-brand-primary font-medium px-2 py-0.5 rounded-full bg-brand-pastel">Portfolio</span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-neutral-600 hover:text-brand-primary font-medium text-sm transition-colors relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="mailto:leeenji99@gmail.com"
            className="flex items-center gap-2 text-xs font-semibold text-neutral-800 hover:text-brand-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-brand-primary" />
            <span>이메일 문의</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-950 rounded-full hover:bg-brand-primary shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            포트폴리오 다운로드
          </a>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-700 hover:text-brand-primary transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 border-t border-purple-50 animate-fade-in px-5 py-8 overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-semibold text-neutral-800 hover:text-brand-primary py-2 border-b border-neutral-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-purple-50 flex flex-col gap-4">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Contact & Socials</span>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 p-3 rounded-xl bg-brand-pastel text-xs text-neutral-700 hover:text-brand-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-primary" />
                  <span>이메일 보내기</span>
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-2 p-3 rounded-xl bg-brand-pastel text-xs text-neutral-700 hover:text-brand-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>전화하기</span>
                </a>
                <a
                  href={PERSONAL_INFO.instagram.url}
                  target="_blank"
                  rel="noreferrer referrer"
                  referrerPolicy="no-referrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-brand-pastel col-span-2 text-xs text-neutral-700 hover:text-brand-primary transition-colors"
                >
                  <Instagram className="w-4 h-4 text-brand-primary" />
                  <span>사이드 프로젝트: {PERSONAL_INFO.instagram.handle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
