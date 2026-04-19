import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const posRef = useRef({ x: -400, y: -400 })
  const rafRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.transform = `translate(${posRef.current.x - 200}px, ${posRef.current.y - 200}px)`
            glowRef.current.style.opacity = '1'
          }
          rafRef.current = null
        })
      }
    }
    const leave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0'
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9990] top-0 left-0 hidden md:block"
      style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)',
        borderRadius: '50%',
        opacity: 0,
        transition: 'opacity 0.4s ease',
        willChange: 'transform, opacity',
      }}
    />
  )
}
