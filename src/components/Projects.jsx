const personal = [
  {
    title: "Rubik’s Cube Solver",
    tagline: "End-to-end pipeline · from images to solution",
    stack: ["Python", "OpenCV", "FastAPI", "GCP", "Swift"],
    blurb:
      "Utilizing computer vision to read images of a Rubik's cube to output near optimal solution.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/calebgetahun/puzzle-solver",
      },
    ],
  },
  {
    title: "Bias Detection in Media Sources",
    tagline: "NLP pipeline · stance/bias signals",
    stack: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
    blurb:
      "NLP analysis using sentiment analysis to classify political bias in news articles.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/calebgetahun/Bias-Detection-in-Media-Sources",
      },
    ],
  },
];

const professional = [
  {
    title: "LinkedIn — Infrastructure",
    tagline:
      "Internal tooling, feedback platform revamp, and large-scale refactors",
    stack: ["Swift", "Objective-C"],
    blurb:
      "Revamped internal feedback tooling (A/B tested for rollout), refactored dependency-injection patterns, and analyzed feature velocity to guide mobile infrastructure investments.",
  },
  {
    title: "LinkedIn — Feature Velocity Analysis",
    tagline: "Large-scale data study on feature velocity",
    stack: ["Python", "Scala", "SQL"],
    blurb:
      "Analyzed build/test signals and release metrics to identify bottlenecks; informed infra investment for developer productivity.",
  },
  {
    title: "Stealth (startup) - NeRF-Based 3D Imagery",
    tagline: "MVP pipeline from video to photorealistic assets",
    stack: ["Django", "React", "GCP", "Luma API", "Three.js/WebGL"],
    blurb:
      "Built service to generate and render 3D assets from video input. Prototyped storage/compression and Shopify integration",
  },
  {
    title: "Duke OIT — AR Basketball Museum App",
    tagline: "Augmented reality experience for fans worldwide",
    stack: ["Swift", "ARKit", "iOS"],
    blurb:
      "Developed an AR app showcasing Duke Basketball history and trophies in 3D for global fans. Integrated interactive animations and museum-grade asset rendering.",
  },
];

function Group({ heading, items }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white/90">{heading}</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((p) => (
          <details
            key={p.title}
            className="group rounded-2xl border border-white/10 p-4 open:bg-white/5 open:border-white/20 transition"
          >
            <summary className="list-none cursor-pointer flex items-start justify-between gap-3">
              <div>
                <h4 className="text-base font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-400">{p.tagline}</p>
              </div>
              <span className="ml-3 text-xs text-gray-400 group-open:rotate-180 transition">
                ▼
              </span>
            </summary>

            <div className="mt-3 space-y-3">
              <p className="text-sm text-gray-200">{p.blurb}</p>
              {!!p.stack?.length && (
                <p className="text-xs text-gray-500">{p.stack.join(" · ")}</p>
              )}
              {!!p.links?.length && (
                <div className="flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline decoration-white/30 hover:decoration-white"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <Group heading="Personal" items={personal} />
      <Group heading="Professional" items={professional} />
    </section>
  );
}
