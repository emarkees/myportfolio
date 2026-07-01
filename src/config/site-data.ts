export const siteData = {
  personalInfo: {
    name: "Adeyemi Olusola",
    title: "Full-Stack Software Engineer & Cloud Architect",
    email: "olusolaadeyemi8@gmail.com",
    location: "Lagos, Nigeria · UTC+1",
    availability: "Available — Open to roles",
    github: "github.com/emarkeees",
    linkedin: "linkedin.com/in/eadeyemi",
    roles: ["Full-Stack Software Engineer", "Cloud Architect", "DevOps Specialist"],
    heroDescription: "Engineering high-availability, cloud-native systems at scale. Deep expertise in **TypeScript**, **Go**, and **Node.js** — paired with battle-tested experience on **AWS**, Kubernetes, and Terraform. I design backend architectures and CI/CD pipelines that don't break at 3AM.",
    aboutParagraphs: [
      "I'm a **Full-Stack Software Engineer** and **Cloud Architect** with 6+ years of experience building and scaling distributed systems. I specialize in designing resilient backend architectures, cloud-native infrastructure, and end-to-end DevOps pipelines that serve millions of users.",
      "My engineering philosophy centers on **operational simplicity** systems should be as easy to understand, debug, and extend as they are to build. I take ownership from the first line of code to production observability.",
      "Previously at fintech startups and enterprise logistics companies, I've led infrastructure migrations from bare-metal to multi-cloud Kubernetes clusters, designed event-driven data pipelines processing 2M+ events/day, and built CI/CD systems that deploy 100+ times a week without drama."
    ]
  },
  stats: [
    { value: "4+", label: "Years of Experience" },
    { value: "10+", label: "Systems Deployed" },
    { value: "2×", label: "Cloud Certifications" },
    { value: "TS · Go", label: "Core Tech Stack" }
  ],
  archive: {
    headerStats: [
      { value: "5", symbol: "×", label: "Production Deploys" },
      { value: "3", symbol: "+", label: "Open Source" }
    ],
    filterTabs: [
      { name: "Production", count: 8 },
      { name: "Open Source", count: 3 },
      { name: "Cloud / Infra", count: 5 },
      { name: "Full-Stack", count: 6 },
      { name: "DevOps", count: 4 }
    ]
  },
  resume: {
    experience: [
      {
        id: "flowmart",
        role: "Senior Full-Stack Engineer & Cloud Architect",
        company: "FlowMart Technologies",
        location: "Lagos (Remote)",
        timeline: "2023 — Present",
        description: "Led architecture of a multi-tenant B2B e-commerce platform serving 50K+ concurrent users. Designed the Kubernetes-based microservices infrastructure on AWS EKS, reducing deployment lead time by 80%.",
        technologies: ["Go", "AWS EKS", "Kafka", "TypeScript"]
      },
      {
        id: "finedge",
        role: "Backend Engineer & DevOps Lead",
        company: "FinEdge Payments",
        location: "Lagos",
        timeline: "2021 — 2023",
        description: "Built the core transaction processing engine handling 2M+ daily payment events. Migrated monolithic infrastructure to Docker/Kubernetes. Established the team's CI/CD culture with GitHub Actions and ArgoCD.",
        technologies: ["Node.js", "PostgreSQL", "Kubernetes", "Terraform"]
      },
      {
        id: "logicore",
        role: "Full-Stack Developer",
        company: "LogiCore Systems",
        location: "Lagos",
        timeline: "2019 — 2021",
        description: "Developed the core freight tracking dashboard and REST API serving logistics operations across 12 African markets. First engineering hire — set up initial CI pipelines, staging environments, and code review culture.",
        technologies: ["React", "Node.js", "MongoDB", "AWS EC2"]
      },
      {
        id: "techbridge",
        role: "Junior Software Engineer",
        company: "TechBridge Consulting",
        location: "Lagos",
        timeline: "2018 — 2019",
        description: "Built internal tooling and automated reporting dashboards for enterprise clients. Introduced Python scripting to replace manual data processing workflows, saving 40+ engineering hours per month.",
        technologies: ["Python", "Django", "MySQL", "Linux"]
      }
    ],
    education: [
      {
        degree: "B.Sc. Forestry and Wildlife Management",
        institution: "Federal University of Agriculture, Abeokuta",
        timeline: "2014 — 2019"
      }
    ],
    certifications: [
      "AWS Certified Solutions Architect – Associate (SAA)",
      "AWS Certified Developer – Associate (DVA)",
      "Certified Kubernetes Administrator (CKA)",
      "Google Cloud Associate Cloud Engineer (GCP ACE)"
    ]
  }
};
