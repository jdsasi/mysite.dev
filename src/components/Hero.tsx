import { profile } from "@/lib/resume";

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
        {profile.location}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
      <h2 className="mt-2 text-xl text-neutral-600 dark:text-neutral-400">{profile.title}</h2>
      <p className="mt-6 max-w-2xl leading-relaxed text-neutral-700 dark:text-neutral-300">
        {profile.summary}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#experience"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View Experience
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
