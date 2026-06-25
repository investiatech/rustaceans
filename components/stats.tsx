
const stats = [
  { value: "48K+", label: "Programistów" },
  { value: "12K", label: "Projektów" },
  { value: "24/7", label: "Wsparcie społeczności" },
  { value: "PL", label: "Polska społeczność" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-2 sm:px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 py-8 text-center">
            <div className="font-mono text-3xl font-bold text-primary sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
