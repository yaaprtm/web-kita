'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MessageSquare, Send, Heart, Sparkles, Database, ThumbsUp, User, CheckCircle2 } from 'lucide-react';
import { GuestBookMessage } from '@/types';

// Pre-populated initial wishes so the wall is warm from day one
const INITIAL_MESSAGES: GuestBookMessage[] = [
  {
    id: 'msg-1',
    name: 'Budi & Maya',
    relation: 'Sahabat Arya',
    message: 'Semangat dan bahagia terus buat Arya dan Nadina! Dari zaman nongkrong di Warkop Cakasa sampai Puncak, luar biasa banget ngerasain perjalanan kalian. Langgeng terus ya!',
    createdAt: '2 November 2025',
    likes: 12,
    badgeEmoji: '🥂',
  },
  {
    id: 'msg-2',
    name: 'Siti Rahma',
    relation: 'Teman Kampus Nadina',
    message: 'Nadinaaa, senang banget liat cerita perjalanan kalian! Dulu pas sering dijemput terus diajak ngopi ke Hood Cipinang gemes banget denger ceritanya. Bahagia selalu berdua!',
    createdAt: '5 November 2025',
    likes: 9,
    badgeEmoji: '💖',
  },
  {
    id: 'msg-3',
    name: 'Rian & Tim Hood',
    relation: 'Teman Nongkrong',
    message: 'Support selalu untuk Arya dan Nadina! Semoga hubungannya makin hangat, makin solid, dan selalu diberi kebahagiaan. Cheers! 🎉',
    createdAt: '10 November 2025',
    likes: 15,
    badgeEmoji: '✨',
  },
];

export const Guestbook: React.FC = () => {
  const [messages, setMessages] = useState<GuestBookMessage[]>([]);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Sahabat');
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💖');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDatabaseModal, setShowDatabaseModal] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    // Load from localStorage or use initial default messages
    const saved = localStorage.getItem('arya_nadina_guestbook');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (err) {
        setMessages(INITIAL_MESSAGES);
      }
    } else {
      setMessages(INITIAL_MESSAGES);
      localStorage.setItem('arya_nadina_guestbook', JSON.stringify(INITIAL_MESSAGES));
    }
  }, []);

  const handleQuickPreset = (presetText: string) => {
    setMessage((prev) => (prev ? `${prev} ${presetText}` : presetText));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newMessage: GuestBookMessage = {
      id: `msg-${Date.now()}`,
      name: name.trim(),
      relation: relation.trim() || 'Teman',
      message: message.trim(),
      createdAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      likes: 0,
      badgeEmoji: selectedEmoji,
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('arya_nadina_guestbook', JSON.stringify(updated));

    // Launch celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F472B6', '#E8B4B8', '#D4AF37', '#FAF5EF'],
    });

    setName('');
    setMessage('');
    setIsSubmitting(false);
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  const handleLike = (id: string) => {
    const updated = messages.map((m) => {
      if (m.id === id) {
        return { ...m, likes: m.likes + 1 };
      }
      return m;
    });
    setMessages(updated);
    localStorage.setItem('arya_nadina_guestbook', JSON.stringify(updated));
  };

  const emojiOptions = ['💖', '🥂', '✨', '💐', '🎉', '🌹', '💌'];

  return (
    <section id="guestbook" className="py-20 px-4 md:px-8 relative bg-ivory-50/70">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-blush-200 text-blush-500 text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageSquare size={14} className="text-rosegold-gold" />
            <span>PESAN UNTUK KAMI</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-warm-900 mb-4">
            Kirim Pesan untuk Arya & Nadina
          </h2>
          <p className="font-serif italic text-warm-700 text-base md:text-lg max-w-xl mx-auto">
            Punya kesan, dukungan, atau sekadar mau bilang halo? Tinggalkan pesanmu di sini untuk kami berdua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column (5 cols) */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-blush-100 shadow-card-warm">
            <h3 className="font-serif text-xl font-bold text-warm-900 mb-2 flex items-center gap-2">
              <Sparkles size={18} className="text-rosegold-gold" />
              <span>Tulis Pesanmu</span>
            </h3>
            <p className="text-xs text-warm-700 mb-6 font-light">
              Pesanmu akan tampil di dinding pesan di sebelah kanan.
            </p>

            {submittedSuccess && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span>Terima kasih! Pesanmu telah berhasil terkirim! ❤️</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-warm-900 mb-1.5">
                  Nama Anda *
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-3 text-warm-700 opacity-60" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Sarah & Dimas"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blush-200 bg-ivory-50 text-sm text-warm-900 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-warm-900 mb-1.5">
                  Hubungan / Keterangan
                </label>
                <input
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="Contoh: Sahabat, Teman Kuliah, Teman Nongkrong"
                  className="w-full px-4 py-2.5 rounded-xl border border-blush-200 bg-ivory-50 text-sm text-warm-900 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-warm-900 mb-1.5">
                  Pilih Stiker / Icon Ucapan
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {emojiOptions.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-transform ${
                        selectedEmoji === emoji
                          ? 'bg-blush-100 border-2 border-blush-400 scale-110'
                          : 'bg-ivory-100 hover:bg-blush-50 border border-transparent'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-warm-900 mb-1.5">
                  Pesan & Doa *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis kesan, dukungan, atau pesan manis untuk Arya & Nadina..."
                  className="w-full p-3.5 rounded-xl border border-blush-200 bg-ivory-50 text-sm text-warm-900 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Quick Presets */}
              <div>
                <span className="block text-[11px] text-warm-700 mb-1.5">Preset Pesan Cepat:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Bahagia selamanya! 💖',
                    'Langgeng ya Arya & Nadina! 🥂',
                    'Relationship goals! ✨',
                  ].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handleQuickPreset(preset)}
                      className="text-[11px] bg-ivory-100 hover:bg-blush-100 text-warm-800 border border-blush-100 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      + {preset}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blush-400 via-blush-500 to-rosegold-gold text-white font-medium text-sm shadow-md hover:shadow-rose-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={16} />
                <span>Kirim Pesan Manis</span>
              </button>
            </form>
          </div>

          {/* Messages Wall Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4 max-h-[650px] overflow-y-auto pr-1 custom-scrollbar">
            <div className="flex items-center justify-between px-2 mb-1">
              <span className="text-xs font-semibold text-warm-900 uppercase tracking-wider">
                PESAN DARI KALIAN ({messages.length} PESAN)
              </span>
              
              <button
                onClick={() => setShowDatabaseModal(true)}
                className="text-xs text-blush-500 hover:text-blush-600 flex items-center gap-1 font-medium underline"
              >
                <Database size={13} />
                <span>Info Setup Database</span>
              </button>
            </div>

            {messages.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-3xl border border-blush-100">
                <Heart size={32} className="mx-auto text-blush-300 mb-2 animate-bounce" />
                <p className="text-warm-700 text-sm font-medium">Belum ada ucapan. Jadilah yang pertama!</p>
              </div>
            ) : (
              messages.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-blush-100 shadow-sm hover:shadow-md transition-all duration-300 relative group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-blush-100 flex items-center justify-center text-lg font-bold text-blush-600 border border-blush-200">
                        {item.badgeEmoji || '💖'}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-warm-900 text-base leading-snug">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-warm-700 font-medium">
                          {item.relation} • {item.createdAt}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleLike(item.id)}
                      className="flex items-center gap-1.5 text-xs text-warm-700 hover:text-blush-500 bg-ivory-50 hover:bg-blush-50 px-2.5 py-1 rounded-full border border-blush-100 transition-colors"
                      title="Sukai ucapan ini"
                    >
                      <ThumbsUp size={12} className="text-blush-500" />
                      <span>{item.likes}</span>
                    </button>
                  </div>

                  <p className="text-warm-800 text-sm leading-relaxed pl-11 font-light italic">
                    &ldquo;{item.message}&rdquo;
                  </p>
                </div>
              ))
            )}
          </div>

        </div>

      </div>

      {/* Database Integration Option Modal / Info */}
      {showDatabaseModal && (
        <div className="fixed inset-0 z-50 bg-warm-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full border border-blush-200 shadow-2xl relative">
            <h3 className="font-serif text-xl font-bold text-warm-900 mb-3 flex items-center gap-2">
              <Database size={20} className="text-blush-500" />
              <span>Opsi Penyimpanan Permanen (Database)</span>
            </h3>

            <p className="text-warm-800 text-sm leading-relaxed mb-4">
              Saat ini, ucapan teman-teman disimpan secara otomatis di <strong>localStorage</strong> (penyimpanan browser). Ini membuat website Anda bekerja 100% tanpa perlu membayar hosting database ekstra!
            </p>

            <div className="p-3.5 rounded-2xl bg-ivory-100 border border-blush-200 text-xs text-warm-900 mb-6 flex flex-col gap-2">
              <span className="font-semibold">Jika Anda ingin ucapan teman dari HP lain tersimpan terpusat di cloud:</span>
              <ul className="list-disc pl-4 space-y-1 text-warm-800">
                <li><strong>Supabase (Gratis & Direkomendasikan)</strong>: Sangat mudah diintegrasikan dengan Next.js. Cukup 1 tabel <code className="bg-white px-1">messages</code>.</li>
                <li><strong>Firebase Firestore</strong>: Opsi NoSQL gratis dari Google.</li>
              </ul>
            </div>

            <button
              onClick={() => setShowDatabaseModal(false)}
              className="w-full py-2.5 rounded-xl bg-warm-900 text-white font-medium text-sm hover:bg-warm-800 transition-colors"
            >
              Mengerti & Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
