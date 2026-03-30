"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus first input on open
  useEffect(() => {
    if (isOpen && !success) {
      setTimeout(() => nameRef.current?.focus(), 100);
    }
  }, [isOpen, success]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handler);
    }
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  function resetForm() {
    setName("");
    setEmail("");
    setCompany("");
    setRole("");
    setMessage("");
    setNameError(false);
    setEmailError(false);
    setLoading(false);
    setSuccess(false);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let hasError = false;

    if (!name.trim()) {
      setNameError(true);
      hasError = true;
    }
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setEmailError(true);
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || undefined,
          role: role || undefined,
          message: message.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence onExitComplete={resetForm}>
      {isOpen && (
        <motion.div
          className="modal-overlay active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="modal-backdrop" onClick={onClose} />

          {/* Container */}
          <motion.div
            className="modal-container"
            initial={{ y: 20, scale: 0.97 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transform: "none" }}
          >
            {/* Header */}
            <div className="modal-header">
              <h2>Join the Waitlist</h2>
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            {!success ? (
              <>
                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    <div className="modal-form-grid">
                      {/* Name */}
                      <div className="form-group">
                        <label htmlFor="wl-name">Full Name *</label>
                        <input
                          ref={nameRef}
                          id="wl-name"
                          type="text"
                          placeholder="Jane Doe"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            setNameError(false);
                          }}
                          style={
                            nameError
                              ? { borderColor: "#ff4444" }
                              : undefined
                          }
                        />
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="wl-email">Work Email *</label>
                        <input
                          id="wl-email"
                          type="email"
                          placeholder="jane@company.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError(false);
                          }}
                          style={
                            emailError
                              ? { borderColor: "#ff4444" }
                              : undefined
                          }
                        />
                      </div>

                      {/* Company */}
                      <div className="form-group">
                        <label htmlFor="wl-company">Company</label>
                        <input
                          id="wl-company"
                          type="text"
                          placeholder="Acme Corp"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>

                      {/* Role */}
                      <div className="form-group">
                        <label htmlFor="wl-role">Role</label>
                        <select
                          id="wl-role"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option value="">Select your role</option>
                          <option value="Security Engineer">
                            Security Engineer
                          </option>
                          <option value="Penetration Tester">
                            Penetration Tester
                          </option>
                          <option value="DevSecOps Engineer">
                            DevSecOps Engineer
                          </option>
                          <option value="CISO / Security Lead">
                            CISO / Security Lead
                          </option>
                          <option value="Software Developer">
                            Software Developer
                          </option>
                          <option value="Security Consultant">
                            Security Consultant
                          </option>
                          <option value="Security Researcher">
                            Security Researcher
                          </option>
                          <option value="Student / Academic">
                            Student / Academic
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="form-group full-width">
                        <label htmlFor="wl-message">Message</label>
                        <textarea
                          id="wl-message"
                          placeholder="What are you most excited about? Any specific use case?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="submit"
                      className={`btn-submit${loading ? " loading" : ""}`}
                      disabled={loading}
                    >
                      <span className="spinner" />
                      {loading ? "Submitting..." : "Request Early Access"}
                    </button>
                    <p className="form-note">
                      No spam, ever. We&apos;ll notify you when NeuralTrace
                      Cloud launches.
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div className="modal-success active">
                <div className="checkmark">&#10003;</div>
                <h3>You&apos;re on the list!</h3>
                <p>
                  Thank you for your interest in NeuralTrace. We&apos;ll be in
                  touch soon with early access details and launch updates.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
