import React from 'react';
import { motion } from 'motion/react';

export default function Statuette() {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="relative w-64 h-96 mx-auto perspective-1000"
    >
      {/* Placeholder for Statuette Image */}
      <div className="w-full h-full bg-gradient-to-b from-[#D4AF37] via-[#F9E27D] to-[#AA8A2E] rounded-full blur-3xl opacity-20 absolute inset-0" />
      <img
        src="https://picsum.photos/seed/trophy/400/600"
        alt="NMTA Statuette"
        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}
