"use client"

import { useState } from "react"
import { ArrowRight, Cog, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
    { label: "Dołącz", href: "#join" },
    { label: "Forum", href: "#forums" },
    { label: "Wydarzenia", href: "#events" },
    { label: "Materiały", href: "#learn" },
    { label: "Społeczność", href: "#members" },
];

export function SiteHeader() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                <a href="#" className="flex items-center gap-2">
                    <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Cog className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-lg font-bold tracking-tight">
                        Rustaceans
                    </span>
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <Button variant="ghost" size="sm">
                        Zaloguj sie
                    </Button>
                    <Button size="lg" className="gap-2">
                        Dołącz do społeczności
                        <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                </div>

                <button
                    type="button"
                    className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            {open && (
                <div className="border-t border-border/60 bg-background md:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-2 flex flex-col gap-2">
                            <Button variant="ghost" size="sm">
                                Zaloguj się
                            </Button>
                            <Button size="sm">Dołącz do społeczności</Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
