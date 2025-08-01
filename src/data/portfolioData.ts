
import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Alex Johnson",
    title: "Full Stack Developer & UI/UX Designer",
    summary: "Passionate computer science student with a keen eye for design and a love for creating seamless digital experiences. I specialize in modern web technologies and enjoy turning complex problems into simple, beautiful solutions.",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  experience: [
    {
      position: "Frontend Developer Intern",
      company: "TechStart Inc.",
      startDate: "Jun 2023",
      endDate: "Aug 2023",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with the design team to implement pixel-perfect UI components and improved application performance by 25%."
    },
    {
      position: "Web Development Assistant",
      company: "University IT Department",
      startDate: "Sep 2022",
      endDate: "May 2023",
      description: "Maintained and updated university websites using modern web technologies. Created automated testing scripts and assisted in migrating legacy systems to modern frameworks."
    },
    {
      position: "Freelance Web Developer",
      company: "Self-Employed",
      startDate: "Jan 2022",
      endDate: "Present",
      description: "Built custom websites for local businesses and startups. Specialized in creating responsive, SEO-optimized websites that drive engagement and conversions."
    }
  ],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      startDate: "Aug 2021",
      endDate: "May 2025"
    },
    {
      institution: "Community College of San Francisco",
      degree: "Associate Degree in Web Design",
      startDate: "Aug 2019",
      endDate: "May 2021"
    }
  ],
  projects: [
    {
      name: "EcoTrack - Sustainability Dashboard",
      description: "A comprehensive web application that helps users track their carbon footprint and discover eco-friendly alternatives. Features real-time data visualization and personalized recommendations.",
      tech: "React, Node.js, MongoDB, Chart.js, Tailwind CSS",
      link: "https://github.com/alexjohnson/ecotrack"
    },
    {
      name: "TaskFlow - Project Management Tool",
      description: "A modern project management application with real-time collaboration features. Includes drag-and-drop task boards, team chat, and progress analytics.",
      tech: "Next.js, TypeScript, Prisma, PostgreSQL, Socket.io",
      link: "https://github.com/alexjohnson/taskflow"
    },
    {
      name: "FoodieBot - Recipe Recommendation AI",
      description: "An intelligent recipe recommendation system that suggests meals based on dietary preferences, available ingredients, and nutritional goals using machine learning algorithms.",
      tech: "Python, Flask, TensorFlow, React, PostgreSQL",
      link: "https://github.com/alexjohnson/foodiebot"
    },
    {
      name: "CryptoWatch - Cryptocurrency Tracker",
      description: "A responsive web application for tracking cryptocurrency prices with real-time updates, portfolio management, and technical analysis tools.",
      tech: "Vue.js, Express.js, Redis, WebSocket API, D3.js",
      link: "https://github.com/alexjohnson/cryptowatch"
    }
  ],
  skills: [
    "JavaScript", "TypeScript", "Python", "React", "Next.js", "Vue.js", 
    "Node.js", "Express.js", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs",
    "HTML5", "CSS3", "Tailwind CSS", "SASS", "Figma", "Adobe XD", 
    "Git", "Docker", "AWS", "Firebase", "Jest", "Cypress"
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Mar 2024"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "Jan 2024"
    },
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      date: "Nov 2023"
    },
    {
      name: "MongoDB Developer Path",
      issuer: "MongoDB University",
      date: "Sep 2023"
    }
  ]
};
