"use client"

import { useEffect, useState } from "react"

// Simplified motion wrapper to handle prefers-reduced-motion
export const motion = {
  h1: ({ children, initial, animate, transition, className }: any) => {
    const [isVisible, setIsVisible] = useState(false)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
      // Check for prefers-reduced-motion
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)

      // Set animation after delay if motion is allowed
      if (!mediaQuery.matches) {
        const timer = setTimeout(
          () => {
            setIsVisible(true)
          },
          transition?.delay ? transition.delay * 1000 : 0,
        )
        return () => clearTimeout(timer)
      } else {
        setIsVisible(true)
      }
    }, [transition?.delay])

    return (
      <h1
        className={`${className} ${prefersReducedMotion ? "" : isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          transition: prefersReducedMotion ? "none" : `opacity ${transition?.duration || 0.3}s ease-out`,
        }}
      >
        {children}
      </h1>
    )
  },
  p: ({ children, initial, animate, transition, className }: any) => {
    const [isVisible, setIsVisible] = useState(false)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
      // Check for prefers-reduced-motion
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)

      // Set animation after delay if motion is allowed
      if (!mediaQuery.matches) {
        const timer = setTimeout(
          () => {
            setIsVisible(true)
          },
          transition?.delay ? transition.delay * 1000 : 0,
        )
        return () => clearTimeout(timer)
      } else {
        setIsVisible(true)
      }
    }, [transition?.delay])

    return (
      <p
        className={`${className} ${prefersReducedMotion ? "" : isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          transition: prefersReducedMotion ? "none" : `opacity ${transition?.duration || 0.3}s ease-out`,
        }}
      >
        {children}
      </p>
    )
  },
}
