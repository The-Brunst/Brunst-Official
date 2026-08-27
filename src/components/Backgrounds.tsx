"use client";

import React, { useState, useEffect, useRef } from "react";

interface DoubleBufferedVideoProps {
  src: string;
}

function DoubleBufferedVideo({ src }: DoubleBufferedVideoProps) {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const activeBufferRef = useRef<0 | 1>(0);
  const isTransitioningRef = useRef<boolean>(false);

  useEffect(() => {
    const v1 = videoRef1.current;
    const v2 = videoRef2.current;
    if (v1 && v2) {
      v1.src = src;
      v2.src = src;
      v1.load();
      v2.load();

      // Reset transitions, opacities, and filters
      v1.style.transition = "none";
      v2.style.transition = "none";
      v1.style.opacity = "1";
      v1.style.filter = "blur(0px)";
      v1.style.zIndex = "-1";
      v2.style.opacity = "0";
      v2.style.filter = "blur(0px)";
      v2.style.zIndex = "-2";

      v1.play().catch(() => {});
      v2.pause();
      v2.currentTime = 0;

      activeBufferRef.current = 0;
      isTransitioningRef.current = false;
    }
  }, [src]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const activeVideo = e.currentTarget;
    const v1 = videoRef1.current;
    const v2 = videoRef2.current;
    if (!v1 || !v2) return;

    const currentActiveBuffer = activeBufferRef.current;
    const isThisActive =
      (currentActiveBuffer === 0 && activeVideo === v1) ||
      (currentActiveBuffer === 1 && activeVideo === v2);

    if (!isThisActive || isTransitioningRef.current) return;

    const duration = activeVideo.duration;
    const currentTime = activeVideo.currentTime;

    if (duration && duration > 0) {
      const crossfadeDuration = 0.4; // Fast, subtle transition to avoid double-exposure ghosting
      if (duration - currentTime < crossfadeDuration) {
        isTransitioningRef.current = true;

        const nextVideo = currentActiveBuffer === 0 ? v2 : v1;
        const prevVideo = currentActiveBuffer === 0 ? v1 : v2;

        // Reset and prepare the next video
        nextVideo.currentTime = 0;
        nextVideo.style.transition = "none";
        nextVideo.style.opacity = "0";
        nextVideo.style.filter = "blur(8px)"; // Start incoming video blurry
        nextVideo.style.zIndex = "-1"; // Bring incoming video to front

        // Keep outgoing video visible at the bottom
        prevVideo.style.transition = "none";
        prevVideo.style.opacity = "1";
        prevVideo.style.filter = "blur(0px)"; // Start outgoing video sharp
        prevVideo.style.zIndex = "-2"; // Push outgoing video to back

        // Force a browser reflow to apply the z-index and opacity styles instantly
        nextVideo.offsetHeight;

        nextVideo.play().then(() => {
          // Smoothly fade in and sharpen the incoming video while blurring the outgoing video
          nextVideo.style.transition = `opacity ${crossfadeDuration}s ease-in-out, filter ${crossfadeDuration}s ease-in-out`;
          prevVideo.style.transition = `filter ${crossfadeDuration}s ease-in-out`;

          nextVideo.style.opacity = "1";
          nextVideo.style.filter = "blur(0px)"; // Sharpen to clear focus
          prevVideo.style.filter = "blur(8px)"; // Blur out

          // After the transition completes, pause and reset the outgoing video
          setTimeout(() => {
            prevVideo.pause();
            prevVideo.currentTime = 0;
            prevVideo.style.opacity = "0";
            prevVideo.style.filter = "blur(0px)"; // Reset filter for next loop
            activeBufferRef.current = currentActiveBuffer === 0 ? 1 : 0;
            isTransitioningRef.current = false;
          }, crossfadeDuration * 1000);
        }).catch((err) => {
          console.error("Failed to crossfade loop:", err);
          isTransitioningRef.current = false;
        });
      }
    }
  };

  return (
    <>
      <video
        ref={videoRef1}
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          objectPosition: "center",
          opacity: 1,
          filter: "blur(0px)",
          zIndex: -1,
        }}
      />
      <video
        ref={videoRef2}
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          objectPosition: "center",
          opacity: 0,
          filter: "blur(0px)",
          zIndex: -2,
        }}
      />
    </>
  );
}

// The main background used on ALL sections — official video background matching brunst.studios
export function RVBackground() {
  const [isLandscapeDesktop, setIsLandscapeDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px) and (orientation: landscape)");
    
    // Set initial state
    setIsLandscapeDesktop(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setIsLandscapeDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        overflow: "hidden",
        backgroundColor: "#05091a", // dark fallback background color matching the design
      }}
    >
      {/* Mobile/Portrait video background - loaded only on mobile/portrait screens */}
      {isLandscapeDesktop === false && (
        <DoubleBufferedVideo src="/web - mobile .mp4" />
      )}

      {/* Desktop/Landscape video background - loaded only on desktop/landscape screens */}
      {isLandscapeDesktop === true && (
        <DoubleBufferedVideo src="/Web - landscape 2.mp4" />
      )}

      {/* Dark blue overlay — derived from #516fc7 at very low lightness */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(45deg, rgba(5,9,26,0.85) 40%, rgba(9,15,40,0.88) 100%)",
          zIndex: 1,
        }}
      />

      {/* Noise texture overlay (from official site) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cfilter%20id%3D%22noise%22%3E%20%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%20%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.71875%200%22%20%2F%3E%20%3C%2Ffilter%3E%20%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E\")",
          backgroundSize: "512px",
          backgroundRepeat: "repeat",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// Alias exports for backward compat
export const AnimatedMeshBackground = RVBackground;
export const CyberGridBackground = RVBackground;
export const FloatingParticlesBackground = RVBackground;

