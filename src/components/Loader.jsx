import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let n = 0
    const iv = setInterval(() => {
      n += Math.floor(Math.random() * 16) + 4
      if (n >= 100) {
        n = 100
        clearInterval(iv)
        setCount(100)
        setTimeout(() => {
          gsap.to(ref.current, {
            clipPath: 'inset(0 0 100% 0)',
            duration: 0.9,
            ease: 'power4.inOut',
            onComplete: onDone
          })
        }, 300)
        return
      }
      setCount(n)
    }, 55)

    return () => clearInterval(iv)
  }, [onDone])

  return (
    <div
      ref={ref}
      className="fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center gap-8"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
    >
      <div className="font-bebas text-[clamp(7rem,20vw,18rem)] leading-none text-white">
        {count}
      </div>
      <div className="w-[200px] h-px bg-white/10 overflow-hidden">
        <div
          className="h-full bg-accent transition-[width] duration-100 ease-linear"
          style={{ width: `${count}%` }}
        />
      </div>
      <div className="font-unbounded text-[0.55rem] tracking-[0.35em] uppercase text-white/20">
        LOADING SLICE
      </div>
    </div>
  )
}
