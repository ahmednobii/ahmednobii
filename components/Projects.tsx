import { projects } from "@/lib/cv-data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-surface/30"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2 id="projects-heading" className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subheading">
          Applications I&apos;ve built across fintech, media, education, and
          e-commerce.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="card group relative overflow-hidden"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                {/* Project icon */}
                <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Play Store link */}
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                    aria-label={`View ${project.name} on Google Play Store`}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 1.133l10.937 6.333-2.302 2.302-8.635-8.635z" />
                    </svg>
                    Google Play
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
