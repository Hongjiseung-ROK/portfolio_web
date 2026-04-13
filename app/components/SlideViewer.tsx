"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  { src: "/slides/slide-02.png", alt: "Delta Opt Learning — Title" },
  { src: "/slides/slide-09.png", alt: "Motivation & Methodology" },
  { src: "/slides/slide-17.png", alt: "Results — Bond Length Correction" },
  { src: "/slides/slide-20.png", alt: "Optimization Pipeline Visualization" },
];

export default function SlideViewer() {
  const [open, setOpen] = useState<number | null>(null);

  const prev = useCallback(() => {
    setOpen((i) => (i === null ? null : (i - 1 + SLIDES.length) % SLIDES.length));
  }, []);

  const next = useCallback(() => {
    setOpen((i) => (i === null ? null : (i + 1) % SLIDES.length));
  }, []);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, prev, next, close]);

  // lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Slide stack */}
      <div className="slide-stack">
        {SLIDES.map((slide, i) => (
          <button
            key={i}
            className="slide-stack-item slide-stack-btn"
            onClick={() => setOpen(i)}
            aria-label={`Open slide: ${slide.alt}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={960}
              height={540}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </button>
        ))}
      </div>
      <p style={{ textAlign: "center", fontSize: 12, color: "#8e8e93" }}>
        Selected slides from the EMS Lab internal presentation · click to enlarge
      </p>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            style={{
              position: "fixed", inset: 0, zIndex: 1000,
              background: "rgba(0,0,0,0.82)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {/* Slide card */}
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "min(90vw, 1100px)",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src={SLIDES[open].src}
                alt={SLIDES[open].alt}
                width={960}
                height={540}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />

              {/* Caption bar */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                padding: "24px 20px 14px",
                display: "flex", justifyContent: "space-between", alignItems: "flex-end",
              }}>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
                  {SLIDES[open].alt}
                </p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                  {open + 1} / {SLIDES.length}
                </p>
              </div>
            </motion.div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous slide"
              style={{
                position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.12)", border: "none", cursor: "pointer",
                color: "#fff", width: 44, height: 44, borderRadius: "50%",
                fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(4px)", transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next slide"
              style={{
                position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.12)", border: "none", cursor: "pointer",
                color: "#fff", width: 44, height: 44, borderRadius: "50%",
                fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(4px)", transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >
              ›
            </button>

            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Close"
              style={{
                position: "fixed", top: 20, right: 20,
                background: "rgba(255,255,255,0.12)", border: "none", cursor: "pointer",
                color: "#fff", width: 36, height: 36, borderRadius: "50%",
                fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(4px)", transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >
              ×
            </button>

            {/* Dot indicators */}
            <div style={{
              position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
              display: "flex", gap: 8,
            }}>
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setOpen(i); }}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: i === open ? 20 : 7, height: 7,
                    borderRadius: 9999, border: "none", cursor: "pointer",
                    background: i === open ? "#fff" : "rgba(255,255,255,0.35)",
                    transition: "width 0.25s, background 0.2s",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
