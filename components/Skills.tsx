import { skills } from "@/lib/cv-data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2 id="skills-heading" className="section-heading">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subheading">
          Deep expertise in Android, Kotlin Multiplatform, and the modern mobile
          engineering stack.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, i) => (
            <div
              key={category.category}
              className="card"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h3 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
