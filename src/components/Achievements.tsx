import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';

const Achievements = () => {
  return (
    <section id="achievements" className="mt-24 scroll-mt-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">Achievements</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Awards, milestones, and active growth.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          A compact showcase of standout achievements that demonstrate momentum, leadership, and
          technical execution.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: index * 0.08 }}
            className="relative overflow-hidden rounded-[32px] border border-yellow-300/15 bg-slate-950/80 p-7 shadow-[0_30px_90px_rgba(255,210,63,0.12)]"
          >
            <div className="pointer-events-none absolute -right-6 top-6 h-24 w-24 rounded-full bg-yellow-300/10 blur-3xl" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">{item.label}</p>
              <p className="mt-5 text-5xl font-semibold text-white">{item.value}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description ||
                  'High-impact results from focused problem solving and collaboration.'}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
