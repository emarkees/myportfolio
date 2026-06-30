import { getProjectBySlug, getAllProjects } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, ExternalLink, FileText, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/components/ui/icons';
import { ResultsGrid } from '@/components/mdx/ResultsGrid';
import { FlowmartArchitecture } from '@/components/mdx/FlowmartArchitecture';
import { TechStack } from '@/components/mdx/TechStack';

// Using type any for Next.js App Router params which is slightly tricky with strict typing
export default async function ProjectCaseStudy(props: any) {
  // Fix Next.js 15+ App Router prop promise
  const params = await Promise.resolve(props.params);
  const project = await getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  const fm = project.frontmatter;

  return (
    <main>
      <div className="pt-16">
        <div className="border-t border-border bg-background">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-20">
            
            <Link href="/projects" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors mb-10 tracking-[0.04em]">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Project Archive
            </Link>

            {/* Case Study Header */}
            <div className="border-b border-border pb-12 mb-16">
              <div className="font-mono text-[11px] font-medium text-accent tracking-[0.12em] uppercase mb-4">// case study</div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">{fm.title}</h1>
              <div className="font-mono text-sm text-muted-foreground tracking-[0.04em] mb-7">{fm.description}</div>
              
              <div className="flex flex-wrap items-center gap-y-4 gap-x-8 mb-8">
                <div className="flex items-center gap-2">
                  <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em] uppercase">Status</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 ml-1" />
                  <div className="font-mono text-[11px] text-green-500">{fm.status || 'Active'}</div>
                </div>
                <div className="w-px h-5 bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em] uppercase">Role</div>
                  <div className="font-mono text-[11px] text-primary ml-1">{fm.role}</div>
                </div>
                <div className="w-px h-5 bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em] uppercase">Timeline</div>
                  <div className="font-mono text-[11px] text-primary ml-1">{fm.timeline}</div>
                </div>
                <div className="w-px h-5 bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em] uppercase">Team Size</div>
                  <div className="font-mono text-[11px] text-primary ml-1">{fm.teamSize}</div>
                </div>
                <div className="w-px h-5 bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em] uppercase">Domain</div>
                  <div className="font-mono text-[11px] text-primary ml-1">{fm.domain}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 flex-wrap">
                {fm.liveDemo && fm.liveDemo !== '#' && (
                  <Button className="bg-green-500 hover:bg-green-600 text-background gap-2"><PlayCircle className="w-4 h-4" /> Live Demo</Button>
                )}
                {fm.githubLink && fm.githubLink !== '#' && (
                  <Button className="bg-accent text-background hover:bg-accent/90 gap-2"><GithubIcon className="w-4 h-4" /> View Repository</Button>
                )}
                {fm.pdfUrl && fm.pdfUrl !== '#' && (
                  <Button variant="outline" className="gap-2"><FileText className="w-4 h-4" /> Download Whitepaper</Button>
                )}
              </div>
            </div>

            {/* Case Study Body */}
            <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start pb-24">
              <div className="min-w-0 prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-h2:font-mono prose-h2:text-[11px] prose-h2:font-medium prose-h2:text-accent prose-h2:tracking-[0.12em] prose-h2:uppercase prose-h2:mb-5 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border prose-a:text-accent max-w-none">
                <MDXRemote 
                  source={project.content} 
                  components={{ ResultsGrid, FlowmartArchitecture, TechStack }} 
                />
              </div>

              {/* SIDEBAR */}
              <div className="sticky top-24 hidden lg:flex flex-col gap-5">
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-md overflow-hidden p-5 flex flex-col items-center text-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-3">
                    <div className="w-3 h-3 bg-background rounded-full" />
                  </div>
                  <div className="font-mono text-xs font-medium text-green-500 tracking-[0.06em] mb-1">AVAILABLE FOR HIRE</div>
                  <div className="text-sm text-muted-foreground mb-4">Looking for a Cloud Architect or Senior Full-Stack Engineer?</div>
                  <Button  className="w-full bg-green-500 hover:bg-green-600 text-background font-mono text-xs uppercase tracking-wider">
                    <Link href="/#contact">Let's Talk</Link>
                  </Button>
                </div>

                {fm.techStack && (
                  <div className="bg-card border border-border rounded-md overflow-hidden">
                    <div className="font-mono text-[10px] font-medium text-muted-foreground tracking-[0.1em] uppercase p-3 border-b border-border">Core Technologies</div>
                    <div className="p-4 flex flex-col gap-2">
                      {fm.techStack.map((tech: string, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <div className="font-mono text-xs text-primary">{tech}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-card border border-border rounded-md overflow-hidden">
                  <div className="font-mono text-[10px] font-medium text-muted-foreground tracking-[0.1em] uppercase p-3 border-b border-border">External Links</div>
                  <div className="p-2 flex flex-col">
                    {fm.liveDemo && fm.liveDemo !== '#' && (
                      <Link href={fm.liveDemo} target="_blank" className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors group">
                        <div className="flex items-center gap-2">
                          <PlayCircle className="w-3.5 h-3.5 text-green-500" />
                          <span className="font-mono text-[11px] text-foreground">Live Demo</span>
                        </div>
                        <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-accent transition-colors" />
                      </Link>
                    )}
                    {fm.githubLink && fm.githubLink !== '#' && (
                      <Link href={fm.githubLink} target="_blank" className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors group">
                        <div className="flex items-center gap-2">
                          <GithubIcon className="w-3.5 h-3.5 text-accent" />
                          <span className="font-mono text-[11px] text-foreground">Source Code</span>
                        </div>
                        <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-accent transition-colors" />
                      </Link>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
