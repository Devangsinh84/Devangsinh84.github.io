# devangsinh84.github.io

Personal portfolio of **Devangsinh Gohil**, a software engineer (.NET / C#, Python) working on generative AI and full-stack applications, based in Paris.

🌐 Live site: **https://devangsinh84.github.io**

## Sections

- **Hero**: who I am, in one line
- **Projects**: MSc thesis (explainable AI trading platform), Edge Risk (GenAI), worker fatigue detection (computer vision) and professional work, each linked to its repository
- **Experience**: Injala (fintech, insurance SaaS) and education (MSc AI at ECE Paris, B.E. in IT)
- **Contact**: email, phone, GitHub, LinkedIn and a downloadable CV

## Stack

React 19 · Vite · Tailwind CSS · Framer Motion · Three.js (3D hero) · Lucide icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Project content lives in [`src/data/projects.js`](src/data/projects.js) and [`src/data/experience.js`](src/data/experience.js).
