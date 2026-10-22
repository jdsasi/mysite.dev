import { profile } from "@/lib/resume";

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-2xl border border-black/10 p-8 dark:border-white/10">
        <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Open to backend, full-stack, and DevOps opportunities.
        </p>
        <div className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
          <a href={`mailto:${profile.email}`} className="font-mono hover:underline">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="font-mono hover:underline">
            {profile.phone}
          </a>
          <span className="font-mono text-neutral-500 dark:text-neutral-400">
            {profile.location}
          </span>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
