import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  Droplets, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Gauge, 
  Award,
  Zap
} from 'lucide-react';
import { companyInfo } from '../data/cleaningData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900 text-white overflow-hidden py-12 lg:py-20">
      {/* Dynamic Background Water Waves & Ambient Illumination */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-600/30 rounded-full blur-[140px] animate-pulse-subtle"></div>
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-aqua-500/20 rounded-full blur-[130px] animate-pulse"></div>
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[120px]"></div>
        {/* Subtle grid pattern for precision engineering vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 z-10">
        {/* Top Promotional Announcement Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-900/80 border border-brand-500/40 text-brand-200 text-xs sm:text-sm font-extrabold shadow-inner backdrop-blur-md">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>💧 Professional Water Tank & Pump Cleaning Services</span>
            <span className="bg-aqua-500 text-slate-950 text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded-full">
              Same-Day Coimbatore
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-aqua-400" />
            <span>Coimbatore, Tamil Nadu</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Food-Grade & Non-Toxic Sanitization</span>
          </div>
        </div>

        {/* Hero Main Content Grid - Spanning Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column (7 cols): Bold Executive Typography & Prompt Contents */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <img
                src="/images/logo.png"
                alt="John Clean Tech Official Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-contain bg-white/95 p-1.5 shadow-2xl border-2 border-brand-400 shrink-0"
              />
              <div>
                <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-aqua-400 bg-brand-900/90 px-3.5 py-1.5 rounded-md border border-brand-700/60 inline-block mb-2">
                  {companyInfo.serviceSubheading}
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] sm:leading-[1.05]">
                  JOHN <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-brand-300 to-white">CLEAN TECH</span>
                </h1>
              </div>
            </div>

            {/* Core Tagline Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-900/90 via-slate-900 to-brand-950 border border-brand-500/40 shadow-xl backdrop-blur-md">
              <p className="text-xl sm:text-3xl font-black tracking-wide text-aqua-300 uppercase flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
                <span>{companyInfo.tagline}</span>
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-slate-300">
                <span className="flex items-center gap-1 text-aqua-400">
                  <MapPin className="w-4 h-4" /> {companyInfo.location}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-300 font-bold tracking-wide uppercase">
                  {companyInfo.motto}
                </span>
              </div>
            </div>

            {/* Welcome & Prompt Mission Content */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 backdrop-blur-md space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-400"></span>
                Welcome to John Clean Tech!
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                We provide professional water tank cleaning services for residential and commercial properties. 
                Our services include <strong className="text-aqua-300 font-bold">underground tank cleaning</strong>, <strong className="text-aqua-300 font-bold">overhead tank cleaning</strong>, and <strong className="text-aqua-300 font-bold">commercial water tank cleaning</strong>.
              </p>
              <p className="text-xs sm:text-sm font-bold text-aqua-300 flex items-center gap-2 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Contact us today for service enquiries in Coimbatore!
              </p>
            </div>

            {/* Key Quality Pillars in 3 Grid Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-600/30 text-aqua-400">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">150-Bar Jet Wash</p>
                  <p className="text-[11px] text-slate-400">German High Pressure</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-600/30 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">100% Eco-Safe</p>
                  <p className="text-[11px] text-slate-400">Zero Toxic Bleach Smell</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-600/30 text-indigo-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">UV Deep Sterilization</p>
                  <p className="text-[11px] text-slate-400">Neutralizes 99.9% Pathogens</p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons: Direct Calls & WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 flex-wrap">
              {/* Primary Call */}
              <a
                href={`tel:${companyInfo.phones[0].raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-aqua-500 hover:from-brand-500 hover:to-aqua-400 text-slate-950 font-black text-base shadow-xl shadow-brand-500/25 hover:shadow-2xl transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-aqua-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 animate-bounce" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-900 block leading-none">Call Primary Line</span>
                  <span className="text-lg font-black leading-tight text-slate-950">{companyInfo.phones[0].display}</span>
                </div>
              </a>

              {/* Secondary Call */}
              <a
                href={`tel:${companyInfo.phones[1].raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-base border border-slate-700 shadow-md transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-aqua-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block leading-none">Alternate Line</span>
                  <span className="text-base font-extrabold leading-tight text-white">{companyInfo.phones[1].display}</span>
                </div>
              </a>

              {/* WhatsApp Booking */}
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20John%20Clean%20Tech%20Coimbatore!%20I%20would%20like%20to%20enquire%20about%20water%20tank%20cleaning%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow-lg transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Book on WhatsApp</span>
              </a>
            </div>

            {/* Bottom info text */}
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="text-aqua-300 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Transparent & Honest Pricing Guaranteed</span>
              </span>
              <span>•</span>
              <span className="text-slate-300 font-semibold">
                Serving All Areas in Coimbatore
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Executive Water Hygiene & Live Tank Control Center */}
          <div className="lg:col-span-5">
            <div className="relative w-full rounded-3xl bg-slate-900/90 border border-slate-700 shadow-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-600/30 text-aqua-400">
                    <Droplets className="w-6 h-6 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">Water Hygiene Control Panel</h3>
                    <p className="text-xs text-slate-400">Certified Mechanized Disinfection Protocol</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  WHO Standard
                </span>
              </div>

              {/* Side-by-Side Visual Inspection Peek */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Visual Hygiene Transformation:
                </p>
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Before */}
                  <div className="rounded-2xl border border-red-500/30 bg-red-950/40 p-3.5 text-center relative overflow-hidden">
                    <div className="absolute top-2 left-2 text-[10px] font-black uppercase text-red-300 bg-red-900/80 px-2 py-0.5 rounded">
                      BEFORE
                    </div>
                    <div className="my-3 flex justify-center">
                      <div className="w-14 h-14 rounded-full bg-stone-900 border-2 border-dashed border-red-600/60 flex items-center justify-center text-xl">
                        ⚠️
                      </div>
                    </div>
                    <p className="text-xs font-black text-red-200">Sludge, Algae & Mud</p>
                    <p className="text-[10px] text-red-400 mt-0.5">Heavy Biofilm Contamination</p>
                  </div>

                  {/* After */}
                  <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-3.5 text-center relative overflow-hidden shadow-inner">
                    <div className="absolute top-2 left-2 text-[10px] font-black uppercase text-emerald-300 bg-emerald-900/80 px-2 py-0.5 rounded">
                      AFTER
                    </div>
                    <div className="my-3 flex justify-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-600 to-aqua-400 border-2 border-emerald-400 flex items-center justify-center text-slate-950">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <p className="text-xs font-black text-emerald-200">100% Sterile & Clear</p>
                    <p className="text-[10px] text-emerald-400 mt-0.5">Food-Grade Descaled & UV Treated</p>
                  </div>
                </div>
              </div>

              {/* Live Quality Diagnostics Bar */}
              <div className="space-y-3 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 font-semibold mb-1">
                    <span>Sediment & Slurry Extraction:</span>
                    <span className="text-aqua-400 font-bold">100% Extracted</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-500 to-aqua-400 h-2 rounded-full w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 font-semibold mb-1">
                    <span>Pathogen & Bacterial Elimination:</span>
                    <span className="text-emerald-400 font-bold">99.9% Sterilized</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 font-semibold mb-1">
                    <span>Post-Cleaning Water Clarity:</span>
                    <span className="text-cyan-400 font-bold">Crystal Transparent</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Fast Booking button */}
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-slate-300 ml-1">4.9/5 in Coimbatore</span>
                </div>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-4 py-2 rounded-xl bg-aqua-400 hover:bg-aqua-300 text-slate-950 font-black text-xs shadow-md transition-colors"
                >
                  Schedule Inspection →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
