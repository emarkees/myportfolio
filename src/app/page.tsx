import Link from "next/link";
import { FolderOpen, Download, ArrowRight, Mail, ChevronDown, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeUp } from "@/components/ui/fade-up";
import { getAllProjects } from "@/lib/mdx";
import { siteData } from "@/config/site-data";

export default async function Home() {
  const allProjects = await getAllProjects();
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
              <div className="font-mono text-xs font-medium text-accent tracking-[0.1em] uppercase">Full-Stack | Cloud | DevOps</div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
              <span className="block">Hi, I'm</span>
              <span className="block">{info.name.split(' ')[0]} <span className="text-primary">{info.name.split(' ')[1]}.</span></span>
            </h1>
            <div className="font-mono text-sm text-primary tracking-wide mb-8">
              {info.roles.map((role, i) => (
                <span key={i}>
                  <span className="text-muted-foreground">{role}</span>
                  {i < info.roles.length - 1 && " | "}
                </span>
              ))}
            </div>
            <div className="w-12 h-px bg-accent/60 mb-8" />
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl mb-10 border-l-2 border-border pl-5">
              {renderRichText(info.heroDescription)}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-accent text-background hover:bg-accent/90 flex gap-2">
                <FolderOpen className="w-4 h-4" /> Review Engineering Portfolio
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto flex gap-2">
                <Download className="w-4 h-4" /> Download Formal Resume
              </Button>
            </div>
          </FadeUp>
        </section>

        {/* STATS */}
        <section className="border-y border-border bg-card">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
              {siteData.stats.map((stat, i) => (
                <FadeUp key={i} className="p-8 lg:p-10 text-center md:text-left">
                  <div className="font-mono text-3xl font-semibold text-foreground tracking-tight mb-2">
                    {stat.value.replace('+', '').replace(' ', '')}
                    <span className="text-accent text-xl">{stat.value.match(/[+ ]/)?.[0]}</span>
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
              
              return (
                <FadeUp key={project.slug} className="bg-card p-8 flex flex-col group cursor-pointer hover:bg-card/80 transition-colors">
                  <div className="flex justify-between items-start mb-5">
                    <div className="font-mono text-xs font-medium text-primary tracking-[0.08em]">{index} / PROJECT</div>
                    <div className="font-mono text-[10px] font-medium px-2 py-0.5 rounded border tracking-[0.06em] uppercase text-primary bg-transparent border-border">
                      {fm.status || "Active"}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{fm.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{fm.description}</p>
                  
                  {fm.techStack && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {fm.techStack.map((tag) => (
                        <span key={tag} className="font-mono text-[11px] font-medium px-2.5 py-1 rounded-sm bg-card border border-border text-foreground tracking-wide whitespace-nowrap">
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

        {/* ABOUT / TIMELINE */}
        <section id="about" className="border-t border-border bg-background py-24 px-6 lg:px-20">
          <div className="max-w-[1440px] mx-auto">
            {/* ... [Profile Section remains exactly the same] ... */}
            
            <FadeUp className="mb-12">
              <div className="font-mono text-xs font-medium text-accent tracking-[0.12em] uppercase mb-3">// work history</div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Engineering Journey</h3>
            </FadeUp>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="relative pl-8 border-l border-border space-y-12">
                {siteData.resume.experience.slice(0, 2).map((job, i) => (
                  <FadeUp key={job.id} className="relative">
                    <div className={`absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-accent border-2 border-accent ring-4 ring-background' : 'bg-background border-2 border-border'}`} />
                    <div className="font-mono text-xs text-primary mb-2">{job.timeline}</div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{job.role}</h4>
                    <div className="text-sm font-medium text-accent mb-3">{job.company} | {job.location}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map(t => (
                        <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded bg-card border border-border text-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </FadeUp>
                ))}
              </div>
              
              <div className="relative pl-8 border-l border-border space-y-12">
                {siteData.resume.experience.slice(2, 4).map((job) => (
                  <FadeUp key={job.id} className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-border" />
                    <div className="font-mono text-xs text-primary mb-2">{job.timeline}</div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{job.role}</h4>
                    <div className="text-sm font-medium text-accent mb-3">{job.company} | {job.location}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map(t => (
                        <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded bg-card border border-border text-foreground">
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
      </main>
    </>
  );
}