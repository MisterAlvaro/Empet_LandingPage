"use client"

import type React from "react"

import { useEffect } from "react"

interface UseIntersectionAnimationProps {
  ref: React.RefObject<HTMLElement>
  targetSelector: string
  animationClass: string
  threshold?: number
  rootMargin?: string
  delay?: number
}

export function useIntersectionAnimation({
  ref,
  targetSelector,
  animationClass,
  threshold = 0.1,
  rootMargin = "0px -100px",
  delay = 0,
}: UseIntersectionAnimationProps) {
  useEffect(() => {
    const observerOptions = {
      threshold,
      rootMargin,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(targetSelector)
          elements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add(animationClass)
            }, index * delay)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, targetSelector, animationClass, threshold, rootMargin, delay])
}
