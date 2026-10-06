import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crosshair, LockKeyhole, ArrowUpRight, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/agents/44-CIN-03")({
  component: Card3Page,
});

function Card3Page() {
  const vids = [
    "https://player.vimeo.com/video/1231088285?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1231088286?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1233412575?autoplay=1&loop=1&autopause=0&background=1",
    "https://player.vimeo.com/video/1233377528?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1233378177?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1233378383?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1233404735?autoplay=1&loop=1&autopause=0&background=1",
    "https://player.vimeo.com/video/1233407649?autoplay=1&loop=1&autopause=0&background=1",
    "https://player.vimeo.com/video/1233412733?autoplay=1&loop=1&autopause=0&background=1",
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
          {/* LEFT - FIXED SCROLL SAME AS TEAM 01 */}
          <div className="lg:w-[41.666%] lg:shrink-0 lg:sticky lg:top-[72px] lg:self-start border-b lg:border-b-0 lg:border-r border-border/50 bg-background team-enter-left">
            <div className="p-6 sm:p-8 lg:p-10 space-y-8">
              <div className="flex items-start justify-between gap-8 font-mono text-[11px] uppercase leading-[1.4]">
                <div className="space-y-1 text-muted-foreground">
                  <div className="text-foreground font-bold">#03</div>
                  <div>TEAM 03</div>
                  <div>2026 — Present</div>
                  <div className="pt-1 text-muted-foreground">CREATOR CONTENT / SHORT-FORM / SOCIAL CAMPAIGNS / PERSONAL BRANDS</div>
                </div>
                <Link to="/work" viewTransition className="text-foreground hover:text-signal flex flex-col items-end gap-0.5 shrink-0">
                  <span className="flex items-center gap-1">See Work <ArrowUpRight className="h-3 w-3" /></span>
                  <span>Case Studies</span>
                </Link>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight">
                <span className="font-normal text-4xl">03</span>   <span className="font-medium text-[42px]">CREATOR UNIT</span>
              </h1>
               <h2 className="text-[18px] tracking-[-0.01em] font-normal font-medium leading-[1.5] text-[#fffff]">We turn personality into content.</h2>
              <h2 className="text-[18px] tracking-[-0.01em] font-normal font-medium leading-[1.5] text-[#fffff]">We transform raw creator footage, ideas, and moments into content built to capture attention and communicate naturally. Through editing, pacing, storytelling, and platform-aware creative direction, we make content feel authentic without feeling accidental.</h2>
              <p className="text-[16px] font-normal tracking-[-0.03em] leading-[1.7] text-muted-foreground">Our work spans creator campaigns, social content, personal brands, product integrations, and short-form storytelling — built around the person, the message, and the audience.</p>

              <div className="h-px bg-border/50" />
              <div className="space-y-12 pt-2">
                <div className="space-y-6">
                  <div className="font-normal tracking-[-0.02em] text-[13px] uppercase tracking-[0.18em] text-signal">How We Operate</div>
                  <p className="font-normal tracking-[-0.02em] text-[22px] sm:text-[24px] font-medium leading-[1.15] tracking-tight text-foreground">We start with the person — then build the story around what makes them worth watching.</p>
                </div>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="font-normal text-[16px] sm:text-[22px] font-medium uppercase tracking-[0.02em] leading-none text-foreground">Content Editing</div>
                    <div className="font-mono text-[14px] tracking-wide text-muted-foreground">Pacing / Hooks / Retention</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-normal text-[16px] sm:text-[22px] font-medium uppercase tracking-[0.02em] leading-none text-foreground">Creative Storytelling</div>
                    <div className="font-mono text-[14px] tracking-wide text-muted-foreground">Personality / Narrative / Authenticity</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-normal text-[16px] sm:text-[22px] font-medium uppercase tracking-[0.02em] leading-none text-foreground">Platform Content</div>
                    <div className="font-mono text-[14px] tracking-wide text-muted-foreground">Short-form / Social / Adaptation</div>
                  </div>
                </div>
                <div className="h-px bg-border/50" />
                <div className="space-y-5">
                  <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-signal">Philosophy</div>
                  <div className="space-y-4">
                    <p className="font-normal text-[20px] sm:text-[22px] font-medium leading-[1.25] text-foreground">Authenticity needs structure.</p>
                    <p className="text-[15px] leading-[1.7] text-muted-foreground">We believe great creator content shouldn't feel over-produced. The goal is to preserve personality while giving every moment the clarity, rhythm, and structure needed to hold attention.</p>
                  </div>
                </div>
                <div className="h-px bg-border/50" />
                <div className="space-y-3">
                  <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-signal">Credits</div>
                  <p className="text-[14px] leading-[1.6] text-muted-foreground">Selected work across creators, personal brands, social campaigns, and product-led content.</p>
                  <div className="pt-2 space-y-1 font-mono text- uppercase leading-[1.8] text-muted-foreground">
  <div>Direction: <span className="text-foreground normal-case">Andrea</span></div>
  <div>Editing: <span className="text-foreground normal-case">David,Andrea,Bre,Rics Briones, Ayman</span></div>
  <div>Motion Design: <span className="text-foreground normal-case">Ayman, David, Andrea</span></div>
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

          {/* RIGHT - SCROLLS */}
          <div className="lg:w-[58.333%] bg-[#080808] team-enter-right">
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              
              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none" style={{ viewTransitionName: "team03-cam01" } as any}>
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe src={vids[0]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_01 // FOUNDER AUTHORITY" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_01 // LECTEX</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // ANDREA</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">+43% HOLD</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none" style={{ viewTransitionName: "team03-cam02" } as any}>
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe src={vids[1]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_02 // PRODUCT PROOF" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_02 // PRODUCT PROOF</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // AYMAN</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">2.1x CTR</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none" style={{ viewTransitionName: "team03-cam03" } as any}>
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe src={vids[2]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_03 // DEMAND CUTDOWNS" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_03 // DEMAND CUTDOWNS</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // RICS BRIONES</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none" style={{ viewTransitionName: "team03-cam04" } as any}>
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe src={vids[3]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_04 // CREATOR NARRATIVE" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_04 // CREATOR NARRATIVE</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // DAVID</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none" style={{ viewTransitionName: "team03-cam05" } as any}>
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe src={vids[4]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_05 // SOCIAL HOOK" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_05 // SOCIAL HOOK</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // DAVID</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none" style={{ viewTransitionName: "team03-cam06" } as any}>
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe src={vids[5]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_06 // AUDIENCE RETENTION" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_06 // AUDIENCE RETENTION</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // DAVID</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none">
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe src={vids[6]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_07 // CONVERSION ENGINE" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_07 // CONVERSION ENGINE</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // NARU</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none">
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe src={vids[7]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_08 // ENGAGEMENT LOOP" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_08 // ENGAGEMENT LOOP</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // ANDREA</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

              {/* CAM_09 updated to 16:9 aspect ratio */}
              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none">
                <div className="relative w-full aspect-video bg-black">
                  <iframe src={vids[8]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_09 // SIGNAL FEED" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_09 // SIGNAL FEED</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // BRE</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}