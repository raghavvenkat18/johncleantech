import React from 'react';
import { Award, Users, ShieldCheck, Clock, CheckCircle2, Droplets } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    {
      value: "3,800+",
      label: "Tanks & Sumps Sanitized",
      desc: "Residential, commercial & apartment projects across Coimbatore",
      icon: CheckCircle2,
      color: "from-blue-600 to-cyan-600"
    },
    {
      value: "100%",
      label: "Food-Grade Disinfection",
      desc: "Zero toxic bleach odor, completely safe for domestic drinking water",
      icon: ShieldCheck,
      color: "from-emerald-600 to-teal-600"
    },
    {
      value: "60-90m",
      label: "Fast Mechanized Turnaround",
      desc: "High-power 150-bar jets ensure minimum water outage for residents",
      icon: Clock,
      color: "from-indigo-600 to-blue-600"
    },
    {
      value: "4.9 / 5 ★",
      label: "Coimbatore Rating",
      desc: "Trusted by thousands of families, societies & facilities across Tamil Nadu",
      icon: Award,
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="relative -mt-8 z-20 w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`flex items-start gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 lg:pl-6' : ''}`}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${stat.color} text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20`}>
                <Icon className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">{stat.value}</p>
                <p className="text-sm font-black text-slate-800 leading-snug">{stat.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
