import { motion } from 'framer-motion';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="mt-24 scroll-mt-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">Education</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Academic achievements with a visual edge.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          A concise gallery of degrees, certifications, and academic honors designed for recruiters
          and hiring managers.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/80 shadow-xl shadow-slate-950/30"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-yellow-300 via-transparent to-cyan-300 opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,210,63,0.14),_transparent_35%)]" />
            <div className="relative p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">{item.year}</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">{item.degree}</h3>
              <p className="mt-4 text-slate-300">{item.institution}</p>
              <div className="mt-6 rounded-[28px] border border-yellow-300/10 bg-slate-900/75 px-5 py-4 text-sm text-slate-200 transition group-hover:bg-slate-900/95">
                <p className="font-semibold text-yellow-200">Result</p>
                <p className="mt-2">{item.result}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
