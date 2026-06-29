import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const floatX = useTransform(mouseX, [0, window.innerWidth], [-18, 18]);
  const floatY = useTransform(mouseY, [0, window.innerHeight], [-14, 14]);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="hero-bg relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,210,63,0.15),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(0,180,255,0.15),transparent_35%),radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,#050816_0%,#02040a_40%,#000000_100%)] pointer-events-none" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[15%] top-[22%] h-8 w-8 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute right-[14%] top-[26%] h-10 w-10 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 top-[22%] flex justify-center">
        <div className="h-[130px] w-[340px] rounded-full bg-black/50 blur-[80px]" />
      </div>

      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col items-center justify-center px-6 py-14 sm:px-10 lg:px-16">
        <motion.div
          style={{ x: floatX, y: floatY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative flex justify-center"
        >
          <img
            src="/images/profile.png"
            alt="Vikash Mishra"
            className="hero-image h-[520px] w-full max-w-[550px] object-contain"
          />
          <div className="pointer-events-none absolute -bottom-10 left-1/2 h-[120px] w-[240px] -translate-x-1/2 rounded-full bg-black/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-[22%] h-[180px] w-[180px] rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-[22%] h-[200px] w-[200px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute left-[10%] top-[8%] h-3 w-3 rounded-full bg-white/70 blur-xl" />
          <div className="pointer-events-none absolute left-[20%] top-[35%] h-4 w-4 rounded-full bg-white/60 blur-xl" />
          <div className="pointer-events-none absolute right-[18%] top-[22%] h-3 w-3 rounded-full bg-white/70 blur-xl" />
          <div className="pointer-events-none absolute right-[14%] top-[46%] h-4 w-4 rounded-full bg-white/50 blur-xl" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } } }}
          className="mt-14 flex w-full flex-col items-center text-center gap-8 px-4 sm:px-6"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-sm uppercase tracking-[0.45em] text-yellow-300"
          >
            Cinematic frontend experience
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="text-[clamp(5rem,9vw,9rem)] leading-[0.9] font-black tracking-[-0.05em] text-transparent bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text shadow-[0_0_60px_rgba(255,255,255,0.08)] text-shimmer"
          >
            VIKASH MISHRA
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
            className="space-y-4 text-lg leading-[1.9] text-slate-300 sm:text-xl"
          >
            <TypeAnimation
              sequence={[
                'Computer Science Engineering Student',
                2000,
                'Frontend Developer',
                2000,
                'Aspiring Software Engineer',
                2000,
              ]}
              wrapper="p"
              speed={60}
              repeat={Infinity}
              className="inline-block"
            />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 px-10 py-4 text-sm font-semibold text-slate-950 shadow-[0_24px_90px_rgba(255,210,63,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_100px_rgba(255,210,63,0.28)]"
            >
              View Projects
              <BsArrowRight className="ml-3" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-4 text-sm font-semibold text-white transition duration-300 hover:border-yellow-300/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,210,63,0.12)]"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
