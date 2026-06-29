import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields before sending your message.');
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please use a valid email address.');
      setStatus('error');
      return;
    }

    setError('');
    setStatus('success');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="mt-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9 }}
        className="relative overflow-hidden rounded-[40px] border border-yellow-300/10 bg-slate-950/70 p-6 shadow-[0_40px_120px_rgba(255,210,63,0.12)] backdrop-blur-xl"
      >
        <div className="pointer-events-none absolute -left-16 top-16 h-44 w-44 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
              Let’s build your next software experience together.
            </h2>
            <p className="mt-5 max-w-xl text-slate-300 leading-7">
              Reach out for internships, frontend roles, or collaborative projects. I bring polished
              execution, thoughtful layouts, and clean interactions.
            </p>

            <div className="mt-10 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3 rounded-3xl border border-yellow-300/10 bg-slate-900/80 px-4 py-4">
                <HiOutlineMail size={20} className="text-yellow-300" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-yellow-300/10 bg-slate-900/80 px-4 py-4">
                <span className="text-yellow-300">📞</span>
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-yellow-300/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-yellow-200 hover:bg-slate-900/95"
              >
                <BsLinkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-yellow-300/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-yellow-200 hover:bg-slate-900/95"
              >
                <BsGithub size={18} /> GitHub
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-5 rounded-[32px] border border-yellow-300/10 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20"
          >
            <div className="space-y-3">
              <label className="text-sm text-slate-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="w-full rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-300/60 focus:ring-2 focus:ring-yellow-300/20"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm text-slate-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                className="w-full rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-300/60 focus:ring-2 focus:ring-yellow-300/20"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm text-slate-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about your project"
                className="w-full rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-300/60 focus:ring-2 focus:ring-yellow-300/20"
              />
            </div>
            {status === 'error' && <p className="text-sm text-rose-300">{error}</p>}
            {status === 'success' && (
              <p className="text-sm text-emerald-300">
                Message sent successfully. I will reply soon.
              </p>
            )}
            <button
              type="submit"
              className="glow-button w-full rounded-full px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:scale-[1.01]"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
