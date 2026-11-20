import React, { useState } from 'react';
import { Sparkles, AlertTriangle, CheckCircle2, Sliders, ShieldCheck, Eye, Phone, ArrowRight } from 'lucide-react';
import { beforeAfterCases, companyInfo } from '../data/cleaningData';
import InstagramIcon from './InstagramIcon';

export default function BeforeAfterGallery({ onBookNow }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [sliderCase, setSliderCase] = useState('residential');

  const categories = ['All', 'Residential', 'Overhead', 'Commercial', 'Underground'];

  const sliderDatasets = {
    residential: {
      label: "Residential Villa Tank",
      beforeImg: "/images/residential-before.jpg",
      afterImg: "/images/residential-after.jpg",
      beforeBadge: "RESIDENTIAL BEFORE: YELLOW SLUDGE & BIOFILM",
      beforeDesc: "Severe yellow borewell crust & black fungal scaling",
      afterBadge: "RESIDENTIAL AFTER: SPOTLESS WHITE",
      afterDesc: "Spotless white plastic finish • 100% Potable Water Safe",
    },
    overhead: {
      label: "Rooftop Overhead Tank",
      beforeImg: "/images/overhead-before.jpg",
      afterImg: "/images/overhead-after.jpg",
      beforeBadge: "OVERHEAD BEFORE: BOREWELL MUD RINGS",
      beforeDesc: "Concentric mud sediment rings & yellow algal staining",
      afterBadge: "OVERHEAD AFTER: SPOTLESS WHITE",
      afterDesc: "Spotless white plastic interior • 100% Food-Grade Sanitized",
    },
    commercial: {
      label: "Commercial Water Tank",
      beforeImg: "/images/commercial-before.jpg",
      afterImg: "/images/commercial-after.jpg",
      beforeBadge: "COMMERCIAL BEFORE: HEAVY SLUDGE & SILT",
      beforeDesc: "Accumulated borewell sediment & black fungal wall grime",
      afterBadge: "COMMERCIAL AFTER: SPOTLESS BLUE",
      afterDesc: "Spotless Sky-Blue Finish • 100% Food-Grade Sanitized",
    },
    underground: {
      label: "Underground Concrete Sump",
      beforeImg: "/images/underground-before.jpg",
      afterImg: "/images/underground-after.jpg",
      beforeBadge: "UNDERGROUND BEFORE: MUDDY SILT WATER",
      beforeDesc: "Contaminated brown standing water & thick sludge at sump bed",
      afterBadge: "UNDERGROUND AFTER: CLEAN DEWATERED BED",
      afterDesc: "Dry vacuumed, high-pressure jet washed concrete floor & walls",
    }
  };

  const currentSlider = sliderDatasets[sliderCase];

  const filteredCases = activeCategory === 'All'
    ? beforeAfterCases
    : beforeAfterCases.filter(c => c.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="before-after" className="py-24 bg-white w-full relative overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider mb-4 border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            REAL TRANSFORMATION PROOF
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Before Cleaning & After Cleaning
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Inspect our real cleaning transformations across Coimbatore properties. We completely eliminate stubborn black algae, rust sludge, and biological film.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-brand-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* =========================================================================
            FULL-WIDTH INTERACTIVE COMPARISON SLIDER
           ========================================================================= */}
        <div className="mb-20 w-full bg-slate-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-aqua-400 font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
                <Sliders className="w-4 h-4" /> Live Interactive Inspection Tool
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Slide Across to Witness Tank Purity Restored
              </h3>
            </div>

            {/* Quick Toggle between Real Residential, Overhead, Commercial, and Underground Tank Photos */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 w-full sm:w-auto">
              <span className="text-xs text-slate-400 font-bold px-2 hidden lg:inline">Showcase:</span>
              <button
                type="button"
                onClick={() => setSliderCase('residential')}
                className={`px-3 py-2 sm:py-1.5 rounded-xl text-xs font-black transition-all text-center justify-center ${
                  sliderCase === 'residential'
                    ? 'bg-gradient-to-r from-brand-600 to-aqua-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🏡 Residential
              </button>
              <button
                type="button"
                onClick={() => setSliderCase('overhead')}
                className={`px-3 py-2 sm:py-1.5 rounded-xl text-xs font-black transition-all text-center justify-center ${
                  sliderCase === 'overhead'
                    ? 'bg-gradient-to-r from-brand-600 to-aqua-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🏠 Overhead
              </button>
              <button
                type="button"
                onClick={() => setSliderCase('commercial')}
                className={`px-3 py-2 sm:py-1.5 rounded-xl text-xs font-black transition-all text-center justify-center ${
                  sliderCase === 'commercial'
                    ? 'bg-gradient-to-r from-brand-600 to-aqua-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🏢 Commercial
              </button>
              <button
                type="button"
                onClick={() => setSliderCase('underground')}
                className={`px-3 py-2 sm:py-1.5 rounded-xl text-xs font-black transition-all text-center justify-center ${
                  sliderCase === 'underground'
                    ? 'bg-gradient-to-r from-brand-600 to-aqua-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🕳️ Underground
              </button>
            </div>
          </div>

          {/* Massive Full-Width Interactive Comparison Box */}
          <div className="relative w-full h-80 sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden select-none shadow-2xl border border-slate-700 bg-slate-900">
            {/* AFTER Layer (Full Width Background with Real Photograph) */}
            <div className="absolute inset-0">
              <img
                src={currentSlider.afterImg}
                alt={`${currentSlider.label} After Cleaning`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/30 pointer-events-none"></div>
              
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6">
                <span className="bg-emerald-500 text-slate-950 text-[10px] sm:text-sm font-black uppercase px-2.5 py-1 sm:px-4 sm:py-2 rounded-full shadow-2xl flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> {currentSlider.afterBadge}
                </span>
              </div>
              
              <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 max-w-[200px] sm:max-w-md text-right">
                <div className="inline-block p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-950/90 backdrop-blur-md border border-cyan-400/50 text-right space-y-0.5 sm:space-y-1 shadow-2xl">
                  <p className="text-[9px] sm:text-[11px] uppercase tracking-wider text-cyan-300 font-black">Coimbatore Real On-Site Result</p>
                  <p className="text-sm sm:text-2xl font-black text-white">{currentSlider.label}</p>
                  <p className="hidden sm:block text-xs text-cyan-100 font-medium">{currentSlider.afterDesc}</p>
                </div>
              </div>
            </div>

            {/* BEFORE Layer (Clipped to Slider with Real Photograph) */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentSlider.beforeImg}
                alt={`${currentSlider.label} Before Cleaning`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-stone-950/30"></div>
              
              <div className="absolute top-3 sm:top-6 left-3 sm:left-6">
                <span className="bg-red-600 text-white text-[10px] sm:text-sm font-black uppercase px-2.5 py-1 sm:px-4 sm:py-2 rounded-full shadow-2xl flex items-center gap-1.5 shrink-0">
                  <AlertTriangle className="w-3.5 h-3.5" /> {currentSlider.beforeBadge}
                </span>
              </div>
              
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 max-w-[200px] sm:max-w-md text-left">
                <div className="inline-block p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-stone-950/90 backdrop-blur-md border border-red-700/70 space-y-0.5 sm:space-y-1 shadow-2xl">
                  <p className="text-[9px] sm:text-[11px] uppercase tracking-wider text-red-300 font-black">Initial Dirty State</p>
                  <p className="text-sm sm:text-2xl font-black text-amber-400">{currentSlider.label}</p>
                  <p className="hidden sm:block text-xs text-amber-200 font-medium">{currentSlider.beforeDesc}</p>
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1.5 bg-white cursor-ew-resize flex items-center justify-center -translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.9)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl border-2 border-brand-600 font-black text-sm">
                ↔
              </div>
            </div>

            <input 
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Before and After Slider"
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
            />
          </div>

          <p className="text-center text-xs sm:text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
            <Eye className="w-4 h-4 text-aqua-400" />
            Drag the handle or click anywhere inside the frame to compare Before and After
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 uppercase tracking-wider ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat === 'All' ? 'All 4 Showcases' : `${cat} Cleaning`}
            </button>
          ))}
        </div>

        {/* =========================================================================
            THE 4 SHOWCASES REQUESTED IN THE PROMPT:
            1. RESIDENTIAL CLEANING
            2. OVERHEAD TANK CLEANING
            3. COMMERCIAL CLEANING
            4. UNDERGROUND TANK CLEANING
           ========================================================================= */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {filteredCases.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Card Header with Service Badge */}
              <div className="bg-slate-50 p-6 sm:p-7 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-brand-700 bg-brand-100 px-3 py-1 rounded-md border border-brand-200">
                    {item.category} SHOWCASE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">{item.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-500 block uppercase">Tank Capacity & Spec:</span>
                  <span className="text-sm font-black text-brand-700">{item.tankType}</span>
                </div>
              </div>

              {/* Side-by-Side Visual Comparison Simulation */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  {/* BEFORE CLEANING BOX */}
                  <div className="rounded-2xl border-2 border-red-300 bg-red-50/70 p-5 relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-lg bg-red-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                          <AlertTriangle className="w-3.5 h-3.5" /> Before Cleaning
                        </span>
                        <span className="text-[11px] font-black text-red-900 bg-red-200/80 px-2.5 py-0.5 rounded">
                          Contaminated
                        </span>
                      </div>

                      {/* Visual Image / Graphic Representation of Dirty Tank */}
                      {item.beforeImage ? (
                        <div className="h-44 sm:h-52 rounded-xl overflow-hidden my-3 relative border border-red-300 shadow-md group">
                          <img
                            src={item.beforeImage}
                            alt={`${item.title} Before Cleaning`}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 left-2 bg-red-950/80 backdrop-blur-xs text-red-200 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                            Actual Site Photo
                          </div>
                          <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-1 rounded">
                            📍 Coimbatore • {item.beforeMetrics}
                          </div>
                        </div>
                      ) : (
                        <div className="h-36 rounded-xl bg-gradient-to-b from-stone-900 via-amber-950 to-stone-950 flex flex-col items-center justify-center text-center p-4 text-amber-200 border border-stone-800 shadow-inner my-3 relative">
                          <span className="text-3xl mb-1">⚠️</span>
                          <p className="text-sm font-black text-amber-300">Heavy Sludge & Biofilm</p>
                          <p className="text-xs text-amber-400/80">Sticky Sediments & Algal Encrustation</p>
                        </div>
                      )}

                      <div className="mt-4 space-y-1">
                        <p className="text-xs font-black uppercase text-red-950 tracking-wider">Identified Problem:</p>
                        <p className="text-xs sm:text-sm text-red-800 leading-snug">{item.beforeProblem}</p>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-red-200 text-xs font-black text-red-800 flex items-center justify-between">
                      <span>Condition:</span>
                      <span>{item.beforeMetrics}</span>
                    </div>
                  </div>

                  {/* AFTER CLEANING BOX */}
                  <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50/70 p-5 relative overflow-hidden flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                          <CheckCircle2 className="w-3.5 h-3.5" /> After Cleaning
                        </span>
                        <span className="text-[11px] font-black text-emerald-900 bg-emerald-200/80 px-2.5 py-0.5 rounded">
                          100% Sterile
                        </span>
                      </div>

                      {/* Visual Image / Graphic Representation of Clean Tank */}
                      {item.afterImage ? (
                        <div className="h-44 sm:h-52 rounded-xl overflow-hidden my-3 relative border border-emerald-400 shadow-md group">
                          <img
                            src={item.afterImage}
                            alt={`${item.title} After Cleaning`}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 left-2 bg-emerald-950/80 backdrop-blur-xs text-emerald-200 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                            Actual Site Photo
                          </div>
                          <div className="absolute bottom-2 left-2 right-2 bg-emerald-950/80 backdrop-blur-xs text-emerald-100 text-[10px] font-bold px-2 py-1 rounded">
                            ✨ {item.afterMetrics}
                          </div>
                        </div>
                      ) : (
                        <div className="h-36 rounded-xl bg-gradient-to-b from-cyan-600 via-brand-600 to-blue-700 flex flex-col items-center justify-center text-center p-4 text-white border border-cyan-400 shadow-inner my-3 relative">
                          <Sparkles className="w-9 h-9 text-yellow-300 mb-1" />
                          <p className="text-sm font-black text-white">Sparkling & Food-Grade Sanitized</p>
                          <p className="text-xs text-cyan-200">UV Irradiated • 0 Harmful Residue</p>
                        </div>
                      )}

                      <div className="mt-4 space-y-1">
                        <p className="text-xs font-black uppercase text-emerald-950 tracking-wider">Achieved Result:</p>
                        <p className="text-xs sm:text-sm text-emerald-800 leading-snug">{item.afterResult}</p>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-emerald-200 text-xs font-black text-emerald-800 flex items-center justify-between">
                      <span>Outcome:</span>
                      <span>{item.afterMetrics}</span>
                    </div>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Average Duration: <strong>{item.timeTaken}</strong></span>
                  </div>
                  <button
                    onClick={() => onBookNow(item.title)}
                    className="font-black text-brand-700 hover:text-brand-950 flex items-center gap-1"
                  >
                    <span>Book {item.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 w-full rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-2">
            <h4 className="text-2xl sm:text-3xl font-black text-white">
              Is Your Tank Harboring Hidden Sludge & Algae?
            </h4>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Don't wait until brown muddy water flows into your drinking taps. Get your water tank inspected and sanitized by John Clean Tech in Coimbatore.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${companyInfo.phones[0].raw}`}
              className="px-6 py-4 rounded-xl bg-gradient-to-r from-aqua-400 to-brand-500 hover:from-aqua-300 hover:to-brand-400 text-slate-950 font-black text-sm shadow-xl flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Technician: {companyInfo.phones[0].display}</span>
            </a>
            <a
              href={companyInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white font-black text-sm shadow-xl flex items-center gap-2"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Watch Reels on Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
