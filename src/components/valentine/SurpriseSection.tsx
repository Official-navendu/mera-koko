import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

const SurpriseSection = () => {
  const [revealed, setRevealed] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [hearts, setHearts] = useState<
    { id: number; x: number; y: number; size: number }[]
  >([]);

  const spawnHearts = useCallback((count: number) => {
    const newHearts = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 14,
    }));
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 3000);
  }, []);

  const handleSurprise = () => {
    spawnHearts(30);
    setRevealed(true);
  };

  const handleAccept = () => {
    setAccepted(true);
    spawnHearts(50);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
      {/* Exploding hearts */}
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.span
            key={h.id}
            initial={{ opacity: 1, scale: 0, x: "50vw", y: "50vh" }}
            animate={{
              opacity: 0,
              scale: 1,
              x: `${h.x}vw`,
              y: `${h.y}vh`,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="fixed z-40 pointer-events-none"
            style={{ fontSize: h.size }}
          >
            ❤️
          </motion.span>
        ))}
      </AnimatePresence>

      <div className="text-center relative z-10">
        {!revealed && !accepted && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSurprise}
            className="px-10 py-5 text-xl md:text-2xl font-bold rounded-full bg-primary text-primary-foreground glow-red hover:brightness-110 transition-all"
          >
            ✨ I wanna say something! click here ✨
          </motion.button>
        )}

        <AnimatePresence>
          {revealed && !accepted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold glow-pink">
                Will you be my Valentine? ❤️
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAccept}
                  className="px-12 py-4 text-xl font-bold rounded-full bg-primary text-primary-foreground glow-red"
                >
                  Yes! ❤️
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAccept}
                  className="px-10 py-4 text-lg font-bold rounded-full glassmorphism text-foreground hover:bg-primary/20 transition-colors"
                >
                  Heinnnn? 😄
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {accepted && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-bold glow-pink">
                I Love You So Much Mera Pyara Babyyyy!💕
              </h2>
              <p
                className="text-xl text-muted-foreground italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                You just made me the happiest person alive ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SurpriseSection;
