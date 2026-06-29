import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const move = (e) => {
      dot.style.transform = `translate(${e.clientX - 7}px, ${e.clientY - 7}px)`
      ring.style.transform = `translate(${e.clientX - 22}px, ${e.clientY - 22}px)`
    }

    const enter = () => {
      dot.style.transform += ' scale(2.5)'
      dot.style.background = '#ffcf00'
    }

    const leave = () => {
      dot.style.background = '#ff3c2e'
    }

    window.addEventListener('mousemove', move)

    const interactiveElements = document.querySelectorAll('a, button, .feature-card, .white-col')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none w-[14px] h-[14px] rounded-full bg-accent top-0 left-0 mix-blend-difference transition-[background] duration-200 will-change-transform"
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none w-11 h-11 rounded-full border-[1.5px] border-white/40 top-0 left-0 transition-transform duration-[220ms] will-change-transform"
        style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
      />
    </>
  )
}
