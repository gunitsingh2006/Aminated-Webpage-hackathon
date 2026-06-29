import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WhiteBlock1() {
  const secRef = useRef(null)
  const curtRef = useRef(null)
  const labRef = useRef(null)
  const wds = useRef([])
  const bodyRef = useRef(null)
  const stRef = useRef(null)

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: secRef.current,
      start: 'top 70%',
      onEnter: () => {
        gsap.to(curtRef.current, {
          scaleX: 0,
          duration: 1.2,
          ease: 'power4.inOut',
          transformOrigin: 'right'
        })
        gsap.to(labRef.current, { opacity: 1, duration: 0.7, delay: 0.6 })
        gsap.to(wds.current, {
          y: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.1,
          delay: 0.5
        })
        gsap.to(bodyRef.current, { opacity: 1, duration: 0.8, delay: 1.1 })
        gsap.to(stRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 1.3 })
      }
    })

    return () => {
      st.kill()
    }
  }, [])

  const words = [['Pause for a'], ["moment.", 'Notice it.'], ['Share your', ' slice.']]

  return (
    <section
      id="p1white"
      ref={secRef}
      className="wb1-grid bg-white grid grid-cols-2 min-h-[80vh] overflow-hidden"
    >
      <div className="relative overflow-hidden bg-[#e8e0d0] min-h-[80vh] flex items-center justify-center">
        <div className="w-[70%] h-[70%] rounded bg-gradient-to-br from-[#d4c4a8] to-[#b8a88a] flex items-center justify-center text-5xl text-white/35">
          <img className='w-full absolute' src="src/photo/bggg.jpg" alt="" />
        </div>
        <div
          ref={curtRef}
          className="absolute inset-0 bg-accent"
        />
      </div>
      <div className="bg-white py-[8vw] px-[5vw] flex flex-col justify-center">
        
        <h2 className="font-unbounded font-black text-[clamp(2rem,4vw,4.2rem)] leading-[1.05] text-black mb-8 overflow-hidden">
          {words.map((line, li) => (
            <div key={li} className="overflow-hidden">
              {line.map((w, wi) => (
                <span
                  key={wi}
                  ref={(el) => (wds.current[li * 3 + wi] = el)}
                  className="inline-block mr-[0.35em]"
                  style={{ transform: 'translateY(110%)' }}
                >
                  {w}
                </span>
              ))}
            </div>
          ))}
        </h2>

        

     
        <div
          ref={stRef}
          className="flex gap-1 mt-12"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
        <p className="font-dm text-base font-bold leading-[1.85] text-black/70 max-w-[360px] mt-4">
          Because every ordinary <br />moment is worth being remembered.
        </p>
          
        </div>
      </div>
    </section>
  )
}
