import React from 'react';
import { motion } from 'motion/react';
import { EVENTS } from '../constants';
import { Calendar, MapPin, Trophy, Star } from 'lucide-react';

export default function IndustryEvents() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Industry <span className="gold-text italic">Events</span></h1>
        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
          Tracking the heartbeat of African cinema through major festivals and award institutions.
        </p>
      </motion.div>

      <div className="space-y-32">
        {EVENTS.map((event, index) => (
          <motion.section
            key={event.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Event Info */}
            <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold rounded-full uppercase tracking-widest">
                  {event.edition}
                </span>
                <span className="text-white/40 text-sm">{event.date}</span>
              </div>
              <h2 className="text-6xl font-serif mb-6">{event.name} <span className="text-white/20">2025</span></h2>
              <div className="flex items-center gap-2 text-white/60 mb-8">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{event.location}</span>
              </div>
              
              <div className="mb-8">
                <h4 className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">Theme</h4>
                <p className="text-xl font-serif italic text-white/90">"{event.theme}"</p>
              </div>

              <p className="text-white/70 font-light leading-relaxed mb-8">
                {event.description}
              </p>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Notable Moments</h4>
                <ul className="space-y-3">
                  {event.notableMoments.map((moment, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/60">
                      <Star className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                      <span>{moment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Event Winners/Highlights */}
            <div className={`lg:col-span-7 glass-card p-8 md:p-12 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-6 h-6 text-[#D4AF37]" />
                <h3 className="text-2xl font-serif">Major Winners & Highlights</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {event.winners.slice(0, 6).map((winner, i) => (
                  <div key={i} className="border-l-2 border-[#D4AF37]/30 pl-4">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{winner.category}</p>
                    <p className="text-lg font-serif text-white/90">{winner.work || winner.winner}</p>
                    {winner.work && <p className="text-xs text-white/50 italic">by {winner.winner}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Festival Highlights</h4>
                <div className="flex flex-wrap gap-2">
                  {event.highlights.map((highlight, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-xs text-white/70 border border-white/10">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
