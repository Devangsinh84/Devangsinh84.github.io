import { Code2, BrainCircuit, LineChart, ScanEye } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "Edge Risk",
    category: "Enterprise AI Platform",
    status: "Production",
    description: "Sovereign AI platform for dynamic risk intelligence. Integrates full-stack AI orchestration, RAG pipelines, and a high-performance React dashboard.",
    tech: ["React", "FastAPI", "Docker", "LLMs"],
    icon: BrainCircuit,
    featured: true
  },
  {
    id: 2,
    title: "Dynamic Risk Management in Algorithmic Trading",
    category: "Master's Thesis",
    status: "Research In Progress",
    description: "Designing reinforcement learning agents to optimize risk-adjusted returns and dynamic hedging strategies in volatile financial markets.",
    tech: ["Python", "PyTorch", "Deep RL", "Time-Series"],
    icon: LineChart,
    featured: true
  },
  {
    id: 3,
    title: "Enterprise Carrier Portal",
    category: "Confidential Architecture",
    status: "Completed",
    description: "Engineered scalable backend architecture processing high-volume logistics data. Optimized API performance and secure enterprise data pipelines.",
    tech: [".NET", "C#", "SQL Server", "REST APIs"],
    icon: Code2,
    featured: true
  },
  {
    id: 4,
    title: "Real-Time Fatigue Detection",
    category: "Computer Vision",
    status: "Completed",
    description: "Developed an automated facial landmark analysis tool utilizing deep learning to detect operator fatigue and trigger preventative alerts.",
    tech: ["Python", "OpenCV", "TensorFlow"],
    icon: ScanEye,
    featured: false
  }
];