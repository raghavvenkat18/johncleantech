import React from 'react';
import { Droplets, MapPin, Phone, Shield, Heart } from 'lucide-react';
import { companyInfo, services } from '../data/cleaningData';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-28 md:pb-14 border-t border-slate-800 w-full">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/images/logo.png"
                alt="John Clean Tech Logo"
                className="w-14 h-14 rounded-2xl object-contain bg-white p-1 shadow-lg border border-slate-700 shrink-0"
              />
              <span className="text-2xl font-black text-white tracking-tight">
                JOHN <span className="text-brand-500">CLEAN TECH</span>
              </span>
            </div>
            
            <p className="text-sm font-black text-aqua-400 uppercase tracking-wide">
              {companyInfo.tagline}
            </p>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Leading provider of mechanized, eco-friendly water tank and pump cleaning services for homes, apartments, and businesses across Coimbatore, Tamil Nadu.
            </p>
            
            <div className="pt-2 text-xs font-bold text-slate-300 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="uppercase tracking-wider">{companyInfo.motto}</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5">
              Professional Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-aqua-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="hover:text-aqua-400 transition-colors">
                  Water Pump Strainer & Foot-Valve Inspection
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Localities */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5">
              Service Areas (Coimbatore)
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-400">
              {companyInfo.serviceAreas.slice(0, 12).map((loc) => (
                <span key={loc}>• {loc}</span>
              ))}
            </div>
            <p className="text-xs text-brand-400 mt-4 font-bold">
              + All other residential & commercial localities in Coimbatore
            </p>
          </div>

          {/* Col 4: Contact details */}
          <div className="space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5">
              Contact John Clean Tech
            </h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <MapPin className="w-5 h-5 text-aqua-400 shrink-0 mt-0.5" />
              <span>{companyInfo.location}</span>
            </div>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="font-black text-white uppercase tracking-wider text-[11px]">Direct Booking Lines:</p>
              <a href={`tel:${companyInfo.phones[0].raw}`} className="block text-aqua-300 text-lg font-black hover:underline">
                📞 {companyInfo.phones[0].display}
              </a>
              <a href={`tel:${companyInfo.phones[1].raw}`} className="block text-aqua-300 text-lg font-black hover:underline">
                📞 {companyInfo.phones[1].display}
              </a>
            </div>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hi%20John%20Clean%20Tech%20Coimbatore`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition-colors"
              >
                💬 WhatsApp Chat Support
              </a>
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white text-xs font-black transition-all shadow-md"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
                <span>Follow {companyInfo.instagramHandle} on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Professional Copyright & Legal Bar */}
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 gap-4 text-center lg:text-left">
            <div>
              <p className="font-bold text-slate-300">
                Copyright © {new Date().getFullYear()} <span className="text-white font-black tracking-wide">JOHN CLEAN TECH</span>. All Rights Reserved.
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                💧 Professional Water Tank & Pump Cleaning Services • Coimbatore, Tamil Nadu, India.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
              <span className="text-aqua-400 font-bold">
                {companyInfo.tagline}
              </span>
              <span className="hidden sm:inline text-slate-700">|</span>
              <span className="text-emerald-400 font-bold uppercase tracking-wider">
                {companyInfo.motto}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 text-center sm:text-left">
            <p>
              All photographs, before-and-after cases, branding, and service materials are the exclusive property of John Clean Tech.
            </p>
            <div className="flex items-center gap-4">
              <a href="#services" className="hover:text-aqua-400 transition-colors">Services</a>
              <span>•</span>
              <a href="#before-after" className="hover:text-aqua-400 transition-colors">Before & After</a>
              <span>•</span>
              <a href="#contact" className="hover:text-aqua-400 transition-colors">Contact Helpline</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
