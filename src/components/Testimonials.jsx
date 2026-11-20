import React from 'react';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';
import { testimonials } from '../data/cleaningData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white w-full relative">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-4 border border-amber-200">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            CLIENT REVIEWS & FEEDBACK
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Loved by Coimbatore Residents & Associations
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Read what homeowners, apartment committees, and business owners say about John Clean Tech.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-brand-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md hover:shadow-xl transition-shadow relative flex flex-col justify-between"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-200 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1.5 mb-5 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-2">Verified Coimbatore Customer</span>
                </div>

                <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-slate-950 text-base sm:text-lg">{t.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-brand-600" />
                    {t.area}
                  </p>
                </div>
                <span className="text-xs sm:text-sm font-bold text-brand-700 bg-brand-50 px-3 py-1.5 rounded-lg border border-brand-100">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
