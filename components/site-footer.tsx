import { Cog, Code2, Send, MessageSquare } from "lucide-react"

const columns = [
  {
    title: "Społeczność",
    links: [
      "Forum",
      "Wydarzenia",
      "Discord",
      "Kodeks społeczności",
    ],
  },
  {
    title: "Materiały",
    links: [
      "Media",
      "Artykuły",
      "Projekty",
      "Crate'y",
    ],
  },
  {
    title: "Rustaceans",
    links: [
      "O nas",
      "Kontakt",
      "Współpraca",
      "Regulamin",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cog className="size-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-lg font-bold tracking-tight">
                Rustaceans
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Miejsce stworzone przez społeczność dla programistów Rusta.
            </p>
            <div className="mt-5 flex gap-3">
              {[Code2, Send, MessageSquare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  <span className="sr-only">Media społecznościowe</span>
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wide">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Rustaceans.pl. Tworzone przez{" "}
            <a
              href="https://investia.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Investia.Tech
            </a>
            . Projekt nie jest powiązany z Rust Foundation.
          </p>
          <div className="flex gap-6">
            <a href="/polityka-prywatnosci" className="transition-colors hover:text-foreground">
              Polityka prywatności
            </a>

            <a href="/regulamin" className="transition-colors hover:text-foreground">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
