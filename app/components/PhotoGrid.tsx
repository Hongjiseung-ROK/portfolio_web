"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() =>
    setOpen((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)), [photos.length]);
  const next = useCallback(() =>
    setOpen((i) => (i === null ? null : (i + 1) % photos.length)), [photos.length]);

  useEffect(() => {
    if (open === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = open !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            aria-label={`View: ${photo.alt}`}
            style={{ background: "none", border: "none", padding: 0, textAlign: "left", cursor: "zoom-in" }}
          >
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e8e8ed" }}>
              {/* Fixed aspect-ratio wrapper — no overlap possible */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%", transition: "transform 0.3s" }}
                  sizes="(max-width: 600px) 100vw, 50vw"
                />
              </div>
              <div style={{ padding: "12px 16px", background: "#f5f5f7", borderTop: "1px solid #e8e8ed" }}>
                <p style={{ fontSize: 13, color: "#6e6e73", lineHeight: 1.5 }}>{photo.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

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
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "min(90vw, 900px)",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
                <Image
                  src={photos[open].src}
                  alt={photos[open].alt}
                  fill
                  style={{ objectFit: "contain", background: "#111" }}
                  sizes="90vw"
                  priority
                />
              </div>
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                padding: "24px 20px 14px",
                display: "flex", justifyContent: "space-between", alignItems: "flex-end",
              }}>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
                  {photos[open].caption}
                </p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                  {open + 1} / {photos.length}
                </p>
              </div>
            </motion.div>

            {/* Prev */}
            {photos.length > 1 && (
              <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous"
                style={{ position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.12)", border: "none", cursor: "pointer", color: "#fff", width: 44, height: 44, borderRadius: "50%", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                ‹
              </button>
            )}

            {/* Next */}
            {photos.length > 1 && (
              <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next"
                style={{ position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.12)", border: "none", cursor: "pointer", color: "#fff", width: 44, height: 44, borderRadius: "50%", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                ›
              </button>
            )}

            {/* Close */}
            <button onClick={(e) => { e.stopPropagation(); close(); }} aria-label="Close"
              style={{ position: "fixed", top: 20, right: 20, background: "rgba(255,255,255,0.12)", border: "none", cursor: "pointer", color: "#fff", width: 36, height: 36, borderRadius: "50%", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
