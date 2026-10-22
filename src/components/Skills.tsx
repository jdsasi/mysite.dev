import { skills } from "@/lib/resume";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Core Skills</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm text-neutral-700 dark:border-white/15 dark:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
