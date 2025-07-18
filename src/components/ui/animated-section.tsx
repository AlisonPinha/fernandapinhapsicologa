import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import React from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in' | 'fade-in-up' | 'scale-in' | 'slide-in-left' | 'slide-in-right'
  delay?: number
  as?: keyof JSX.IntrinsicElements
}

export function AnimatedSection({ 
  children, 
  className, 
  animation = 'fade-in-up',
  delay = 0,
  as: Component = 'div',
  ...props 
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  const ElementComponent = Component as any

  return (
    <ElementComponent
      ref={ref}
      className={cn(
        "transition-all duration-600 ease-out",
        isIntersecting ? `animate-${animation}` : "opacity-0 translate-y-8",
        className
      )}
      style={{ 
        animationDelay: isIntersecting ? `${delay}ms` : undefined 
      }}
      {...props}
    >
      {children}
    </ElementComponent>
  )
}