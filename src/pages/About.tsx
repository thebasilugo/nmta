import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Globe, Award } from 'lucide-react';
import Statuette from '../components/Statuette';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif mb-8">About <span className="gold-text italic">NMTA</span></h1>
          <p className="text-xl text-white/60 font-light leading-relaxed mb-8">
            The Nollywood Movie and Television Awards (NMTA) is more than an institution; it is a movement dedicated to the global recognition of African storytelling.
          </p>
          <div className="flex items-center gap-4 p-6 glass-card border-l-4 border-l-[#D4AF37]">
            <Award className="text-[#D4AF37] shrink-0" size={32} />
            <p className="text-sm italic text-white/80">"Celebrating excellence in Nollywood cinema and television since 2010."</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:block"
        >
          <Statuette />
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12"
        >
          <Target className="w-12 h-12 text-[#D4AF37] mb-8" />
          <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
          <p className="text-white/70 font-light leading-relaxed">
            NMTA is dedicated to recognising and celebrating excellence in the Nigeria Film and Television sector, and to a large extent, rewards talents in Africa Cinema and Africa Diaspora. We strive to create a standard of excellence that inspires future generations of storytellers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12"
        >
          <Eye className="w-12 h-12 text-[#D4AF37] mb-8" />
          <h2 className="text-3xl font-serif mb-6">Our Vision</h2>
          <p className="text-white/70 font-light leading-relaxed">
            To be the premier platform for celebrating and rewarding excellence in Africa Cinema and Television sector, with special focus on Nollywood productions, and other outstanding film works from other African countries and Africa in diaspora.
          </p>
        </motion.div>
      </section>

      {/* Long Term Goals */}
      <section className="bg-white/5 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Long-Term <span className="gold-text">Goals</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Globe className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-4">Global Recognition</h3>
              <p className="text-white/50 text-sm font-light">Ensuring Nigerian and African productions are globally appreciated for their unique storytelling and cultural richness.</p>
            </div>
            <div className="text-center">
              <Award className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-4">Technical Excellence</h3>
              <p className="text-white/50 text-sm font-light">Promoting and rewarding high technical standards in cinematography, sound design, and post-production.</p>
            </div>
            <div className="text-center">
              <Target className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-4">Cultural Authenticity</h3>
              <p className="text-white/50 text-sm font-light">Preserving the essence of African narratives while embracing modern cinematic techniques.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
