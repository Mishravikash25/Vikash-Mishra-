import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="mt-24 scroll-mt-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">Skills</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Capabilities that move projects forward.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          A curated set of frontend, backend, tooling, and design skills with a focus on polished
          interfaces and scalable architecture.
        </p>
      </div>

      <div className="overflow-hidden rounded-[38px] border border-yellow-300/10 bg-slate-950/70 p-6 shadow-[0_40px_120px_rgba(255,210,63,0.12)] backdrop-blur-xl">
        <div className="glass-card rounded-[32px] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">Skill marquee</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">
                A motion-driven skill stack.
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              Highlighting the technologies and languages I use most, wrapped in a polished animated
              display.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-yellow-300/20 bg-slate-950/90 px-4 py-5">
            <div className="marquee flex gap-8 whitespace-nowrap text-sm text-slate-100">
              {skills.flatMap((skill) => [
                <span
                  key={`${skill.title}-title`}
                  className="skill-pill bg-yellow-300/5 text-yellow-300"
                >
                  {skill.title}
                </span>,
                ...skill.items.map((item) => (
                  <span key={item} className="skill-pill bg-white/5 text-slate-100">
                    {item}
                  </span>
                )),
              ])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
