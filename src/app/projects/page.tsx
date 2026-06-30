import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/fade-up";
import { getAllProjects } from "@/lib/mdx";
import { siteData } from "@/config/site-data";

export default async function ProjectsArchive() {
  const projects = await getAllProjects();

  return (
    <main>
      <div className="pt-16">
        {/* ... [Header and Filters remain the same] ... */}
        
        {/* PROJECTS GRID */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 pb-24">
          <FadeUp className="mb-8">
            <div className="font-mono text-[11px] font-medium text-accent tracking-[0.12em] uppercase mb-3">// all projects</div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Complete Engineering Archive</h2>
          </FadeUp>
          
          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border rounded-md overflow-hidden">
            {projects.map((project, i) => {
              const fm = project.frontmatter;
              const num = String(i + 1).padStart(2, '0');

              return (
                <FadeUp key={project.slug} className="bg-card p-8 flex flex-col group cursor-pointer hover:bg-card/80 transition-colors min-h-[320px]">
                  <div className="flex justify-between items-start mb-5">
                    <div className="font-mono text-[11px] text-muted-foreground tracking-[0.08em]">{num} / PROJECT</div>
                    <div className="font-mono text-[10px] font-medium px-2 py-0.5 rounded-sm tracking-[0.06em] uppercase whitespace-nowrap border text-primary bg-transparent border-border">
                      {fm.status || "Active"}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{fm.title}</h3>
                  <div className="font-mono text-[11px] text-accent tracking-[0.04em] mb-4">{fm.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{fm.description}</p>
                  
                  {fm.techStack && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {fm.techStack.map((t) => (
                        <span key={t} className="font-mono text-[11px] font-medium px-2.5 py-1 rounded-sm bg-card border border-border text-foreground tracking-wide whitespace-nowrap">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center pt-5 border-t border-border mt-auto">
                    <div className="font-mono text-[11px] text-muted-foreground">{fm.timeline || fm.date}</div>
                    
                    <div className="flex items-center gap-4">
                      {fm.liveDemo && fm.liveDemo !== '#' && (
                        <Link href={fm.liveDemo} className="font-mono text-[11px] text-muted-foreground flex items-center gap-1.5 hover:text-foreground transition-colors">
                          <Play className="w-3 h-3" /> Demo
                        </Link>
                      )}
                      <Link href={`/projects/${project.slug}`} className="font-mono text-[11px] text-muted-foreground flex items-center gap-1.5 group-hover:text-accent transition-colors">
                        Case Study <ArrowRight className="w-3 h-3 text-accent group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}