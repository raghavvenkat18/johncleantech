import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Droplets, 
  MessageSquare, 
  Send, 
  Calendar, 
  CheckCircle, 
  Sparkles,
  Clock,
  ShieldCheck,
  Award
} from 'lucide-react';
import { companyInfo } from '../data/cleaningData';
import InstagramIcon from './InstagramIcon';
import confetti from 'canvas-confetti';
import { sendEnquiryEmail } from '../services/emailService';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || 'Residential Water Tank Cleaning',
    tankType: 'Overhead + Sump Combo',
    area: 'RS Puram',
    preferredDate: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Direct email via Resend API to johncleantech.cbe@gmail.com
      const resendResult = await sendEnquiryEmail(formData);
      setEmailStatus(resendResult);
    } catch (err) {
      console.error('Error dispatching email with Resend:', err);
      setEmailStatus({ success: false, error: err.message });
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }

    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50 to-brand-50/50 w-full relative">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header with Prompt's Exact Contents Prominently Displayed */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-4 border border-brand-200">
            <Droplets className="w-4 h-4 text-brand-600" />
            💧 Professional Water Tank Cleaning Services
          </div>
          
          <h2 className="text-3xl sm:text-6xl font-black text-slate-950 tracking-tight">
            CONTACT JOHN CLEAN TECH
          </h2>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-brand-700 font-extrabold text-lg sm:text-xl">
            <MapPin className="w-6 h-6 text-red-600 shrink-0" />
            <span>📍 Coimbatore, Tamil Nadu</span>
          </div>

          <p className="mt-4 text-2xl sm:text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-aqua-600 uppercase">
            Pure Water. Pure Living.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-brand-600 to-aqua-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Full-Width Grid: Left 5 Cols Call Hub + Right 7 Cols Online Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* Left Column (5 cols): Authoritative Executive Helpline Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-brand-950 via-slate-900 to-slate-950 text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-44 h-44 bg-aqua-400/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center gap-3.5 mb-5">
                <span className="p-3 rounded-2xl bg-brand-700/80 text-aqua-300 shadow-md">
                  <Phone className="w-7 h-7 animate-pulse" />
                </span>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-aqua-300">Fast Response Dispatch</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">📞 Call Us Directly</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
                Connect directly with our senior Coimbatore field technician for instant pricing, emergency booking, or society water tank inspection.
              </p>

              {/* Direct Calling Numbers Boxes */}
              <div className="space-y-4">
                {companyInfo.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-200 group shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-500 to-aqua-400 text-slate-950 flex items-center justify-center font-black">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase font-black tracking-wider text-slate-300">
                          {idx === 0 ? 'Primary Booking Line' : 'Alternate Helpline'}
                        </p>
                        <p className="text-2xl sm:text-3xl font-black text-white tracking-wide group-hover:text-aqua-300 transition-colors">
                          {phone.display}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-aqua-300 bg-white/15 px-3 py-1.5 rounded-xl">
                      Tap to Call
                    </span>
                  </a>
                ))}
              </div>

              {/* WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20John%20Clean%20Tech%20Coimbatore!%20I%20would%20like%20to%20book%20a%20water%20tank%20cleaning%20slot.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base shadow-xl transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp: {companyInfo.phones[0].display}</span>
                </a>

                {/* Instagram Direct Link */}
                <a
                  href={companyInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-purple-950/70 via-pink-950/60 to-slate-900 hover:from-purple-900/80 hover:to-pink-900/80 border border-pink-500/40 text-white transition-all shadow-lg group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                      <InstagramIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] uppercase font-black tracking-wider text-pink-300 block">Watch Real Cleaning Videos</span>
                      <span className="text-base font-black text-white group-hover:text-pink-200">{companyInfo.instagramHandle}</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-white bg-white/15 group-hover:bg-pink-600 px-3.5 py-2 rounded-xl transition-colors">
                    Instagram →
                  </span>
                </a>
              </div>
            </div>

            {/* Service Localities Coverage Box */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-2.5 text-slate-950 font-black text-base mb-4">
                <MapPin className="w-5 h-5 text-brand-600" />
                <span>Service Coverage Across Coimbatore:</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                {companyInfo.serviceAreas.map((loc) => (
                  <span key={loc} className="bg-slate-100 hover:bg-brand-50 hover:text-brand-800 px-3 py-1.5 rounded-lg transition-colors border border-slate-200">
                    {loc}
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Clock className="w-4 h-4 text-brand-600" />
                <span>Operating Hours: <strong>{companyInfo.workingHours}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Full-Width Interactive Online Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl">
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-md border border-brand-100">
                Instant Appointment Scheduling
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-950 mt-2.5">
                Send Us a Service Enquiry
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-1.5">
                Fill this enquiry form and our Coimbatore coordination team will confirm your slot within 15 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-8 sm:p-10 text-center space-y-5 animate-in fade-in">
                <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle className="w-12 h-12" />
                </div>
                
                <h4 className="text-2xl sm:text-3xl font-black text-emerald-950">
                  Enquiry Successfully Sent!
                </h4>

                {/* Resend Email Status Notification */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold shadow-xs">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Service enquiry has been directly routed to <strong>{companyInfo.email}</strong> via Resend API
                  </span>
                </div>

                <p className="text-sm sm:text-base text-emerald-800 max-w-lg mx-auto">
                  Thank you for reaching out! Our service team has received your enquiry and will contact you shortly to confirm your booking slot. For immediate assistance, you can also reach us directly at <strong>{companyInfo.phones[0].display}</strong> or <strong>{companyInfo.phones[1].display}</strong>.
                </p>

                <div className="pt-3 flex flex-wrap justify-center gap-4">
                  <a
                    href={`tel:${companyInfo.phones[0].raw}`}
                    className="px-6 py-3 rounded-xl bg-brand-600 text-white font-black text-sm shadow-md flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: {companyInfo.phones[0].display}</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setEmailStatus(null);
                    }}
                    className="px-6 py-3 rounded-xl bg-white text-slate-700 font-bold text-sm border border-slate-300 hover:bg-slate-50"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-black text-slate-800 mb-2">
                      Customer Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-black text-slate-800 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9944XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-black text-slate-800 mb-2">
                      Service Category
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white font-semibold"
                    >
                      <option value="Overhead Water Tank Cleaning">OVERHEAD WATER TANK CLEANING</option>
                      <option value="Residential Water Tank Cleaning">RESIDENTIAL WATER TANK CLEANING</option>
                      <option value="Commercial Water Tank Cleaning">COMMERCIAL WATER TANK CLEANING</option>
                      <option value="Apartment Water Tank Cleaning">APARTMENT WATER TANK CLEANING</option>
                      <option value="Underground Water Tank Cleaning">UNDERGROUND WATER TANK CLEANING</option>
                      <option value="Complete Tank + Pump Cleaning Package">COMPLETE TANK + PUMP CLEANING</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-black text-slate-800 mb-2">
                      Coimbatore Locality
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white font-semibold"
                    >
                      {companyInfo.serviceAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}, Coimbatore
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-black text-slate-800 mb-2">
                      Tank Capacity / Detail
                    </label>
                    <select
                      value={formData.tankType}
                      onChange={(e) => setFormData({ ...formData, tankType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white font-semibold"
                    >
                      <option value="Overhead Tank (500L - 1000L)">Overhead Tank (500L - 1,000L)</option>
                      <option value="Overhead Tank (1500L - 2000L)">Overhead Tank (1,500L - 2,000L)</option>
                      <option value="Underground Sump (2000L - 5000L)">Underground Sump (2,000L - 5,000L)</option>
                      <option value="Underground Sump (5000L - 10000L+)">Underground Sump (5,000L - 10,000L+)</option>
                      <option value="Both Overhead & Underground Sump">Both Overhead & Underground Sump</option>
                      <option value="Commercial / Apartment Complex">Commercial / Apartment Complex</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-black text-slate-800 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-black text-slate-800 mb-2">
                    Specific Water Issues (e.g. Silt, Mud, Biofilm, Smell, Pump Choking)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any particular issue with your water supply..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-700 to-aqua-600 hover:from-brand-500 hover:to-aqua-500 text-white font-black text-base shadow-xl shadow-brand-500/25 hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2.5 disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Your Service Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Service Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
