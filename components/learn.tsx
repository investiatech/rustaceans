import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const points = [
  "Podstawy ownership, borrowing i lifetimes",
  "Praktyczne projekty z wykorzystaniem Rusta",
  "Asynchroniczność, WebAssembly i embedded Rust",
  "Regularnie aktualizowane materiały społeczności",
];

export function Learn() {
  return (
    <section id="learn" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Materiały
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Zacznij swoją przygodę z Rustem.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Poznaj ownership, lifetimes, async i inne kluczowe zagadnienia Rusta
            dzięki praktycznym materiałom i przykładom.s
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-8">
            Przejdź do materiałóws
          </Button>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
            <span className="size-3 rounded-full bg-primary/80" />
            <span className="size-3 rounded-full bg-white/20" />
            <span className="size-3 rounded-full bg-primary/40" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              main.rs
            </span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
            <code>
              <span className="text-muted-foreground">{"// Your first fearless concurrency"}</span>
              {"\n"}
              <span className="text-accent">use</span> std::thread;
              {"\n\n"}
              <span className="text-accent">fn</span>{" "}
              <span className="text-primary">main</span>() {"{"}
              {"\n"}
              {"    "}<span className="text-accent">let</span> handle = thread::spawn(|| {"{"}
              {"\n"}
              {"        "}println!(<span className="text-primary">{'"Hello from a thread!"'}</span>);
              {"\n"}
              {"    "}{"}"});
              {"\n\n"}
              {"    "}handle.join().unwrap();
              {"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
