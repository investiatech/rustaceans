import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center sm:px-12">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/rust-hero.png)" }}
          aria-hidden="true"
        />
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Gotowy, aby rozwijać się z Rustaceans?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Otrzymuj cotygodniowy newsletter z najciekawszymi dyskusjami, nowymi crate'ami
          i nadchodzącymi wydarzeniami. Bez spamu, możesz zrezygnować w każdej chwili.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="email@example.com"
            className="h-11 flex-1 rounded-md border border-input bg-background px-4 text-sm text-foreground outline-none ring-ring placeholder:text-muted-foreground focus-visible:ring-2"
          />
          <Button type="submit" size="lg">
            Subskrybuj
          </Button>
        </form>
      </div>
    </section>
  )
}
