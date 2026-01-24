"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !videoRef.current) return

    const ctx = gsap.context(() => {
      // Text fade in
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Video fade in
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="video" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      <div ref={contentRef} className="mb-12">
        <p className="font-mono text-lg md:text-xl text-foreground leading-relaxed max-w-3xl">
          BHAI, NOT PRACTICALLY POSSIBLE... Wait my dear bhai listen to our interactions
        </p>
      </div>

      <div ref={videoRef} className="relative w-full max-w-5xl aspect-video bg-card border border-border/50 rounded-sm overflow-hidden">
        {/* Video placeholder - replace with actual video element */}
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <div className="text-center">
            <p className="font-mono text-sm text-muted-foreground mb-4">Video will be embedded here</p>
            <p className="font-mono text-xs text-muted-foreground/60">
              Replace this div with your video element (iframe, video tag, etc.)
            </p>
          </div>
        </div>
        {/* 
        Example video embed:
        <iframe
          className="absolute inset-0 w-full h-full"
          src="YOUR_VIDEO_URL"
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        */}
      </div>
    </section>
  )
}
