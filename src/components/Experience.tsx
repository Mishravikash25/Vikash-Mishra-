import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="mt-24 scroll-mt-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">Experience</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Career milestones crafted with intention.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          Real-world internships, collaborative engineering, and fast-paced project delivery in
          frontend and full-stack environments.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[40px] border border-yellow-300/10 bg-slate-950/70 p-6 shadow-[0_40px_120px_rgba(255,210,63,0.12)] backdrop-blur-xl">
        <div className="pointer-events-none absolute -left-24 top-16 h-48 w-48 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative border-l border-yellow-300/30 pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-yellow-300/80 to-transparent">
          {experience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-14 relative pl-8"
            >
              <div className="absolute left-[-30px] top-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-300/70 bg-slate-950/95 text-yellow-300 shadow-[0_0_40px_rgba(255,210,63,0.12)]">
                <span className="text-sm font-semibold">{index + 1}</span>
              </div>
              <div className="glass-card rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">
                      {item.date}
                    </p>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.subtitle}</p>
                  </div>
                  <div className="rounded-3xl border border-yellow-300/10 bg-slate-950/70 px-4 py-3 text-right text-sm text-slate-300">
                    <p className="font-semibold text-yellow-200">Impact</p>
                    <p>{item.impact || 'Delivered quality work with measurable outcomes.'}</p>
                  </div>
                </div>
                <ul className="mt-5 grid gap-3 text-slate-300 sm:grid-cols-2">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="rounded-3xl border border-slate-800/80 bg-slate-950/75 p-4 text-sm leading-6 text-slate-200"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
