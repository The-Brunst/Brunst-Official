"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { RVLogo } from "../RVLogo";
import { RVBackground } from "../Backgrounds";
import { RVFooter } from "../Footer";

interface ContactProps {
  onNavigate: (hash: string) => void;
}

const subjects = [
  "Pitch",
  "Investment",
  "Media & PR",
  "Career",
  "General Inquiry",
];

export function Contact({ onNavigate }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    acceptPrivacy: false,
    subscribeNewsletter: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Required";
    if (!form.acceptPrivacy) errs.acceptPrivacy = "Required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1800);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(0, 20, 50, 0.55)",
    border: "1px solid rgba(64, 110, 233, 0.25)",
    borderRadius: "9999px",
    padding: "0.9rem 1.5rem",
    color: "rgba(255,255,255,0.8)",
    fontSize: "0.85rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      <RVBackground />

      {/* Logo */}
      <motion.div
        className="flex justify-center pt-12 pb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <RVLogo />
      </motion.div>

      {/* Content */}
      <div className="flex flex-col items-center px-6 pb-6 w-full">
        {/* Back button */}
        <motion.button
          onClick={() => onNavigate("")}
          className="rv-pill-btn mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ← BACK
        </motion.button>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-2"
          style={{ maxWidth: "800px" }}
        >
          <p className="rv-section-eyebrow" style={{ textTransform: "none", fontSize: "0.8rem" }}>
            A few words from us to you!
          </p>
          <h2 className="rv-section-title" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", marginTop: "0.5rem" }}>
            CONNECT US
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="rv-divider mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        />

        {/* Story Text block */}
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
            textAlign: "center",
            padding: "2rem 1.5rem",
            marginBottom: "2rem",
          }}
        >
          {[
            {
              text: "As much as we know you deserve the full-fledged market experience, we are here to show you what a passionate team can do. From the very first step, we promise you will see what sets us apart from the rest.",
              highlight: "full-fledged market experience,",
              highlight2: "sets us apart from the rest.",
            },
            {
              text: "Our only dream is to bring your business and brand closer to the world in a weirdly beautiful and wild way.",
              highlight: "bring your business and brand closer to the world in a weirdly beautiful and wild way.",
            },
            {
              text: "Together, let’s ace the race, my friend!",
              highlight: "ace the race, my friend!",
            },
          ].map((para, i) => {
            let renderedText: React.ReactNode = para.text;
            if (para.highlight) {
              const parts = para.text.split(para.highlight);
              renderedText = (
                <>
                  {parts[0]}
                  <span style={{ color: "#ffffff" }}>{para.highlight}</span>
                  {para.highlight2 ? (
                    <>
                      {parts[1].split(para.highlight2)[0]}
                      <span style={{ color: "#ffffff" }}>{para.highlight2}</span>
                      {parts[1].split(para.highlight2)[1]}
                    </>
                  ) : (
                    parts[1]
                  )}
                </>
              );
            }
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                style={{
                  fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
                  fontWeight: 700,
                  lineHeight: 1.75,
                  letterSpacing: "0.06em",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                {renderedText}
              </motion.p>
            );
          })}

          {/* Team / Community info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              marginTop: "1.5rem",
              borderTop: "1px solid rgba(64, 110, 233, 0.08)",
              paddingTop: "1.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#406ee9",
                marginBottom: "0.5rem",
              }}
            >
              Be part of Team Brunst
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              As a client, friend, author, sponsor, or as a team member!
            </p>
          </motion.div>
        </div>

        {/* Form header title: "Connect Now!" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            width: "100%",
            maxWidth: "520px",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          <h3
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#406ee9",
            }}
          >
            Connect Now!
          </h3>
        </motion.div>

        {/* Form container */}
        <div style={{ width: "100%", maxWidth: "520px" }}>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                noValidate
              >
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="NAME"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "#406ee9"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(64, 110, 233, 0.25)"; }}
                  />
                  {errors.name && (
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ff4444", letterSpacing: "0.1em", marginTop: "0.3rem", paddingLeft: "1.5rem" }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="EMAIL"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "#406ee9"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(64, 110, 233, 0.25)"; }}
                  />
                  {errors.email && (
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ff4444", letterSpacing: "0.1em", marginTop: "0.3rem", paddingLeft: "1.5rem" }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject dropdown */}
                <div style={{ position: "relative" }}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((o) => !o)}
                    style={{
                      ...inputStyle,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      borderColor: dropdownOpen ? "#406ee9" : "rgba(64, 110, 233, 0.25)",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ color: form.subject ? "rgba(255,255,255,0.8)" : "rgba(64, 110, 233, 0.35)" }}>
                      {form.subject ? form.subject.toUpperCase() : "— SUBJECT —"}
                    </span>
                    <ChevronDown
                      size={14}
                      style={{
                        color: "#406ee9",
                        transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: "absolute",
                          top: "calc(100% + 6px)",
                          left: 0,
                          right: 0,
                          background: "rgba(5, 15, 40, 0.97)",
                          border: "1px solid rgba(64, 110, 233, 0.25)",
                          borderRadius: "16px",
                          overflow: "hidden",
                          zIndex: 50,
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        {subjects.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => { setForm((p) => ({ ...p, subject: s })); setDropdownOpen(false); }}
                            style={{
                              width: "100%",
                              textAlign: "left",
                              padding: "0.75rem 1.5rem",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "rgba(255,255,255,0.65)",
                              transition: "color 0.2s, background 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#406ee9";
                              e.currentTarget.style.background = "rgba(64, 110, 233, 0.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            {s}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message label + textarea */}
                <div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#406ee9",
                      marginBottom: "0.5rem",
                      paddingLeft: "0.25rem",
                    }}
                  >
                    SEND US A MESSAGE
                  </p>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="MESSAGE"
                    rows={5}
                    style={{
                      ...inputStyle,
                      borderRadius: "16px",
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "#406ee9"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(64, 110, 233, 0.25)"; }}
                  />
                  {errors.message && (
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ff4444", letterSpacing: "0.1em", marginTop: "0.3rem", paddingLeft: "0.25rem" }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Checkboxes */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingLeft: "0.25rem" }}>
                  {/* Privacy */}
                  <label style={{ display: "flex", alignItems: "center", gap: "0.7rem", cursor: "pointer" }}>
                    <div
                      onClick={() => setForm((p) => ({ ...p, acceptPrivacy: !p.acceptPrivacy }))}
                      style={{
                        width: "18px", height: "18px",
                        border: `1.5px solid ${form.acceptPrivacy ? "#406ee9" : "rgba(64,110,233,0.35)"}`,
                        borderRadius: "50%",
                        background: form.acceptPrivacy ? "#406ee9" : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, cursor: "pointer", transition: "all 0.2s",
                      }}
                    >
                      {form.acceptPrivacy && <Check size={10} style={{ color: "#000" }} strokeWidth={3} />}
                    </div>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                      I ACCEPT THE{" "}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onNavigate("#privacy"); }}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "#406ee9", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "underline", padding: 0 }}
                      >
                        PRIVACY POLICY
                      </button>
                    </span>
                  </label>
                  {errors.acceptPrivacy && (
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ff4444", letterSpacing: "0.1em" }}>
                      {errors.acceptPrivacy}
                    </p>
                  )}

                  {/* Newsletter */}
                  <label style={{ display: "flex", alignItems: "center", gap: "0.7rem", cursor: "pointer" }}>
                    <div
                      onClick={() => setForm((p) => ({ ...p, subscribeNewsletter: !p.subscribeNewsletter }))}
                      style={{
                        width: "18px", height: "18px",
                        border: `1.5px solid ${form.subscribeNewsletter ? "#406ee9" : "rgba(64,110,233,0.35)"}`,
                        borderRadius: "50%",
                        background: form.subscribeNewsletter ? "#406ee9" : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, cursor: "pointer", transition: "all 0.2s",
                      }}
                    >
                      {form.subscribeNewsletter && <Check size={10} style={{ color: "#000" }} strokeWidth={3} />}
                    </div>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                      SUBSCRIBE TO NEWSLETTER
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rv-submit-btn"
                  >
                    {submitting ? (
                      <span style={{ display: "inline-block", width: "14px", height: "14px", border: "2px solid #406ee9", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                    ) : "SUBMIT"}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  gap: "1.2rem", textAlign: "center",
                  border: "1px solid rgba(64,110,233,0.2)", borderRadius: "16px",
                  padding: "3rem 2rem", background: "rgba(0,20,50,0.4)",
                }}
              >
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#406ee9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Check size={24} style={{ color: "#000" }} strokeWidth={2.5} />
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>
                  MESSAGE SENT
                </h3>
                <p style={{ fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.06em", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: "320px" }}>
                  Thank you for your message. We have received your inquiry and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(64,110,233,0.6)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Footer sits naturally here */}
        <div style={{ marginTop: "3.5rem", width: "100%" }}>
          <RVFooter onNavigate={onNavigate} />
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
