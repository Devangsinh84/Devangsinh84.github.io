import { Briefcase, GraduationCap, Code2 } from 'lucide-react';

export const experience = [
  {
    id: 1,
    type: "education",
    title: "MSc in Artificial Intelligence",
    organization: "École d’Ingénieurs ECE Paris",
    date: "Expected 2026",
    description: "Specializing in Generative AI, LLMs, RAG pipelines, and Deep Reinforcement Learning. Building scalable, prompt-based LLM applications and evaluating ML models.",
    icon: GraduationCap
  },
  {
    id: 2,
    type: "work",
    title: "Software Engineer I",
    organization: "INJALA (Fintech)",
    date: "Aug 2023 - Aug 2025",
    description: "Engineered scalable modules for the Kinetic Insurance platform. Built full-stack features, REST APIs, and server-rendered UIs using ASP.NET Core, C#, JavaScript, and SQL Server.",
    icon: Briefcase
  },
  {
    id: 3,
    type: "education",
    title: "B.E. in Information Technology",
    organization: "Sardar Vallabhbhai Patel Institute Of Technology",
    date: "Graduated Jul 2023",
    description: "Built a strong foundation in software architecture, database management, and full-stack development. Graduated with a CGPA of 8.71/10.",
    icon: Code2
  }
];

export const skills = {
  ai: ["PyTorch", "TensorFlow", "LangChain", "LLMs & RAG", "Deep RL", "Computer Vision"],
  engineering: ["C# & .NET Core", "ASP.NET MVC", "Python", "React.js / JavaScript", "REST APIs", "SQL Server"],
  infrastructure: ["Docker", "Azure DevOps", "CI/CD", "GitFlow", "Agile/Scrum", "Postman"]
};