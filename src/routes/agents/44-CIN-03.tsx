import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Crosshair,
  FileText,
  Film,
  LockKeyhole,
  ShieldAlert,
} from "lucide-react";
import agentCinematic from "@/assets/agent-cinematic-noir.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/agents/44-CIN-03")({
  component: Card3Page,
});

function Card3Page() {
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
          <Badge className="border-signal/40 bg-signal/10 text-signal"><BadgeCheck className="h-3.5 w-3.5 mr-1" /> CARD 3 // VERIFIED</Badge>
          <Badge variant="outline">44-CIN-03 // Cinematic</Badge>
        </div>

        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-6xl font-bold">AGENT NOCTURNE</h1>
            <p className="mt-3 font-mono text-xs text-signal flex items-center justify-center gap-2"><Film className="h-4 w-4" /> Narrative Operative // Cinematic</p>
            <p className="mt-4 text-muted-foreground leading-7">Builds atmosphere, tension, sound, and visual rhythm for films that need to feel larger than their footage.</p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border">
            <img src={agentCinematic} alt="AGENT NOCTURNE" className="h-[480px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div><div className="font-mono text-[10px] text-signal">CINEMATIC FEED // 44-CIN-03</div><div className="font-display text-2xl font-bold mt-1">Night Division</div></div>
              <div className="font-mono text-xs text-signal flex items-center gap-1"><ShieldAlert className="h-4 w-4" /> 92% completion</div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 border border-border bg-card/60 p-6">
              <div className="font-mono text-xs text-signal mb-4">Portfolio Work</div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="border border-border p-4 bg-background/50"><div className="text-sm font-bold">Brand documentary</div><div className="text-xs text-muted-foreground mt-2">Feature length narrative</div></div>
                <div className="border border-border p-4 bg-background/50"><div className="text-sm font-bold">Narrative campaign film</div><div className="text-xs text-muted-foreground mt-2">Tension-first edit</div></div>
                <div className="border border-border p-4 bg-background/50"><div className="text-sm font-bold">Title and motion package</div><div className="text-xs text-muted-foreground mt-2">Complete sonic identity</div></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border border-border bg-card/40 p-4">
                <div className="font-mono text-[10px] uppercase text-muted-foreground">Past Edits</div>
                <div className="mt-3 space-y-3">
                  <div className="flex justify-between items-center"><span className="text-sm">Night Division</span><span className="text-signal font-bold">92%</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm">Silent Cut</span><span className="text-signal font-bold">3 awards</span></div>
                </div>
              </div>
              <Button asChild variant="case" size="case" className="w-full"><Link to="/" hash="intake"><FileText className="h-4 w-4 mr-2" />Request Assignment</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
