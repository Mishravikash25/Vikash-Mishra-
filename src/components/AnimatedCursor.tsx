import { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a, button, input, textarea');
    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnter);
      link.addEventListener('mouseleave', onMouseLeave);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnter);
        link.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[60]"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div
        className={`h-6 w-6 rounded-full border border-violet-300/80 bg-violet-400/10 transition-all duration-300 ${
          hovered ? 'scale-110 opacity-100' : 'scale-75 opacity-80'
        }`}
      />
    </div>
  );
};

export default AnimatedCursor;
