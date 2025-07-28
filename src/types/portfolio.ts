
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
    title: string;
    description: string;
    techStack: string;
    link: string;
  }[];
  certifications?: never;
  skills: string[];
}
