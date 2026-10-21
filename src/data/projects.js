import { Code2, BrainCircuit, LineChart, ScanEye } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "Edge Risk",
    category: "Generative AI · Master's PoC",
    status: "Proof of Concept",
    description: "Turns PDF project status reports into a structured risk dashboard: LLM-based risk extraction to JSON (Qwen 2.5-7B), a threat matrix, and a document-grounded chat, with a Responsible AI disclosure.",
    tech: ["Python", "FastAPI", "LLMs", "React", "SQLite", "Docker"],
    link: "https://github.com/Devangsinh84/risk-manager-for-pms",
    icon: BrainCircuit,
    featured: true
  },
  {
    id: 2,
    title: "Explainable AI Trading Platform",
    category: "Master's Thesis",
    status: "Research In Progress",
    description: "Regime-aware microservice architecture: a Python engine (PPO deep RL, XGBoost baseline, SHAP explanations) orchestrated by a .NET 10 Meta-Controller and shown in a React dashboard, evaluated with real returns and transaction costs.",
    tech: ["Python", "PyTorch", "Deep RL", "SHAP", ".NET 10", "React"],
    link: "https://github.com/Devangsinh84/AI_Trading_Platform",
    icon: LineChart,
    featured: true
  },
  {
    id: 3,
    title: "Insurance Carrier Portal",
    category: "Professional Work · Injala",
    status: "Completed",
    description: "Portal of the Kinetic insurance SaaS platform where insurance carriers submit, review and reject quotes. Backend and APIs in .NET, with SQL Server and MongoDB for data storage.",
    tech: [".NET", "C#", "SQL Server", "MongoDB", "REST APIs"],
    icon: Code2,
    featured: true
  },
  {
    id: 4,
    title: "Real-Time Fatigue Detection",
    category: "Computer Vision",
    status: "Completed",
    description: "Real-time webcam monitoring that detects worker fatigue from eye openness: MediaPipe landmarks, Eye Aspect Ratio and a CNN with 98.5% test accuracy, served by FastAPI to a React dashboard.",
    tech: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "FastAPI", "React"],
    link: "https://github.com/Devangsinh84/worker-fatigue-detection",
    icon: ScanEye,
    featured: false
  }
];