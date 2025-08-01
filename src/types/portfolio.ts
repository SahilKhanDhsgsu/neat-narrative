
export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    location: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    photo?: string;
  };
  experience: {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
  projects: {
    name: string;
    tech: string;
    link?: string;
    description: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
  }[];
  skills: string[];
}
