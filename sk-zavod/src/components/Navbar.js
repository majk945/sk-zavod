import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
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