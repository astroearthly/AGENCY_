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

export const Route = createFileRoute("/agents/44-LCB-02")({
  component: Card1Page,
});

function Card1Page() {
  const vids = [
    "https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4",
    "https://player.vimeo.com/video/1231097359?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_30fps.mp4",
  ];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="h-2 w-2 bg-signal shadow-signal animate-status-blink" />
            <span className="font-display text-lg font-bold">CONFIDENTIAL_</span>
          </Link>
          <Button asChild variant="covert" size="case">
            <Link to="/" hash="agents">Back to HQ</Link>
          </Button>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-4 pt-[72px] sm:px-6 lg:px-8">
        {/* items-start is required: otherwise the left cell stretches to the full row height and sticky has no room to move */}
        <div className="grid lg:grid-cols-12 lg:items-start border-x border-border/50">
          {/* LEFT: sticky. Pins while the grid is on screen, scrolls away when the grid ends. */}
          <div className="lg:col-span-5 lg:sticky lg:top-[72px] border-b lg:border-b-0 lg:border-r border-border/50 bg-background">
            <div className="p-6 sm:p-8 lg:p-10 space-y-8">
              <div className="flex items-start justify-between gap-8 font-mono text-[11px] uppercase leading-[1.4]">
                <div className="space-y-1 text-muted-foreground">
                  <div className="text-foreground font-bold">44-B2B-01</div>
                  <div>AGENT VECTOR // Growth Intelligence</div>
                  <div>2019 — Present</div>
                </div>
                <Link to="/work" className="text-foreground hover:text-signal flex flex-col items-end gap-0.5 shrink-0">
                  <span className="flex items-center gap-1">See Work <ArrowUpRight className="h-3 w-3" /></span>
                  <span>Case Studies</span>
                </Link>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight">
                <span className="font-mono text-4xl">44</span> for <span className="font-bold">B2B</span>
              </h1>
              <h2 className="font-serif text-xl sm:text-2xl leading-[1.2] tracking-tight text-foreground">
                For <span className="font-bold">B2B brands</span> running complex offers, we had the pleasure of turning founder expertise and product proof into <span className="font-bold">a retention system</span> that compounds.
              </h2>
              <p className="text-sm leading-[1.7] text-muted-foreground">
                Turns complex offers, founder expertise, and product evidence into direct, high-retention business narratives.
              </p>

              <div className="h-px bg-border/50" />
              <p className="text-sm leading-[1.8] text-muted-foreground">
                <span className="text-foreground font-medium">Working closely with founders and GTM teams,</span> we translated technical proof into narrative leverage.
              </p>

              <div className="border border-border bg-card/30">
                <div className="border-b border-border px-4 py-3 flex items-center gap-2 font-mono text-[11px] uppercase text-signal">
                  <Clapperboard className="h-3.5 w-3.5" /> Portfolio // 03 Active Operations
                </div>
                <div className="divide-y divide-border/50">
                  <div className="flex items-center justify-between px-4 py-3 text-sm"><span className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-signal" /> Founder authority</span><span className="font-mono text-xs text-muted-foreground">+43% hold</span></div>
                  <div className="flex items-center justify-between px-4 py-3 text-sm"><span className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-signal" /> Product launch</span><span className="font-mono text-xs text-muted-foreground">2.1x CTR</span></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-mono text-[11px] uppercase text-signal flex items-center gap-2"><FileText className="h-3.5 w-3.5" /> Field History</div>
                <ul className="space-y-3 text-sm leading-[1.6] text-muted-foreground list-disc pl-4 marker:text-signal">
                  <li>Reframed a technical demo around proof before process — +43% retention.</li>
                  <li>Built a modular sales-video system from one interview day — 12 assets.</li>
                </ul>
              </div>

              <div className="border-t border-border/50 pt-8">
                <div className="flex items-center justify-between mb-4 font-mono text-[11px] uppercase text-muted-foreground">
                  <span className="flex items-center gap-2"><Crosshair className="h-3.5 w-3.5 text-signal" /> Clearance: Growth Intelligence</span>
                  <span className="flex items-center gap-1 text-signal"><ShieldAlert className="h-3 w-3" /> Verified</span>
                </div>
                <Button asChild variant="case" size="case" className="w-full justify-between">
                  <Link to="/" hash="intake"><span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4" /> Request Assignment</span><ArrowUpRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT: normal flow. Its height defines how long the grid (and the sticky effect) lasts. */}
          <div className="lg:col-span-7 bg-[#080808]">
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              
              {/* CAM 01 */}
              <div className="border border-border bg-black overflow-hidden">
                <div className="aspect-video bg-black"><video src={vids[0]} autoPlay muted loop playsInline className="h-full w-full object-cover" /></div>
                <div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_01 // FOUNDER AUTHORITY</div><Badge variant="outline" className="font-mono text-[11px] border-signal/30 text-signal">+43% HOLD</Badge></div>
              </div>

              {/* CAM 02 (Vimeo Embed) */}
              <div className="border border-border bg-black overflow-hidden">
                <div className="relative w-full aspect-video bg-black">
                  <iframe 
                    src={vids[1]} 
                    className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none" 
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="CAM_02 // PRODUCT PROOF"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_02 // PRODUCT PROOF</div><Badge variant="outline" className="font-mono text-[11px] border-signal/30 text-signal">2.1x CTR</Badge></div>
              </div>

              {/* CAM 03 */}
              <div className="border border-border bg-black overflow-hidden">
                <div className="aspect-video bg-black"><video src={vids[2]} autoPlay muted loop playsInline className="h-full w-full object-cover" /></div>
                <div className="flex items-center justify-between px-4 py-3 bg-background border-t border-border"><div className="font-display text-sm font-bold tracking-widest uppercase">CAM_03 // DEMAND CUTDOWNS</div><Badge variant="outline" className="font-mono text-[11px] border-signal/30 text-signal">VERIFIED</Badge></div>
              </div>

              <div className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}