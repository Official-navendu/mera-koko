import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Images from public folder (NO imports needed)
const PHOTOS = [
  "/images/photo1.jpeg",
  "/images/photo2.jpeg",
  "/images/photo3.jpeg",
  "/images/photo4.jpeg",
  "/images/photo5.jpeg",
  "/images/photo6.jpeg",
  "/images/photo7.jpeg",
  "/images/photo8.jpeg",
];

const MemoryGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + PHOTOS.length) % PHOTOS.length);
  };

  return (
    <section className="relative py-24 px-6 md:px-12">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-pink-500"
      >
        Our Beautiful Moments
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
        {PHOTOS.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-[3/2] rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setSelected(i)}
          >
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Left */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-4 md:left-10 text-white/70 hover:text-white"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={PHOTOS[selected]}
              alt={`Memory ${selected + 1}`}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-4 md:right-10 text-white/70 hover:text-white"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryGallery;
