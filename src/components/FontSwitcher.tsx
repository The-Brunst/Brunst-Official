"use client";

import React, { useEffect, useState } from "react";

type FontOption = "baskerville" | "cormorant";

const fonts: { id: FontOption; label: string; sample: string }[] = [
  {
    id: "baskerville",
    label: "Libre Baskerville",
    sample: "Aa",
  },
  {
    id: "cormorant",
    label: "Cormorant Garamond",
    sample: "Aa",
  },
];

export function FontSwitcher() {
  const [active, setActive] = useState<FontOption>("baskerville");
  const [open, setOpen] = useState(false);

  // Apply font to html element on change
  useEffect(() => {
    document.documentElement.setAttribute("data-font", active);
  }, [active]);

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("bs-font") as FontOption | null;
    if (saved === "baskerville" || saved === "cormorant") {
      setActive(saved);
    }
  }, []);

  const handleSelect = (id: FontOption) => {
    setActive(id);
    localStorage.setItem("bs-font", id);
    setOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "0.5rem",
      }}
    >
      {/* Options panel */}
      {open && (
        <div
          style={{
            background: "rgba(5, 9, 26, 0.92)",
            border: "1px solid rgba(81,111,199,0.3)",
            borderRadius: "12px",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(81,111,199,0.2)",
          }}
        >
          {fonts.map((f) => (
            <button
              key={f.id}
              onClick={() => handleSelect(f.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.6rem 1rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background:
                  active === f.id
                    ? "rgba(81,111,199,0.25)"
                    : "transparent",
                transition: "background 0.2s",
                width: "100%",
                textAlign: "left",
              }}
              onMouseEnter={(e) =>
                active !== f.id &&
                (e.currentTarget.style.background = "rgba(81,111,199,0.1)")
              }
              onMouseLeave={(e) =>
                active !== f.id &&
                (e.currentTarget.style.background = "transparent")
              }
            >
              {/* Sample letter in the actual font */}
              <span
                style={{
                  fontFamily:
                    f.id === "cormorant"
                      ? "'Cormorant Garamond', Georgia, serif"
                      : "'Libre Baskerville', Georgia, serif",
                  fontSize: "1.5rem",
                  color: active === f.id ? "#516fc7" : "rgba(255,254,241,0.6)",
                  lineHeight: 1,
                  minWidth: "28px",
                  textAlign: "center",
                }}
              >
                {f.sample}
              </span>

              <div>
                <div
                  style={{
                    fontFamily:
                      f.id === "cormorant"
                        ? "'Cormorant Garamond', Georgia, serif"
                        : "'Libre Baskerville', Georgia, serif",
                    fontSize: "0.78rem",
                    color: active === f.id ? "#fffef1" : "rgba(255,254,241,0.6)",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f.label}
                </div>
                {active === f.id && (
                  <div
                    style={{
                      fontSize: "0.6rem",
                      color: "#516fc7",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginTop: "1px",
                    }}
                  >
                    Active
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        title="Change font"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: "1px solid rgba(81,111,199,0.4)",
          background: open
            ? "rgba(81,111,199,0.25)"
            : "rgba(5,9,26,0.85)",
          backdropFilter: "blur(12px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#516fc7",
          fontSize: "1rem",
          fontWeight: 700,
          transition: "all 0.2s",
          boxShadow: "0 4px 16px rgba(81,111,199,0.15)",
          fontFamily:
            active === "cormorant"
              ? "'Cormorant Garamond', Georgia, serif"
              : "'Libre Baskerville', Georgia, serif",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(81,111,199,0.8)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(81,111,199,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(81,111,199,0.4)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(81,111,199,0.15)";
        }}
      >
        Aa
      </button>
    </div>
  );
}
