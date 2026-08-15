import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<any> | null = null;

/** Loads the official YouTube IFrame Player API once. */
function loadYouTubeApi(): Promise<any> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT);
    };
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    }
  });
  return apiPromise;
}

interface LivePlayerProps {
  videoId: string;
  title: string;
  onStart?: () => void;
  onPause?: () => void;
  onComplete?: () => void;
}

const LivePlayer = ({ videoId, title, onStart, onPause, onComplete }: LivePlayerProps) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const startedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled || !hostRef.current) return;

      playerRef.current = new YT.Player(hostRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            setReady(true);
            try {
              event.target.mute();
              event.target.playVideo();
            } catch {
              /* autoplay blocked — branded overlay stays visible */
            }
          },
          onStateChange: (event: any) => {
            const state = event.data;
            if (state === YT.PlayerState.PLAYING) {
              setPlaying(true);
              setShowOverlay(false);
              if (!startedRef.current) {
                startedRef.current = true;
                onStart?.();
              }
            } else if (state === YT.PlayerState.PAUSED) {
              setPlaying(false);
              onPause?.();
            } else if (state === YT.PlayerState.ENDED) {
              setPlaying(false);
              onComplete?.();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }
      playerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const handleStart = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    try {
      player.unMute();
      setMuted(false);
      player.playVideo();
    } catch {
      /* noop */
    }
    setShowOverlay(false);
  }, []);

  const togglePlay = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    if (playing) player.pauseVideo();
    else player.playVideo();
  }, [playing]);

  const toggleMute = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    if (muted) {
      player.unMute();
      setMuted(false);
    } else {
      player.mute();
      setMuted(true);
    }
  }, [muted]);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-secondary shadow-lg">
      <div ref={hostRef} className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full" />

      {/* Interaction layer: play/pause toggle only (no seek controls) */}
      {!showOverlay ? (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause workshop" : "Play workshop"}
          className="absolute inset-x-0 top-0 bottom-14 w-full cursor-pointer bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        />
      ) : null}

      {/* Branded start overlay (autoplay fallback) */}
      {showOverlay ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-secondary/70 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none">
          <button
            type="button"
            onClick={handleStart}
            disabled={!ready}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105 disabled:opacity-60 motion-reduce:transition-none focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
            aria-label="Join live workshop"
          >
            <Play className="w-9 h-9 ml-1" aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleStart}
            disabled={!ready}
            className="font-body text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground focus:outline-none focus-visible:underline"
          >
            Join live workshop
          </button>
        </div>
      ) : null}

      {/* Minimal sound control */}
      {!showOverlay ? (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-secondary/85 px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-secondary-foreground hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={muted ? "Unmute workshop audio" : "Mute workshop audio"}
        >
          {muted ? (
            <>
              <VolumeX className="w-4 h-4" aria-hidden /> Tap for sound
            </>
          ) : (
            <Volume2 className="w-4 h-4" aria-hidden />
          )}
        </button>
      ) : null}

      <span className="sr-only">{title}</span>
    </div>
  );
};

export default LivePlayer;
