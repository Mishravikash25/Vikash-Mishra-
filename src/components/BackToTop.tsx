import { useEffect, useState } from 'react';
import { HiChevronUp } from 'react-icons/hi';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-900/90 text-white shadow-[0_14px_38px_rgba(15,23,42,0.3)] transition hover:-translate-y-1 hover:bg-violet-500/95"
      aria-label="Back to top"
    >
      <HiChevronUp size={24} />
    </button>
  );
};

export default BackToTop;
