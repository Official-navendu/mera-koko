import { motion } from "framer-motion";

// Video from public folder
const VIDEO_URL = "/images/video.mp4";

const EmotionalFinale = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-pink-500"
        >
          Happy Valentine's Day
          <br />
          My Koko
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Thank you for being my person. ❤️
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="mt-14 text-5xl"
        >
          💕
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalFinale;
