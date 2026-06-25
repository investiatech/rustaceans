import {
  MessagesSquare,
  CalendarDays,
  GraduationCap,
  Users,
  Package,
  ShieldCheck,
} from "lucide-react"

const features = [
  {
    icon: MessagesSquare,
    title: "Forum dyskusyjne",
    body: "Zadawaj pytania, dziel się wiedzą i rozwiązuj problemy razem z innymi programistami Rusta.",
  },
  {
    icon: CalendarDays,
    title: "Wydarzenia",
    body: "Śledź meetupy, webinary i konferencje związane z Rustem w Polsce i na świecie.",
  },
  {
    icon: GraduationCap,
    title: "Materiały dla Rust",
    body: "Artykuły, poradniki i materiały, które pomogą Ci rozpocząć pracę z Rustem i rozwijać swoje umiejętności.",
  },
  {
    icon: Package,
    title: "Projekty i crate'y",
    body: "Odkrywaj ciekawe biblioteki, publikuj własne projekty i poznawaj rozwiązania tworzone przez społeczność.",
  },
  {
    icon: Users,
    title: "Społeczność",
    body: "Poznaj innych programistów Rusta, wymieniaj doświadczenia i buduj wartościowe kontakty.",
  },
  {
    icon: ShieldCheck,
    title: "Przyjazna atmosfera",
    body: "Tworzymy miejsce, w którym każdy może zadawać pytania, uczyć się i rozwijać bez obaw o ocenianie.",
  },
];

export function Features() {
  return (
    <section id="join" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Dlaczego Rustaceans?
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Wszystko, czego potrzebujesz, aby rozwijać się jako programista Rust
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Od pierwszego <code className="font-mono text-foreground">cargo new</code>{" "}
            po wdrażanie aplikacji produkcyjnych — społeczność wspiera Cię na każdym etapie.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
