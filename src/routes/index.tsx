import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  ChevronRight,
  Clapperboard,
  Crosshair,
  FileText,
  Film,
  LockKeyhole,
  Play,
  Radio,
  ScanLine,
  Search,
  Send,
  ShieldCheck,
  Users,
  Eye,
  Zap,
  X,
  Check,
  Skull,
  ShieldAlert,
  Target,
  FileX,
  type LucideIcon,
} from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

import agentB2B from "@/assets/agent-b2b-noir.jpg";
import agentCinematic from "@/assets/agent-cinematic-noir.jpg";
import agentCreator from "@/assets/agent-creator-noir.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CONFIDENTIAL — Video Intelligence Agency" },
      { name: "description", content: "A classified video editing agency for B2B, creator brands, and cinematic productions." },
      { property: "og:title", content: "CONFIDENTIAL — Video Intelligence Agency" },
      { property: "og:description", content: "High-retention editing and cinematic storytelling, handled as classified visual intelligence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConfidentialApp,
});

export type Agent = {
  codename: string;
  id: string;
  niche: string;
  clearance: string;
  image: string;
  Icon: LucideIcon;
  summary: string;
  portfolio: string[];
  history: string[];
  pastEdits: Array<{ title: string; metric: string }>;
};

type IntakeField = "name" | "channel" | "objective" | "budget";
type IntakeForm = Record<IntakeField, string>;

export const agents: Agent[] = [
  {
    codename: "AGENT VECTOR",
    id: "44-B2B-01",
    niche: "B2B",
    clearance: "Growth Intelligence",
    image: agentB2B,
    Icon: BriefcaseBusiness,
    summary: "Turns complex offers, founder expertise, and product evidence into direct, high-retention business narratives.",
    portfolio: ["Founder authority series", "Product launch film", "Demand generation cutdowns"],
    history: ["Reframed a technical demo around proof before process.", "Built a modular sales-video system from one interview day."],
    pastEdits: [{ title: "Proof Sequence", metric: "+43% hold" }, { title: "Launch Intercept", metric: "2.1x CTR" }],
  },
  {
    codename: "AGENT VELVET",
    id: "44-LCB-02",
    niche: "Lifestyle & Creator Brands",
    clearance: "Culture Operative",
    image: agentCreator,
    Icon: Camera,
    summary: "Finds the intimate human beat inside creator footage, lifestyle campaigns, and personality-led brands.",
    portfolio: ["Creator launch reel", "Lifestyle campaign", "Episodic social system"],
    history: ["Converted a casual shoot into a premium story arc.", "Built repeatable cold opens around personality and tension."],
    pastEdits: [{ title: "Velvet Dispatch", metric: "+52% shares" }, { title: "Identity File", metric: "31s hold" }],
  },
  {
    codename: "AGENT NOCTURNE",
    id: "44-CIN-03",
    niche: "Cinematic",
    clearance: "Narrative Operative",
    image: agentCinematic,
    Icon: Film,
    summary: "Builds atmosphere, tension, sound, and visual rhythm for films that need to feel larger than their footage.",
    portfolio: ["Brand documentary", "Narrative campaign film", "Title and motion package"],
    history: ["Recovered a fragmented production through a new narrative spine.", "Designed a tension-first edit and complete sonic identity."],
    pastEdits: [{ title: "Night Division", metric: "92% completion" }, { title: "Silent Cut", metric: "3 awards" }],
  },
];

const reels = [
  { id: "CAM_01", title: "THE OPENING STATEMENT", src: "https://videos.pexels.com/video-files/18069234/18069234-hd_1920_1080_24fps.mp4", placement: "evidence-a" },
  { id: "INTEL_02", title: "PRODUCT PROOF", src: "https://videos.pexels.com/video-files/3048527/3048527-hd_1920_1080_30fps.mp4", placement: "evidence-b" },
  { id: "PRIMARY_03", title: "THE SILENT OPERATIVE", src: "https://videos.pexels.com/video-files/1409899/1409899-hd_1920_1080_25fps.mp4", placement: "evidence-main" },
  { id: "TRACE_04", title: "CREATOR SIGNAL", src: "https://videos.pexels.com/video-files/3209211/3209211-hd_1920_1080_25fps.mp4", placement: "evidence-c" },
  { id: "ARCHIVE_05", title: "FINAL TRANSMISSION", src: "https://videos.pexels.com/video-files/5532765/5532765-hd_1920_1080_25fps.mp4", placement: "evidence-d" },
];

const differences = [
  ["Content Forensics", "We isolate hook decay, pacing gaps, and the exact frame where attention disappears."],
  ["Evidence-Based Editing", "Every cut has a reason: tension, proof, clarity, or emotional consequence."],
  ["Secured Workflows", "Traceable versions, controlled access, and disciplined handoffs from intake to export."],
  ["Specialist Deployment", "One covert unit across B2B, lifestyle and creator brands, and cinematic work."],
];

const phases = [
  ["01", "The Debrief", "Setup, hardware and software audit, workflow map, and four weeks of live training calls."],
  ["02", "Joint Investigation", "Your team and our agents co-produce while the handoff gets cleaner each week."],
  ["03", "Full Takeover", "CONFIDENTIAL assumes the entire operation once your internal system is stable."],
];

const pricing = [
  ["Shadow Desk", "$2.5K", "Short-form edit command for active weekly publishing."],
  ["Evidence Room", "$6K", "Full production cell for launches, series, and channel rebuilds."],
  ["Black File", "Custom", "Dedicated agent deployment and multi-format coverage."],
];

const initialForm: IntakeForm = { name: "", channel: "", objective: "", budget: "" };

function ConfidentialApp() {
  const [form, setForm] = useState<IntakeForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const updateForm = (field: IntakeField) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setSubmitted(false);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };
  return (
    <main className="noir-noise min-h-screen overflow-hidden bg-background text-foreground">
      <div className="page-scan" aria-hidden="true" />
      <Header />
      <Hero />
      <DifferenceFile />
      <EvidenceBoard />
      <FieldAgents />
      <AgencyAcademy />
      <VsStandardAgencies />
      <AboutSection />
      <ClassifiedVault form={form} submitted={submitted} onChange={updateForm} onSubmit={handleSubmit} />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="CONFIDENTIAL home">
          <span className="h-2 w-2 shrink-0 bg-signal shadow-signal animate-status-blink" />
          <span className="font-display truncate text-lg font-bold sm:text-xl">CONFIDENTIAL_</span>
        </a>
        <nav className="hidden items-center gap-6 font-mono text-[10px] uppercase text-muted-foreground lg:flex">
          <a href="#evidence" className="hover:text-signal">Evidence Board</a>
          <a href="#agents" className="hover:text-signal">Field Agents</a>
          <Link to="/work" className="hover:text-signal">Work</Link>
          <a href="#academy" className="hover:text-signal">Academy</a>
          <a href="#vs" className="text-signal hover:text-foreground">VS Standard</a>
          <a href="#about" className="hover:text-signal">About</a>
          <a href="#vault" className="hover:text-signal">Vault</a>
        </nav>
        <Button asChild variant="case" size="case"><a href="#intake"><LockKeyhole />Initiate Case</a></Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] border-b border-border pt-32">
      <img src={agentB2B} alt="Anonymous confidential operative obscured by signal interference" width={768} height={960} loading="eager" className="absolute inset-y-20 right-[-16rem] h-[76vh] w-auto max-w-none opacity-35 grayscale sm:right-[-8rem] lg:right-[4vw]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pb-24 sm:px-6 lg:min-h-[72vh] lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase text-signal"><Radio className="h-4 w-4" /> Security clearance level 5 / Signal acquired</p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">We uncover the hidden value in your content.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">High-retention video production, motion design, and data-driven storytelling handled as classified visual intelligence.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="case" size="case"><a href="#evidence"><ScanLine />Open evidence board</a></Button>
            <Button asChild variant="covert" size="case"><a href="#vs"><Target className="h-4 w-4" />Why We're Different</a></Button>
          </div>
          <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-border py-4 font-mono text-[10px] uppercase text-muted-foreground">
            <Stat value="03" label="Operatives" /><Stat value="12" label="Case Files" /><Stat value="100%" label="Secure" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="border-r border-border px-4 last:border-r-0"><div className="font-display text-2xl font-bold text-foreground">{value}</div><div className="mt-1">{label}</div></div>;
}

function DifferenceFile() {
  return (
    <section id="difference" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div><SectionLabel>Difference file</SectionLabel><h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Nothing enters the timeline without evidence.</h2></div>
        <div className="case-sheet grid gap-px border border-border bg-border sm:grid-cols-2">
          {differences.map(([title, copy], index) => (
            <div key={title} className="bg-card p-6 sm:p-8"><span className="font-mono text-[10px] text-signal">0{index + 1} / VERIFIED</span><h3 className="mt-8 font-display text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{copy}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EvidenceBoard() {
  return (
    <section id="evidence" className="border-y border-border bg-card/35 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><SectionLabel>Case file / 005</SectionLabel><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Evidence transmission board.</h2></div><p className="max-w-lg text-muted-foreground">Five active reels. One connected narrative. Noir-filtered transmissions.</p></div>
        <div className="evidence-board">
          <div className="absolute left-5 top-5 z-30 border border-signal/40 bg-background/90 px-3 py-2 font-mono text-[9px] uppercase text-signal">Live visual intelligence / encrypted</div>
          <svg className="laser-network" viewBox="0 0 1200 680" preserveAspectRatio="none" aria-hidden="true"><path d="M180 155 L600 330 L1010 165 M600 330 L255 540 M600 330 L955 535" /><circle cx="180" cy="155" r="5" /><circle cx="600" cy="330" r="6" /><circle cx="1010" cy="165" r="5" /><circle cx="255" cy="540" r="5" /><circle cx="955" cy="535" r="5" /></svg>
          <div className="hidden lg:block">{reels.map((reel) => <EvidenceFrame key={reel.id} reel={reel} />)}</div>
          <div className="grid gap-5 p-4 pt-20 lg:hidden">{reels.map((reel) => <EvidenceFrame key={reel.id} reel={reel} mobile />)}</div>
        </div>
      </div>
    </section>
  );
}

function EvidenceFrame({ reel, mobile = false }: { reel: (typeof reels)[number]; mobile?: boolean }) {
  return (
    <article className={cn("evidence-frame group overflow-hidden", mobile ? "relative" : reel.placement)} tabIndex={0}>
      <video src={reel.src} muted autoPlay loop playsInline preload="metadata" crossOrigin="anonymous" aria-label={`${reel.title} portfolio reel`} className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.4] brightness-[0.85]" style={{ filter: "grayscale(100%) contrast(1.4) brightness(0.85)" }} />
      <div className="absolute inset-0 bg-background/20 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute inset-0 bg-signal/[0.06] mix-blend-overlay opacity-60 group-hover:opacity-40 transition-opacity" aria-hidden="true" />
      <div className="absolute inset-0 border border-border/50 group-hover:border-signal/50 transition-colors" aria-hidden="true" />
      <div className="frame-scan" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 pt-12">
        <p className="font-mono text-[9px] text-signal">{reel.id} / PLAYING</p><h3 className="mt-1 font-display text-sm font-bold text-foreground sm:text-base drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">{reel.title}</h3>
      </div>
      <Play className="absolute right-4 top-4 h-5 w-5 text-foreground/80 transition group-hover:text-signal group-hover:scale-110 drop-shadow" />
    </article>
  );
}

function FieldAgents() {
  return (
    <section id="agents" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between"><div><SectionLabel>Personnel record</SectionLabel><h2 className="mt-4 font-display text-4xl font-bold uppercase sm:text-5xl">Three active field agents.</h2></div><Button asChild variant="covert" size="case"><Link to="/work">View All Work</Link></Button></div>
        <div className="grid gap-6 lg:grid-cols-3">{agents.map((agent) => <AgentCard key={agent.id} agent={agent} />)}</div>
      </div>
    </section>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  const Icon = agent.Icon;
  const agentLink = agent.id === "44-B2B-01" ? "/agents/44-B2B-01" as const : agent.id === "44-LCB-02" ? "/agents/44-LCB-02" as const : "/agents/44-CIN-03" as const;
  return (
    <Card className="group/card overflow-hidden border-border bg-card/90 transition-colors hover:border-signal/60">
      <div className="agent-portrait relative aspect-[4/5] overflow-hidden bg-vault"><img src={agent.image} alt={`${agent.codename}`} width={768} height={960} loading="lazy" className="h-full w-full object-cover grayscale" /><div className="face-glitch" aria-hidden="true" /><div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" /><div className="absolute left-4 top-4 border border-border bg-background/85 px-3 py-2 font-mono text-[9px] text-muted-foreground"><Icon className="mr-2 inline h-3.5 w-3.5" />{agent.id}</div><div className="absolute bottom-4 left-4 border border-signal/50 px-3 py-1 font-mono text-[10px] uppercase text-signal -rotate-3">Identity redacted</div></div>
      <CardHeader className="p-5 pb-2"><Badge variant="outline" className="w-fit border-signal/40 bg-signal/10 font-mono text-signal">{agent.clearance}</Badge><CardTitle className="font-display text-2xl">{agent.codename}</CardTitle><p className="font-mono text-[10px] uppercase text-muted-foreground">{agent.niche}</p></CardHeader>
      <CardContent className="p-5 pt-2"><p className="min-h-20 leading-6 text-muted-foreground">{agent.summary}</p><div className="mt-6 flex items-center justify-between border-t border-border pt-5"><span className="font-mono text-[10px] uppercase text-muted-foreground">Biometric access</span><Button asChild variant="fingerprint" size="fingerprint" className="fingerprint-plate"><Link to={agentLink}><FingerprintMark className="h-14 w-14 group-hover/card:animate-fingerprint-scan" /></Link></Button></div></CardContent>
    </Card>
  );
}

function AgencyAcademy() {
  return (
    <section id="academy" className="border-y border-border bg-card/35 px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionLabel>Agency academy</SectionLabel><h2 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">Classified training protocol.</h2>
      <div className="mt-12 grid border border-border lg:grid-cols-3">{phases.map(([phase, title, copy]) => <div key={phase} className="border-b border-border p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"><div className="flex items-center justify-between font-mono text-xs text-signal"><span>PHASE {phase}</span><BadgeCheck className="h-5 w-5" /></div><h3 className="mt-12 font-display text-2xl font-bold">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{copy}</p></div>)}</div>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">{pricing.map(([name, price, copy]) => <Card key={name} className="border-border bg-background/70"><CardHeader><CardTitle className="font-display text-xl">{name}</CardTitle><div className="font-display text-4xl font-bold text-signal">{price}</div></CardHeader><CardContent><p className="mb-6 min-h-12 text-muted-foreground">{copy}</p><Button asChild variant="covert" size="case" className="w-full"><a href="#intake">Start onboarding<ChevronRight /></a></Button></CardContent></Card>)}</div>
    </div></section>
  );
}

function VsStandardAgencies() {
  const rows = [
    { label: "Editing Doctrine", standard: "Aesthetic-first. Pretty transitions, no reason.", confidential: "Evidence-first. Every cut has a forensic purpose: tension, proof, clarity." },
    { label: "Who Edits", standard: "Junior freelancers, Fiverr handoffs, no ownership.", confidential: "3 vetted operatives. Same faces. Same standard. 0 leaks since 2019." },
    { label: "Hook System", standard: "3-sec guess, trendy caption, hope it sticks.", confidential: "8-sec capture lab. Cold-open tension, hook decay analysis, proof-before-process." },
    { label: "Revisions", standard: "Unlimited chaos. Drive links. Version_ final_FINAL2.mp4", confidential: "Traceable, timestamped versions. Secured vault. Controlled handoffs." },
    { label: "Data", standard: "Views and vibes.", confidential: "Retention autopsy, CTR, hold rate, drop-off frame. We isolate where you lose them." },
    { label: "Speed vs Leverage", standard: "Fast and forgettable.", confidential: "Built for leverage. One shoot becomes 20+ assets, sales system, evergreen vault." },
  ];

  return (
    <section id="vs" className="relative border-y border-border bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" aria-hidden="true" />
      
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 border border-signal/40 bg-signal/10 px-3 py-1 font-mono text-[10px] uppercase text-signal">
            <Target className="h-3.5 w-3.5" /> Threat Assessment // Standard Agencies vs CONFIDENTIAL_
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] sm:text-6xl">
            Standard agencies <span className="text-muted-foreground line-through decoration-signal decoration-2">edit for looks.</span><br/>
            We edit for <span className="text-signal">leverage.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
            Most agencies are content factories. We are a <span className="text-foreground">classified visual intelligence unit</span>. 
            They ship videos. We build retention systems that compound.
          </p>
        </div>

        <div className="relative mt-16 grid overflow-hidden border border-border bg-border">
          {/* Header Row */}
          <div className="grid grid-cols-2 gap-px bg-border">
            <div className="bg-card/60 p-5 sm:p-7 flex items-center justify-between">
              <div className="flex items-center gap-3"><FileX className="h-5 w-5 text-muted-foreground" /><span className="font-display text-lg font-bold text-muted-foreground uppercase tracking-wide">Standard Protocol</span></div>
              <Badge variant="outline" className="border-border bg-background font-mono text-[10px] text-muted-foreground">COMPROMISED</Badge>
            </div>
            <div className="bg-card p-5 sm:p-7 flex items-center justify-between border-l-2 border-signal/60">
              <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-signal" /><span className="font-display text-lg font-bold uppercase tracking-wide">CONFIDENTIAL_ Protocol</span></div>
              <Badge className="border-signal/40 bg-signal/10 font-mono text-[10px] text-signal"><BadgeCheck className="h-3 w-3 mr-1" /> VERIFIED</Badge>
            </div>
          </div>

          {/* VS Badge Center */}
          <div className="absolute left-1/2 top-[88px] z-20 hidden -translate-x-1/2 border border-border bg-background px-4 py-2 font-display text-sm font-bold tracking-widest lg:block">VS</div>

          {/* Comparison Rows */}
          {rows.map((row, i) => (
            <div key={row.label} className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
              <div className="bg-card/40 p-6 sm:p-7 opacity-70">
                <div className="font-mono text-[10px] uppercase text-muted-foreground mb-2 flex items-center gap-2"><X className="h-3.5 w-3.5" /> {row.label}</div>
                <p className="text-sm leading-6 text-muted-foreground line-through decoration-muted-foreground/30">{row.standard}</p>
              </div>
              <div className="bg-card p-6 sm:p-7 border-l-0 lg:border-l-2 border-l-signal/30">
                <div className="font-mono text-[10px] uppercase text-signal mb-2 flex items-center gap-2"><Check className="h-3.5 w-3.5" /> {row.label}</div>
                <p className="text-sm leading-6 text-foreground font-medium">{row.confidential}</p>
              </div>
            </div>
          ))}

          {/* Bottom Statement */}
          <div className="bg-vault p-8 sm:p-10 text-center border-t border-border">
            <div className="mx-auto max-w-3xl">
              <p className="font-display text-2xl font-bold sm:text-3xl">We are not cheaper. We are not faster. We are <span className="text-signal">final.</span></p>
              <p className="mt-4 font-mono text-[11px] uppercase text-muted-foreground">If you want another video, hire anyone. If you want a system that makes every future video perform, initiate case.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="case" size="case"><Link to="/work"><Eye className="h-4 w-4" />See The Difference In Work</Link></Button>
                <Button asChild variant="covert" size="case"><a href="#about"><Skull className="h-4 w-4" />Read Agency Dossier</a></Button>
              </div>
            </div>
          </div>
        </div>

        {/* Small stats under */}
        <div className="mt-8 grid grid-cols-3 border border-border bg-card/50 font-mono text-[10px] uppercase">
          <div className="p-4 text-center border-r border-border"><span className="text-muted-foreground">Standard Avg Retention</span><div className="mt-1 font-display text-xl font-bold text-muted-foreground">18%</div></div>
          <div className="p-4 text-center border-r border-border bg-signal/5"><span className="text-signal">CONFIDENTIAL_ Avg Retention</span><div className="mt-1 font-display text-xl font-bold text-signal">68%</div></div>
          <div className="p-4 text-center"><span className="text-muted-foreground">Difference</span><div className="mt-1 font-display text-xl font-bold text-foreground">+277%</div></div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="border-y border-border bg-card/35 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>About file / Agency Dossier</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">A classified agency for founders who refuse to look average.</h2>
            <p className="mt-6 max-w-xl leading-8 text-muted-foreground">CONFIDENTIAL was built on one belief: most video agencies edit for aesthetics. We edit for <span className="text-foreground">retention, proof, and leverage</span>. Every frame is treated as visual intelligence.</p>
            <div className="mt-8 grid grid-cols-3 border-y border-border py-6 font-mono text-[10px] uppercase"><div className="border-r border-border px-4"><div className="font-display text-2xl font-bold text-foreground">2019</div><div className="mt-1 text-muted-foreground">Est. Protocol</div></div><div className="border-r border-border px-4"><div className="font-display text-2xl font-bold text-foreground">03</div><div className="mt-1 text-muted-foreground">Active Cells</div></div><div className="px-4"><div className="font-display text-2xl font-bold text-signal">0</div><div className="mt-1 text-muted-foreground">Leaks</div></div></div>
            <div className="mt-8 flex gap-3"><Button asChild variant="case" size="case"><a href="#agents"><Users className="h-4 w-4" />Meet Operatives</a></Button><Button asChild variant="covert" size="case"><Link to="/work">View Operations</Link></Button></div>
          </div>
          <div className="space-y-px border border-border bg-border"><div className="bg-card p-7"><div className="flex items-center gap-2 font-mono text-[10px] uppercase text-signal"><Eye className="h-4 w-4" /> Origins</div><h3 className="mt-4 font-display text-xl font-bold">Built inside high-stakes launches</h3><p className="mt-3 leading-7 text-muted-foreground">We started as an internal edit cell for B2B founders and creator brands running 7-figure launches. No templates, no junior editors, just direct response storytelling and forensic timeline audits.</p></div><div className="bg-card p-7"><div className="flex items-center gap-2 font-mono text-[10px] uppercase text-signal"><Zap className="h-4 w-4" /> Protocol</div><h3 className="mt-4 font-display text-xl font-bold">Evidence before ego</h3><p className="mt-3 leading-7 text-muted-foreground">Every cut has a reason: tension, proof, clarity, or emotional consequence. We isolate hook decay, pacing gaps, and the exact frame where attention disappears — then rebuild the narrative around proof.</p></div><div className="bg-card p-7"><div className="flex items-center gap-2 font-mono text-[10px] uppercase text-signal"><ShieldCheck className="h-4 w-4" /> Clearance</div><h3 className="mt-4 font-display text-xl font-bold">Secured workflows, traceable versions</h3><p className="mt-3 leading-7 text-muted-foreground">Compartmentalized assets, controlled access, and disciplined handoffs from intake to export. Your footage never leaks. Your revisions are tracked. Your exports are verified.</p></div></div>
        </div>
      </div>
    </section>
  );
}

function ClassifiedVault({ form, submitted, onChange, onSubmit }: { form: IntakeForm; submitted: boolean; onChange: (field: IntakeField) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  return (
    <section id="vault" className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionLabel>Classified vault</SectionLabel><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Open a secure case line.</h2><p className="mt-6 max-w-lg leading-8 text-muted-foreground">Brief the agency. Your file enters a controlled review and is assigned to the right operative.</p><div className="mt-10 border-l-2 border-signal pl-5 font-mono text-xs uppercase text-muted-foreground">Current response window<br/><span className="text-foreground">Within 24 hours</span></div></div>
      <form id="intake" onSubmit={onSubmit} className="border border-border bg-card p-6 sm:p-8"><div className="mb-8 flex items-center justify-between"><div><p className="font-mono text-[10px] uppercase text-signal">Intake terminal</p><h3 className="mt-2 font-display text-2xl font-bold">Initiate Case</h3></div><Send className="h-6 w-6 text-signal" /></div><div className="grid gap-5 sm:grid-cols-2"><Field label="Codename"><Input id="name" value={form.name} onChange={onChange("name")} placeholder="Brand or operator" required /></Field><Field label="Channel"><Input id="channel" value={form.channel} onChange={onChange("channel")} placeholder="YouTube, ads, launch" required /></Field><Field label="Mission objective" wide><Textarea id="objective" value={form.objective} onChange={onChange("objective")} placeholder="Describe the footage, objective, audience, and deadline." required className="min-h-32" /></Field><Field label="Operating budget" wide><Input id="budget" value={form.budget} onChange={onChange("budget")} placeholder="$2.5K, $6K, or custom" /></Field></div><Button type="submit" variant="case" size="case" className="mt-6 w-full"><LockKeyhole />Transmit Case File</Button>{submitted && <div className="mt-5 border border-signal/50 bg-signal/10 p-4 font-mono text-xs uppercase text-signal">Case file transmitted. Clearance desk is standing by.</div>}</form>
    </div></section>
  );
}

function Field({ label, wide, children }: { label: string; wide?: boolean; children: React.ReactNode }) { return <div className={cn("space-y-2", wide && "sm:col-span-2")}><Label className="font-mono text-[10px] uppercase text-muted-foreground">{label}</Label>{children}</div>; }
function SectionLabel({ children }: { children: React.ReactNode }) { return <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-signal"><Crosshair className="h-4 w-4" />{children}</div>; }
function FingerprintMark({ className }: { className?: string }) {
  return <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("text-current", className)} fill="none"><path d="M18 31c0-8.3 6.2-14 14-14s14 5.7 14 14M13 29c.8-11.7 9.3-20 19-20s18.2 8.3 19 20M23 32c0-5.4 3.8-9 9-9s9 3.6 9 9c0 11 5 13 5 18M32 30c0 10.5 5.5 14.5 5.5 23M18 39c1.5-2.9 2-4.7 2-8M25 43c1.7-3.5 2.5-6.8 2.5-11M16 49c4.3-4.8 6.5-10.4 6.5-17M44 37c2.5 4.4 6 6.8 6 14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" opacity={0.72}/></svg>;
}
