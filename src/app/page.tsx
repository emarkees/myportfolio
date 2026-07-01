import Link from "next/link";
import { FolderOpen, Download, ArrowRight, Mail, ChevronDown, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeUp } from "@/components/ui/fade-up";
import { ContactForm } from "@/components/contact-form";
import { getAllProjects } from "@/lib/mdx";
import { siteData } from "@/config/site-data";

export default async function Home() {
  const allProjects = await getAllProjects();
  // Sort projects by date descending or just use first 3
  const featuredProjects = allProjects.slice(0, 3);
  const info = siteData.personalInfo;

  const renderRichText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Grid Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_40%,var(--color-background)_85%)]" />
      </div>

      <main className="pt-16">
        {/* HERO */}
        <section id="hero" className="relative min-h-[90vh] flex items-center px-6 lg:px-20 max-w-[1440px] mx-auto overflow-hidden">
          <FadeUp className="w-full lg:w-2/3 max-w-3xl z-10 py-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div className="font-mono text-xs font-medium text-accent tracking-[0.1em] uppercase">Full-Stack · Cloud · DevOps</div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
              <span className="block">Hi, I'm</span>
              <span className="block">{info.name.split(' ')[0]} <span className="text-primary">{info.name.split(' ')[1]}.</span></span>
            </h1>
            <div className="font-mono text-sm text-primary tracking-wide mb-8">
              {info.roles.map((role, i) => (
                <span key={i}>
                  <span className="text-muted-foreground">{role}</span>
                  {i < info.roles.length - 1 && " · "}
                </span>
              ))}
            </div>
            <div className="w-12 h-px bg-accent/60 mb-8" />
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl mb-10 border-l-2 border-border pl-5">
              {renderRichText(info.heroDescription)}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/projects" className="inline-flex h-10 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-background transition-all hover:bg-accent/90">
                <FolderOpen className="w-4 h-4" /> Review My Portfolio
              </Link>
              <a href="/Adeyemi_Olusola_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-medium transition-all hover:bg-muted hover:text-foreground">
                <Download className="w-4 h-4" /> Contact / Resume
              </a>
            </div>
          </FadeUp>

          <FadeUp className="hidden lg:flex absolute right-20 top-1/2 -translate-y-1/2 flex-col gap-3">
            {[
              { text: info.availability, color: "bg-green-500" },
              { text: info.location, color: "bg-primary" },
              { text: "AWS Certified · CKA Certified", color: "bg-primary" },
              { text: "Open to Remote / Relocation", color: "bg-primary" },
            ].map((badge, i) => (
              <div key={i} className="font-mono text-xs text-primary bg-card border border-border px-4 py-2.5 rounded-md flex items-center gap-3 shadow-sm">
                <div className={`w-1.5 h-1.5 rounded-full ${badge.color}`} />
                {badge.text}
              </div>
            ))}
          </FadeUp>
        </section>

        {/* STATS */}
        <section className="border-y border-border bg-card">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
              {siteData.stats.map((stat, i) => (
                <FadeUp key={i} className="p-6 lg:p-10 text-center md:text-left">
                  <div className="font-mono text-3xl font-semibold text-foreground tracking-tight mb-2">
                    {stat.value.replace('+', '').replace('×', '')}
                    <span className="text-accent text-xl">{stat.value.match(/[+×]/)?.[0]}</span>
                  </div>
                  <div className="text-[11px] font-medium text-primary uppercase tracking-[0.08em]">{stat.label}</div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="font-mono text-xs font-medium text-accent tracking-[0.12em] uppercase mb-3">// latest work</div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Featured Engineering Projects</h2>
            </div>
            <Link href="/projects" className="hidden sm:flex font-mono text-sm font-medium text-muted-foreground items-center gap-2 hover:text-foreground transition-colors">
              View full project archive <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
            {featuredProjects.map((project, i) => {
              const fm = project.frontmatter;
              const index = String(i + 1).padStart(2, '0');
              const accentTag = fm.techStack && fm.techStack.length > 0 ? fm.techStack[0] : "";

              return (
                <FadeUp key={project.slug} className="bg-card p-8 flex flex-col group cursor-pointer hover:bg-card/80 transition-colors">
                  <div className="flex justify-between items-start mb-5">
                    <div className="font-mono text-xs font-medium text-primary tracking-[0.08em]">{index} / PROJECT</div>
                    <div className={`font-mono text-[10px] font-medium px-2 py-0.5 rounded border tracking-[0.06em] uppercase ${fm.status === "Production" ? "text-green-500 bg-green-500/10 border-green-500/20" : "text-primary bg-transparent border-border"}`}>
                      {fm.status || "Active"}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{fm.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{fm.description}</p>

                  {fm.techStack && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {fm.techStack.map((tag) => (
                        <span key={tag} className={`font-mono text-[11px] font-medium px-2.5 py-1 rounded-sm border tracking-wide whitespace-nowrap ${tag === accentTag ? "text-accent border-accent/30 bg-accent/10" : "text-primary bg-background border-border"}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-5 border-t border-border mt-auto">
                    <div className="font-mono text-xs text-primary">{fm.timeline || fm.date}</div>
                    <Link href={`/projects/${project.slug}`} className="font-mono text-xs text-primary flex items-center gap-1.5 group-hover:text-accent transition-colors">
                      Case Study <ArrowRight className="w-3 h-3 text-accent transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </FadeUp>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link href="/projects" className="inline-flex items-center font-mono text-primary hover:text-accent transition-colors">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-border bg-background py-24 px-6 lg:px-20">
          <div className="max-w-[1440px] mx-auto">
            <FadeUp className="mb-14">
              <div className="font-mono text-xs font-medium text-accent tracking-[0.12em] uppercase mb-3">// about me</div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Career Profile & Expertise</h2>
            </FadeUp>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 mb-16 lg:mb-24">
              <FadeUp className="text-[15px] text-muted-foreground leading-relaxed space-y-5">
                {info.aboutParagraphs.map((para, i) => (
                  <p key={i}>{renderRichText(para)}</p>
                ))}

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="/Adeyemi_Olusola_Resume.pdf" target="_blank" rel="noopener noreferrer" className={buttonVariants({ className: "bg-accent text-background hover:bg-accent/90 p-5 gap-2" })}>
                    <Download className="w-4 h-4" /> Download Full Resume
                  </a>
                  <a href={`https://${info.github}`} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", className: "flex gap-2 p-5" })}>
                    <GithubIcon className="w-4 h-4" /> View GitHub
                  </a>
                </div>
              </FadeUp>

              <FadeUp className="border border-border rounded-lg overflow-hidden flex flex-col">
                {[
                  { label: "Status", value: info.availability, dot: true },
                  { label: "Location", value: info.location },
                  { label: "Work Mode", value: "Remote / Hybrid / Relocation" },
                  { label: "Experience", value: "4+ Years Full-Stack & DevOps" },
                  { label: "Certifications", value: siteData.resume.certifications.join(" · ") },
                  { label: "Education", value: `${siteData.resume.education[0].degree} — ${siteData.resume.education[0].institution.split(' (')[0]}` },
                  { label: "Email", value: info.email, highlight: true },
                ].map((fact, i) => (
                  <div key={i} className="flex items-center p-4 border-b border-border bg-card last:border-b-0">
                    <div className="font-mono text-[11px] text-primary tracking-[0.06em] uppercase w-1/3 min-w-[120px]">{fact.label}</div>
                    <div className={`font-mono text-xs flex-1 ${fact.highlight ? 'text-accent' : 'text-muted-foreground'}`}>
                      {fact.dot && <span className="text-accent mr-1">●</span>}
                      {fact.value}
                    </div>
                  </div>
                ))}
              </FadeUp>
            </div>

            {/* TIMELINE */}
            <FadeUp className="mb-12">
              <div className="font-mono text-xs font-medium text-accent tracking-[0.12em] uppercase mb-3">// work history</div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Engineering Journey</h3>
            </FadeUp>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* First Column */}
              <div className="relative pl-8 border-l border-border space-y-12">
                {siteData.resume.experience.slice(0, 2).map((job, i) => (
                  <FadeUp key={job.id} className="relative">
                    <div className={`absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-accent border-2 border-accent ring-4 ring-background' : 'bg-background border-2 border-border'}`} />
                    <div className="font-mono text-xs text-primary mb-2">{job.timeline}</div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{job.role}</h4>
                    <div className="text-sm font-medium text-accent mb-3">{job.company} · {job.location}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map(t => (
                        <span key={t} className={`font-mono text-[11px] px-2.5 py-1 rounded border ${t === "Go" || t === "Node.js" ? "text-accent border-accent/30 bg-accent/10" : "text-primary border-border bg-background"}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </FadeUp>
                ))}
              </div>

              {/* Second Column */}
              <div className="relative pl-8 border-l border-border space-y-12">
                {siteData.resume.experience.slice(2, 4).map((job) => (
                  <FadeUp key={job.id} className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-border" />
                    <div className="font-mono text-xs text-primary mb-2">{job.timeline}</div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{job.role}</h4>
                    <div className="text-sm font-medium text-accent mb-3">{job.company} · {job.location}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map(t => (
                        <span key={t} className={`font-mono text-[11px] px-2.5 py-1 rounded border ${t === "React" || t === "Python" ? "text-accent border-accent/30 bg-accent/10" : "text-primary border-border bg-background"}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border bg-card">
          <div className="py-16 lg:py-24 px-6 lg:px-20 max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeUp className="contact-left">
              <div className="font-mono text-xs font-medium text-accent tracking-[0.12em] uppercase mb-4">// get in touch</div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
                Let's Build Something<br/><span className="text-accent">Exceptional.</span>
              </h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-10 max-w-md">
                Whether you're looking for a senior engineering hire, a technical co-founder, or want to discuss a contract engagement — I'm open to conversation. Expect a reply within 24 hours.
              </p>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${info.email}`} className="flex items-center gap-3.5 p-3.5 border border-border rounded-md cursor-pointer hover:bg-muted/50 transition-colors group">
                  <div className="w-9 h-9 border border-border rounded-md bg-background flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em] uppercase mb-0.5">Email</div>
                    <div className="text-[13px] font-medium text-foreground">{info.email}</div>
                  </div>
                  <div className="ml-auto flex items-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                </a>
                <a href={`https://${info.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 p-3.5 border border-border rounded-md cursor-pointer hover:bg-muted/50 transition-colors group">
                  <div className="w-9 h-9 border border-border rounded-md bg-background flex items-center justify-center shrink-0">
                    <LinkedinIcon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em] uppercase mb-0.5">LinkedIn</div>
                    <div className="text-[13px] font-medium text-foreground">{info.linkedin}</div>
                  </div>
                  <div className="ml-auto flex items-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                </a>
                <a href={`https://${info.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 p-3.5 border border-border rounded-md cursor-pointer hover:bg-muted/50 transition-colors group">
                  <div className="w-9 h-9 border border-border rounded-md bg-background flex items-center justify-center shrink-0">
                    <GithubIcon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em] uppercase mb-0.5">GitHub</div>
                    <div className="text-[13px] font-medium text-foreground">{info.github}</div>
                  </div>
                  <div className="ml-auto flex items-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                </a>
              </div>
            </FadeUp>
            
            <FadeUp>
              <ContactForm />
            </FadeUp>
          </div>
        </section>
      </main>
    </>
  );
}
