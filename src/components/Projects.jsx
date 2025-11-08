import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: 'Interactive 3D Showcase',
    desc: 'A Spline-powered landing with physics-based micro-interactions.',
    tags: ['Spline', 'React', 'Three'],
    link: 'https://github.com/',
    live: '#',
  },
  {
    title: 'Modern Portfolio',
    desc: 'Clean, minimal, and fast. Built with Vite, React, and Tailwind.',
    tags: ['Vite', 'Tailwind', 'Framer Motion'],
    link: 'https://github.com/',
    live: '#',
  },
  {
    title: 'API-first App',
    desc: 'Full-stack app with FastAPI backend and MongoDB persistence.',
    tags: ['FastAPI', 'MongoDB', 'Full-stack'],
    link: 'https://github.com/',
    live: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section id="projects" ref={ref} className="relative py-28 bg-slate-950">
      <motion.div style={{ y }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-3 text-white/70">Curated works blending aesthetics and performance.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5 hover:border-white/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="pointer-events-none absolute -inset-1 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.25),rgba(14,165,233,0.25),rgba(236,72,153,0.25),rgba(99,102,241,0.25))] blur-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Github size={18} /> Code
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
