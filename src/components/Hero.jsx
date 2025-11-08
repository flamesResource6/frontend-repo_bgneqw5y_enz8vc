import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-screen items-center">
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aesthetic Parallax Portfolio
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-white/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Tech-forward. Playful. Modern. Crafted with 3D interactivity and buttery-smooth scroll effects.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 left-0 right-0 h-64 bg-gradient-to-t from-slate-950/90 to-transparent" />
    </section>
  );
}
