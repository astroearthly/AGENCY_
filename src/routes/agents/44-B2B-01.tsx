import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  Clapperboard,
  Crosshair,
  FileText,
  LockKeyhole,
  Play,
  ShieldAlert,
} from "lucide-react";
import agentB2B from "@/assets/agent-b2b-noir.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/agents/44-B2B-01")({
  component: Card1Page,
});

function Card1Page() {
  return (
    <main className="noir-noise min-h-screen overflow-hidden bg-background text-foreground">
      <div className="page-scan" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="h-2 w-2 bg-signal shadow-signal animate-status-blink" />
            <span className="font-display text-lg font-bold">CONFIDENTIAL_</span>
          </Link>
          <Button asChild variant="covert" size="case"><Link to="/" hash="agents">Back to HQ</Link></Button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mb-8 flex gap-3 font-mono text-[10px] uppercase">
          <Badge className="border-signal/40 bg-signal/10 text-signal"><BadgeCheck className="h-3.5 w-3.5 mr-1" /> CARD 1 // VERIFIED</Badge>
          <Badge variant="outline">44-B2B-01 // B2B</Badge>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <h1 className="font-display text-5xl font-bold">AGENT VECTOR</h1>
            <p className="font-mono text-xs text-signal flex items-center gap-2"><Crosshair className="h-4 w-4" /> Growth Intelligence // B2B Operative</p>
            <div className="border-l-2 border-signal/40 pl-4">
              <p className="text-muted-foreground leading-7">Turns complex offers, founder expertise, and product evidence into direct, high-retention business narratives.</p>
            </div>
            <div className="border border-border bg-card/60 p-5">
              <div className="font-mono text-xs text-signal mb-3 flex items-center gap-2"><Clapperboard className="h-4 w-4" /> Portfolio</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-signal" />Founder authority series</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-signal" />Product launch film</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-signal" />Demand generation cutdowns</li>
              </ul>
            </div>
            <Button asChild variant="case" size="case" className="w-full"><Link to="/" hash="intake"><LockKeyhole className="h-4 w-4 mr-2" />Request Assignment</Link></Button>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="relative overflow-hidden rounded-lg border border-border">
              <img src={agentB2B} alt="AGENT VECTOR" className="h-[500px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-xs text-muted-foreground">
                <span>TACTICAL HUD // 44-B2B-01</span><span className="text-signal flex items-center gap-1"><ShieldAlert className="h-3.5 w-3.5" /> TENSION OPTIMIZED</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-border bg-card/50 p-4"><Play className="h-4 w-4 text-signal mb-2" /><div className="text-sm">Proof Sequence</div><div className="font-display text-2xl font-bold text-signal mt-1">+43% hold</div></div>
              <div className="border border-border bg-card/50 p-4"><Play className="h-4 w-4 text-signal mb-2" /><div className="text-sm">Launch Intercept</div><div className="font-display text-2xl font-bold text-signal mt-1">2.1x CTR</div></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
