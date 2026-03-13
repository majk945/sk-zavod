import { useState, useEffect } from "react";

// ─── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(5,8,20,0.97)" : "transparent",
      borderBottom: scrolled ? "1px solid rgba(220,38,38,0.3)" : "none",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      transition: "all 0.4s ease", padding: "1rem 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: "linear-gradient(135deg,#dc2626,#7f1d1d)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, boxShadow: "0 0 20px rgba(220,38,38,0.5)",
        }}>⚽</div>
        <div>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.3rem", letterSpacing: "3px", color: "#fff", lineHeight: 1 }}>FC VULKAN</div>
          <div style={{ fontSize: "0.5rem", letterSpacing: "4px", color: "#dc2626", textTransform: "uppercase" }}>EST. 1923</div>
        </div>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {["Club", "Squad", "Fixtures", "Statistics", "News"].map(item => (
          <a key={item} href="#" style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.85rem", letterSpacing: "2px",
            textTransform: "uppercase", fontWeight: 600, color: "rgba(255,255,255,0.6)",
            textDecoration: "none", padding: "6px 12px", transition: "color 0.2s",
          }}
            onMouseEnter={e => e.target.style.color = "#dc2626"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
          >{item}</a>
        ))}
        <a href="#squad" style={{
          fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "2px", textTransform: "uppercase",
          fontWeight: 700, fontSize: "0.8rem", background: "linear-gradient(135deg,#dc2626,#b91c1c)",
          color: "#fff", textDecoration: "none", padding: "8px 20px", borderRadius: 2,
          boxShadow: "0 4px 15px rgba(220,38,38,0.4)", marginLeft: 8,
        }}>Squad Builder</a>
      </div>
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────────
const slides = [
  { tag: "Liga 2024/25", lines: ["HUNGER", "FOR", "GLORY"], hollow: 1, sub: "Champions do not wait for opportunities. They create them.", cta: "Watch Highlights" },
  { tag: "Next Match · Sat 15.03", lines: ["VULKAN", "VS", "SLAVIA"], hollow: 1, sub: "Home ground. 18:00. Be part of the thunder.", cta: "Get Tickets" },
  { tag: "Transfer Window", lines: ["NEW", "ERA", "BEGINS"], hollow: 1, sub: "Three world-class signings. One unstoppable squad.", cta: "Meet the Squad" },
];

function Hero() {
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => { setActive(p => (p + 1) % slides.length); setKey(k => k + 1); }, 5000);
    return () => clearInterval(id);
  }, []);

  const s = slides[active];

  return (
    <section style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      background: "linear-gradient(160deg,#050814 0%,#0a0f1e 50%,#0f0505 100%)",
      display: "flex", alignItems: "center",
    }}>
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(220,38,38,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(220,38,38,0.04) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Watermark number */}
      <div style={{
        position: "absolute", right: "-5%", top: "50%", transform: "translateY(-50%)",
        fontFamily: "'Bebas Neue',sans-serif", fontSize: "32vw", color: "rgba(220,38,38,0.04)",
        lineHeight: 1, userSelect: "none", letterSpacing: "-2vw",
      }}>{active + 1}</div>

      {/* Glow */}
      <div style={{
        position: "absolute", width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(220,38,38,0.1) 0%,transparent 70%)",
        top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        animation: "glowPulse 4s ease-in-out infinite",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", zIndex: 10, position: "relative", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 40, minHeight: "100vh" }}>
          {/* Left content */}
          <div style={{ flex: 1 }}>
            {/* Tag */}
            <div key={`tag-${key}`} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.4)",
              borderRadius: 2, padding: "6px 14px", marginBottom: 28,
              animation: "fadeUp 0.6s ease forwards", opacity: 0,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#dc2626", boxShadow: "0 0 8px #dc2626", animation: "blink 1.5s ease infinite" }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", color: "#dc2626", fontWeight: 700 }}>{s.tag}</span>
            </div>

            {/* Title */}
            <h1 key={`h-${key}`} style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(5rem,11vw,9.5rem)", lineHeight: 0.88,
              letterSpacing: "2px", margin: "0 0 28px",
              animation: "fadeUp 0.7s 0.1s ease forwards", opacity: 0,
            }}>
              {s.lines.map((line, i) => (
                <span key={i} style={{
                  display: "block",
                  color: i === s.hollow ? "transparent" : "#fff",
                  WebkitTextStroke: i === s.hollow ? "2px #fff" : "0",
                }}>{line}</span>
              ))}
            </h1>

            {/* Sub */}
            <p key={`sub-${key}`} style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.05rem",
              color: "rgba(255,255,255,0.45)", letterSpacing: "0.5px", maxWidth: 400,
              marginBottom: 40, animation: "fadeUp 0.7s 0.2s ease forwards", opacity: 0,
            }}>{s.sub}</p>

            {/* CTAs */}
            <div key={`cta-${key}`} style={{ display: "flex", gap: 12, flexWrap: "wrap", animation: "fadeUp 0.7s 0.3s ease forwards", opacity: 0 }}>
              <button style={{
                background: "linear-gradient(135deg,#dc2626,#b91c1c)", color: "#fff",
                fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.95rem", letterSpacing: "3px",
                textTransform: "uppercase", fontWeight: 700, border: "none", borderRadius: 2,
                padding: "14px 36px", cursor: "pointer", boxShadow: "0 8px 30px rgba(220,38,38,0.4)",
              }}>{s.cta}</button>
              <button style={{
                background: "transparent", color: "#fff",
                fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.95rem", letterSpacing: "3px",
                textTransform: "uppercase", fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.25)", borderRadius: 2, padding: "14px 36px", cursor: "pointer",
              }}>Our Story</button>
            </div>
          </div>

          {/* Stats sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 220 }}>
            {[{ label: "Season Wins", value: "18", icon: "🏆" }, { label: "Goals Scored", value: "67", icon: "⚽" }, { label: "League Pos.", value: "#1", icon: "📊" }].map((stat, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(220,38,38,0.2)",
                borderLeft: "3px solid #dc2626", borderRadius: 4, padding: "18px 22px",
                display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(10px)",
              }}>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.62rem", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>{stat.label}</div>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.5rem", color: "#fff", lineHeight: 1.1 }}>{stat.value}</div>
                </div>
                <div style={{ fontSize: "1.8rem", opacity: 0.25 }}>{stat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => { setActive(i); setKey(k => k + 1); }} style={{
            width: i === active ? 28 : 7, height: 7, borderRadius: 4, padding: 0,
            background: i === active ? "#dc2626" : "rgba(255,255,255,0.2)", border: "none",
            cursor: "pointer", transition: "all 0.3s",
          }} />
        ))}
      </div>
    </section>
  );
}

// ─── NEXT MATCH ────────────────────────────────────────────────────────────────
function useCountdown(target) {
  const [t, setT] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return setT({ d: 0, h: 0, m: 0, s: 0 });
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function TimeBox({ v, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", color: "#fff",
        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(220,38,38,0.3)",
        borderRadius: 4, padding: "10px 14px", minWidth: 64, lineHeight: 1,
      }}>{String(v).padStart(2, "0")}</div>
      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.6rem", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginTop: 5 }}>{label}</div>
    </div>
  );
}

function NextMatch() {
  const cd = useCountdown("2026-03-15T18:00:00");

  return (
    <section style={{ background: "linear-gradient(135deg,#050814,#0a0f1e)", borderTop: "1px solid rgba(220,38,38,0.15)", borderBottom: "1px solid rgba(220,38,38,0.15)", padding: "80px 2rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Bebas Neue',sans-serif", fontSize: "18vw", color: "rgba(220,38,38,0.025)", whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none" }}>MATCH DAY</div>

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.7rem", letterSpacing: "5px", color: "#dc2626", textTransform: "uppercase", fontWeight: 700 }}>● Live Countdown</span>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.5rem", color: "#fff", letterSpacing: "3px", margin: "8px 0 0" }}>Next Match</h2>
        </div>

        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 8, padding: "40px 32px", backdropFilter: "blur(20px)" }}>
          {/* Teams */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginBottom: 40 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#dc2626,#7f1d1d)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 10px", boxShadow: "0 0 30px rgba(220,38,38,0.4)" }}>⚽</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.6rem", color: "#fff", letterSpacing: "2px" }}>FC Vulkan</div>
              <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", letterSpacing: "2px" }}>HOME</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.2rem", color: "#dc2626", letterSpacing: "4px" }}>VS</div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "2px", color: "rgba(255,255,255,0.3)" }}>Sat 15.03 · 18:00</div>
              <div style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.2)", marginTop: 2 }}>Vulkan Štadión</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 10px" }}>🛡️</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.6rem", color: "#fff", letterSpacing: "2px" }}>SK Slavia</div>
              <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", letterSpacing: "2px" }}>AWAY</div>
            </div>
          </div>

          {/* Countdown */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <TimeBox v={cd.d} label="Days" />
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.5rem", color: "rgba(220,38,38,0.4)", lineHeight: 1.2 }}>:</div>
            <TimeBox v={cd.h} label="Hours" />
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.5rem", color: "rgba(220,38,38,0.4)", lineHeight: 1.2 }}>:</div>
            <TimeBox v={cd.m} label="Min" />
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.5rem", color: "rgba(220,38,38,0.4)", lineHeight: 1.2 }}>:</div>
            <TimeBox v={cd.s} label="Sec" />
          </div>

          <div style={{ textAlign: "center" }}>
            <button style={{ background: "linear-gradient(135deg,#dc2626,#b91c1c)", color: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.9rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, border: "none", borderRadius: 2, padding: "12px 40px", cursor: "pointer", boxShadow: "0 4px 20px rgba(220,38,38,0.4)" }}>Buy Tickets</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURED PLAYERS ──────────────────────────────────────────────────────────
const players = [
  { number: 9, name: "Marek Hamšík", position: "Forward", nat: "🇸🇰 Slovak", goals: 24, assists: 11, matches: 28, rating: 9.2, color: "#dc2626" },
  { number: 10, name: "Tomáš Šuk", position: "Midfielder", nat: "🇨🇿 Czech", goals: 8, assists: 19, matches: 30, rating: 8.8, color: "#f59e0b" },
  { number: 1, name: "Ján Mucha", position: "Goalkeeper", nat: "🇸🇰 Slovak", goals: 0, assists: 0, matches: 30, rating: 8.5, color: "#10b981" },
  { number: 5, name: "Viktor Ďuriš", position: "Defender", nat: "🇸🇰 Slovak", goals: 3, assists: 5, matches: 27, rating: 8.1, color: "#6366f1" },
];

function FeaturedPlayers() {
  const [idx, setIdx] = useState(0);
  const p = players[idx];

  return (
    <section style={{ background: "#050814", padding: "100px 2rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -40, right: -20, fontFamily: "'Bebas Neue',sans-serif", fontSize: "22vw", color: "rgba(255,255,255,0.012)", lineHeight: 1, userSelect: "none" }}>SQUAD</div>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.7rem", letterSpacing: "5px", color: "#dc2626", textTransform: "uppercase", fontWeight: 700 }}>Season 2024/25</span>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", color: "#fff", letterSpacing: "3px", margin: "6px 0 0", lineHeight: 1 }}>Featured Players</h2>
          </div>
          <a href="#" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.8rem", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>View Full Squad →</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24 }}>
          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {players.map((pl, i) => (
              <div key={i} onClick={() => setIdx(i)} style={{
                background: idx === i ? `${pl.color}12` : "rgba(255,255,255,0.02)",
                border: `1px solid ${idx === i ? pl.color + "60" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 6, padding: "22px", cursor: "pointer",
                transform: idx === i ? "translateY(-4px)" : "none",
                boxShadow: idx === i ? `0 16px 40px ${pl.color}25` : "none",
                transition: "all 0.3s ease",
              }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "3.5rem", color: idx === i ? pl.color : "rgba(255,255,255,0.07)", lineHeight: 1, transition: "color 0.3s" }}>{String(pl.number).padStart(2, "0")}</div>
                <div style={{ display: "inline-block", background: idx === i ? pl.color + "20" : "rgba(255,255,255,0.05)", border: `1px solid ${idx === i ? pl.color + "40" : "rgba(255,255,255,0.08)"}`, borderRadius: 2, padding: "2px 7px", fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.57rem", letterSpacing: "2px", textTransform: "uppercase", color: idx === i ? pl.color : "rgba(255,255,255,0.3)", marginBottom: 6, transition: "all 0.3s" }}>{pl.position}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#fff", letterSpacing: "0.5px" }}>{pl.name}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>{pl.nat}</div>
                <div style={{ display: "flex", gap: 16 }}>
                  {[["G", pl.goals], ["A", pl.assists], ["MP", pl.matches]].map(([l, v]) => (
                    <div key={l} style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.3rem", color: idx === i ? pl.color : "#fff", lineHeight: 1, transition: "color 0.3s" }}>{v}</div>
                      <div style={{ fontSize: "0.5rem", letterSpacing: "2px", color: "rgba(255,255,255,0.22)" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div style={{
            background: `linear-gradient(135deg,${p.color}12,rgba(255,255,255,0.01))`,
            border: `1px solid ${p.color}35`, borderRadius: 8, padding: "30px", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", right: -10, top: -20, fontFamily: "'Bebas Neue',sans-serif", fontSize: "11rem", color: p.color + "10", lineHeight: 1, userSelect: "none" }}>{String(p.number).padStart(2, "0")}</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "inline-block", background: p.color + "20", border: `1px solid ${p.color}40`, borderRadius: 2, padding: "2px 9px", fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.6rem", letterSpacing: "3px", textTransform: "uppercase", color: p.color, marginBottom: 10 }}>{p.position}</div>
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2rem", color: "#fff", letterSpacing: "2px", lineHeight: 1.1, marginBottom: 3 }}>{p.name}</h3>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.28)", marginBottom: 24 }}>{p.nat}</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 24 }}>
                <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "3.2rem", color: p.color, lineHeight: 1 }}>{p.rating}</span>
                <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.25)", letterSpacing: "2px" }}>/ 10 RATING</span>
              </div>
              {[["Goals", p.goals, 30], ["Assists", p.assists, 25], ["Matches", p.matches, 34]].map(([l, v, max]) => (
                <div key={l} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{l}</span>
                    <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: "0.85rem" }}>{v}</span>
                  </div>
                  <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${(v / max) * 100}%`, background: `linear-gradient(90deg,${p.color},${p.color}70)`, borderRadius: 2, transition: "width 0.8s ease" }} />
                  </div>
                </div>
              ))}
              <button style={{ width: "100%", marginTop: 20, background: p.color, color: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.82rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, border: "none", borderRadius: 2, padding: "10px", cursor: "pointer" }}>Full Profile</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES ──────────────────────────────────────────────────────────────────
const features = [
  { icon: "🧩", title: "Squad Builder", desc: "Drag & drop your dream 11. Choose formations and export your lineup.", tag: "Interactive", color: "#dc2626" },
  { icon: "📊", title: "Player Stats", desc: "Deep analytics for every player — goals, assists, heatmaps.", tag: "Analytics", color: "#f59e0b" },
  { icon: "📅", title: "Fixtures", desc: "Full season schedule with results and upcoming matches.", tag: "Schedule", color: "#10b981" },
  { icon: "🏆", title: "League Table", desc: "Live standings, points, goal difference and head-to-head.", tag: "Standings", color: "#6366f1" },
];

function Features() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: "#07090f", padding: "100px 2rem", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.7rem", letterSpacing: "5px", color: "#dc2626", textTransform: "uppercase", fontWeight: 700 }}>Explore the Club</span>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", color: "#fff", letterSpacing: "3px", marginTop: 8 }}>Everything You Need</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: hovered === i ? `${f.color}08` : "rgba(255,255,255,0.02)",
              border: `1px solid ${hovered === i ? f.color + "50" : "rgba(255,255,255,0.06)"}`,
              borderRadius: 8, padding: "28px 22px",
              transform: hovered === i ? "translateY(-6px)" : "none",
              boxShadow: hovered === i ? `0 20px 50px ${f.color}20` : "none",
              transition: "all 0.3s ease", cursor: "pointer", position: "relative", overflow: "hidden",
            }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${f.color},transparent)` }} />
              <div style={{ display: "inline-block", background: f.color + "15", border: `1px solid ${f.color}30`, borderRadius: 2, padding: "2px 8px", fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.57rem", letterSpacing: "2px", textTransform: "uppercase", color: f.color, marginBottom: 18 }}>{f.tag}</div>
              <div style={{ fontSize: "2.2rem", marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.5rem", color: "#fff", letterSpacing: "2px", marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.32)", lineHeight: 1.6, marginBottom: 20 }}>{f.desc}</p>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", color: f.color, fontWeight: 700 }}>Explore →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── RESULTS & NEWS ────────────────────────────────────────────────────────────
const results = [
  { home: "FC Vulkan", hS: 3, away: "Sparta", aS: 1, date: "09.03", comp: "Liga" },
  { home: "Slovan", hS: 0, away: "FC Vulkan", aS: 2, date: "02.03", comp: "Liga" },
  { home: "FC Vulkan", hS: 1, away: "Trenčín", aS: 1, date: "23.02", comp: "Cup" },
];

const news = [
  { tag: "Transfer", title: "Vulkan Signs World-Class Striker from La Liga", date: "10 Mar 2026", read: "3 min read", color: "#f59e0b" },
  { tag: "Match Report", title: "Dominant 3-1 Victory Keeps Us Top of the Table", date: "09 Mar 2026", read: "5 min read", color: "#dc2626" },
  { tag: "Academy", title: "Youth Star Signs First Professional Contract", date: "07 Mar 2026", read: "2 min read", color: "#10b981" },
];

function ResultsAndNews() {
  return (
    <section style={{ background: "#070911", padding: "100px 2rem", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60 }}>
        {/* Results */}
        <div>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.68rem", letterSpacing: "4px", color: "#dc2626", textTransform: "uppercase", fontWeight: 700 }}>2024/25 Season</span>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.2rem", color: "#fff", letterSpacing: "3px", margin: "6px 0 24px" }}>Recent Results</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {results.map((r, i) => {
              const vulkanHome = r.home === "FC Vulkan";
              const won = vulkanHome ? r.hS > r.aS : r.aS > r.hS;
              const draw = r.hS === r.aS;
              const outcome = draw ? "D" : won ? "W" : "L";
              const oc = draw ? "#f59e0b" : won ? "#10b981" : "#dc2626";
              return (
                <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: oc + "20", border: `1px solid ${oc}50`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue',sans-serif", fontSize: "0.85rem", color: oc, flexShrink: 0 }}>{outcome}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.9rem", color: "#fff", fontWeight: 600 }}>{r.home} <span style={{ color: "rgba(255,255,255,0.25)" }}>vs</span> {r.away}</div>
                    <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", letterSpacing: "2px", marginTop: 2 }}>{r.date} · {r.comp}</div>
                  </div>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.3rem", color: "#fff", letterSpacing: "2px" }}>{r.hS} – {r.aS}</div>
                </div>
              );
            })}
          </div>
          {/* Form strip */}
          <div style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 6, padding: "18px 20px", marginTop: 20, display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.8rem", color: "#dc2626", lineHeight: 1 }}>#1</div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>League Leaders</div>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)" }}>30 MP · 67 pts · +38 GD</div>
            </div>
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div style={{ display: "flex", gap: 3 }}>
                {["W","W","D","W","W"].map((r, i) => (
                  <div key={i} style={{ width: 18, height: 18, borderRadius: 2, background: r === "W" ? "#10b981" : r === "D" ? "#f59e0b" : "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.48rem", color: "#fff", fontWeight: 700 }}>{r}</div>
                ))}
              </div>
              <div style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.22)", marginTop: 3, letterSpacing: "1px" }}>LAST 5</div>
            </div>
          </div>
        </div>

        {/* News */}
        <div>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.68rem", letterSpacing: "4px", color: "#dc2626", textTransform: "uppercase", fontWeight: 700 }}>Latest Updates</span>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.2rem", color: "#fff", letterSpacing: "3px", margin: "6px 0 24px" }}>Club News</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {news.map((n, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6, padding: i === 0 ? "24px" : "18px", cursor: "pointer", transition: "all 0.2s", borderLeft: i === 0 ? `3px solid ${n.color}` : "none" }}>
                <div style={{ display: "inline-block", background: n.color + "18", border: `1px solid ${n.color}35`, borderRadius: 2, padding: "2px 8px", fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.57rem", letterSpacing: "2px", textTransform: "uppercase", color: n.color, marginBottom: 10 }}>{n.tag}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: i === 0 ? "1.15rem" : "0.95rem", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 8 }}>{n.title}</div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.22)", letterSpacing: "1px" }}>{n.date} · {n.read}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#030509", borderTop: "1px solid rgba(220,38,38,0.15)", padding: "60px 2rem 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#dc2626,#7f1d1d)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>⚽</div>
              <div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.2rem", letterSpacing: "3px", color: "#fff", lineHeight: 1 }}>FC VULKAN</div>
                <div style={{ fontSize: "0.5rem", letterSpacing: "4px", color: "#dc2626" }}>EST. 1923</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.28)", lineHeight: 1.7, maxWidth: 260 }}>100 years of passion, pride, and pursuit of excellence. FC Vulkan — where legends are forged.</p>
          </div>
          {[{ t: "Club", l: ["About Us", "History", "Stadium", "Academy"] }, { t: "Team", l: ["Squad", "Fixtures", "Results", "Statistics"] }, { t: "Fan Zone", l: ["Squad Builder", "Tickets", "Shop", "News"] }].map(col => (
            <div key={col.t}>
              <h6 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "0.95rem", letterSpacing: "3px", color: "#fff", marginBottom: 14 }}>{col.t}</h6>
              {col.l.map(l => <div key={l} style={{ marginBottom: 7 }}><a href="#" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.27)", textDecoration: "none", letterSpacing: "1px" }}>{l}</a></div>)}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.18)", letterSpacing: "1px" }}>© 2026 FC Vulkan. All rights reserved.</div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy", "Terms", "Cookies"].map(l => <a key={l} href="#" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.18)", textDecoration: "none", letterSpacing: "1px" }}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #050814; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes glowPulse {
          0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%,-50%) scale(1.2); opacity: 0.6; }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #050814; }
        ::-webkit-scrollbar-thumb { background: #dc2626; border-radius: 3px; }
      `}</style>
      <div style={{ background: "#050814", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <NextMatch />
        <FeaturedPlayers />
        <Features />
        <ResultsAndNews />
        <Footer />
      </div>
    </>
  );
}
