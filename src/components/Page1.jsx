import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Page1() {
  const secRef = useRef(null)
  const lines = useRef([])
  const tagRef = useRef(null)
  const scrollRef = useRef(null)
  const eyeRef = useRef(null)
  const bgRef = useRef(null)
  const decoRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.15 })
    tl.to(eyeRef.current, { width: 60, duration: 0.7, ease: 'power3.out' })
      .to(decoRef.current, { height: 130, duration: 0.9, ease: 'power3.out' }, '-=.3')
      .to(lines.current, { y: 0, duration: 1.15, ease: 'power4.out', stagger: 0.12 }, '-=.5')
      .to(tagRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=.5')
      .to(scrollRef.current, { opacity: 1, duration: 0.7 }, '-=.3')

    const bgAnim = gsap.to(bgRef.current, {
      x: -80,
      duration: 22,
      ease: 'none',
      repeat: -1,
      yoyo: true
    })

    const st = ScrollTrigger.create({
      trigger: secRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
      animation: gsap.to(bgRef.current, {
        yPercent: 25,
        ease: 'none'
      })
    })

    const scrollCircleAnim = gsap.to('.scroll-circle', {
      scale: 1.15,
      duration: 1.2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    })

    return () => {
      tl.kill()
      bgAnim.kill()
      st.kill()
      scrollCircleAnim.kill()
    }
  }, [])

  return (


    <section
      id="page1"
      ref={secRef}
      className="min-h-screen  flex flex-col justify-end px-[5vw] pb-[6vh] relative overflow-hidden"
    >
      <div className="fixed top-0 left-0 w-screen h-screen -z-10">
  <img
    src="src/photo/bgggg.jpg"
   
    className="w-full h-full opacity-100"
  />
</div>
      <div
        ref={bgRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[clamp(12rem,32vw,34rem)] text-transparent whitespace-nowrap pointer-events-none select-none tracking-[0.05em]"
        style={{ WebkitTextStroke: '1px rgba(255,255,255,.03)' }}
      >
        LIFE
      </div>
      <div
        ref={decoRef}
        className="absolute top-[15vh] right-[8vw] w-px h-0 bg-gradient-to-b from-accent to-transparent"
      />
      <div className="flex items-center gap-6 mb-10 overflow-hidden">
        <div
          ref={eyeRef}
          className="h-px bg-accent"
          style={{ width: 0 }}
        />
        <span className="font-dm text-[0.65rem] font-medium tracking-[0.35em] uppercase text-accent whitespace-nowrap">
          Slice — A living archive of the human day
        </span>
      </div>
      <h1 className="hero-title font-bebas text-[clamp(5rem,17vw,18rem)] leading-[0.88] tracking-[0.02em] overflow-hidden relative z-[2]">
        {['The beauty ', 'you almost', 'missed.'].map((t, i) => (
          // The beauty you almost missed.
          <span key={i} className="overflow-hidden block">
            <span
              ref={(el) => (lines.current[i] = el)}
              className="inline-block"
              style={{
                transform: 'translateY(110%)',
                color: i === 2 ? '#ff3c2e' : '#f7f4ee'
              }}
            >
              {t}
            </span>
          </span>
        ))}
      </h1>
      <div className="flex justify-between items-end mt-12 z-[2] relative">
        <p
          ref={tagRef}
          className="font-dm text-[clamp(0.85rem,1.4vw,1.15rem)] font-semibold leading-[1.75]  text-gray-400 max-w-[400px]"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          Not the highlights. Not the milestones.
          <br />
          The 11:17 a.m. when the coffee was still warm
          <br />
          and you finally exhaled. We built this for <em className="text-white">that.</em>
        </p>
        <div
          ref={scrollRef}
          className="flex flex-col items-end gap-2.5"
          style={{ opacity: 0 }}
        >
          <span className="font-bebas text-base text-white/20">
            ↓ Scroll
          </span>
          <a
            href="#p1white"
            className="scroll-circle w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-lg text-white relative overflow-hidden"
          >
            <span className="relative z-[1]">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
