import { useState, useEffect } from 'react'

export function useImageLoad(src: string) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!src) return

    const img = new Image()
    
    img.onload = () => {
      setLoaded(true)
      setError(false)
    }
    
    img.onerror = () => {
      setError(true)
      setLoaded(false)
    }
    
    img.src = src
    
    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { loaded, error }
}