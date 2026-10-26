import { experiences } from "../data/experience";
import {
  Briefcase,
  Calendar,
  Award,
  Sparkles,
  Code2,
  Layers,
  CheckCircle2,
  MapPin,
  GraduationCap,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import "./About.css";

const stats = [
  {
    value: "5+",
    label: "Years Experience",
    desc: "Design leadership & execution",
  },
  {
    value: "400+",
    label: "Marketing Creatives",
    desc: "Commercial branding & campaigns",
  },
  {
    value: "Admini & Loani",
    label: "AI SaaS Platforms",
    desc: "Complex dashboards & workflows",
  },
  {
    value: "Full-Stack",
    label: "Web Development",
    desc: "React, Node, Express, PostgreSQL",
  },
];

const coreCompetencies = [
  { icon: Layers, label: "Design Systems & Component Libraries" },
  { icon: Sparkles, label: "AI-Assisted Creative Production" },
  { icon: Briefcase, label: "SaaS Dashboards & Complex UX" },
  { icon: Code2, label: "Full-Stack Implementation (React + Node)" },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeader
          chip="About Me"
          title="Designer. Creative Strategist. Web Builder."
          subtitle="A multidisciplinary designer bridging the gap between user-centered aesthetics, AI innovation, and production web applications."
          align="center"
        />

        {/* 1. Profile & Bio Overview */}
        <div className="about__profile-grid">
          {/* Left: Executive Profile Card */}
          <div className="about__profile-card" data-animate="left">
            <div className="about__avatar-wrap">
              <div className="about__avatar-inner">
                <img
                  src="/images/revathi-avatar.png"
                  alt="Revathi Brand Emblem - Creative Design & Web Engineering"
                  className="about__avatar-img"
                />
              </div>
              <div className="about__avatar-ring" />
              <div
                className="about__avatar-badge"
                title="Verified Creative Professional"
              >
                <CheckCircle2 size={18} />
              </div>
            </div>

            <div className="about__profile-identity">
              <h3 className="about__profile-name">Revathi</h3>
              <p className="about__profile-role">
                UI/UX Designer &amp; Web App Builder
              </p>
              <div className="about__profile-status">
                <span className="about__status-dot" />
                <span>Open to Creative Collaborations</span>
              </div>
            </div>

            {/* Impact Stats Grid */}
            <div className="about__stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="about__stat-box">
                  <span className="about__stat-num">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Academic Credentials / Degrees */}
            <div className="about__education-card">
              <div className="about__education-header">
                <GraduationCap size={16} className="about__education-icon" />
                <span>Education &amp; Credentials</span>
              </div>
              <div className="about__degrees-list">
                <div className="about__degree-item">
                  <span className="about__degree-tag about__degree-tag--pg">PG</span>
                  <div className="about__degree-info">
                    <span className="about__degree-name">M.E. (CSE)</span>
                    <span className="about__degree-sub">Master of Engineering — Computer Science</span>
                  </div>
                </div>
                <div className="about__degree-item">
                  <span className="about__degree-tag about__degree-tag--ug">UG</span>
                  <div className="about__degree-info">
                    <span className="about__degree-name">B.E. (CSE)</span>
                    <span className="about__degree-sub">Bachelor of Engineering — Computer Science</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Approach */}
          <div className="about__bio-card" data-animate="right">
            <div className="about__bio-badge">
              <Sparkles size={14} className="about__bio-badge-icon" />
              <span>Background &amp; Philosophy</span>
            </div>

            <h3 className="about__bio-headline">
              Crafting intuitive digital products with design precision and
              practical engineering.
            </h3>

            <div className="about__bio-paragraphs">
              <p>
                I am an experienced UI/UX Designer, Creative Technologist, and Web Builder with over 5 years of hands-on expertise shaping intuitive digital products. My career spans design leadership for AI SaaS platforms, fintech web apps, healthcare mobile interfaces, and 4.5 years of academic lecturing in Computer Science &amp; Engineering.
              </p>
              <p>
                At <strong>Iniramsquare Private Limited (Nagercoil)</strong>, as <strong>Design Head</strong>, I lead the UI/UX architecture and creative direction for <strong>Admini</strong> — creating scalable design systems, multi-module dashboards, mobile interfaces, and delivering 400+ marketing creatives with AI-driven workflows.
              </p>
              <p>
                Previously at <strong>Dexa IT Solutions</strong>, I designed major web and mobile experiences including <strong>Loani</strong> (an AI-powered loan management platform) and <strong>INICARE</strong> (a patient-centric healthcare mobile app), bridging user-centric design with practical full-stack execution (React, Node.js, Express, PostgreSQL).
              </p>
            </div>

            {/* Core Competencies Pills */}
            <div className="about__competencies">
              <h4 className="about__competencies-title">Key Areas of Impact</h4>
              <div className="about__competencies-grid">
                {coreCompetencies.map((comp) => {
                  const Icon = comp.icon;
                  return (
                    <div key={comp.label} className="about__competency-item">
                      <Icon size={16} className="about__competency-icon" />
                      <span>{comp.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Dedicated Career Journey & Experience Flow */}
        <div className="about__experience-section" data-animate>
          <div className="about__experience-header">
            <span className="section-header__chip">Career Milestones</span>
            <h3 className="about__experience-title">Professional Experience</h3>
            <p className="about__experience-subtitle">
              A chronological timeline of design leadership, SaaS product
              architecture, and creative execution.
            </p>
          </div>

          <div className="about__flow-container">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="about__flow-item">
                {/* Left Column: Period & Organization Meta */}
                <div className="about__flow-meta">
                  <div className="about__flow-period-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="about__flow-type-badge">{exp.type}</div>
                  <div className="about__flow-company-name">{exp.company}</div>
                </div>

                {/* Center Node & Connecting Spine */}
                <div className="about__flow-spine">
                  <div className="about__flow-node">
                    <span className="about__flow-node-dot" />
                    <span className="about__flow-node-index">0{idx + 1}</span>
                  </div>
                  {idx < experiences.length - 1 && (
                    <div className="about__flow-line" />
                  )}
                </div>

                {/* Right Column: Role Details & Achievements */}
                <div className="about__flow-card">
                  <div className="about__flow-card-header">
                    <div className="about__flow-card-title-group">
                      <h4 className="about__flow-role">{exp.role}</h4>
                      <span className="about__flow-company-inline">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  <p className="about__flow-desc">{exp.description}</p>

                  {/* Bullet points if present */}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="about__flow-bullets">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>
                          <CheckCircle2 size={14} className="about__bullet-icon" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Highlighted Projects if present (Loani, INICARE) */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="about__flow-projects">
                      <span className="about__flow-projects-title">Key Projects Designed:</span>
                      <div className="about__flow-projects-grid">
                        {exp.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="about__flow-project-card">
                            <h5 className="about__flow-project-name">{proj.name}</h5>
                            <p className="about__flow-project-desc">{proj.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="about__flow-highlights">
                    <span className="about__flow-highlights-label">
                      Highlights &amp; Contributions:
                    </span>
                    <div className="about__flow-tags">
                      {exp.highlights.map((h) => (
                        <span key={h} className="about__flow-tag">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
