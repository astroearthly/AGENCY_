import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Crosshair, Play, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { agents } from "./index";

export const Route = createFileRoute("/work")({
  component: AllWorkPage,
});

// Build work catalog from your 3 agents - each portfolio item becomes a work window
const allWorksCatalog = [
  ...agents.flatMap((agent) =>
    agent.portfolio.map((project, i) => ({
      agentId: agent.id,
      title: project,
      category: agent.niche,
      metric: agent.pastEdits[i % agent.pastEdits.length]?.metric || agent.clearance,
      description: agent.history[i % agent.history.length] || agent.summary,
      image: agent.image,
    }))
  ),
  {
    agentId: "44-B2B-01",
    title: "Retention Autopsy Case File",
    category: "Data Forensics",
    metric: "+43% Retention",
    description: "Watch-through recovery system restructuring proof before context for deep tech channels.",
    image: agents[0]!.image,
  },
  {
    agentId: "44-LCB-02",
    title: "Cinematic Hook Laboratory",
    category: "Motion Design",
    metric: "8 sec capture",
    description: "Opening tension system designed for cold audience capture and high click-through velocity.",
    image: agents[1]!.image,
  },
  {
    agentId: "44-CIN-03",
    title: "Vault Workflow Protocol",
    category: "Secure Ops",
    metric: "0 leaks",
    description: "Compartmentalized assets, notes, cuts, revisions, and approvals under classified handling.",
    image: agents[2]!.image,
  },
];

function getAgentLink(id: string) {
  if (id === "44-B2B-01") return "/agents/44-B2B-01" as const;
  if (id === "44-LCB-02") return "/agents/44-LCB-02" as const;
  return "/agents/44-CIN-03" as const;
}

function AllWorkPage() {
  return (
    <main className="noir-noise min-h-screen overflow-hidden bg-background text-foreground">
      <div className="page-scan" aria-hidden="true" />

      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="h-2 w-2 bg-signal shadow-signal animate-status-blink" />
            <span className="font-display text-lg font-bold">CONFIDENTIAL_</span>
          </Link>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-signal/40 bg-signal/10 font-mono text-[10px] text-signal hidden sm:flex">
              <BadgeCheck className="h-3 w-3 mr-1" /> ARCHIVE // VERIFIED
            </Badge>
            <Button asChild variant="covert" size="case"><Link to="/">Back to HQ</Link></Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-signal">
            <Crosshair className="h-4 w-4" /> Classified Archive // All Operations
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-wide sm:text-6xl">
            All Operations & Work
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            Complete index of high-retention video systems. Each window is tagged by operative. Click to open the agent card that made it.
          </p>
          <div className="mt-6 flex gap-2 font-mono text-[10px] text-muted-foreground">
            <span className="border border-border px-3 py-1">{allWorksCatalog.length} FILES</span>
            <span className="border border-signal/30 bg-signal/10 px-3 py-1 text-signal">03 OPERATIVES</span>
          </div>
        </div>

        {/* GRID LAYOUT - WORK WINDOWS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allWorksCatalog.map((work, index) => {
            const link = getAgentLink(work.agentId);
            const agent = agents.find(a => a.id === work.agentId);
            const Icon = agent?.Icon;
            return (
              <Link key={`${work.title}-${index}`} to={link} className="block group">
                <Card className="h-full overflow-hidden border-border bg-card/90 transition-all duration-300 group-hover:border-signal/60 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]">
                  <div className="relative aspect-video overflow-hidden bg-vault">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                    <div className="absolute left-3 top-3 flex items-center gap-2 rounded border border-border bg-background/80 px-2.5 py-1 font-mono text-[9px] uppercase text-muted-foreground backdrop-blur">
                      {Icon && <Icon className="h-3 w-3" />}{work.category}
                    </div>
                    <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-signal shadow-signal animate-pulse" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-[9px] text-signal">
                      <Play className="h-3 w-3" /> {work.agentId} / PLAY
                    </div>
                  </div>
                  <CardHeader className="p-5 pb-2">
                    <Badge variant="outline" className="w-fit border-signal/40 bg-signal/10 font-mono text-[10px] uppercase text-signal">
                      {work.metric}
                    </Badge>
                    <CardTitle className="font-display text-xl leading-tight text-foreground transition-colors group-hover:text-signal">
                      {work.title}
                    </CardTitle>
                    <div className="font-mono text-[10px] uppercase text-muted-foreground flex items-center gap-1.5">
                      <ShieldAlert className="h-3 w-3" /> Made by {agent?.codename}
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 pt-2">
                    <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{work.description}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] uppercase text-muted-foreground">
                      <span>Click to open dossier</span>
                      <span className="text-signal group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
