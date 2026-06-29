import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const ref = useRef(null)

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => gsap.to(ref.current, { opacity: 1, duration: 0.8 })
    })

    return () => {
      st.kill()
    }
  }, [])

  return (
    <footer
      ref={ref}
      className="bg-[#111] py-16 px-[5vw] flex justify-between items-center border-t border-white/4"
      style={{ opacity: 0 }}
    >
      <div className="font-bebas text-[2.5rem] tracking-[0.2em] text-white">
        SLICE
      </div>
      <div className="font-dm text-[0.75rem] font-light text-white/28 tracking-[0.1em] text-center">
        Every moment remembered. Nothing lost.
      </div>
      <div className="font-dm text-[0.6rem] tracking-[0.2em] uppercase text-white/18">
        © 2047 Slice Inc.
      </div>
    </footer>
  )
}
