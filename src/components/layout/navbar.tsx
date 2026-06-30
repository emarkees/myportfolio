import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-20 h-16 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="font-mono text-sm font-semibold tracking-wide">
        adeyemi<span className="text-accent">.</span>dev
      </div>
      <div className="hidden md:flex items-center gap-10">
        <Link href="/#hero" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
        <Link href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
        <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
        <Link href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" className="hidden sm:flex text-muted-foreground hover:text-foreground">Download CV</Button>
        <Link href="/#contact" className="inline-flex h-8 shrink-0 items-center justify-center rounded-lg bg-accent px-4 text-sm font-medium text-background transition-all hover:bg-accent/90">
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
