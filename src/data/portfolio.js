// Content reference: supplied résumé. No unavailable media, URLs, or academic timing.
export const profile = {
  location: "San Jose, CA",
  education: "Computer Science at UC Berkeley",
  introduction: "I’m Christian, a developer building across backend infrastructure, full-stack products, and AI. My work spans persistent memory for agents, reliable billing systems, and software that simplifies everyday tasks and automates workflows for others.",
  about: "I study computer science at UC Berkeley and enjoy taking on challenging projects that become useful software for others. Working in my family’s business, teaching STEM, and serving as a financial literacy and scholarship ambassador at my high school, which serves students from low-income backgrounds, have shaped how I approach problems. Navigating tech as a first-generation Latino student has also taught me to seek out opportunities, learn from others, and share what I learn.",
  links: [
    { label: "GitHub", href: "https://github.com/Christiant07" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/christiantomasocampo/" },
    { label: "Email", href: "mailto:chris0112tomas@gmail.com" },
  ],
};

export const experiences = [
  {
    id: "google-sponsored-project",
    organization: "Google | Sponsored Contract Project",
    role: "Software Engineer",
    dates: "September 2026 – Present",
    featured: true,
    summary: "Currently working on a Google-sponsored contract project, developing persistent memory for AI agents to preserve context across sessions without replaying full conversation histories.",
    highlights: [
      "Building asynchronous fact extraction with session-scoped caching and persistent storage, separate from agent response generation.",
      "Designing hybrid vector/full-text retrieval and evidence-grounded reflection, with benchmarks for recall accuracy, latency, and token efficiency.",
    ],
    technologies: ["Python", "AlloyDB", "Gemini", "Valkey"],
  },
  {
    id: "legali-ai",
    organization: "Legali AI",
    role: "Software Engineering Intern",
    dates: "May – August 2026",
    featured: true,
    summary: "Engineered a bar-compliant attorney marketplace with relational data models, search infrastructure, and automated billing backed by 90+ tests.",
    highlights: [
      "Resolved a billing race condition using database transactions and row-level locking; shipped a six-month attorney free trial with card-on-file.",
      "Built AI content and compliance safeguards and scaled a Cloudflare Workers service for a 1,000-user pilot using Durable Objects and KV caching.",
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Stripe", "Cloudflare Workers"],
  },
  {
    id: "next-for-autism",
    organization: "Next for Autism",
    role: "Software Developer",
    dates: "February – May 2026",
    featured: true,
    summary: "Built a full-stack mentorship platform that replaced manual workflows and supported 100+ users across a 16-week program.",
    highlights: ["Developed role-based dashboards for admins, mentors, and mentees, plus mentor–mentee matching and automated emails, saving staff 3–5 hours per week."],
    technologies: ["React", "Next.js", "Supabase"],
  },
  {
    id: "bgcsv",
    organization: "Boys & Girls Clubs of Silicon Valley",
    role: "Code + Create STEM Program Specialist",
    dates: "June – July 2025",
    featured: false,
    summary: "Led daily STEM workshops for 15–20 students using LEGO robotics, animation, and digital storytelling.",
    highlights: ["Designed and taught an original Swift Playgrounds lesson with hands-on exercises and a final coding project."],
    technologies: ["Swift Playgrounds", "LEGO robotics"],
  },
  {
    id: "alicias-taquizas",
    organization: "Alicia’s Taquizas",
    role: "Family business",
    dates: "January 2017 – Present",
    featured: false,
    summary: "I work alongside my parents, who own our family’s catering business, helping cook, serve, and set up for events.",
    highlights: ["I also help manage our small social media page with my parents."],
    technologies: [],
  },
];

export const projects = [
  {
    id: "world-cup-oracle",
    title: "World Cup Oracle",
    category: "Voice AI / Applied ML",
    summary: "A deployed voice AI soccer prediction app combining real-time speech, model-driven predictions, and generated commentary.",
    highlights: [
      "Logistic regression model trained on approximately 49K international matches.",
      "FastAPI/SSE commentary pipeline with Deepgram speech-to-text and text-to-speech, live fixtures, and statistics grounded in prediction outputs.",
    ],
    technologies: ["Python", "FastAPI", "SSE", "Deepgram"],
    links: [],
  },
  {
    id: "riscv-classifier",
    title: "Neural Network Image Classifier",
    category: "Systems / Low-level programming",
    summary: "End-to-end neural network inference implemented in RISC-V assembly.",
    highlights: [
      "Implemented matrix multiplication, ReLU, and argmax to compute predictions.",
      "Handled file I/O and manual memory management throughout the inference pipeline.",
    ],
    technologies: ["RISC-V Assembly", "Neural network inference", "Memory management"],
    links: [],
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "JavaScript", "C", "SQL", "RISC-V"] },
  { label: "Frameworks & Libraries", items: ["React", "Next.js", "Node.js", "Express", "FastAPI"] },
  { label: "Tools & Platforms", items: ["Google Cloud (AlloyDB)", "Valkey", "PostgreSQL", "Docker", "Cloudflare Workers", "Git/GitHub", "Supabase"] },
];
