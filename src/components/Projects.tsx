import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="mt-20 scroll-mt-24">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-violet-300">Projects</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Selected work with measurable impact.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400">
          Modern frontend experiences and intelligent tooling built for clarity, responsiveness, and
          scale.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: index * 0.1 }}
            className="glass-card rounded-[32px] border border-white/10 p-7 shadow-xl shadow-slate-950/20"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.32em] text-violet-300">{project.date}</p>
              <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                Featured
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Talk About It
              </a>
              <span className="text-sm text-slate-400">Built with reliable technologies.</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
