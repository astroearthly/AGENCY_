import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crosshair, LockKeyhole, ArrowUpRight, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/agents/44-LCB-02")({
  component: Card2Page,
});

function Card2Page() {
  const vids = [
    "https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4",
    "https://player.vimeo.com/video/1231097359?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1231478353?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1231479208?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1233408216?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1233415173?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/1233416925?background=1&autoplay=1&loop=1&byline=0&title=0",
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
                  <div className="text-foreground font-bold">#02</div>
                  <div>TEAM 02</div>
                  <div>2026 — Present</div>
                  <div className="pt-1 text-muted-foreground">MOTION DESIGN / 2D & 3D ANIMATION / TYPOGRAPHY / VISUAL SYSTEMS</div>
                </div>
                <Link to="/work" viewTransition className="text-foreground hover:text-signal flex flex-col items-end gap-0.5 shrink-0">
                  <span className="flex items-center gap-1">See Work <ArrowUpRight className="h-3 w-3" /></span>
                  <span>Case Studies</span>
                </Link>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight">
                <span className="font-normal text-4xl">02</span>   <span className="font-medium text-[42px]">MOTION UNIT</span>
              </h1>
               <h2 className="text-[18px] tracking-[-0.01em] font-normal font-medium leading-[1.5] text-[#fffff]">We make ideas move.</h2>
              <h2 className="text-[18px] tracking-[-0.01em] font-normal font-medium leading-[1.5] text-[#fffff]">We transform concepts, graphics, and visual identities into motion through design, animation, typography, and compositing. Every movement is intentional — designed to clarify ideas, build energy, and give brands a distinctive visual language.</h2>
              <p className="text-[16px] font-normal tracking-[-0.03em] leading-[1.7] text-muted-foreground">Our work spans motion identities, animated campaigns, product graphics, typography, and visual systems, combining graphic precision with movement and rhythm.</p>

              <div className="h-px bg-border/50" />
              <div className="space-y-12 pt-2">
                <div className="space-y-6">
                  <div className="font-normal tracking-[-0.02em] text-[13px] uppercase tracking-[0.18em] text-signal">How We Operate</div>
                  <p className="font-normal tracking-[-0.02em] text-[22px] sm:text-[24px] font-medium leading-[1.15] tracking-tight text-foreground">We start with the idea — then give it movement, rhythm, and form.</p>
                </div>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="font-normal text-[16px] sm:text-[22px] font-medium uppercase tracking-[0.02em] leading-none text-foreground">Motion Design</div>
                    <div className="font-mono text-[14px] tracking-wide text-muted-foreground">Direction / Timing / Movement</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-normal text-[16px] sm:text-[22px] font-medium uppercase tracking-[0.02em] leading-none text-foreground">Graphic Systems</div>
                    <div className="font-mono text-[14px] tracking-wide text-muted-foreground">Typography / Layout / Composition</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-normal text-[16px] sm:text-[22px] font-medium uppercase tracking-[0.02em] leading-none text-foreground">Animation & Compositing</div>
                    <div className="font-mono text-[14px] tracking-wide text-muted-foreground">2D / 3D / Visual Effects</div>
                  </div>
                </div>
                <div className="h-px bg-border/50" />
                <div className="space-y-5">
                  <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-signal">Philosophy</div>
                  <div className="space-y-4">
                    <p className="font-normal text-[20px] sm:text-[22px] font-medium leading-[1.25] text-foreground">Movement should have a reason.</p>
                    <p className="text-[15px] leading-[1.7] text-muted-foreground">We believe motion isn't decoration. Every transition, interaction, and animation should communicate something, reinforce the idea, or create a feeling.</p>
                  </div>
                </div>
                <div className="h-px bg-border/50" />
                <div className="space-y-3">
                  <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-signal">Credits</div>
                  <p className="text-[14px] leading-[1.6] text-muted-foreground">Selected work across brand systems, campaigns, product visuals, and motion-led content.</p>
                  <div className="pt-2 space-y-1 font-mono text- uppercase leading-[1.8] text-muted-foreground">
  <div>Editing: <span className="text-foreground normal-case">David, Andrea, Naru, Xia</span></div>
  <div>Motion Design: <span className="text-foreground normal-case">David, Andrea, Naru, Xia</span></div>
  <div>Direction: <span className="text-foreground normal-case">David, Andrea, Naru, Xia</span></div>
  <div>Color grading: <span className="text-foreground normal-case">David, Andrea, Naru, Xia</span></div>
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
              
              <div className="border border-border bg-black overflow-hidden" style={{ viewTransitionName: "team02-cam01" } as any}>
                <div className="aspect-video bg-black"><video src={vids[0]} autoPlay muted loop playsInline className="h-full w-full object-cover" /></div>
                <div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_01 // FOUNDER AUTHORITY</div><Badge variant="outline" className="font-mono text-[11px] border-signal/30 text-signal">+43% HOLD</Badge></div>
              </div>

              <div className="border border-border bg-black overflow-hidden" style={{ viewTransitionName: "team02-cam02" } as any}>
                <div className="relative w-full aspect-video bg-black">
                  <iframe src={vids[1]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_02 // FILM VLOG - CEREBRAS" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_02 // CEREBRAS</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // DAVID</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">2.1x CTR</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden" style={{ viewTransitionName: "team02-cam03" } as any}>
                <div className="relative w-full aspect-video bg-black">
                  <iframe src={vids[2]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_03 // DEMAND CUTDOWNS" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_03 // DEMAND CUTDOWNS</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // XIA</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden" style={{ viewTransitionName: "team02-cam04" } as any}>
                <div className="relative w-full aspect-video bg-black"><iframe src={vids[3]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_04 // ARCHIVE CUT" /></div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_04 // ARCHIVE CUT</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // NARU</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">NEW</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none">
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe src={vids[4]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_05 // PODCAST" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_05 // PODCAST</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // ANDREA</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden max-w-xl mx-auto lg:max-w-none">
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe src={vids[5]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_06 // DERM - HEALTH" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_06 // DERM -  HEALTH</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // ANDREA</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

              <div className="border border-border bg-black overflow-hidden">
                <div className="relative w-full aspect-video bg-black">
                  <iframe src={vids[6]} className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title="CAM_07 // SIGNAL STREAM" />
                </div>
<div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="flex flex-col"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_07 // SIGNAL STREAM</div><div className="font-mono text- uppercase tracking-wide text-muted-foreground">EDITED BY // NARU</div></div><Badge variant="outline" className="font-mono text- border-signal/30 text-signal">VERIFIED</Badge></div>              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}