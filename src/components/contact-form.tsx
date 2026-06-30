"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronDown, Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form action="https://formspree.io/f/xnqrezql" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName" className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] uppercase">First Name</Label>
          <Input id="firstName" name="firstName" placeholder="John" required className="bg-background border border-muted-foreground/40 text-[13px] h-10 focus-visible:ring-accent" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName" className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] uppercase">Last Name</Label>
          <Input id="lastName" name="lastName" placeholder="Smith" required className="bg-background border border-muted-foreground/40 text-[13px] h-10 focus-visible:ring-accent" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] uppercase">Email</Label>
          <Input id="email" name="email" type="email" placeholder="john@company.com" required className="bg-background border border-muted-foreground/40 text-[13px] h-10 focus-visible:ring-accent" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company" className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] uppercase">Company</Label>
          <Input id="company" name="company" placeholder="Acme Corp" className="bg-background border border-muted-foreground/40 text-[13px] h-10 focus-visible:ring-accent" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="engagementType" className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] uppercase">Engagement Type</Label>
        <div className="relative">
          <select id="engagementType" name="engagementType" className="w-full bg-background border border-muted-foreground/40 rounded-md px-3.5 py-2.5 text-[13px] text-foreground min-h-[40px] focus:outline-none focus:ring-1 focus:ring-accent appearance-none">
            <option value="full-time">Full-time Role</option>
            <option value="contract">Contract</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] uppercase">Message</Label>
        <Textarea id="message" name="message" placeholder="Describe the opportunity, project scope, or what you'd like to discuss..." required className="min-h-[120px] bg-background border border-muted-foreground/40 text-[13px] resize-y focus-visible:ring-accent py-3" />
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-2">
        <div className="font-mono text-[11px] text-muted-foreground">
          {isSuccess ? <span className="text-green-500 font-medium">Message sent successfully!</span> : "Response within 24 hrs · All fields required"}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto flex items-center gap-2 bg-accent text-background hover:bg-accent/90 px-7 py-2.5 text-[13px] font-medium h-auto rounded-md disabled:opacity-70">
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-3.5 h-3.5" />
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
