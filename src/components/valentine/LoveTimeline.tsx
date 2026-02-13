import { motion } from "framer-motion";

const milestones = [
  {
    title: "The Day We Met",
    description:
      "The moment that changed everything. One look, and I knew my life would never be the same.",
    icon: "💫",
  },
  {
    title: "The Day I Realized I Love You",
    description:
      "It wasn't a single moment — it was every moment. But one day, my heart finally said it out loud.",
    icon: "💕",
  },
  {
    title: "Every Moment With You",
    description:
      "Every laugh, every silence, every adventure — they all became my favorite memories.",
    icon: "✨",
  },
  {
    title: "Forever With You",
    description:
      "I would still choose you. In this lifetime. In the next one. In every version of the universe.",
    icon: "💍",
  },
];

const LoveTimeline = () => {
  return (
    <section className="relative py-24 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 glow-pink"
      >
        Our Love Story
      </motion.h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`relative flex items-start mb-20 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-row`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary glow-red z-10" />

            {/* Content */}
            <div
              className={`ml-14 md:ml-0 ${
                i % 2 === 0
                  ? "md:pr-16 md:text-right md:w-1/2"
                  : "md:pl-16 md:text-left md:ml-auto md:w-1/2"
              }`}
            >
              <div className="glassmorphism rounded-2xl p-6 md:p-8">
                <span className="text-3xl mb-3 block">{m.icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
                  {m.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem",
                  }}
                >
                  {m.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoveTimeline;
