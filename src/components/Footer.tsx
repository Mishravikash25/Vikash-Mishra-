import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.1 }}
      className="border-t border-white/10 bg-slate-950/80 py-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row sm:px-8">
        <p>
          © 2026 Vikash Mishra. Crafted with React, TypeScript, Tailwind CSS, and Framer Motion.
        </p>
        <p>Designed for recruiters and modern engineering teams.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
