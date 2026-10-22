import { experience } from "@/lib/resume";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Professional Experience</h2>
      <div className="mt-8 space-y-10 border-l border-black/10 dark:border-white/10">
        {experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="relative pl-6">
            <span className="absolute top-1.5 left-[-4.5px] size-2 rounded-full bg-foreground" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">
                {job.role} · {job.company}
              </h3>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                {job.period}
              </span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {job.tech.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-neutral-600 dark:bg-white/10 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
