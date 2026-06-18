/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CampaignDetail {
  title: string;
  duration?: string;
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string; isPositive?: boolean }[];
  tags: string[];
}

export interface WorkExperience {
  company: string;
  duration: string;
  position: string;
  type: string;
  logoColor: string;
  campaigns: CampaignDetail[];
}

export interface CoreCompetency {
  title: string;
  summary: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export interface SideProject {
  title: string;
  handle?: string;
  duration: string;
  role: string;
  description: string;
  achievements: string[];
  link?: string;
  tags: string[];
  imageType: 'instagram' | 'fashion' | 'marketing';
}

export interface MarketingInsight {
  id: string;
  category: string;
  title: string;
  readTime: string;
  summary: string;
  content: string;
}

export interface EducationDetail {
  school: string;
  major: string;
  degree: string;
  duration: string;
  gpa: string;
}
