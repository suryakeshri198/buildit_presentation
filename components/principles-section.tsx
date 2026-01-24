"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  const mvps = [
    {
      number: "01",
      titleParts: [
        { text: "MVP 1: Project-Based ", highlight: false },
        { text: "LEARNING", highlight: true },
        { text: " Core", highlight: false },
      ],
      description: "Project listing by mentors • Student project enrollment • Basic task structure • GitHub-based submissions • Manual review & feedback",
      align: "left",
    },
    {
      number: "02",
      titleParts: [
        { text: "MVP 2: ", highlight: false },
        { text: "MENTORSHIP", highlight: true },
        { text: " & Progress Tracking", highlight: false },
      ],
      description: "Mentor–student assignment • Weekly progress check-ins • Simple skill tagging • Completion status tracking",
      align: "right",
    },
    {
      number: "03",
      titleParts: [
        { text: "MVP 3: ", highlight: false },
        { text: "PORTFOLIO", highlight: true },
        { text: " Generation", highlight: false },
      ],
      description: "Auto-generated project portfolio • Tech stack display • Contribution summary • Shareable profile link",
      align: "left",
    },
    {
      number: "04",
      titleParts: [
        { text: "MVP 4: ", highlight: false },
        { text: "RECRUITER", highlight: true },
        { text: " View (Lite Version)", highlight: false },
      ],
      description: "View verified projects • Skill-based filtering • Contact / shortlist option",
      align: "right",
    },
    {
      number: "05",
      titleParts: [
        { text: "MVP 5: ", highlight: false },
        { text: "MONETIZATION", highlight: true },
        { text: " Layer", highlight: false },
      ],
      description: "Project-based enrollment fee • Mentor payout system • Basic admin controls",
      align: "left",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !principlesRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
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

      // Each MVP slides in from its aligned side
      const articles = principlesRef.current?.querySelectorAll("article")
      articles?.forEach((article, index) => {
        const isRight = mvps[index].align === "right"
        gsap.from(article, {
          x: isRight ? 80 : -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: article,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="principles" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / MVP</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">MINIMUM VIABLE PRODUCT (MVP)</h2>
      </div>

      {/* Staggered MVPs */}
      <div ref={principlesRef} className="space-y-24 md:space-y-32">
        {mvps.map((mvp, index) => (
          <article
            key={index}
            className={`flex flex-col ${
              mvp.align === "right" ? "items-end text-right" : "items-start text-left"
            }`}
          >
            {/* Annotation label */}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {mvp.number} / {mvp.titleParts[0].text.split(" ")[0]}
            </span>

            <h3 className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none">
              {mvp.titleParts.map((part, i) =>
                part.highlight ? (
                  <HighlightText key={i} parallaxSpeed={0.6}>
                    {part.text}
                  </HighlightText>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-2xl font-mono text-sm text-muted-foreground leading-relaxed">
              {mvp.description}
            </p>

            {/* Decorative line */}
            <div className={`mt-8 h-[1px] bg-border w-24 md:w-48 ${mvp.align === "right" ? "mr-0" : "ml-0"}`} />
          </article>
        ))}
      </div>
    </section>
  )
}
