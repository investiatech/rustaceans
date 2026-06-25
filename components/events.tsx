import { MapPin, Video, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    month: "LIP",
    day: "12",
    title: "Async Rust – od podstaw do zaawansowanych zastosowań",
    location: "Online · Warsztaty na żywo",
    online: true,
  },
  {
    month: "LIP",
    day: "19",
    title: "Warszawski meetup społeczności Rust",
    location: "Warszawa",
    online: false,
  },
  {
    month: "SIE",
    day: "03",
    title: "Embedded Rust na ESP32 – warsztaty praktyczne",
    location: "Online · Warsztaty na żywo",
    online: true,
  },
  {
    month: "SIE",
    day: "16",
    title: "Wieczór z Rust – networking i prezentacje",
    location: "Kraków",
    online: false,
  },
];

export function Events() {
  return (
    <section id="events" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Wydarzenia
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Spotkaj społeczność na żywo i online
          </h2>
        </div>
        <Button variant="outline" className="gap-2">
          Kalendarz wydarzeń
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {events.map((event) => (
          <div
            key={event.title}
            className="flex gap-5 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
          >
            <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-lg bg-secondary">
              <span className="font-mono text-xs font-semibold uppercase text-primary">
                {event.month}
              </span>
              <span className="font-mono text-2xl font-bold leading-none">
                {event.day}
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="text-pretty font-semibold leading-snug">
                {event.title}
              </h3>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                {event.online ? (
                  <Video className="size-4" aria-hidden="true" />
                ) : (
                  <MapPin className="size-4" aria-hidden="true" />
                )}
                {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
