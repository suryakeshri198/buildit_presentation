"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Grid columns fade up with stagger
      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Footer fade in
      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Colophon</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">CREDITS</h2>
      </div>

      {/* Multi-column layout */}
      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
        {/* Team */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Team</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Nirmal Rajkumar</li>
            <li className="font-mono text-xs text-foreground/80">Nishant Chaudhary</li>
            <li className="font-mono text-xs text-foreground/80">Akhil prakash</li>
          </ul>
        </div>

        {/* Juniors (in video) */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Juniors (in video)</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Placeholder 1</li>
            <li className="font-mono text-xs text-foreground/80">Placeholder 2</li>
            <li className="font-mono text-xs text-foreground/80">Placeholder 3</li>
            <li className="font-mono text-xs text-foreground/80">Placeholder 4</li>
            <li className="font-mono text-xs text-foreground/80">Placeholder 5</li>
          </ul>
        </div>

        {/* Seniors (in video) */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Seniors (in video)</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Placeholder 1</li>
            <li className="font-mono text-xs text-foreground/80">Placeholder 2</li>
            <li className="font-mono text-xs text-foreground/80">Placeholder 3</li>
            <li className="font-mono text-xs text-foreground/80">Placeholder 4</li>
            <li className="font-mono text-xs text-foreground/80">Placeholder 5</li>
          </ul>
        </div>

        {/* SPC */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">SPC (IN VIDEO)</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Krishna goel</li>
          </ul>
        </div>

        {/* Special Thanks */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">SPECIAL THANKS TO</h4>
          <ul className="space-y-2">
            <li className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">legend</li>
            <li className="font-mono text-xs text-foreground/80">MR HARISH KOTRA</li>
            <li className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground/60 mt-2">Techstar Facilitator</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        ref={footerRef}
        className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          GOOGLE&apos;S TECHSTAR SWJ&apos;26 MUJ
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">lets BUILDIT</p>
      </div>
    </section>
  )
}
