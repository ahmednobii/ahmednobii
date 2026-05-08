"use client";

import { useState } from "react";
import { experience, type Experience as ExperienceType } from "@/lib/cv-data";

function TimelineCard({
  role,
}: {
  role: ExperienceType;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative pl-8 md:pl-12 pb-12 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-[-5px] md:left-[11px] top-1.5 w-[11px] h-[11px] rounded-full bg-surface border-2 border-accent-cyan group-hover:bg-accent-cyan group-hover:shadow-lg group-hover:shadow-accent-cyan/30 transition-all duration-300" />

      <div className="card group-hover:border-accent-cyan/20 transition-all duration-300">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-text-primary">
              {role.title}
            </h3>
            <p className="text-accent-cyan font-medium">{role.company}</p>
          </div>
          <div className="text-sm text-text-secondary shrink-0">
            <span>{role.period}</span>
            <span className="block text-text-secondary/60">
              {role.location}
            </span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-text-secondary text-sm leading-relaxed mb-3">
          {role.summary}
        </p>

        {/* Expandable Highlights */}
        {role.highlights.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-sm text-accent-cyan/80 hover:text-accent-cyan transition-colors"
              aria-expanded={expanded}
            >
              {expanded ? "Show less" : "Show highlights"}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {expanded && (
              <ul className="mt-3 space-y-2 animate-fade-in">
                {role.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-text-secondary"
                  >
                    <span className="text-accent-cyan mt-1 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-surface/30"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="experience-heading" className="section-heading">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subheading">
          7+ years building high-performance mobile applications across fintech,
          media, and education.
        </p>

        <div className="relative">
          {experience.map((role, i) => (
            <TimelineCard key={`${role.company}-${i}`} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}
