import { Quote } from "lucide-react"

const members = [
  {
    initials: "RS",
    name: "Dołącz do nas",
    role: "Początkujący",
    quote:
      "Dopiero zaczynasz z Rustem? Znajdziesz tutaj materiały, odpowiedzi na pytania i pomoc społeczności.",
  },
  {
    initials: "IT",
    name: "Podziel się wiedzą",
    role: "Doświadczony programista",
    quote:
      "Masz doświadczenie z Rustem? Pomóż innym, publikuj artykuły i wspieraj rozwój społeczności.",
  },
  {
    initials: "OS",
    name: "Twórz projekty",
    role: "Open Source",
    quote:
      "Publikuj swoje crate'y, rozwijaj projekty open source i poznawaj ludzi o podobnych zainteresowaniach.",
  },
];

export function Members() {
  return (
    <section id="members" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Społeczność Rustaceans
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Stworzone przez programistów Rusta, dla programistów Rusta.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {members.map((member) => (
            <figure
              key={member.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <Quote
                className="size-6 text-primary"
                aria-hidden="true"
              />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {member.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary font-mono text-sm font-semibold text-primary">
                  {member.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    {member.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {member.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
