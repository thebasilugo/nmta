import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MEETINGS } from '../constants';
import { Video, Calendar, Clock, ExternalLink, Copy, Check } from 'lucide-react';

export default function CreatorsHub() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Creators <span className="gold-text italic">Hub</span></h1>
        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
          A dedicated space for actors, filmmakers, and industry professionals to connect and collaborate.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MEETINGS.map((meeting) => (
          <motion.div
            key={meeting.id}
            whileHover={{ y: -5 }}
            className="glass-card p-8 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
                <Video className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest mb-1">
                  <Calendar className="w-3 h-3" />
                  {meeting.date}
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
                  <Clock className="w-3 h-3" />
                  {meeting.time}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-serif mb-4">{meeting.title}</h3>
            <p className="text-white/60 font-light mb-8 flex-grow leading-relaxed">
              {meeting.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a
                href={meeting.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button flex items-center justify-center gap-2 flex-1"
              >
                Join Meeting <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => handleCopy(meeting.id, meeting.meetingId)}
                className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 flex-1"
              >
                {copiedId === meeting.id ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Code
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Future Support Message */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 p-12 border border-dashed border-white/10 rounded-3xl text-center"
      >
        <p className="text-white/40 italic">More roundtable discussions and workshops are being scheduled. Stay tuned for updates.</p>
      </motion.div>
    </div>
  );
}
