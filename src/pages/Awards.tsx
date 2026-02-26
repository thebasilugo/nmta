import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES, JURY, PATRONS } from '../constants';
import { Award, Users, ShieldCheck, Star } from 'lucide-react';

export default function Awards() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-6">NMTA Awards <span className="gold-text italic">Categories</span></h1>
        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
          Recognizing excellence across all aspects of African cinema and television.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <section className="mb-32">
        <div className="flex items-center gap-3 mb-12">
          <Award className="text-[#D4AF37]" size={32} />
          <h2 className="text-3xl font-serif">Award Categories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-8 hover:border-[#D4AF37]/50 transition-all group"
            >
              <h3 className="text-xl font-serif mb-4 group-hover:gold-text transition-colors">{cat.title}</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Jury Members */}
      <section className="mb-32">
        <div className="flex items-center gap-3 mb-12">
          <Users className="text-[#D4AF37]" size={32} />
          <h2 className="text-3xl font-serif">The People Behind NMTA</h2>
        </div>
        <p className="text-white/60 mb-12 max-w-3xl font-light">
          Our distinguished jury comprises industry veterans, acclaimed filmmakers, and cultural experts who bring decades of experience to the evaluation process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JURY.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-2">{person.country}</div>
                <h3 className="text-2xl font-serif mb-1">{person.name}</h3>
                <p className="text-xs text-white/40 mb-4 uppercase tracking-widest">{person.role} • {person.organization}</p>
                <p className="text-sm text-white/60 font-light leading-relaxed">{person.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Patrons & Advisory Board */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <ShieldCheck className="text-[#D4AF37]" size={32} />
          <h2 className="text-3xl font-serif">Patron & Advisory Board</h2>
        </div>
        <p className="text-white/60 mb-12 max-w-3xl font-light">
          Our patrons and advisory board members are pioneers and legends of Nollywood who provide guidance and wisdom to ensure NMTA continues to uphold the highest standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PATRONS.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 flex gap-6 items-start"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#D4AF37]/30">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-1">{person.name}</h3>
                <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest mb-3">{person.role}</p>
                <p className="text-xs text-white/50 font-light leading-relaxed line-clamp-3">{person.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
