const FOCUS_AREAS = [
  {
    number: "01",
    title: "Medicine & clinical practice",
    description:
      "MBBS training at Kamuzu University of Health Sciences — the clinical foundation underneath everything else.",
  },
  {
    number: "02",
    title: "Health technology & AI",
    description:
      "Building tools and exploring AI that fit African healthcare systems in practice, not just in theory.",
  },
  {
    number: "03",
    title: "Research & evidence",
    description:
      "Interests in clinical research, health data, and context-appropriate questions worth answering carefully.",
  },
  {
    number: "04",
    title: "Storytelling & enterprise",
    description:
      "Writing, reflections, and Storyyteller Enterprise — the technical and creative services side of the work.",
  },
] as const;

export function HomeFocusAreas() {
  return (
    <section className="section-padding border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Areas of work
          </p>
          <h2 className="mt-3 text-balance font-sora text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:text-5xl">
            Four threads I keep pulling together.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.number}
              className="border-t border-slate-200 pt-6 dark:border-slate-800"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-slate-400 dark:text-slate-500">
                {area.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}