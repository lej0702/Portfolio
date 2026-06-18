/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Competencies from "./components/Competencies";
import CampaignSimulator from "./components/CampaignSimulator";
import WorkExperienceList from "./components/WorkExperienceList";
import SideProjects from "./components/SideProjects";
import EducationActivities from "./components/EducationActivities";
import MarketingInsights from "./components/MarketingInsights";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 antialiased selection:bg-brand-pastel selection:text-brand-dark">
      {/* Absolute top global banner header */}
      <Header />

      {/* Main Single Page Sections */}
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* LOGO BAR + CORE COMPETENCIES + GLOBAL IMPACT STATS */}
        <Competencies />

        {/* INTERACTIVE CAMPAIGN ANALYSIS SIMULATOR */}
        <CampaignSimulator />

        {/* WORK TIMELINE + HYUNDAI CARD & MBIZONE DEEP-DIVE MODALS */}
        <WorkExperienceList />

        {/* SIDE PROJECTS BENTO DECK */}
        <SideProjects />

        {/* ACADEMICS + CO-CURRICULAR LOGS */}
        <EducationActivities />

        {/* MARKETER BLOG MARKETING INSIGHTS (GROWTH ESSAYS) */}
        <MarketingInsights />

        {/* INTERACTIVE CTAs + PORTFOLIO DOWNLOAD TRIGGER / FORMS */}
        <ContactForm />
      </main>

      {/* FOOTER NAV DIRECTORY */}
      <Footer />
    </div>
  );
}

