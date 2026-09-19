import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Camera,
  Crosshair,
  FileText,
  LockKeyhole,
  Play,
  ShieldAlert,
} from "lucide-react";
import agentCreator from "@/assets/agent-creator-noir.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/agents/44-LCB-02")({
  component: Card2Page,
});

function Card2Page() {
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
          <Badge className="border-signal/40 bg-signal/10 text-signal"><BadgeCheck className="h-3.5 w-3.5 mr-1" /> CARD 2 // VERIFIED</Badge>
          <Badge variant="outline">44-LCB-02 // Creator Brands</Badge>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-lg border border-border order-2 lg:order-1">
            <img src={agentCreator} alt="AGENT VELVET" className="h-[600px] w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 font-mono text-xs text-muted-foreground flex justify-between">
              <span>CULTURE FEED // 44-LCB-02</span><span className="text-signal flex items-center gap-1"><ShieldAlert className="h-3.5 w-3.5" /> VIBE LOCKED</span>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h1 className="font-display text-5xl font-bold">AGENT VELVET</h1>
            <p className="font-mono text-xs text-signal flex items-center gap-2"><Crosshair className="h-4 w-4" /> Culture Operative // Lifestyle & Creator</p>
            <div className="border-l-2 border-signal/40 pl-4">
              <p className="text-muted-foreground leading-7">Finds the intimate human beat inside creator footage, lifestyle campaigns, and personality-led brands.</p>
            </div>
            <div className="border border-border bg-card/60 p-5 rounded-lg">
              <div className="font-mono text-xs text-signal mb-3 flex items-center gap-2"><FileText className="h-4 w-4" /> Case History</div>
              <ul className="space-y-2 text-xs font-mono text-muted-foreground">
                <li className="flex gap-2"><span className="text-signal">•</span>Converted a casual shoot into a premium story arc.</li>
                <li className="flex gap-2"><span className="text-signal">•</span>Built repeatable cold opens around personality and tension.</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-border bg-background/60 p-4"><Play className="h-4 w-4 text-signal mb-2" /><div className="text-sm">Velvet Dispatch</div><div className="text-xl font-bold text-signal">+52% shares</div></div>
              <div className="border border-border bg-background/60 p-4"><Play className="h-4 w-4 text-signal mb-2" /><div className="text-sm">Identity File</div><div className="text-xl font-bold text-signal">31s hold</div></div>
            </div>
            <Button asChild variant="case" size="case" className="w-full"><Link to="/" hash="intake"><LockKeyhole className="h-4 w-4 mr-2" />Request Assignment</Link></Button>
          </div>
        </div>
      </div>
    </main>
  );
}
