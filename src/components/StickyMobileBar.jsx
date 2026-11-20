import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/cleaningData';

export default function StickyMobileBar() {
  return (
    <aside 
      aria-label="Mobile quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2.5 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.12)] md:hidden"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Primary Call */}
        <a
          href={`tel:${companyInfo.phones[0].raw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 active:scale-95 text-white font-black text-[11px] shadow-sm leading-tight text-center transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5 animate-bounce" />
          <span>Call Us 1</span>
          <span className="text-[9px] font-semibold text-brand-100">{companyInfo.phones[0].display}</span>
        </a>

        {/* Secondary Call */}
        <a
          href={`tel:${companyInfo.phones[1].raw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 active:scale-95 text-white font-black text-[11px] shadow-sm leading-tight text-center transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5 text-aqua-400" />
          <span>Call Us 2</span>
          <span className="text-[9px] font-semibold text-slate-300">{companyInfo.phones[1].display}</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${companyInfo.whatsapp}?text=Hi%20John%20Clean%20Tech,%20I%20am%20looking%20for%20water%20tank%20cleaning%20services%20in%20Coimbatore.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 active:scale-95 text-white font-black text-[11px] shadow-sm leading-tight text-center transition-transform"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
          <span className="text-[9px] font-semibold text-emerald-100">Chat Live</span>
        </a>
      </div>
    </aside>
  );
}

