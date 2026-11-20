import React from 'react';
import { ShieldCheck, Zap, Droplet, UserCheck, HeartHandshake, Award } from 'lucide-react';
import { companyInfo } from '../data/cleaningData';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "150-Bar German Jet Pressure",
      desc: "Our rotary jet pumps blast away hardened mineral scale, black mould, and algae without scratching or weakening tank surfaces.",
      icon: Zap,
      badge: "High Tech"
    },
    {
      title: "100% Eco-Safe & Food-Grade",
      desc: "No toxic chemicals or eye-burning bleaches. We use food-grade bio-sanitizers approved for human drinking water storage systems.",
      icon: Droplet,
      badge: "Pure & Safe"
    },
    {
      title: "Complete UV Germicidal Sterilization",
      desc: "Final stage UV irradiation destroys microscopic bacterial spores, E. coli, cholera pathogens, and eliminates mosquito larva risk.",
      icon: ShieldCheck,
      badge: "Sterility Standard"
    },
    {
      title: "Trained & Police-Verified Crew",
      desc: "Our technicians wear safety gear, follow strict sanitation protocols, and respect your family's residential privacy and safety.",
      icon: UserCheck,
      badge: "Trusted Crew"
    },
    {
      title: "Zero Water Flooding & Clean Site",
      desc: "We use controlled discharge pipes so your terrace, lawn, basement, or parking lots remain completely clean, dry, and undamaged.",
      icon: HeartHandshake,
      badge: "Clean Execution"
    },
    {
      title: "Coimbatore Local Specialists",
      desc: "Based locally in Coimbatore with fast response across Gandhipuram, RS Puram, Peelamedu, Saravanampatti, and surrounding suburbs.",
      icon: Award,
      badge: "Local Pride"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 w-full relative">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider mb-4 border border-brand-200">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            THE JOHN CLEAN TECH ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Why Coimbatore Families & Businesses Trust Us
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            {companyInfo.tagline} We combine mechanized technology, medical-grade hygiene standards, and honest local pricing.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-600 to-aqua-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:border-brand-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-950 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
