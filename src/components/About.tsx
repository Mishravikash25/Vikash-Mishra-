import { motion } from 'framer-motion';
import { personalInfo, leadership } from '../data/portfolio';

const timeline = [
  {
    year: '2024',
    title: 'IBM Virtual Internship',
    subtitle: 'Web, Mobile Development & Marketing',
  },
  {
    year: '2025',
    title: 'Event Head – ENIGMA 3.0',
    subtitle: 'Managed Treasure Hunt event logistics.',
  },
  {
    year: '2026',
    title: 'B.Tech CSE Candidate',
    subtitle: 'Focused on frontend systems and software delivery.',
  },
];

const About = () => {
  return (
    <section id="about" className="mt-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-[32px] border border-white/10 p-8 shadow-glow sm:p-10"
      >
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-violet-300">About</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A modern profile with strong systems thinking.
            </h2>
            <p className="text-slate-300 leading-8">{personalInfo.description}</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Highlights</h3>
            <ul className="mt-6 space-y-5 text-slate-300">
              <li>Problem solving through frontend design and clean architecture.</li>
              <li>Experienced with React workflows, responsive layouts, and Tailwind CSS.</li>
              <li>Strong collaboration skills and growth mindset across projects.</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {timeline.map((event) => (
            <div
              key={event.year}
              className="glass-card rounded-[28px] border border-white/10 p-6 shadow-xl shadow-slate-950/20"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-violet-300">{event.year}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{event.title}</h3>
              <p className="mt-3 text-slate-300">{event.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-slate-950/25">
          <h3 className="text-xl font-semibold text-white">Leadership & Initiative</h3>
          <div className="mt-6 space-y-4">
            {leadership.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.year}</p>
                  </div>
                </div>
                <p className="mt-3 text-slate-300">{item.details[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
