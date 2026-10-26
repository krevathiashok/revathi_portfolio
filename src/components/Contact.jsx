import { Mail, Github, ArrowUpRight, Sparkles } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import "./Contact.css";

const WhatsAppIcon = ({ size = 22 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.29z" />
  </svg>
);

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "krevathi.me@gmail.com",
    href: "mailto:krevathi.me@gmail.com",
    color: "#2563eb",
    desc: "For project briefs & design inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/krevathiashok",
    href: "https://github.com/krevathiashok",
    color: "#7c3aed",
    external: true,
    desc: "Full-stack repos & code portfolio",
  },
];

export default function Contact() {
  const whatsappUrl =
    "https://wa.me/919994672826?text=Hi%20Revathi,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!";

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div data-animate>
          <SectionHeader
            chip="Get In Touch"
            title="Let's Work Together"
            subtitle="Have a project in mind, looking for a UI/UX designer, or want to collaborate? Connect directly on WhatsApp or through email."
            align="center"
          />
        </div>

        <div className="contact__simple-grid" data-animate>
          {/* WhatsApp Direct Connect Card */}
          <div className="contact__wa-box">
            <div className="contact__wa-header">
              <span className="contact__wa-tag">
                <WhatsAppIcon size={18} /> Direct WhatsApp
              </span>
              <span className="contact__status-pill">
                <span className="contact__pulse-dot" /> Online
              </span>
            </div>

            <h3 className="contact__wa-heading">Chat Directly on WhatsApp</h3>
            <p className="contact__wa-sub">
              The fastest way to reach me. Click below to start an instant
              conversation about design projects, timelines, or collaborations.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__wa-button"
            >
              <WhatsAppIcon size={20} />
              <span>Open WhatsApp Chat</span>
              <ArrowUpRight size={17} />
            </a>

            <div className="contact__wa-footer-note">
              <Sparkles size={14} className="contact__sparkle" />
              <span>
                Quick response · Open for Freelance &amp; Full-Time Roles
              </span>
            </div>
          </div>

          {/* Direct Channels List */}
          <div className="contact__channels-box">
            <h3 className="contact__channels-heading">Other Ways to Connect</h3>

            <div className="contact__channels-stack">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    className={`contact__channel-row ${c.disabled ? "contact__channel-row--disabled" : ""}`}
                  >
                    <div
                      className="contact__channel-icon"
                      style={{
                        backgroundColor: `${c.color}14`,
                        color: c.color,
                        borderColor: `${c.color}30`,
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="contact__channel-info">
                      <div className="contact__channel-meta">
                        <span className="contact__channel-title">
                          {c.label}
                        </span>
                        <span className="contact__channel-desc">{c.desc}</span>
                      </div>

                      {c.href && !c.disabled ? (
                        <a
                          href={c.href}
                          className="contact__channel-link"
                          target={c.external ? "_blank" : undefined}
                          rel={c.external ? "noopener noreferrer" : undefined}
                        >
                          <span>{c.value}</span>
                          <ArrowUpRight
                            size={13}
                            className="contact__arrow-icon"
                          />
                        </a>
                      ) : (
                        <span className="contact__channel-link contact__channel-link--muted">
                          {c.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability Pill */}
            <div className="contact__status-banner">
              <span className="contact__pulse-dot" />
              <span>Currently open for new design &amp; web projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
