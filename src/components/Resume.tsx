import { motion } from 'framer-motion';
import { HiOutlineDownload } from 'react-icons/hi';

const Resume = () => {
  return (
    <section id="resume" className="mt-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="glass-card relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-yellow-300 via-cyan-300 to-yellow-300 opacity-70" />
        <div className="mb-10 flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">Resume</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            View or download my complete resume
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-300">
            Explore the complete PDF preview below, then download or open the full resume for a
            polished summary of my education, experience, and projects.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black/60 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute -left-10 top-8 h-24 w-24 rounded-full bg-yellow-300/10 blur-3xl" />
            <div className="pointer-events-none absolute right-8 top-16 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
            <iframe
              title="Resume Preview"
              src="/resume/Vikash_Mishra_Resume.pdf#view=FitH"
              className="h-[540px] min-h-[420px] w-full rounded-[32px] border border-white/10 bg-slate-950/80"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="space-y-4 rounded-[32px] border border-white/10 bg-slate-900/75 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <h3 className="text-2xl font-semibold text-white">Resume Preview</h3>
              <p className="text-slate-300 leading-7">
                Scroll through the embedded PDF to see the full experience summary, technical
                skills, and project achievements.
              </p>
              <div className="space-y-3 text-sm text-slate-400">
                <p>• Embedded PDF viewer with smooth scroll.</p>
                <p>• Easy download and open actions.</p>
                <p>• Glassmorphism card with premium spacing.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
              <a
                href="/resume/Vikash_Mishra_Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(255,210,63,0.22)]"
              >
                <HiOutlineDownload className="mr-2" />
                Download Resume
              </a>
              <a
                href="/resume/Vikash_Mishra_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:border-yellow-300/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,210,63,0.12)]"
              >
                Open Full Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
