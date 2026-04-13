import Image from "next/image";
import Nav from "./components/Nav";
import FadeIn from "./components/FadeIn";
import SlideViewer from "./components/SlideViewer";
import PhotoGrid from "./components/PhotoGrid";

/* ════════════════════════════
   BACKGROUND — hex dot lattice
════════════════════════════ */
function HexDots() {
  return (
    <svg aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.042 }}>
      <defs>
        <pattern id="hd" x="0" y="0" width="30" height="26" patternUnits="userSpaceOnUse">
          <circle cx="0"  cy="0"  r="1.3" fill="#1d1d1f" />
          <circle cx="30" cy="0"  r="1.3" fill="#1d1d1f" />
          <circle cx="15" cy="13" r="1.3" fill="#1d1d1f" />
          <circle cx="0"  cy="26" r="1.3" fill="#1d1d1f" />
          <circle cx="30" cy="26" r="1.3" fill="#1d1d1f" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hd)" />
    </svg>
  );
}

/* ════════════════════════════
   SHARED ATOMS
════════════════════════════ */
function ExtIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
      style={{ display: "inline-block", marginLeft: 2, marginBottom: 1 }}>
      <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 40 }}>
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
      <hr style={{ border: "none", borderTop: "1px solid #e8e8ed" }} />
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <span style={{ marginTop: 9, width: 5, height: 5, borderRadius: "50%", background: "#0071e3", flexShrink: 0, display: "block" }} />
      <p style={{ fontSize: 16, color: "#1d1d1f", lineHeight: 1.65 }}>{text}</p>
    </div>
  );
}

/* ════════════════════════════
   PAGE
════════════════════════════ */
export default function Home() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Nav />

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <HexDots />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 960, margin: "0 auto", padding: "80px 24px 64px", width: "100%" }}>
          <div className="hero-grid">

            {/* Photo */}
            <FadeIn delay={0.12}>
              <div style={{ borderRadius: 16, overflow: "hidden", width: 180, aspectRatio: "3/4", border: "1px solid #e8e8ed", boxShadow: "0 8px 32px rgba(0,0,0,0.09)" }}>
                <Image src="/cv_hongjs.png" alt="Jiseung Hong" width={520} height={693} priority
                  style={{ objectFit: "cover", objectPosition: "center 10%", width: "100%", height: "100%" }} />
              </div>
            </FadeIn>

            {/* Text */}
            <div>
              <FadeIn delay={0.05}>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 20 }}>
                  Computational Chemistry · Molecular ML
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <h1 style={{ fontSize: "clamp(52px, 7.5vw, 84px)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.035em", color: "#1d1d1f", marginBottom: 24 }}>
                  Jiseung<br />Hong
                </h1>
              </FadeIn>
              <FadeIn delay={0.22}>
                <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 400, marginBottom: 12 }}>
                  Undergraduate researcher at Dongguk University,
                </p>
                <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 400, marginBottom: 32 }}>
                  building tools at the intersection of quantum chemistry and machine learning.
                </p>
              </FadeIn>
              <FadeIn delay={0.29}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <a href="mailto:jiseung0603@gmail.com" className="btn-primary">Get in Touch</a>
                  <a href="/cv_hjs.pdf" download="CV_JiseungHong.pdf" className="btn-secondary">
                    CV ↓
                  </a>
                  <a href="https://github.com/Hongjiseung-ROK" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    GitHub <ExtIcon />
                  </a>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ══ EDUCATION ══ */}
      <section id="education" style={{ maxWidth: 960, margin: "0 auto", padding: "80px 24px 72px" }}>
        <FadeIn><Label>Education</Label></FadeIn>
        <FadeIn delay={0.05}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.01em", marginBottom: 4 }}>Dongguk University</h3>
              <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 18 }}>B.S. in Chemistry, Seoul</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.02em" }}>4.22 / 4.5</span>
                <span style={{ fontSize: 14, color: "#6e6e73" }}>GPA</span>
                <span style={{ fontSize: 14, color: "#c7c7cc" }}>·</span>
                <span style={{ fontSize: 14, color: "#6e6e73" }}>Major: 4.31</span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 14, color: "#6e6e73" }}>Mar. 2021 – present</p>
              <p style={{ fontSize: 13, color: "#8e8e93", marginTop: 2 }}>~6th semester</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ══ RESEARCH INTERESTS ══ */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "96px 24px" }}>
        <FadeIn><Label>Research Interests</Label></FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          <FadeIn delay={0.06}>
            <div style={{ background: "#f5f5f7", borderRadius: 18, padding: "28px 28px" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "#1d1d1f", marginBottom: 10 }}>Computational Chemistry</h3>
              <p style={{ fontSize: 15, color: "#6e6e73", lineHeight: 1.7 }}>
                How can we make quantum chemical calculations faster and more accessible? I am interested in automating DFT workflows and reducing the computational cost of molecular geometry optimization.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div style={{ background: "#f5f5f7", borderRadius: 18, padding: "28px 28px" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "#1d1d1f", marginBottom: 10 }}>Molecular Machine Learning</h3>
              <p style={{ fontSize: 15, color: "#6e6e73", lineHeight: 1.7 }}>
                How do we learn meaningful chemical representations from molecular structure and sequence? I am interested in models that bridge physics-based simulations and data-driven prediction.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      <Divider />

      {/* ══ RESEARCH ══ */}
      <section id="research" style={{ maxWidth: 960, margin: "0 auto", padding: "96px 24px" }}>
        <FadeIn><Label>Research</Label></FadeIn>

        <FadeIn delay={0.05}>
          {/* Title row */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", color: "#1d1d1f" }}>
              SMILES → Gaussian Automation &amp; Delta Learning
            </h2>
            <span style={{ fontSize: 13, color: "#8e8e93", flexShrink: 0, paddingTop: 4 }}>Mar. 2026</span>
          </div>
          {/* Meta */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "5px 18px", marginBottom: 32 }}>
            <span style={{ fontSize: 14, color: "#6e6e73" }}>Undergraduate Researcher · EMS Lab, DGU</span>
            <a href="https://github.com/Hongjiseung-ROK/rdkit-gaussian-pipeline" target="_blank" rel="noopener noreferrer" className="link-ext">
              pipeline <ExtIcon />
            </a>
            <a href="https://github.com/Hongjiseung-ROK/delta_opt_learning" target="_blank" rel="noopener noreferrer" className="link-ext">
              delta learning <ExtIcon />
            </a>
          </div>
        </FadeIn>

        {/* Bullets */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
          {[
            "A pipeline that converts SMILES strings into Gaussian 09 input files via RDKit conformer generation, enabling automated DFT geometry optimization and QST2 transition-state searches.",
            "A delta-learning module that trains a Gradient Boosting model on the MMFF→DFT residual, pre-correcting force-field geometries before they enter the DFT optimization cycle.",
          ].map((text, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.07}><Bullet text={text} /></FadeIn>
          ))}
        </div>

        {/* Slides */}
        <FadeIn delay={0.45}>
          <div style={{ marginTop: 44 }}>
            <SlideViewer />
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ══ PROJECTS ══ */}
      <section id="projects" style={{ maxWidth: 960, margin: "0 auto", padding: "96px 24px" }}>
        <FadeIn><Label>Academic Projects</Label></FadeIn>

        <FadeIn delay={0.05}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", color: "#1d1d1f" }}>
              Taxonomy-Aware ESM-2
            </h2>
            <span style={{ fontSize: 13, color: "#8e8e93", flexShrink: 0, paddingTop: 4 }}>Nov. 2025</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "5px 18px", marginBottom: 32 }}>
            <span style={{ fontSize: 14, color: "#6e6e73" }}>Algorithm Design &amp; Feature Engineering · Protein Function Prediction</span>
            <a href="https://github.com/Hongjiseung-ROK/taxonomy_aware_ESM2" target="_blank" rel="noopener noreferrer" className="link-ext">
              github <ExtIcon />
            </a>
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 32 }}>
          {[
            "Encoded NCBI taxonomy (7 ranks) and GO hierarchy as ML features; used GO ancestor propagation for biologically consistent labels.",
            "Fused taxonomy embeddings with ESM-2 via cross-attention; trained with Asymmetric Loss and LoRA.",
          ].map((text, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.07}><Bullet text={text} /></FadeIn>
          ))}
        </div>

        <FadeIn delay={0.28}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 32 }}>
            {["ESM-2 650M", "Cross-Attention", "LoRA", "Asymmetric Loss", "GO Propagation", "NCBI Taxonomy"].map((tag) => (
              <span key={tag} style={{ fontSize: 12, fontWeight: 500, color: "#1d1d1f", background: "#f5f5f7", border: "1px solid #e8e8ed", padding: "5px 12px", borderRadius: 9999 }}>
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.36}>
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e8e8ed" }}>
            <Image
              src="/presentation.jpg"
              alt="Presenting Taxonomy-Aware ESM-2"
              width={960}
              height={540}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ padding: "14px 20px", background: "#f5f5f7", borderTop: "1px solid #e8e8ed" }}>
              <p style={{ fontSize: 13, color: "#6e6e73" }}>
                Presenting Taxonomy-Aware ESM-2 at a seminar, Nov. 2025
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ══ AI PROJECT ══ */}
      <section id="ai-project" style={{ maxWidth: 960, margin: "0 auto", padding: "96px 24px" }}>
        <FadeIn><Label>AI Project</Label></FadeIn>

        <FadeIn delay={0.05}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", color: "#1d1d1f" }}>
              LABIT — Lab Management AI Agent
            </h2>
            <span style={{ fontSize: 13, color: "#8e8e93", flexShrink: 0, paddingTop: 4 }}>
              🏆 1st Place · Microsoft AI School
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "5px 18px", marginBottom: 32 }}>
            <span style={{ fontSize: 14, color: "#6e6e73" }}>SQL AI Agent · Azure OpenAI · FastAPI · Next.js</span>
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
          {[
            "Built a conversational SQL agent using LangChain and Azure OpenAI (GPT-4o) that lets lab members query and manage experimental data in natural language — no SQL knowledge required.",
            "The agent covers 7 lab domains: experiment records, reagent inventory, MSDS hazard lookup, cylinder fall detection, real-time sensor monitoring, and reagent disposal tracking.",
            "Designed a read-only guard on protected tables via SQLAlchemy event listeners, and implemented intent-based sampling profiles (retrieval / reasoning / creative) with automatic fallback on latency spikes.",
          ].map((text, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.07}><Bullet text={text} /></FadeIn>
          ))}
        </div>

        <FadeIn delay={0.32}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 36 }}>
            {["Azure OpenAI", "GPT-4o", "LangChain", "FastAPI", "Azure SQL", "Next.js", "Few-Shot Prompting", "RAG"].map((tag) => (
              <span key={tag} style={{ fontSize: 12, fontWeight: 500, color: "#1d1d1f", background: "#f5f5f7", border: "1px solid #e8e8ed", padding: "5px 12px", borderRadius: 9999 }}>
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Two photos side by side */}
        <FadeIn delay={0.42}>
          <PhotoGrid photos={[
            { src: "/labit_presentation.jpg", alt: "Presenting LABIT SQL AI Agent", caption: "Presenting the total pipeline at Microsoft AI School final", width: 800, height: 600 },
            { src: "/labit_award.jpg", alt: "1st place award at Microsoft AI School", caption: "1st place — Microsoft AI School Results Sharing Session", width: 800, height: 600 },
          ]} />
        </FadeIn>
      </section>

      <Divider />

      {/* ══ SKILLS ══ */}
      <section id="skills" style={{ maxWidth: 960, margin: "0 auto", padding: "96px 24px" }}>
        <FadeIn><Label>Skills</Label></FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {[
            { label: "Programming", tags: ["Python", "RDKit", "scikit-learn", "ASE", "PyTorch", "LaTeX"] },
            { label: "Simulation",  tags: ["Gaussian 09", "ORCA"] },
            { label: "Languages",   tags: ["Korean — native", "English — proficient"] },
          ].map((group, i) => (
            <FadeIn key={group.label} delay={i * 0.08}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px" }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#6e6e73", width: 96, flexShrink: 0 }}>{group.label}</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {group.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 13, fontWeight: 500, color: "#1d1d1f", background: "#f5f5f7", border: "1px solid #e8e8ed", padding: "5px 13px", borderRadius: 9999 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ borderTop: "1px solid #e8e8ed" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "#8e8e93" }}>© 2026 Jiseung Hong</p>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="mailto:jiseung0603@gmail.com" className="link-footer">jiseung0603@gmail.com</a>
            <a href="https://github.com/Hongjiseung-ROK" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", opacity: 0.5, transition: "opacity 0.2s" }}>
              <Image src="/github.png" alt="GitHub" width={20} height={20} style={{ display: "block" }} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
