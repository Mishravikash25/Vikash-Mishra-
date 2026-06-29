import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050812]"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 p-1 shadow-[0_0_60px_rgba(124,58,237,0.3)]">
          <div className="absolute inset-3 rounded-full bg-slate-950/95" />
        </div>
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Loading portfolio...</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
