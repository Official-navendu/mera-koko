import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const VIDEO_URL =
  "https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4";

const CinematicIntro = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={step >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 glow-pink"
        >
          Hey My Love ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={step >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl text-muted-foreground italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          This little space on the internet belongs to us...
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-muted-foreground text-xs tracking-[0.25em] uppercase">
          Scroll to feel loved ❤️
        </span>
      </motion.div>
    </section>
  );
};

export default CinematicIntro;
