"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const leanCanvasSections = [
  {
    id: "problem",
    title: "Problem",
    items: [
      {
        title: "Top 3 Problems:",
        points: [
         "Students learn theories and concepts but lack hands-on projects, resulting in graduates without portfolio or real-world experience",
  "Educational curriculum focuses on exam scores and grades rather than building tangible skills employers actually need",
  "Traditional degrees take 4+ years and cost ₹10-50 lakhs, while self-taught learners from YouTube tutorials land jobs faster with less investment"
        ],
      },
      {
        title: "Why Existing Solutions Fail:",
        points: [
         "Traditional degrees - rigid curriculum, outdated content, slow to adapt to market demands",
  "Random YouTube tutorials - no structured path, quality is inconsistent, easy to abandon mid-learning",
  "Bootcamps and online courses - expensive (₹30-100K), unstandardized quality, no job guarantee",
  "Self-study without guidance - overwhelming choices, no accountability, no mentorship, learners get lost"
        ],
      },
    ],
  },
  {
    id: "solution",
    title: "Solution",
    items: [
      {
        title: "Top 4 Features:",
        points: [
          "Centralized homework and assignment tracker with subject-wise organization and priority flagging",
  "Real-time push notifications to parents and students with customizable alert preferences",
  "Automated SMS/WhatsApp reminders 24 hours before deadlines and test dates",
  "Comprehensive dashboard showing grades, circulars, attendance, and test schedules in one place",
          "Mobile app + web portal accessible to teachers, parents, and students with role-based permissions"
        ],
      },
    ],
  },
  {
    id: "uvp",
    title: "Unique Value Proposition",
    items: [
      {
        title: "",
        points: [
         "Lightweight, cloud-based system tailored for schools of all sizes—from 200 to 5,000+ students",
  "Eliminates 90% of missed assignments and forgotten deadlines with smart reminders",
  "Streamlines parent-school communication, reducing WhatsApp dependency and miscommunications",
  "Simple 15-minute adoption with no complex infrastructure—works on any device",
          "Improves student accountability and reduces academic anxiety through transparency"
        ],
      },
    ],
  },
  {
    id: "unfair-advantage",
    title: "Unfair Advantage",
    items: [
      {
        title: "",
        points: [
          "Purpose-built for schools with deep understanding of education workflows",
  "Specifically addresses Indian school communication gaps and WhatsApp chaos",
  "Designed with teacher, parent, and student perspectives—not a generic tool",
  "Proven to increase homework completion rates by 35% and parental engagement by 50%",
          "Integration-ready with existing school systems (no data migration needed)"
        ],
      },
    ],
  },
  {
    id: "customer-segments",
    title: "Customer Segments",
    items: [
      {
        title: "Target Customers:",
        points: [
          "Primary and secondary schools (6-12 classes) in India",
  "Class teachers and subject teachers managing 5-8 classes daily",
  "Working parents wanting real-time visibility into child's academics",
  "School administrative and principal staff managing 50-300+ students",
          "Parents frustrated with missing homework diary entries and student excuses"
        ],
      },
      {
        title: "Early Adopters:",
        points: [
          "Schools currently using paper diaries or unmanaged WhatsApp groups for homework",
  "Teachers frustrated with WhatsApp chaos, duplicate messages, and lost info",
  "Tier-1 and Tier-2 schools with tech-forward administration",
          "Urban and semi-urban parents with smartphones and internet access",
  "Schools looking for differentiation and improved parent satisfaction"
        ],
      },
    ],
  },
  {
    id: "key-metrics",
    title: "Key Metrics",
    items: [
      {
        title: "",
        points: [
         "Monthly active users (teachers, parents, students) and engagement metrics",
  "Parent notification open rate and response time",
  "Percentage reduction in missed/incomplete homework submissions",
          "Average time from assignment posting to parent view (goal: < 2 minutes)",
  "Student grade improvement rate and attendance correlation",
  "Parent satisfaction score and Net Promoter Score (NPS)"
        ],
      },
    ],
  },
  {
    id: "channels",
    title: "Channels",
    items: [
      {
        title: "Path to Customers:",
        points: [
          "Direct sales to school principals and administrative teams",
  "Partnerships with education boards, school associations, and EdTech networks",
  "Social proof through case studies and success stories from pilot schools",
  "Word-of-mouth and referrals from satisfied teachers and parent committees",
          "School management conferences and education expos"
        ],
      },
    ],
  },
  {
    id: "cost-structure",
    title: "Cost Structure",
    items: [
      {
        title: "",
        points: [
        "Scalable cloud hosting and infrastructure (AWS/GCP)",
  "Product development, maintenance, and security updates",
  "Educational marketing, partnerships, and sales team",
  "Teacher training, parent onboarding, and customer success operations",
          "SMS/WhatsApp notification gateway costs"
        ],
      },
    ],
  },
  {
    id: "revenue-streams",
    title: "Revenue Streams",
    items: [
      {
        title: "",
        points: [
          "Tiered subscription model: Base (₹50-100/student/month) to Premium (₹150+)",
  "Enterprise deals with large school chains (50+ schools) at volume discounts",
  "Premium feature upgrades for advanced analytics and performance tracking",
          "Setup, customization, and integration charges (one-time)",
  "Optional support and training packages for initial rollout"
        ],
      },
    ],
  },
]

export function LeanCanvasSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [expandedSection, setExpandedSection] = useState<{
    sectionId: string
    sectionTitle: string
  } | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      // Header fade in
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      // Cards stagger in
      const cards = gridRef.current?.querySelectorAll(".lean-card")
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Handle ESC key to close expanded section
  useEffect(() => {
    if (!expandedSection) return
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpandedSection(null)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [expandedSection])

  const handleCardClick = (sectionId: string, sectionTitle: string) => {
    setExpandedSection({ sectionId, sectionTitle })
  }

  const handleCloseExpanded = () => {
    setExpandedSection(null)
  }

  const getExpandedSection = () => {
    if (!expandedSection) return null
    return leanCanvasSections.find((s) => s.id === expandedSection.sectionId)
  }

  const expandedSectionData = getExpandedSection()

  return (
    <section ref={sectionRef} className="relative min-h-screen md:h-screen overflow-y-auto md:overflow-hidden px-4 md:px-6 py-4 md:py-6 bg-background flex flex-col ml-0 md:ml-20">
      {/* Expanded Section Modal */}
      {expandedSection && expandedSectionData && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 ml-0 md:ml-20"
          onClick={handleCloseExpanded}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-card border border-border/50 rounded-lg p-6 md:p-12 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseExpanded}
              className="absolute top-4 right-4 p-2 hover:bg-accent/20 rounded-full transition-colors duration-200 text-foreground hover:text-accent"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="font-[var(--font-bebas)] text-3xl md:text-5xl tracking-tight mb-6 text-foreground pr-12">
              {expandedSection.sectionTitle}
            </h2>
            <div className="space-y-4 md:space-y-6">
              {expandedSectionData.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="bg-yellow-200 dark:bg-yellow-900/30 rounded-lg p-6 md:p-8 shadow-lg border border-yellow-300/50 dark:border-yellow-800/50"
                >
                  {item.title && (
                    <h3 className="font-mono text-lg md:text-xl font-semibold mb-4 text-foreground/90">
                      {item.title}
                    </h3>
                  )}
                  <ul className="space-y-3 md:space-y-4">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="font-mono text-sm md:text-base text-foreground/80 leading-relaxed">
                        {point.startsWith("Key Numbers:") || point.startsWith("Why this matters:") ? (
                          <span className="font-semibold text-foreground block mb-2">{point}</span>
                        ) : (
                          `• ${point}`
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div ref={headerRef} className="mb-2 md:mb-4 text-center flex-shrink-0">
        <Link
          href="/"
          className="inline-block mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200"
        >
          ← Back to Home
        </Link>
        <h1 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight">LEAN CANVAS</h1>
      </div>

      {/* Lean Canvas Grid - 3x3 layout matching the image */}
      <div
        ref={gridRef}
        className="flex-1 max-w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-3 border border-border/30 bg-background p-2 md:p-3 overflow-y-auto md:overflow-auto"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20% 33.33%',
        }}
      >
        {/* Row 1: Top 5 sections */}
        <div className="lean-card border border-border/50 bg-card p-2 md:p-3 flex flex-col">
          <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight mb-2 text-foreground flex-shrink-0">
            Problem
          </h3>
          <div className="space-y-2 flex-1 overflow-auto">
            {leanCanvasSections[0].items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick("problem", "Problem")}
                className={cn(
                  "bg-yellow-200 dark:bg-yellow-900/30 rounded-sm p-2 shadow-sm border border-yellow-300/50 dark:border-yellow-800/50",
                  "cursor-pointer transition-all duration-200",
                  "hover:border-accent hover:bg-accent/10 hover:shadow-md"
                )}
              >
                {item.title && (
                  <h4 className="font-mono text-[9px] font-semibold mb-1 text-foreground/90">
                    {item.title}
                  </h4>
                )}
                <ul className="space-y-0.5">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="font-mono text-[9px] text-foreground/80 leading-tight">
                      {point.startsWith("Key Numbers:") || point.startsWith("Why this matters:") ? (
                        <span className="font-semibold">{point}</span>
                      ) : (
                        `• ${point}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lean-card border border-border/50 bg-card p-2 md:p-3 flex flex-col">
          <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight mb-2 text-foreground flex-shrink-0">
            Solution
          </h3>
          <div className="space-y-2 flex-1 overflow-auto">
            {leanCanvasSections[1].items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick("solution", "Solution")}
                className={cn(
                  "bg-yellow-200 dark:bg-yellow-900/30 rounded-sm p-2 shadow-sm border border-yellow-300/50 dark:border-yellow-800/50",
                  "cursor-pointer transition-all duration-200",
                  "hover:border-accent hover:bg-accent/10 hover:shadow-md"
                )}
              >
                {item.title && (
                  <h4 className="font-mono text-[9px] font-semibold mb-1 text-foreground/90">
                    {item.title}
                  </h4>
                )}
                <ul className="space-y-0.5">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="font-mono text-[9px] text-foreground/80 leading-tight">
                      {point.startsWith("Key Numbers:") || point.startsWith("Why this matters:") ? (
                        <span className="font-semibold">{point}</span>
                      ) : (
                        `• ${point}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lean-card border border-border/50 bg-card p-2 md:p-3 flex flex-col">
          <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight mb-2 text-foreground flex-shrink-0">
            Unique Value Proposition
          </h3>
          <div className="space-y-2 flex-1 overflow-auto">
            {leanCanvasSections[2].items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick("uvp", "Unique Value Proposition")}
                className={cn(
                  "bg-yellow-200 dark:bg-yellow-900/30 rounded-sm p-2 shadow-sm border border-yellow-300/50 dark:border-yellow-800/50",
                  "cursor-pointer transition-all duration-200",
                  "hover:border-accent hover:bg-accent/10 hover:shadow-md"
                )}
              >
                {item.title && (
                  <h4 className="font-mono text-[9px] font-semibold mb-1 text-foreground/90">
                    {item.title}
                  </h4>
                )}
                <ul className="space-y-0.5">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="font-mono text-[9px] text-foreground/80 leading-tight">
                      {point.startsWith("Key Numbers:") || point.startsWith("Why this matters:") ? (
                        <span className="font-semibold">{point}</span>
                      ) : (
                        `• ${point}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lean-card border border-border/50 bg-card p-2 md:p-3 flex flex-col">
          <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight mb-2 text-foreground flex-shrink-0">
            Unfair Advantage
          </h3>
          <div className="space-y-2 flex-1 overflow-auto">
            {leanCanvasSections[3].items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick("unfair-advantage", "Unfair Advantage")}
                className={cn(
                  "bg-yellow-200 dark:bg-yellow-900/30 rounded-sm p-2 shadow-sm border border-yellow-300/50 dark:border-yellow-800/50",
                  "cursor-pointer transition-all duration-200",
                  "hover:border-accent hover:bg-accent/10 hover:shadow-md"
                )}
              >
                {item.title && (
                  <h4 className="font-mono text-[9px] font-semibold mb-1 text-foreground/90">
                    {item.title}
                  </h4>
                )}
                <ul className="space-y-0.5">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="font-mono text-[9px] text-foreground/80 leading-tight">
                      {point.startsWith("Key Numbers:") || point.startsWith("Why this matters:") ? (
                        <span className="font-semibold">{point}</span>
                      ) : (
                        `• ${point}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lean-card border border-border/50 bg-card p-2 md:p-3 flex flex-col">
          <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight mb-2 text-foreground flex-shrink-0">
            Customer Segments
          </h3>
          <div className="space-y-2 flex-1 overflow-auto">
            {leanCanvasSections[4].items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick("customer-segments", "Customer Segments")}
                className={cn(
                  "bg-yellow-200 dark:bg-yellow-900/30 rounded-sm p-2 shadow-sm border border-yellow-300/50 dark:border-yellow-800/50",
                  "cursor-pointer transition-all duration-200",
                  "hover:border-accent hover:bg-accent/10 hover:shadow-md"
                )}
              >
                {item.title && (
                  <h4 className="font-mono text-[9px] font-semibold mb-1 text-foreground/90">
                    {item.title}
                  </h4>
                )}
                <ul className="space-y-0.5">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="font-mono text-[9px] text-foreground/80 leading-tight">
                      {point.startsWith("Key Numbers:") || point.startsWith("Why this matters:") ? (
                        <span className="font-semibold">{point}</span>
                      ) : (
                        `• ${point}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Key Metrics and Channels */}
        <div className="lean-card border border-border/50 bg-card p-2 md:p-3 flex flex-col md:col-span-2">
          <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight mb-2 text-foreground flex-shrink-0">
            Key Metrics
          </h3>
          <div className="space-y-2 flex-1 overflow-auto">
            {leanCanvasSections[5].items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick("key-metrics", "Key Metrics")}
                className={cn(
                  "bg-yellow-200 dark:bg-yellow-900/30 rounded-sm p-2 shadow-sm border border-yellow-300/50 dark:border-yellow-800/50",
                  "cursor-pointer transition-all duration-200",
                  "hover:border-accent hover:bg-accent/10 hover:shadow-md"
                )}
              >
                {item.title && (
                  <h4 className="font-mono text-[9px] font-semibold mb-1 text-foreground/90">
                    {item.title}
                  </h4>
                )}
                <ul className="space-y-0.5">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="font-mono text-[9px] text-foreground/80 leading-tight">
                      {point.startsWith("Key Numbers:") || point.startsWith("Why this matters:") ? (
                        <span className="font-semibold">{point}</span>
                      ) : (
                        `• ${point}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lean-card border border-border/50 bg-card p-2 md:p-3 flex flex-col md:col-span-2">
          <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight mb-2 text-foreground flex-shrink-0">
            Channels
          </h3>
          <div className="space-y-2 flex-1 overflow-auto">
            {leanCanvasSections[6].items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick("channels", "Channels")}
                className={cn(
                  "bg-yellow-200 dark:bg-yellow-900/30 rounded-sm p-2 shadow-sm border border-yellow-300/50 dark:border-yellow-800/50",
                  "cursor-pointer transition-all duration-200",
                  "hover:border-accent hover:bg-accent/10 hover:shadow-md"
                )}
              >
                {item.title && (
                  <h4 className="font-mono text-[9px] font-semibold mb-1 text-foreground/90">
                    {item.title}
                  </h4>
                )}
                <ul className="space-y-0.5">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="font-mono text-[9px] text-foreground/80 leading-tight">
                      {point.startsWith("Key Numbers:") || point.startsWith("Why this matters:") ? (
                        <span className="font-semibold">{point}</span>
                      ) : (
                        `• ${point}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lean-card border border-border/50 bg-card p-2 md:p-3"></div>

        {/* Row 3: Cost Structure and Revenue Streams */}
        <div className="lean-card border border-border/50 bg-card p-2 md:p-3 flex flex-col md:col-span-2">
          <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight mb-2 text-foreground flex-shrink-0">
            Cost Structure
          </h3>
          <div className="space-y-2 flex-1 overflow-auto">
            {leanCanvasSections[7].items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick("cost-structure", "Cost Structure")}
                className={cn(
                  "bg-yellow-200 dark:bg-yellow-900/30 rounded-sm p-2 shadow-sm border border-yellow-300/50 dark:border-yellow-800/50",
                  "cursor-pointer transition-all duration-200",
                  "hover:border-accent hover:bg-accent/10 hover:shadow-md"
                )}
              >
                {item.title && (
                  <h4 className="font-mono text-[9px] font-semibold mb-1 text-foreground/90">
                    {item.title}
                  </h4>
                )}
                <ul className="space-y-0.5">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="font-mono text-[9px] text-foreground/80 leading-tight">
                      {point.startsWith("Key Numbers:") || point.startsWith("Why this matters:") ? (
                        <span className="font-semibold">{point}</span>
                      ) : (
                        `• ${point}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lean-card border border-border/50 bg-card p-2 md:p-3 flex flex-col md:col-span-3">
          <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight mb-2 text-foreground flex-shrink-0">
            Revenue Streams
          </h3>
          <div className="space-y-2 flex-1 overflow-auto">
            {leanCanvasSections[8].items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick("revenue-streams", "Revenue Streams")}
                className={cn(
                  "bg-yellow-200 dark:bg-yellow-900/30 rounded-sm p-2 shadow-sm border border-yellow-300/50 dark:border-yellow-800/50",
                  "cursor-pointer transition-all duration-200",
                  "hover:border-accent hover:bg-accent/10 hover:shadow-md"
                )}
              >
                {item.title && (
                  <h4 className="font-mono text-[9px] font-semibold mb-1 text-foreground/90">
                    {item.title}
                  </h4>
                )}
                <ul className="space-y-0.5">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="font-mono text-[9px] text-foreground/80 leading-tight">
                      {point.startsWith("Key Numbers:") || point.startsWith("Why this matters:") ? (
                        <span className="font-semibold">{point}</span>
                      ) : (
                        `• ${point}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
