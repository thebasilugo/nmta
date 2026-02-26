import React from 'react';
import { motion } from 'motion/react';
import { Play, Star, Clock, Calendar } from 'lucide-react';

const MOVIES = [
  { id: 1, title: 'Lisabi: The Uprising', year: '2024', rating: '8.5', duration: '2h 15m', image: 'https://picsum.photos/seed/lisabi/800/1200' },
  { id: 2, title: '3 Cold Dishes', year: '2025', rating: '7.9', duration: '1h 55m', image: 'https://picsum.photos/seed/dishes/800/1200' },
  { id: 3, title: 'Safari', year: '2025', rating: '8.2', duration: '2h 05m', image: 'https://picsum.photos/seed/safari/800/1200' },
  { id: 4, title: 'The Fisherman', year: '2024', rating: '7.5', duration: '1h 45m', image: 'https://picsum.photos/seed/fish/800/1200' },
  { id: 5, title: 'To Adaego With Love', year: '2025', rating: '8.8', duration: '2h 10m', image: 'https://picsum.photos/seed/love/800/1200' },
  { id: 6, title: 'Katanga', year: '2024', rating: '8.1', duration: '2h 20m', image: 'https://picsum.photos/seed/katanga/800/1200' },
];

export default function MoviesShows() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Movies & <span className="gold-text italic">Shows</span></h1>
        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
          Explore the finest cinematic productions from Nollywood and across the African continent.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {MOVIES.map((movie, idx) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative aspect-[2/3] rounded-2xl overflow-hidden glass-card"
          >
            <img src={movie.image} alt={movie.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-serif mb-2">{movie.title}</h3>
              <div className="flex items-center gap-4 text-xs text-white/70 mb-4">
                <span className="flex items-center gap-1"><Star size={12} className="text-[#D4AF37]" /> {movie.rating}</span>
                <span className="flex items-center gap-1"><Calendar size={12} /> {movie.year}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {movie.duration}</span>
              </div>
              <button className="gold-button py-2 text-xs flex items-center justify-center gap-2">
                <Play size={14} fill="currentColor" /> Watch Trailer
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
