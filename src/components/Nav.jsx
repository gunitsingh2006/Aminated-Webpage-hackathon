import { motion } from 'framer-motion'

export default function Nav({ visible }) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-[500] px-16 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="font-bebas text-3xl tracking-[0.15em] text-white">
        SLICE OF LIFE
      </div>
      <ul className="desktop-nav-links flex gap-12 list-none">
        {['Intro', 'Twist', 'Climax'].map((ch, i) => (
          <li key={i}>
            <a
              href={`#page${i + 1}`}
              className="font-dm text-[0.68rem] font-medium tracking-[0.2em] uppercase text-white/45 transition-colors duration-300 hover:text-white"
            >
              {ch}
            </a>
          </li>
        ))}
      </ul>
      <div className="font-dm text-[0.6rem] tracking-[0.2em] uppercase text-accent border border-accent px-4 py-[0.4em]">
        The Logic Loom
      </div>
    </motion.nav>
  )
}
