import { about, highlights } from "@/lib/cv-data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="about-heading" className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subheading">
          Senior Android Engineer specializing in Kotlin Multiplatform and
          scalable mobile architectures.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="md:col-span-2">
            <div className="card">
              <p className="text-text-secondary leading-relaxed text-lg">
                {about}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            {highlights.map((stat, i) => (
              <div
                key={stat.label}
                className="card text-center group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl font-black gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
