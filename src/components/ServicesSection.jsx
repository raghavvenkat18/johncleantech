import React from 'react';
import { 
  Building2, 
  Home, 
  Briefcase, 
  Building, 
  Layers, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Wrench
} from 'lucide-react';
import { services, companyInfo } from '../data/cleaningData';

const iconMap = {
  Building2: Building2,
  Home: Home,
  Briefcase: Briefcase,
  Building: Building,
  Layers: Layers
};

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="py-24 bg-slate-50 w-full relative">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider mb-4 border border-brand-200">
            <Sparkles className="w-4 h-4 text-brand-600" />
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Professional Water Tank Cleaning Solutions
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium leading-relaxed">
            We provide cleaning services to help maintain clean and hygienic water storage.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-600 to-aqua-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* 5 Core Requested Services + Specialized Pump Solution in Full-Width Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Building2;
            const isFeatured = index === 0 || index === 4;

            return (
              <div 
                key={service.id}
                className={`relative rounded-3xl bg-white border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between overflow-hidden group ${
                  isFeatured 
                    ? 'border-brand-400 shadow-lg ring-1 ring-brand-300' 
                    : 'border-slate-200 shadow-md'
                }`}
              >
                {/* Top Accent Strip */}
                <div className={`h-2.5 w-full ${isFeatured ? 'bg-gradient-to-r from-brand-600 via-aqua-500 to-brand-800' : 'bg-slate-200 group-hover:bg-brand-600'} transition-colors`}></div>

                <div className="p-7 sm:p-8 flex-1">
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 group-hover:bg-brand-100 group-hover:text-brand-900 transition-colors border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      Execution Highlights:
                    </p>
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-950">Target Architecture:</strong> {service.idealFor}
                  </div>
                </div>

                {/* Bottom Card Action Footer */}
                <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs sm:text-sm font-black text-brand-700 hover:text-brand-950 flex items-center gap-1.5 transition-all"
                  >
                    <span>Request Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Hi%20John%20Clean%20Tech,%20I%20am%20enquiring%20about%20${encodeURIComponent(service.title)}%20in%20Coimbatore.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}

          {/* 6th Full-Width Feature Card: Water Pump & Sump Foot-Valve Overhaul */}
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900 text-white p-7 sm:p-8 flex flex-col justify-between shadow-2xl border border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aqua-400/20 text-aqua-300 text-xs font-bold mb-4 border border-aqua-400/30">
                <Wrench className="w-3.5 h-3.5 text-aqua-400" />
                <span>Complementary Engineering Check</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Water Pump, Strainer & Foot-Valve Maintenance
              </h3>
              
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Sludge often blocks the pump inlet foot-valve, causing motor burnout, air-locking, and weak tap pressure. We perform strainer descaling and pipeline flushing during every cleaning session.
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-aqua-400" />
                  <span>Strainer Sediment & Rust De-clogging</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-aqua-400" />
                  <span>Air-Lock Release & Pressure Testing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-aqua-400" />
                  <span>Mosquito-Proofing Overflows & Tank Vents</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href={`tel:${companyInfo.phones[0].raw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-aqua-400 to-brand-500 hover:from-aqua-300 hover:to-brand-400 text-slate-950 font-black text-sm shadow-lg transition-all"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>Call {companyInfo.phones[0].display} for Complete Package</span>
              </a>
            </div>
          </div>
        </div>

        {/* Full-Width Executive Assurance Strip */}
        <div className="mt-14 w-full rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-xl flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5 text-center xl:text-left">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 shadow-inner">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-950">
                100% Certified Food-Grade Disinfection Guarantee
              </h4>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl">
                We strictly use organic, non-hazardous bio-sanitizers combined with 150-bar pressurized water jets. Your drinking water lines are immediately usable with zero chemical smell.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 flex-wrap justify-center">
            <a
              href={`tel:${companyInfo.phones[0].raw}`}
              className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {companyInfo.phones[0].display}</span>
            </a>
            <a
              href={`tel:${companyInfo.phones[1].raw}`}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {companyInfo.phones[1].display}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
