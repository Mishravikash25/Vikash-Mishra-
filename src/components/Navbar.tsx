import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const navItems = ['About', 'Skills', 'Projects', 'Resume', 'Experience', 'Achievements', 'Contact'];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="sticky top-5 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6"
    >
      <div className="glass-card border border-yellow-300/15 bg-slate-950/70 px-5 py-4 shadow-soft backdrop-blur-2xl dark:bg-slate-900/80 dark:border-yellow-300/15">
        <div className="flex flex-wrap items-center justify-between gap-4 text-slate-100 dark:text-slate-100">
          <a href="#home" className="text-lg font-semibold tracking-[0.18em] text-white dark:text-white">
            VIKASH MISHRA
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 dark:text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-yellow-300"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-300/20 bg-slate-900/70 text-slate-200 transition hover:border-yellow-200 hover:text-yellow-100"
              aria-label="Toggle theme"
            >
              {isDark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-300/20 bg-slate-900/70 text-slate-200 transition hover:border-yellow-200 hover:text-yellow-100 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 overflow-hidden rounded-3xl border border-yellow-300/10 bg-slate-950/80 px-4 py-4 shadow-xl"
          >
            <div className="grid gap-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-yellow-300/10 hover:text-yellow-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
