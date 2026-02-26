import React from 'react';
import { motion } from 'motion/react';
import { Film } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-8"
      >
        <Film className="w-20 h-20 text-[#D4AF37]" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-serif gold-text tracking-widest uppercase"
      >
        NMTA
      </motion.h2>
      <motion.div
        className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
      >
        <motion.div
          animate={{
            x: [-200, 200]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full bg-[#D4AF37]"
        />
      </motion.div>
    </motion.div>
  );
}
