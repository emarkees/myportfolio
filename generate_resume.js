const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 50, bottom: 50, left: 50, right: 50 },
  info: {
    Title: 'Adeyemi Olusola - Resume',
    Author: 'Adeyemi Olusola',
  }
});

doc.pipe(fs.createWriteStream('public/Adeyemi_Olusola_Resume.pdf'));

// Fonts
const fontRegular = 'Helvetica';
const fontBold = 'Helvetica-Bold';

// 1. Header
doc.font(fontBold).fontSize(20).text('Adeyemi Olusola', { align: 'center' });
doc.moveDown(0.2);

doc.font(fontRegular).fontSize(11).text(
  'Lagos, Nigeria · UTC+1 | olusolaadeyemi8@gmail.com | linkedin.com/in/eadeyemi | github.com/emarkeees',
  { align: 'center' }
);
doc.moveDown(0.8);

// Helper for Section Headers
function sectionHeader(title) {
  doc.font(fontBold).fontSize(12).text(title.toUpperCase());
  doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).stroke();
  doc.moveDown(0.5);
}

// 2. Summary
sectionHeader('Professional Summary');
doc.font(fontRegular).fontSize(10).text(
  "Full-Stack Software Engineer and Cloud Architect with 4+ years of experience building and scaling distributed systems. Specializes in designing resilient backend architectures, cloud-native infrastructure, and end-to-end DevOps pipelines. Proven track record of leading infrastructure migrations, designing event-driven data pipelines, and establishing robust CI/CD cultures.",
  { align: 'justify', lineGap: 2 }
);
doc.moveDown(1);

// 3. Skills (from siteData)
sectionHeader('Core Competencies & Skills');
doc.font(fontRegular).fontSize(10);
doc.text("• Languages: TypeScript, Go, Node.js, Python");
doc.text("• Cloud & Infrastructure: AWS, Kubernetes, Terraform, Docker, Linux");
doc.text("• Databases & Message Brokers: PostgreSQL, MongoDB, Kafka");
doc.text("• DevOps & CI/CD: ArgoCD, GitHub Actions");
doc.moveDown(1);

// 4. Experience
sectionHeader('Professional Experience');

const jobs = [
  {
    role: "Senior Full-Stack Engineer",
    company: "FlowMart Technologies",
    location: "Lagos (Remote)",
    timeline: "2023 — Present",
    description: "Led architecture of a multi-tenant B2B e-commerce platform serving 50K+ concurrent users. Designed the Kubernetes-based microservices infrastructure on AWS EKS, reducing deployment lead time by 80%.",
    technologies: "Go, AWS EKS, Kafka, TypeScript"
  },
  {
    role: "Backend Engineer & DevOps Lead",
    company: "FinEdge Payments",
    location: "Lagos",
    timeline: "2021 — 2023",
    description: "Built the core transaction processing engine handling 2M+ daily payment events. Migrated monolithic infrastructure to Docker/Kubernetes. Established the team's CI/CD culture with GitHub Actions and ArgoCD.",
    technologies: "Node.js, PostgreSQL, Kubernetes, Terraform"
  },
  {
    role: "Full-Stack Developer",
    company: "LogiCore Systems",
    location: "Lagos",
    timeline: "2019 — 2021",
    description: "Developed the core freight tracking dashboard and REST API serving logistics operations across 12 African markets. First engineering hire — set up initial CI pipelines, staging environments, and code review culture.",
    technologies: "React, Node.js, MongoDB, AWS EC2"
  },
  {
    role: "Junior Software Engineer",
    company: "TechBridge Consulting",
    location: "Lagos",
    timeline: "2018 — 2019",
    description: "Built internal tooling and automated reporting dashboards for enterprise clients. Introduced Python scripting to replace manual data processing workflows, saving 40+ engineering hours per month.",
    technologies: "Python, Django, MySQL, Linux"
  }
];

for (const job of jobs) {
  // Title and Company on one line
  doc.font(fontBold).fontSize(11).text(job.company, { continued: true });
  doc.font(fontRegular).text(` - ${job.location}`, { continued: true });
  
  // Date aligned to right
  doc.text(' ', { continued: true });
  
  // A hacky way to right align the date on the same line
  doc.text(`                                                                                 `.substring(0, 100 - (job.company.length + job.location.length)), { continued: true });
  doc.text(job.timeline, { align: 'right' });
  
  doc.font(fontBold).fontSize(10).text(job.role);
  doc.moveDown(0.2);
  
  // Render descriptions as bullet points for better US ATS compatibility
  const bullets = job.description.split(/(?<=\.)\s+/);
  for (const bullet of bullets) {
    if (bullet.trim()) {
      doc.font(fontRegular).fontSize(10).text(`• ${bullet.trim()}`, { lineGap: 1.5 });
    }
  }
  doc.moveDown(0.2);
  doc.font('Helvetica-Oblique').fontSize(9).text(`Technologies used: ${job.technologies}`);
  doc.moveDown(0.8);
}

// 5. Education
sectionHeader('Education');
doc.font(fontBold).fontSize(11).text('Federal University of Agriculture, Abeokuta', { continued: true });
doc.font(fontRegular).text('                                                              2014 — 2019', { align: 'right' });
doc.font(fontRegular).fontSize(10).text('B.Sc. Forestry and Wildlife Management');
doc.moveDown(1);

// 6. Certifications
sectionHeader('Certifications');
doc.font(fontRegular).fontSize(10);
const certs = [
  "AWS Certified Solutions Architect – Associate (SAA)",
  "AWS Certified Developer – Associate (DVA)",
  "Certified Kubernetes Administrator (CKA)",
  "Google Cloud Associate Cloud Engineer (GCP ACE)"
];
certs.forEach(cert => {
  doc.text(`• ${cert}`);
});

doc.end();
console.log("PDF generated successfully.");
