import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-3 text-white/70">Open for collaborations, freelance, and full-time roles.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form));
            const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
            const body = encodeURIComponent(`${data.message}\n\n— ${data.name}\n${data.email}`);
            window.location.href = `mailto:${data.to || 'hello@example.com'}?subject=${subject}&body=${body}`;
          }}
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">Your name</label>
            <input name="name" required className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Jane Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">Email</label>
            <input name="email" type="email" required className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="you@email.com" />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea name="message" rows={4} required className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Tell me about your project..." />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-white/70">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-white"><Mail size={18}/> hello@example.com</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github size={18}/> GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Linkedin size={18}/> LinkedIn</a>
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition">Send</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
