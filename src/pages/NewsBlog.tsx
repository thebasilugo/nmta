import React from 'react';
import { motion } from 'motion/react';
import { NEWS } from '../constants';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewsBlog() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-6">News & <span className="gold-text italic">Blog</span></h1>
        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
          Stay updated with the latest happenings, industry insights, and exclusive stories from the world of African cinema.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {NEWS.map((story, idx) => (
          <motion.article
            key={story.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card overflow-hidden group"
          >
            <div className="aspect-video overflow-hidden">
              <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-6 mb-4 text-xs text-white/40 uppercase tracking-widest">
                <span className="flex items-center gap-2"><Calendar size={14} /> {story.date}</span>
                <span className="flex items-center gap-2"><User size={14} /> NMTA Editorial</span>
              </div>
              <h2 className="text-3xl font-serif mb-4 group-hover:gold-text transition-colors">{story.title}</h2>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                {story.excerpt}
              </p>
              <button className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
                Read Full Story <ArrowRight size={16} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="px-12 py-4 border border-white/10 rounded-full text-white/40 hover:text-white hover:border-white/30 transition-all">
          Load More Stories
        </button>
      </div>
    </div>
  );
}
