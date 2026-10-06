import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clapperboard,
  Crosshair,
  FileText,
  LockKeyhole,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/agents/44-B2B-01")({
  component: Card1Page,
});

function Card1Page() {
  const vids = [
    "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_1MB.mp4",
    "https://player.vimeo.com/video/1231104328?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1164198582?fl=ip&fe=ec&background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1140005276?fl=ip&fe=ec&background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1230757187?fl=ip&fe=ec&background=1&autoplay=1&loop=1&byline=0&title=0",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" viewTransition>
            <span className="h-2 w-2 bg-signal shadow-signal animate-status-blink" />
            <span className="font-display text-lg font-bold">CONFIDENTIAL_</span>
          </Link>
          <Button asChild variant="covert" size="case">
            <Link to="/" hash="agents" viewTransition>Back to HQ</Link>
          </Button>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-4 pt-[72px] sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start border-x border-border/50">
          <div className="lg:w-[41.666%] lg:shrink-0 lg:sticky lg:top-[72px] lg:self-start border-b lg:border-b-0 lg:border-r border-border/50 bg-background team-enter-left">
            <div className="p-6 sm:p-8 lg:p-10 space-y-8">
              <div className="flex items-start justify-between gap-8 font-mono text-[11px] uppercase leading-[1.4]">
                <div className="space-y-1 text-muted-foreground">
                  <div className="text-foreground font-bold">#01</div>
                  <div>TEAM 01</div>
                  <div>2026 — Present</div>
                  <div className="pt-1 text-muted-foreground">BRAND FILMS / PRODUCT FILMS / COMMERCIALS / POST-PRODUCTION</div>
                </div>
                <Link to="/work" viewTransition className="text-foreground hover:text-signal flex flex-col items-end gap-0.5 shrink-0">
                  <span className="flex items-center gap-1">See Work <ArrowUpRight className="h-3 w-3" /></span>
                  <span>Case Studies</span>
                </Link>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight">
                <span className="font-normal text-4xl">01</span>   <span className="font-medium text-[42px]">CINEMA UNIT</span>
              </h1>
               <h2 className="text-[18px] tracking-[-0.01em] font-normal font-medium leading-[1.5] text-[#fffff]">
               We take raw footage and shape it into films with rhythm, atmosphere, and intent. Through editing, sound, pacing, and visual composition, we control what the audience sees, feels, and remembers.<br /><br />
               From product films to brand stories and commercial work, we build cinematic experiences designed to give ideas a stronger presence.
               </h2>
              <p className="text-[16px] font-normal tracking-[-0.03em] leading-[1.7] text-muted-foreground">
              The story lives in the cut.
              </p>

              <div className="h-px bg-border/50" />

              <div className="space-y-12 pt-2">
                <div className="space-y-6">
                  <div className="font-normal tracking-[-0.02em] text-[13px] uppercase tracking-[0.18em] text-signal">How We Operate</div>
                  <p className="font-normal tracking-[-0.02em] text-[22px] sm:text-[24px] font-medium leading-[1.15] tracking-tight text-foreground">
                    We start with the story — then shape every frame around it.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="font-normal text-[16px] sm:text-[22px] font-medium uppercase tracking-[0.02em] leading-none text-foreground">Cinematic Editing</div>
                    <div className="font-mono text-[14px] tracking-wide text-muted-foreground">Narrative / Pacing / Rhythm</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-normal text-[16px] sm:text-[22px] font-medium uppercase tracking-[0.02em] leading-none text-foreground">Visual Storytelling</div>
                    <div className="font-mono text-[14px] tracking-wide text-muted-foreground">Emotion / Atmosphere / Composition</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-normal text-[16px] sm:text-[22px] font-medium uppercase tracking-[0.02em] leading-none text-foreground">Post-Production</div>
                    <div className="font-mono text-[14px] tracking-wide text-muted-foreground">Sound / Color / Finishing</div>
                  </div>
                </div>

                <div className="h-px bg-border/50" />

                <div className="space-y-5">
                  <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-signal">Philosophy</div>
                  <div className="space-y-4">
                    <p className="font-normal text-[20px] sm:text-[22px] font-medium leading-[1.25] text-foreground">
                      Every cut should have a reason.
                    </p>
                    <p className="text-[15px] leading-[1.7] text-muted-foreground">
                      We believe cinematic work isn't about adding more. It's about knowing what to keep, what to remove, and when to let a moment breathe.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-border/50" />

                <div className="space-y-3">
                  <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-signal">Credits</div>
                  <p className="text-[14px] leading-[1.6] text-muted-foreground">
                    Selected work across product, brand, commercial, and campaign films.
                  </p>

                  <div className="pt-2 space-y-1 font-mono text- uppercase leading-[1.8] text-muted-foreground">
  <div>Direction: <span className="text-foreground normal-case">Andrea Passalacqua</span></div>
  <div>Editing: <span className="text-foreground normal-case">Andrea Passalacqua</span></div>
  <div>Color Grading: <span className="text-foreground normal-case">Andrea Passalacqua</span></div>
  <div>Sound Design: <span className="text-foreground normal-case">Andrea Passalacqua</span></div>
</div>
                </div>
              </div>

              <div className="border-t border-border/50 pt-8">
                <div className="flex items-center justify-between mb-4 font-mono text-[11px] uppercase text-muted-foreground">
                  <span className="flex items-center gap-2"><Crosshair className="h-3.5 w-3.5 text-signal" /> Clearance: Growth Intelligence</span>
                  <span className="flex items-center gap-1 text-signal"><ShieldAlert className="h-3 w-3" /> Verified</span>
                </div>
                <Button asChild variant="case" size="case" className="w-full justify-between">
                  <Link to="/" hash="intake" viewTransition><span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4" /> Request Assignment</span><ArrowUpRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:w-[58.333%] bg-[#080808] team-enter-right">
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              
              <div className="border border-border bg-black overflow-hidden" style={{ viewTransitionName: "team01-cam01" } as any}>
                <div className="aspect-video bg-black"><video src={vids[0]} autoPlay muted loop playsInline className="h-full w-full object-cover" /></div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_01 // FOUNDER AUTHORITY - EXPERIMENTAL</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // ANDREA</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">+43% HOLD</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden" style={{ viewTransitionName: "team01-cam02" } as any}>
                <div className="relative w-full aspect-video bg-black">
                  <iframe src={vids[1]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_02 // FILM VLOG" />
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_02 // FILM VLOG</div>
                <div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // ANDREA</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">2.1x CTR</Badge></div>
              </div>

              <div className="border border-border bg-black overflow-hidden" style={{ viewTransitionName: "team01-cam03" } as any}>
                <div className="relative w-full aspect-video bg-black">
                  <iframe src={vids[2]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_03 // ZERO HOUR - EXPERIMENTAL" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_03 // ZERO HOUR - EXPERIMENTAL</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // ANDREA</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden" style={{ viewTransitionName: "team01-cam04" } as any}>
                <div className="relative w-full aspect-video bg-black"><iframe src={vids[3]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_04 // PSYCHE" /></div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_04 // PSYCHE</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // ANDREA</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">NEW</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden" style={{ viewTransitionName: "team01-cam05" } as any}>
                <div className="relative w-full aspect-video bg-black">
                  <iframe src={vids[4]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_05 // FILM VLOG V2" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_05 // FILM VLOG - V2</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // ANDREA</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">NEW CUT</Badge></div>              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
