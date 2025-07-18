import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { useImageLoad } from '@/hooks/useImageLoad'

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  aspectRatio?: string
  fallback?: string
  skeletonClassName?: string
}

export function LazyImage({ 
  src, 
  alt, 
  className, 
  aspectRatio = "aspect-auto",
  fallback,
  skeletonClassName,
  ...props 
}: LazyImageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>('')
  const imgRef = useRef<HTMLImageElement>(null)
  const { loaded, error } = useImageLoad(imageSrc)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setImageSrc(src)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [src])

  if (!isVisible || (!loaded && !error)) {
    return (
      <div ref={imgRef} className={cn(aspectRatio, "relative overflow-hidden")}>
        <Skeleton className={cn("w-full h-full", skeletonClassName)} />
      </div>
    )
  }

  if (error && fallback) {
    return (
      <img
        ref={imgRef}
        src={fallback}
        alt={alt}
        className={cn("transition-opacity duration-300", className)}
        {...props}
      />
    )
  }

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={cn(
        "transition-opacity duration-300",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    />
  )
}