import React from 'react';
import { 
  Droplets, 
  Trash2, 
  Gauge, 
  Wind, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { cleaningSteps, companyInfo } from '../data/cleaningData';

const iconMap = {
  Droplets: Droplets,
  Trash2: Trash2,
  Gauge: Gauge,
  Wind: Wind,
  ShieldCheck: ShieldCheck,
  CheckCircle2: CheckCircle2,
};

export default function ProcessSection({ onBookCleaning }) {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 w-full relative">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider mb-4 border border-brand-200">
            <Gauge className="w-4 h-4 text-brand-600" />
            STANDARDIZED GERMAN JET PROTOCOL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Our 6-Step Scientific Cleaning Process
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            We follow a standardized, hygienic, multi-stage mechanized protocol to eliminate all bio-films, sediment, and disease-causing bacteria.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-600 to-aqua-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* 6 Step Cards Grid - Full Width Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cleaningSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Droplets;
            return (
              <div 
                key={step.step}
                className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-brand-400 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Watermark Step Number */}
                <span className="absolute top-5 right-6 text-5xl font-black text-slate-100 group-hover:text-brand-50 transition-colors pointer-events-none">
                  {step.step}
                </span>

                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-aqua-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-md border border-brand-100">
                      Step {step.step} of 06
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight group-hover:text-brand-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Quality Verified
                  </span>
                  <span className="text-slate-400 font-extrabold uppercase">
                    Stage {idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
