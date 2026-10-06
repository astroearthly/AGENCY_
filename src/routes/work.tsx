import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ChevronDown, Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useEffect, useRef } from "react";

export const Route = createFileRoute("/work")({
  component: AllWorkPage,
});

type WorkItem = {
  agentId: string;
  title: string;
  category: string;
  vimeoId?: string;
  mp4?: string;
  description: string;
  year: string;
  /** Fallback width/height ratio. Real ratio is read from the video itself. */
  ratio: number;
  /** When true, `ratio` is used as-is and never overridden by video metadata. */
  lockRatio?: boolean;
  teamLabel: string;
  viewTransitionName?: string;
};

const V = 16 / 9; // horizontal
const H = 9 / 16; // vertical

const teamVideos: WorkItem[] = [
  // TEAM 01
  { agentId: "44-B2B-01", title: "CAM_01 // FOUNDER AUTHORITY", category: "FILM", vimeoId: "1233404735", description: "TEAM 01 — Cinema Unit / Founder Authority", year: "2026", ratio: H, teamLabel: "TEAM 01", viewTransitionName: "team01-cam01" },
  { agentId: "44-B2B-01", title: "CAM_02 // FILM VLOG", category: "FILM", vimeoId: "1164198582", description: "TEAM 01 — Cinema Unit / Film Vlog", year: "2026", ratio: V, teamLabel: "TEAM 01", viewTransitionName: "team01-cam02" },
  { agentId: "44-B2B-01", title: "CAM_03 // DEMAND CUTDOWNS", category: "FILM", vimeoId: "1140005276", description: "TEAM 01 — Cinema Unit / Demand Cutdowns", year: "2026", ratio: V, teamLabel: "TEAM 01", viewTransitionName: "team01-cam03" },
  { agentId: "44-B2B-01", title: "CAM_04 // ARCHIVE CUT", category: "FILM", vimeoId: "1230757187", description: "TEAM 01 — Cinema Unit / Archive Cut", year: "2026", ratio: V, teamLabel: "TEAM 01", viewTransitionName: "team01-cam04" },

  // TEAM 02
  { agentId: "44-LCB-02", title: "CAM_01 // FOUNDER AUTHORITY", category: "Motion Design", mp4: "https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4", description: "TEAM 02 — Motion Unit / Founder Authority", year: "2026", ratio: V, lockRatio: true, teamLabel: "TEAM 02", viewTransitionName: "team02-cam01" },
  { agentId: "44-LCB-02", title: "CAM_02 // FILM VLOG", category: "Motion Design", vimeoId: "1231097359", description: "TEAM 02 — Motion Unit / Film Vlog", year: "2026", ratio: V, teamLabel: "TEAM 02", viewTransitionName: "team02-cam02" },
  { agentId: "44-LCB-02", title: "CAM_03 // DEMAND CUTDOWNS", category: "Motion Design", vimeoId: "1231478353", description: "TEAM 02 — Motion Unit / Demand Cutdowns", year: "2026", ratio: V, teamLabel: "TEAM 02", viewTransitionName: "team02-cam03" },
  { agentId: "44-LCB-02", title: "CAM_04 // ARCHIVE CUT", category: "Motion Design", vimeoId: "1231479208", description: "TEAM 02 — Motion Unit / Archive Cut", year: "2026", ratio: V, teamLabel: "TEAM 02", viewTransitionName: "team02-cam04" },
  { agentId: "44-LCB-02", title: "CAM_05 // MOTION SYSTEM", category: "Motion Design", vimeoId: "1233408216", description: "TEAM 02 — Motion Unit / Motion System", year: "2026", ratio: H, teamLabel: "TEAM 02", viewTransitionName: "team02-cam05" },
  { agentId: "44-LCB-02", title: "CAM_06 // SPATIAL ARCHITECTURE", category: "Motion Design", vimeoId: "1231097359", description: "TEAM 02 — Motion Unit / Spatial Architecture", year: "2026", ratio: V, teamLabel: "TEAM 02", viewTransitionName: "team02-cam06" },
  { agentId: "44-LCB-02", title: "CAM_07 // SIGNAL STREAM", category: "Motion Design", vimeoId: "1233416925", description: "TEAM 02 — Motion Unit / Signal Stream", year: "2026", ratio: V, teamLabel: "TEAM 02", viewTransitionName: "team02-cam07" },

  // TEAM 03
  { agentId: "44-CIN-03", title: "CAM_01 // FOUNDER AUTHORITY", category: "Creator Content", vimeoId: "1231088285", description: "TEAM 03 — Creator Unit / Vertical", year: "2026", ratio: H, teamLabel: "TEAM 03", viewTransitionName: "team03-cam01" },
  { agentId: "44-CIN-03", title: "CAM_02 // PRODUCT PROOF", category: "Creator Content", vimeoId: "1231088286", description: "TEAM 03 — Creator Unit / Vertical", year: "2026", ratio: H, teamLabel: "TEAM 03", viewTransitionName: "team03-cam02" },
  { agentId: "44-CIN-03", title: "CAM_03 // DEMAND CUTDOWNS", category: "Creator Content", vimeoId: "1233412575", description: "TEAM 03 — Creator Unit / Vertical", year: "2026", ratio: H, teamLabel: "TEAM 03", viewTransitionName: "team03-cam03" },
  { agentId: "44-CIN-03", title: "CAM_04 // CREATOR NARRATIVE", category: "Creator Content", vimeoId: "1233377528", description: "TEAM 03 — Creator Unit / Vertical", year: "2026", ratio: H, teamLabel: "TEAM 03" },
  { agentId: "44-CIN-03", title: "CAM_05 // SOCIAL HOOK", category: "Creator Content", vimeoId: "1233378177", description: "TEAM 03 — Creator Unit / Vertical", year: "2026", ratio: H, teamLabel: "TEAM 03" },
  { agentId: "44-CIN-03", title: "CAM_06 // AUDIENCE RETENTION", category: "Creator Content", vimeoId: "1233378383", description: "TEAM 03 — Creator Unit / Vertical", year: "2026", ratio: H, teamLabel: "TEAM 03" },
  { agentId: "44-CIN-03", title: "CAM_07 // CONVERSION ENGINE", category: "Creator Content", vimeoId: "1233404735", description: "TEAM 03 — Creator Unit / Vertical", year: "2026", ratio: H, teamLabel: "TEAM 03" },
  { agentId: "44-CIN-03", title: "CAM_08 // ENGAGEMENT LOOP", category: "Creator Content", vimeoId: "1233407649", description: "TEAM 03 — Creator Unit / Vertical", year: "2026", ratio: H, teamLabel: "TEAM 03" },
  { agentId: "44-CIN-03", title: "CAM_09 // SIGNAL FEED", category: "Creator Content", vimeoId: "1233412733", description: "TEAM 03 — Creator Unit / Horizontal", year: "2026", ratio: V, teamLabel: "TEAM 03" },
];

function getAgentLink(id: string) {
  if (id === "44-B2B-01") return "/agents/44-B2B-01" as const;
  if (id === "44-LCB-02") return "/agents/44-LCB-02" as const;
  return "/agents/44-CIN-03" as const;
}

/* ---------- Vimeo metadata (real aspect ratio + thumbnail), cached ---------- */

type VimeoMeta = { ratio: number; thumb: string | null };
const vimeoCache = new Map<string, Promise<VimeoMeta | null>>();

function fetchVimeoMeta(id: string): Promise<VimeoMeta | null> {
  if (!vimeoCache.has(id)) {
    const url = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${id}`)}&width=960`;
    vimeoCache.set(
      id,
      fetch(url)
        .then((r) => (r.ok ? r.json() : null))
        .then((d) =>
          d && d.width && d.height
            ? { ratio: d.width / d.height, thumb: (d.thumbnail_url as string) ?? null }
            : null
        )
        .catch(() => null)
    );
  }
  return vimeoCache.get(id)!;
}

/* ---------- Minimal Vimeo player control via postMessage (no SDK needed) ---------- */

const VIMEO_ORIGIN = "https://player.vimeo.com";

function vimeoPost(iframe: HTMLIFrameElement | null, method: string, value?: unknown) {
  iframe?.contentWindow?.postMessage(JSON.stringify({ method, value }), VIMEO_ORIGIN);
}

function WorkCard({ work, index }: { work: WorkItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [near, setNear] = useState(false); // card is close to the viewport -> preload player
  const [ready, setReady] = useState(false); // vimeo player is loaded and accepts commands
  const [playing, setPlaying] = useState(false); // first frame is actually rendering
  const [ratio, setRatio] = useState(work.ratio);
  const [thumb, setThumb] = useState<string | null>(
    work.vimeoId ? `https://vumbnail.com/${work.vimeoId}.jpg` : null
  );

  const frameRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const link = getAgentLink(work.agentId);
  const isVimeo = !!work.vimeoId;

  // Real ratio + thumbnail from Vimeo
  useEffect(() => {
    if (!work.vimeoId) return;
    let cancelled = false;
    fetchVimeoMeta(work.vimeoId).then((meta) => {
      if (cancelled || !meta) return;
      if (!work.lockRatio) setRatio(meta.ratio);
      if (meta.thumb) setThumb(meta.thumb);
    });
    return () => {
      cancelled = true;
    };
  }, [work.vimeoId, work.lockRatio]);

  // Preload the player when the card is near the viewport, release it when far away
  useEffect(() => {
    const el = frameRef.current;
    if (!el || !isVimeo) return;
    const io = new IntersectionObserver(
  ([entry]) => {
    if (entry) setNear(entry.isIntersecting);
  },
  { rootMargin: "600px 0px 600px 0px" }
);
    io.observe(el);
    return () => io.disconnect();
  }, [isVimeo]);

  // Reset player state when it is unmounted
  useEffect(() => {
    if (!near) {
      setReady(false);
      setPlaying(false);
    }
  }, [near]);

  // Listen to the player: ready -> subscribe to progress; first progress = first frame on screen
  useEffect(() => {
    if (!isVimeo || !near) return;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== VIMEO_ORIGIN) return;
      if (e.source !== iframeRef.current?.contentWindow) return;
      let data: any = e.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }
      if (data?.event === "ready") {
        vimeoPost(iframeRef.current, "addEventListener", "playProgress");
        setReady(true);
      } else if (data?.event === "playProgress") {
        setPlaying(true);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [isVimeo, near]);

  // Hover -> play / pause the already-loaded player instantly
  useEffect(() => {
    if (!isVimeo || !ready) return;
    if (isHovered) {
      vimeoPost(iframeRef.current, "play");
    } else {
      vimeoPost(iframeRef.current, "pause");
      vimeoPost(iframeRef.current, "setCurrentTime", 0);
      setPlaying(false);
    }
  }, [isHovered, ready, isVimeo]);

  // Native mp4 play/pause
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (isHovered) el.play().catch(() => {});
    else {
      el.pause();
      el.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <Link
      to={link}
      viewTransition
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="group relative mb-5 block break-inside-avoid overflow-hidden rounded-[4px] border border-white/[0.07] bg-[#0a0a0a] transition-all duration-300 hover:border-white/[0.14] hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]"
      style={work.viewTransitionName ? ({ viewTransitionName: work.viewTransitionName } as any) : undefined}
    >
      {/* Media frame: always matches the real video ratio, so no boxing/gaps */}
      <div ref={frameRef} className="relative w-full overflow-hidden bg-[#101010]" style={{ aspectRatio: ratio }}>
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform group-hover:scale-[1.03]">
          {isVimeo ? (
            <>
              {/* Player is preloaded (paused) underneath the thumbnail */}
              {near && (
                <iframe
                  ref={iframeRef}
                  src={`https://player.vimeo.com/video/${work.vimeoId}?background=1&autoplay=0&loop=1&byline=0&title=0&muted=1&autopause=0&playsinline=1`}
                  className="pointer-events-none absolute inset-0 h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={work.title}
                />
              )}
              {thumb && (
                <img
                  src={thumb}
                  alt={work.title}
                  loading="lazy"
                  onError={() => {
                    const fallback = `https://vumbnail.com/${work.vimeoId}.jpg`;
                    if (thumb !== fallback) setThumb(fallback);
                  }}
                  className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-150 ${playing ? "opacity-0" : "opacity-100"}`}
                />
              )}
            </>
          ) : (
            <video
              ref={videoRef}
              src={work.mp4}
              muted
              playsInline
              loop
              preload="auto"
              onLoadedMetadata={(e) => {
                const v = e.currentTarget;
                if (!work.lockRatio && v.videoWidth && v.videoHeight) setRatio(v.videoWidth / v.videoHeight);
              }}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-black/5 transition-colors duration-700 group-hover:bg-black/0" />
        <div className="pointer-events-none absolute left-4 top-4 z-10 font-mono text-[13px] font-medium tracking-wide text-white/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
          [{(index + 1).toString().padStart(2, "0")}]
        </div>
        <div className="pointer-events-none absolute left-4 top-10 z-10 font-mono text-[10px] uppercase tracking-wide text-white/50">
          {work.teamLabel} / {work.category}
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center p-6 opacity-90 transition-all duration-500 ease-out group-hover:scale-90 group-hover:opacity-0 group-hover:blur-[2px]">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-md transition-all duration-500">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
              <span className="font-mono text-[10px] font-bold">{work.title.charAt(4)}</span>
            </div>
            <span className="font-display text-[13px] font-bold tracking-tight text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">{work.title}</span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-3 right-3 z-10 flex h-6 w-6 items-center justify-center rounded-[2px] bg-black/40 text-white/70 backdrop-blur-sm transition-all duration-500 group-hover:bg-white group-hover:text-black">
          <Plus className="h-3.5 w-3.5" />
        </div>
        <div className="pointer-events-none absolute right-4 top-1/2 z-10 -translate-y-1/2 translate-x-6 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
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
}

function AllWorkPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [time, setTime] = useState("");

  const categories = useMemo(() => ["All", ...Array.from(new Set(teamVideos.map((w) => w.category)))], []);

  // Warm up connections to Vimeo so players load faster
  useEffect(() => {
    const hosts = ["https://player.vimeo.com", "https://i.vimeocdn.com", "https://f.vimeocdn.com"];
    const links = hosts.map((href) => {
      const l = document.createElement("link");
      l.rel = "preconnect";
      l.href = href;
      l.crossOrigin = "";
      document.head.appendChild(l);
      return l;
    });
    return () => links.forEach((l) => l.remove());
  }, []);

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
    const q = search.toLowerCase();
    return teamVideos.filter((w) => {
      const matchSearch = w.title.toLowerCase().includes(q) || w.category.toLowerCase().includes(q) || w.teamLabel.toLowerCase().includes(q);
      const matchCat = selectedCat === "All" || w.category === selectedCat;
      return matchSearch && matchCat;
    });
  }, [search, selectedCat]);

  return (
    <main className="noir-noise min-h-screen overflow-hidden bg-[#080808] text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 flex border-b border-white/[0.08] bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" viewTransition className="flex items-center gap-3">
            <span className="h-2 w-2 animate-status-blink bg-signal shadow-signal" />
            <span className="font-display text-[15px] font-bold tracking-tight">CONFIDENTIAL_</span>
          </Link>
          <div className="hidden items-center gap-3 font-mono text-[11px] text-white/40 md:flex">
            <span>Toronto (CA)</span>
            <span className="text-white/80">{time}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[11px] text-white/60 sm:block">Our Work [{filtered.length.toString().padStart(2, "0")}]</span>
            <Button asChild variant="covert" size="case" className="h-8"><Link to="/" viewTransition>Back to HQ</Link></Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-4 pt-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 border-b border-white/[0.06] pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="h-10 w-[180px] rounded-[2px] border border-white/[0.08] bg-[#141414] pl-9 pr-3 font-mono text-[12px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/20 focus:bg-[#1a1a1a]" />
            </div>
            <div className="relative">
              <select value={selectedCat} onChange={(e) => setSelectedCat(e.target.value)} className="h-10 appearance-none rounded-[2px] border border-white/[0.08] bg-[#141414] pl-3 pr-8 font-mono text-[12px] text-white outline-none transition-colors focus:border-white/20">
                {categories.map((c) => <option key={c} value={c} className="bg-[#141414]">{c}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
            </div>
          </div>
          <div className="hidden items-center gap-2 font-mono text-[11px] md:flex">
            <span className="text-white/40">Digital Transformation & Design System</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="text-white/40">Our Work</span>
            <span className="text-white">[{filtered.length.toString().padStart(2, "0")}]</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {filtered.map((work, index) => (
            <WorkCard key={`${work.viewTransitionName || work.title}-${index}`} work={work} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}