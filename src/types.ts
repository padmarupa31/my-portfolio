export interface ProjectItem {
  id: string;
  projectNumber: string;
  category: string;
  statusText: string;
  statusType: 'production' | 'prototype' | 'live';
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  viewLink?: string;
  repoLink?: string;
  liveUrl?: string;
}

export interface CertificationItem {
  id: string;
  issuer: string;
  title: string;
  description: string;
  badge: string;
  durationOrYear: string;
  verifiedLabel: string;
  icon: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  isWide?: boolean;
  fileType: 'pdf' | 'image';
  fileUrl: string;
  previewImageUrl?: string;
  downloadName?: string;
  certificateTitle?: string;
  recipientName?: string;
  courseOrAchievement?: string;
  issueDate?: string;
  certificateId?: string;
  gradeOrDistinction?: string;
  signatoryName?: string;
  signatoryTitle?: string;
  signatoryRole?: string;
  skills?: string[];
  credentialUrl?: string;
}

export interface EducationItem {
  period: string;
  statusBadge: string;
  scoreText: string;
  scoreIcon: string;
  degree: string;
  field: string;
  description?: string;
  coursework?: string[];
  colorVariant: 'primary' | 'secondary' | 'tertiary';
}

export interface AchievementItem {
  tag: string;
  title: string;
  description: string;
  icon: string;
  colorVariant: 'primary' | 'secondary' | 'tertiary' | 'primary-dim';
}

export interface SkillCategory {
  title: string;
  label: string;
  description: string;
  icon: string;
  skills: string[];
  footerText: string;
  footerIcon: string;
  accent: 'primary' | 'secondary' | 'tertiary';
}
