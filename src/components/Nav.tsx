const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#about" className="font-mono text-sm font-semibold tracking-tight">
          Juniven Isin Sasi
        </a>
        <ul className="flex gap-5 text-sm text-neutral-600 dark:text-neutral-400">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
