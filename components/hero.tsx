import Image from "next/image"
import { ArrowRight, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-12 lg:py-40">
        {/* Image */}
        <div className="hidden lg:col-span-4 lg:flex lg:justify-center">
          <Image
            src="/rust-hero.png"
            alt="Ferris the Rust crab"
            width={520}
            height={520}
            priority
            className="h-auto w-full max-w-md object-contain"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-8">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Tworzone przez społeczność ponad 48 000 programistów
          </span>

          <h1 className="mt-6 text-balance font-mono text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Dla programistów,
            którzy tworzą w <span className="text-primary">Rust</span>.
          </h1>

          <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Rustaceans to społeczność dla wszystkich, którzy uczą się i tworzą w Rust.
            Zadawaj pytania, dziel się projektami, odkrywaj nowe crate&apos;y i rozwijaj swoje
            umiejętności razem z innymi programistami.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              Dołącz do społeczności
              <ArrowRight className="size-4" />
            </Button>

            <Button size="lg" variant="outline" className="gap-2">
              <Code2 className="size-4" />
              Przeglądaj dyskusje
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}