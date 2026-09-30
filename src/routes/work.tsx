import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ChevronDown, Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useEffect } from "react";

export const Route = createFileRoute("/work")({
  component: AllWorkPage,
});

type WorkItem = {
  agentId: string;
  title: string;
  category: string;
  src: string;
  vimeoId: string | null;
  description: string;
  year: string;
  aspect: string;
  teamLabel: string;
  viewTransitionName: string;
};

const teamVideos: WorkItem[] = [
  { agentId: "44-B2B-01", title: "CAM_01 // FOUNDER AUTHORITY", category: "FILM", src: "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_1MB.mp4", vimeoId: null, description: "TEAM 01 — Cinema Unit / Founder Authority", year: "2025", aspect: "aspect-[16/10]", teamLabel: "TEAM 01", viewTransitionName: "team01-cam01" },
  { agentId: "44-B2B-01", title: "CAM_02 // FILM VLOG", category: "FILM", src: "https://player.vimeo.com/video/1231104328?background=1&autoplay=1&loop=1&byline=0&title=0", vimeoId: "1231104328", description: "TEAM 01 — Cinema Unit / Film Vlog", year: "2025", aspect: "aspect-[16/10]", teamLabel: "TEAM 01", viewTransitionName: "team01-cam02" },
  { agentId: "44-B2B-01", title: "CAM_03 // DEMAND CUTDOWNS", category: "FILM", src: "https://player.vimeo.com/video/1164198582?fl=ip&fe=ec&background=1&autoplay=1&loop=1&byline=0&title=0", vimeoId: "1164198582", description: "TEAM 01 — Cinema Unit / Demand Cutdowns", year: "2025", aspect: "aspect-[16/10]", teamLabel: "TEAM 01", viewTransitionName: "team01-cam03" },
  { agentId: "44-B2B-01", title: "CAM_04 // ARCHIVE CUT", category: "FILM", src: "https://player.vimeo.com/video/1231104328?background=1&autoplay=1&loop=1&byline=0&title=0", vimeoId: "1231104328", description: "TEAM 01 — Cinema Unit / Archive Cut", year: "2025", aspect: "aspect-[16/10]", teamLabel: "TEAM 01", viewTransitionName: "team01-cam04" },

  { agentId: "44-LCB-02", title: "CAM_01 // FOUNDER AUTHORITY", category: "Motion Design", src: "https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4", vimeoId: null, description: "TEAM 02 — Motion Unit / Founder Authority", year: "2025", aspect: "aspect-[16/10]", teamLabel: "TEAM 02", viewTransitionName: "team02-cam01" },
  { agentId: "44-LCB-02", title: "CAM_02 // FILM VLOG", category: "Motion Design", src: "https://player.vimeo.com/video/1231097359?background=1&autoplay=1&loop=1&byline=0&title=0", vimeoId: "1231097359", description: "TEAM 02 — Motion Unit / Film Vlog", year: "2025", aspect: "aspect-[16/10]", teamLabel: "TEAM 02", viewTransitionName: "team02-cam02" },
  { agentId: "44-LCB-02", title: "CAM_03 // DEMAND CUTDOWNS", category: "Motion Design", src: "https://player.vimeo.com/video/1231478353?background=1&autoplay=1&loop=1&byline=0&title=0", vimeoId: "1231478353", description: "TEAM 02 — Motion Unit / Demand Cutdowns", year: "2025", aspect: "aspect-[16/10]", teamLabel: "TEAM 02", viewTransitionName: "team02-cam03" },
  { agentId: "44-LCB-02", title: "CAM_04 // ARCHIVE CUT", category: "Motion Design", src: "https://player.vimeo.com/video/1231479208?background=1&autoplay=1&loop=1&byline=0&title=0", vimeoId: "1231479208", description: "TEAM 02 — Motion Unit / Archive Cut", year: "2025", aspect: "aspect-[16/10]", teamLabel: "TEAM 02", viewTransitionName: "team02-cam04" },

  { agentId: "44-CIN-03", title: "CAM_01 // FOUNDER AUTHORITY", category: "Creator Content", src: "https://player.vimeo.com/video/1231088285?background=1&autoplay=1&loop=1&byline=0&title=0", vimeoId: "1231088285", description: "TEAM 03 — Creator Unit / Vertical", year: "2025", aspect: "aspect-[9/16]", teamLabel: "TEAM 03", viewTransitionName: "team03-cam01" },
  { agentId: "44-CIN-03", title: "CAM_02 // PRODUCT PROOF", category: "Creator Content", src: "https://player.vimeo.com/video/1231088286?background=1&autoplay=1&loop=1&byline=0&title=0", vimeoId: "1231088286", description: "TEAM 03 — Creator Unit / Vertical", year: "2025", aspect: "aspect-[9/16]", teamLabel: "TEAM 03", viewTransitionName: "team03-cam02" },
  { agentId: "44-CIN-03", title: "CAM_03 // DEMAND CUTDOWNS", category: "Creator Content", src: "https://player.vimeo.com/video/1231115435?background=1&autoplay=1&loop=1&byline=0&title=0", vimeoId: "1231115435", description: "TEAM 03 — Creator Unit / Vertical", year: "2025", aspect: "aspect-[9/16]", teamLabel: "TEAM 03", viewTransitionName: "team03-cam03" },
];

function getAgentLink(id: string) {
  if (id === "44-B2B-01") return "/agents/44-B2B-01" as const;
  if (id === "44-LCB-02") return "/agents/44-LCB-02" as const;
  return "/agents/44-CIN-03" as const;
}

function AllWorkPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [time, setTime] = useState("");

  const categories = useMemo(() => ["All", ...Array.from(new Set(teamVideos.map(w => w.category)))], []);

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString("en-CA", { timeZone: "America/Toronto", hour: "2-digit", minute: "2-digit", hour12: true });
      setTime(t);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  const filtered = useMemo(() => {
    return teamVideos.filter(w => {
      const matchSearch = w.title.toLowerCase().includes(search.toLowerCase()) || w.category.toLowerCase().includes(search.toLowerCase()) || w.teamLabel.toLowerCase().includes(search.toLowerCase());
      const matchCat = selectedCat === "All" || w.category === selectedCat;
      return matchSearch && matchCat;
    });
  }, [search, selectedCat]);

  return (
    <main className="noir-noise min-h-screen overflow-hidden bg-[#080808] text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" viewTransition className="flex items-center gap-3">
            <span className="h-2 w-2 bg-signal shadow-signal animate-status-blink" />
            <span className="font-display text-[15px] font-bold tracking-tight">CONFIDENTIAL_</span>
          </Link>
          <div className="hidden md:flex items-center gap-3 font-mono text-[11px] text-white/40">
            <span>Toronto (CA)</span>
            <span className="text-white/80">{time}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block font-mono text-[11px] text-white/60">Our Work [{filtered.length.toString().padStart(2, "0")}]</span>
            <Button asChild variant="covert" size="case" className="h-8"><Link to="/" viewTransition>Back to HQ</Link></Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col gap-3 border-b border-white/[0.06] pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="h-10 w-[180px] rounded-[2px] border border-white/[0.08] bg-[#141414] pl-9 pr-3 font-mono text-[12px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/20 focus:bg-[#1a1a1a]" />
            </div>
            <div className="relative">
              <select value={selectedCat} onChange={(e) => setSelectedCat(e.target.value)} className="h-10 appearance-none rounded-[2px] border border-white/[0.08] bg-[#141414] pl-3 pr-8 font-mono text-[12px] text-white outline-none transition-colors focus:border-white/20">
                {categories.map(c => <option key={c} value={c} className="bg-[#141414]">{c}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 font-mono text-[11px]">
            <span className="text-white/40">Digital Transformation & Design System</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="text-white/40">Our Work</span>
            <span className="text-white">[{filtered.length.toString().padStart(2, "0")}]</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <div className="columns-1 gap-5 space-y-5 md:columns-2 lg:columns-3">
          {filtered.map((work, index) => {
            const link = getAgentLink(work.agentId);
            const isVimeo = !!work.vimeoId;
            return (
              <Link
                key={`${work.viewTransitionName}-${index}`}
                to={link}
                viewTransition
                className="group relative block break-inside-avoid overflow-hidden rounded-[4px] border border-white/[0.07] bg-[#0a0a0a] transition-all duration-300 hover:border-white/[0.14] hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                style={{ viewTransitionName: work.viewTransitionName } as any}
              >
                <div className={`relative w-full overflow-hidden bg-[#101010] ${work.aspect}`}>
                  {isVimeo ? (
                    <>
                      <img src={`https://vumbnail.com/${work.vimeoId}.jpg`} alt={work.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.06] will-change-transform" />
                      <iframe src={`${work.src}`} className="absolute inset-0 h-full w-full border-0 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" allow="autoplay; fullscreen; picture-in-picture" title={work.title} />
                    </>
                  ) : (
                    <video src={work.src} muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.06] will-change-transform" />
                  )}
                  <div className="absolute inset-0 bg-black/5 transition-colors duration-700 group-hover:bg-black/0" />
                  <div className="absolute left-4 top-4 z-10 font-mono text-[13px] font-medium tracking-wide text-white/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">[{ (index + 1).toString().padStart(2, "0")}]</div>
                  <div className="absolute left-4 top-10 z-10 font-mono text-[10px] uppercase tracking-wide text-white/50">{work.teamLabel} / {work.category}</div>

                  <div className="absolute inset-0 z-10 flex items-center justify-center p-6 opacity-90 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:blur-[2px] pointer-events-none">
                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-md transition-all duration-500">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                        <span className="font-mono text-[10px] font-bold">{work.title.charAt(4)}</span>
                      </div>
                      <span className="font-display text-[13px] font-bold tracking-tight text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">{work.title}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10 flex h-6 w-6 items-center justify-center rounded-[2px] bg-black/40 text-white/70 backdrop-blur-sm transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <Plus className="h-3.5 w-3.5" />
                  </div>
                  <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2 translate-x-6 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div className="relative bg-black px-5 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-[16px] font-bold leading-tight tracking-tight text-white">{work.title}</h3>
                    <span className="shrink-0 font-mono text-[11px] text-white/50">{work.year}</span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] leading-[1.5] text-white/40">{work.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
