'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Music2, Pause, Play, Loader2 } from 'lucide-react';

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
const VIDEO_ID = '2Vv-BfVoq4g'; // "Perfect" - Ed Sheeran (Official Music Video)
const PLAYER_VOLUME = 40; // 0–100
// ──────────────────────────────────────────────────────────────────────────────

// Extend window to accommodate the YouTube IFrame API global
declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
    _ytPlayerCallbackQueue?: Array<() => void>;
  }
}

type PlayerState = 'idle' | 'loading' | 'ready' | 'playing' | 'paused' | 'buffering';

export const MusicPlayer: React.FC = () => {
  const playerRef = useRef<YT.Player | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>('idle');
  const [showTooltip, setShowTooltip] = useState(false);

  // ── Initialise the YT.Player once the API is loaded ──────────────────────
  const initPlayer = useCallback(() => {
    if (playerRef.current) return; // already initialised

    playerRef.current = new window.YT.Player('yt-audio-player', {
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 0,       // never autoplay — respect browser policy & visitors
        controls: 0,       // hide YouTube controls
        disablekb: 1,      // disable keyboard shortcuts
        fs: 0,             // disable fullscreen button
        iv_load_policy: 3, // hide video annotations
        loop: 1,           // loop the video
        playlist: VIDEO_ID, // required for loop on single video
        modestbranding: 1, // minimal YT branding
        rel: 0,            // don't suggest related videos
        origin: typeof window !== 'undefined' ? window.location.origin : '',
      },
      events: {
        onReady: (event: YT.PlayerEvent) => {
          event.target.setVolume(PLAYER_VOLUME);
          setPlayerState('ready');
        },
        onStateChange: (event: YT.OnStateChangeEvent) => {
          switch (event.data) {
            case window.YT.PlayerState.PLAYING:
              setPlayerState('playing');
              break;
            case window.YT.PlayerState.PAUSED:
              setPlayerState('paused');
              break;
            case window.YT.PlayerState.BUFFERING:
              setPlayerState('buffering');
              break;
            case window.YT.PlayerState.ENDED:
              // loop param + playlist handles auto-restart, but belt-and-suspenders:
              playerRef.current?.playVideo();
              break;
            default:
              break;
          }
        },
        onError: () => {
          // Reset gracefully if video is unavailable in region
          setPlayerState('ready');
        },
      },
    });
  }, []);

  // ── Load the YouTube IFrame API script once ───────────────────────────────
  useEffect(() => {
    // If YT is already fully loaded (e.g. hot reload), init immediately
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    // Queue our init callback for when the API becomes ready
    if (!window._ytPlayerCallbackQueue) {
      window._ytPlayerCallbackQueue = [];
    }
    window._ytPlayerCallbackQueue.push(initPlayer);

    // Attach the global callback the YT API expects
    window.onYouTubeIframeAPIReady = () => {
      window._ytPlayerCallbackQueue?.forEach((fn) => fn());
      window._ytPlayerCallbackQueue = [];
    };

    // Inject the script only once per page load
    if (!document.getElementById('yt-iframe-api-script')) {
      const tag = document.createElement('script');
      tag.id = 'yt-iframe-api-script';
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.async = true;
      document.head.appendChild(tag);
    }
  }, [initPlayer]);

  // ── Play / Pause toggle ───────────────────────────────────────────────────
  const handleToggle = () => {
    if (!playerRef.current) return;

    const state = playerRef.current.getPlayerState();

    if (state === window.YT.PlayerState.PLAYING) {
      playerRef.current.pauseVideo();
    } else {
      setPlayerState('buffering');
      playerRef.current.playVideo();
    }
  };

  // ── Derived display states ────────────────────────────────────────────────
  const isPlaying = playerState === 'playing';
  const isBuffering = playerState === 'buffering';
  const isDisabled = playerState === 'idle'; // API not yet ready

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/*
       * Hidden YouTube iframe — 1×1 px, positioned way off-screen.
       * Audio still streams; only the video element is invisible.
       * This is the standard YouTube-API-compliant way to play audio-only.
       */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          pointerEvents: 'none',
          opacity: 0,
        }}
      >
        {/* YT.Player mounts into this div */}
        <div id="yt-audio-player" />
      </div>

      {/* ── Floating Music Button ─────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* Tooltip — shown on hover */}
        {showTooltip && (
          <div className="animate-fadeIn bg-white/95 backdrop-blur-md border border-blush-100 rounded-2xl shadow-card-warm px-4 py-3 text-right min-w-max">
            <p className="text-xs font-semibold text-warm-900 leading-tight">
              {isPlaying ? '🎵 Sedang diputar' : '🎵 Klik untuk memutar'}
            </p>
            <p className="text-[11px] text-warm-700 mt-0.5 font-light">
              Perfect — Ed Sheeran
            </p>
          </div>
        )}

        <button
          onClick={handleToggle}
          disabled={isDisabled}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          aria-label={isPlaying ? 'Pause musik Perfect — Ed Sheeran' : 'Putar musik Perfect — Ed Sheeran'}
          className={`
            flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-full
            bg-white/90 backdrop-blur-md border shadow-lg
            hover:shadow-rose-glow hover:scale-105
            active:scale-95
            transition-all duration-300
            disabled:opacity-40 disabled:cursor-not-allowed
            ${isPlaying ? 'border-blush-300' : 'border-blush-100'}
          `}
        >
          {/* Left icon area */}
          <div className="flex items-center justify-center w-6 h-6">
            {isBuffering ? (
              <Loader2 className="w-5 h-5 text-blush-500 animate-spin" />
            ) : isPlaying ? (
              /* Animated equalizer bars */
              <div className="flex items-end gap-[2px] h-5 w-5" aria-hidden="true">
                <span className="eq-bar w-1.5 rounded-full bg-blush-500" style={{ '--delay': '0s' } as React.CSSProperties} />
                <span className="eq-bar w-1.5 rounded-full bg-blush-400" style={{ '--delay': '0.15s' } as React.CSSProperties} />
                <span className="eq-bar w-1.5 rounded-full bg-rosegold-gold" style={{ '--delay': '0.3s' } as React.CSSProperties} />
                <span className="eq-bar w-1.5 rounded-full bg-blush-300" style={{ '--delay': '0.1s' } as React.CSSProperties} />
              </div>
            ) : (
              <Music2 className="w-5 h-5 text-warm-700" />
            )}
          </div>

          {/* Label text */}
          <div className="flex flex-col items-start leading-none">
            <span className="text-xs font-semibold text-warm-900">
              {isPlaying ? 'Pause' : isBuffering ? 'Memuat…' : 'Putar Musik'}
            </span>
            <span className="text-[10px] text-warm-700 mt-0.5 font-light whitespace-nowrap">
              Perfect · Ed Sheeran
            </span>
          </div>

          {/* Play / Pause icon on the right */}
          <div className="ml-1">
            {isPlaying ? (
              <Pause className="w-4 h-4 text-blush-500 fill-current" />
            ) : (
              <Play className="w-4 h-4 text-warm-700 fill-current" />
            )}
          </div>
        </button>
      </div>
    </>
  );
};
