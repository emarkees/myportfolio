import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-xs text-primary text-center md:text-left">
          © {new Date().getFullYear()} Adeyemi Olusola. Built with precision.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/#hero" className="font-mono text-xs text-primary hover:text-accent transition-colors">Home</Link>
          <Link href="/#about" className="font-mono text-xs text-primary hover:text-accent transition-colors">About</Link>
          <Link href="/projects" className="font-mono text-xs text-primary hover:text-accent transition-colors">Projects</Link>
          <Link href="/#contact" className="font-mono text-xs text-primary hover:text-accent transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="w-8 h-8 rounded border border-border bg-background flex items-center justify-center text-primary hover:text-accent hover:border-accent/50 transition-colors">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded border border-border bg-background flex items-center justify-center text-primary hover:text-accent hover:border-accent/50 transition-colors">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded border border-border bg-background flex items-center justify-center text-primary hover:text-accent hover:border-accent/50 transition-colors">
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded border border-border bg-background flex items-center justify-center text-primary hover:text-accent hover:border-accent/50 transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
