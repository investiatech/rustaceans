import { ArrowUp, MessageCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const threads = [
  {
    tag: "async",
    title: "Kiedy używać tokio::select!, a kiedy join!?",
    author: "ferris_dev",
    replies: 24,
    votes: 86,
    solved: true,
  },
  {
    tag: "lifetimes",
    title: "Jak zwrócić iterator pożyczający dane ze struktury?",
    author: "borrow_checker",
    replies: 17,
    votes: 54,
    solved: true,
  },
  {
    tag: "wasm",
    title: "Jak zmniejszyć rozmiar aplikacji WebAssembly poniżej 100 KB?",
    author: "tiny_bytes",
    replies: 41,
    votes: 132,
    solved: false,
  },
  {
    tag: "embedded",
    title: "Jakie HAL dla RP2040 w projektach no_std?",
    author: "blinky",
    replies: 9,
    votes: 38,
    solved: false,
  },
];

export function Discussions() {
  return (
    <section id="forums" className="border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              Forum
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Najnowsze tematy forum
            </h2>
          </div>
          <Button variant="outline">Wszystkie tematy</Button>
        </div>

        <ul className="mt-10 space-y-4 overflow-hidden">
          {threads.map((thread) => (
            <li key={thread.title} className="overflow-hidden rounded-xl border border-border bg-card">
              <a
                href="#"
                className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-secondary/50"
              >
                <div className="flex w-12 flex-col items-center text-primary">
                  <ArrowUp className="size-4" aria-hidden="true" />
                  <span className="font-mono text-sm font-semibold">
                    {thread.votes}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      {thread.tag}
                    </span>
                    {thread.solved && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                        <CheckCircle2 className="size-3.5" aria-hidden="true" />
                        Rozwiązane
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1.5 truncate font-medium">{thread.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    by {thread.author}
                  </p>
                </div>

                <div className="hidden items-center gap-1.5 text-sm text-muted-foreground sm:flex">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  {thread.replies}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
