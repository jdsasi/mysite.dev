import { education, strengths } from "@/lib/resume";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          <div className="mt-6 space-y-5">
            {education.map((entry) => (
              <div key={entry.degree}>
                <p className="font-semibold">{entry.degree}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{entry.school}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Strengths</h2>
          <ul className="mt-6 list-disc space-y-2 pl-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
