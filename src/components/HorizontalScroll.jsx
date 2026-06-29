import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScroll() {
  const wrapRef = useRef(null)
  const innerRef = useRef(null)
  const animRef = useRef(null)
  const stRef = useRef(null)

  useEffect(() => {
    const inner = innerRef.current
    const wrap = wrapRef.current
    if (!inner || !wrap) return

    const setupScroll = () => {
      const getScrollDistance = () => {
        return inner.scrollWidth - window.innerWidth
      }

      if (animRef.current) animRef.current.kill()
      if (stRef.current) stRef.current.kill()

      const scrollDistance = getScrollDistance()
      
      if (scrollDistance <= 0) return

      animRef.current = gsap.to(inner, {
        x: -scrollDistance,
        ease: 'none',
        duration: 1
      })

      stRef.current = ScrollTrigger.create({
        trigger: wrap,
        pin: true,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        scrub: 1.2,
        animation: animRef.current,
        invalidateOnRefresh: true
      })
    }

    const timeoutId = setTimeout(() => {
      setupScroll()
      ScrollTrigger.refresh()
    }, 200)

    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (stRef.current) stRef.current.kill()
        if (animRef.current) animRef.current.kill()
        setupScroll()
        ScrollTrigger.refresh()
      }, 150)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
      if (stRef.current) stRef.current.kill()
      if (animRef.current) animRef.current.kill()
    }
  }, [])

  const panels = [
    {
      bg: 'bg-accent',
      tc: 'text-black',
      xt: 'text-black/60',
      stroke: 'rgba(0,0,0,.06)',
      num: 'I',
      title: 'A Normal\n Day',
      text: 'The alarm rang. The sun slipped through the window.Somewhere, someone rushed out the door with unfinished breakfast.It was just another ordinary dayBut at 8:12 AM, a father fixed his daughter’s hair before school.At 1:45 PM, a student smiled after finally understanding something difficult.At 9:30 PM, someone sat quietly, thinking about a dream they haven’t told anyone about.No applause.No headlines.Just life — quietly happening.That’s where Slice of Life begins.Not in the extraordinary.But in the everyday.'
    },
    {
      bg: 'bg-black',
      tc: 'text-white',
      xt: 'text-white/45',
      stroke: 'rgba(255,255,255,.05)',
      num: 'II',
      title: 'Look Closer',
      text: "We often think important moments are loud.  Promotions. Celebrations. Big announcements.  But the truth is — the moments that shape us are usually small.  The deep breath before speaking up. The silent decision to try again. The simple “Are you okay?” that changes someone’s day.  Slice of Life is a space created to notice these moments.  Here, stories aren’t polished to impress. They’re shared to connect.  You can read reflections from strangers who feel familiar. You can see pieces of your own life in someone else’s words. You can pause — in a world that rarely does.  This platform isn’t about showing a perfect life. It’s about showing a real one.  Because ordinary doesn’t mean meaningless.  It means human.    "
    },
    {
      bg: 'bg-white',
      tc: 'text-black',
      xt: 'text-black/50',
      stroke: 'rgba(0,0,0,.06)',
      num: 'III',
      title: 'The Realization',
      text: "At some point, you realize something important. The small moments you ignored were actually shaping you. The quiet resilience. The unnoticed growth. The strength it took just to keep going. Slice of Life is not just a website. It’s a reminder that your story matters — even the parts you think don’t. Especially those parts. And maybe today won’t be extraordinary. But maybe… it doesn’t need to be. "
    }
  ]

  return (
    <div
      ref={wrapRef}
      className="overflow-hidden h-screen relative"
    >
      <div
        ref={innerRef}
        className="flex w-max h-full"
      >
        {panels.map((p, i) => (
          <div
            key={i}
            className={`hs-panel w-screen h-screen shrink-0 flex items-center justify-center px-[10vw] relative overflow-hidden ${p.bg}`}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[18rem] text-transparent pointer-events-none leading-none"
              style={{ WebkitTextStroke: `1px ${p.stroke}` }}
            >
              {p.num}
            </div>
            <div className="relative z-[2]">
              <h3 className={`font-unbounded font-black text-[clamp(2rem,5vw,5rem)] leading-[1.1] mb-8 whitespace-pre-line ${p.tc}`}>
                {p.title}
              </h3>
              <p className={`font-dm text-base font-light leading-[1.85] max-w-[380px] ${p.xt}`}>
                {p.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
