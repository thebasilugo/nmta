import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, Star, Users, Film, ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EVENTS, NEWS } from '../constants';
import Statuette from '../components/Statuette';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    months: 5,
    days: 18,
    hours: 7,
    minutes: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        return prev;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/cinema/1920/1080?blur=2"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Celebrating excellence since 2010</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Nollywood Movie & <br />
              <span className="gold-text italic">Television Awards</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 font-light leading-relaxed max-w-xl">
              The most prestigious night in African entertainment. Join us as we honor the visionaries shaping the future of cinema.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/awards" className="gold-button flex items-center gap-2">
                Explore Awards <ArrowRight size={18} />
              </Link>
              <Link to="/awards" className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                View Categories
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <Statuette />
          </motion.div>
        </div>
      </section>

      {/* Awards & Film Festivals Bento Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif mb-2">Awards & <span className="gold-text">Film Festivals</span></h2>
            <p className="text-white/50">Tracking the industry's most significant moments.</p>
          </div>
          <Link to="/events" className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest hover:underline">View All Events</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.slice(0, 6).map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 group hover:bg-white/10 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">{event.date}</div>
                <MapPin size={14} className="text-white/30" />
              </div>
              <h3 className="text-xl font-serif mb-3 group-hover:gold-text transition-colors">{event.name}</h3>
              <p className="text-sm text-white/60 font-light mb-6 line-clamp-2">{event.description}</p>
              <a 
                href={event.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-white/40 group-hover:text-white transition-colors"
              >
                Visit Website <ArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Stories Bento */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif mb-2">Latest <span className="gold-text">Stories</span></h2>
              <p className="text-white/50">News, updates, and deep dives into Nollywood.</p>
            </div>
            <Link to="/news" className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest hover:underline">View All Stories</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Featured Story */}
            <motion.div 
              className="md:col-span-2 md:row-span-2 glass-card overflow-hidden group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="relative h-full min-h-[400px]">
                <img src={NEWS[0].image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <div className="text-xs text-[#D4AF37] font-bold mb-2">{NEWS[0].date}</div>
                  <h3 className="text-3xl font-serif mb-4">{NEWS[0].title}</h3>
                  <p className="text-white/70 text-sm mb-6 line-clamp-2">{NEWS[0].excerpt}</p>
                  <Link to="/news" className="gold-button py-2 text-xs">Read More</Link>
                </div>
              </div>
            </motion.div>

            {/* Smaller Stories */}
            {NEWS.slice(1, 5).map((story, idx) => (
              <motion.div 
                key={story.id}
                className="glass-card p-6 flex flex-col justify-between group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div>
                  <div className="text-[10px] text-white/40 font-bold mb-2">{story.date}</div>
                  <h4 className="text-lg font-serif mb-3 group-hover:gold-text transition-colors">{story.title}</h4>
                </div>
                <Link to="/news" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-[#D4AF37]">
                  Read More <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NMTA Awards 2026 Countdown */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-3xl rounded-full -mr-32 -mt-32" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
                <Award size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">NMTA Awards 2026</span>
              </div>
              <h2 className="text-5xl font-serif mb-6">Nigeria's Biggest Night <br /><span className="italic">in Entertainment</span></h2>
              
              <div className="flex gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin size={18} />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Calendar size={18} />
                  <span>August 15, 2026</span>
                </div>
              </div>

              <p className="text-white/70 font-light mb-8">
                ⏰ Don't miss the inaugural gala celebrating a new era of excellence in African cinema.
              </p>

              <Link to="/awards" className="gold-button">
                View Award Categories
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Months', value: timeLeft.months },
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes }
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-serif gold-text mb-1">{item.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About NMTA Stats Bento */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-10 flex flex-col justify-center">
              <div className="text-5xl font-serif gold-text mb-4">2025</div>
              <h4 className="text-xl font-serif mb-4">Official Launch Year</h4>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                A new era of excellence in African cinema begins with NMTA's debut later this year.
              </p>
            </div>
            <div className="glass-card p-10 flex flex-col justify-center">
              <div className="text-5xl font-serif gold-text mb-4">500+</div>
              <h4 className="text-xl font-serif mb-4">Talents To Be Honored</h4>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Recognizing the brightest and boldest voices shaping Nollywood and African storytelling.
              </p>
            </div>
            <div className="glass-card p-10 flex flex-col justify-center">
              <div className="text-5xl font-serif gold-text mb-4">20+</div>
              <h4 className="text-xl font-serif mb-4">Inaugural Categories</h4>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Covering every corner of creativity — from acting and directing to editing and innovation.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/about" className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm hover:underline">Learn More About NMTA</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
