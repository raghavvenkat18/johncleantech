import React, { useState } from 'react';
import { X, Calendar, Phone, MessageSquare, CheckCircle, Droplets, MapPin } from 'lucide-react';
import { companyInfo } from '../data/cleaningData';
import confetti from 'canvas-confetti';
import { sendEnquiryEmail } from '../services/emailService';

export default function BookingModal({ isOpen, onClose, defaultService }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'Residential Water Tank Cleaning');
  const [area, setArea] = useState('RS Puram');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEnquiryEmail({
        name,
        phone,
        service,
        area,
        tankType: 'Requested via Quick Booking Modal',
        notes: 'Quick slot reservation'
      });
    } catch (err) {
      console.error('Failed to send email:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }

    try {
      confetti({ particleCount: 60, spread: 60 });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-white p-5 sm:p-8 shadow-2xl border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <img
            src="/images/logo.png"
            alt="John Clean Tech Logo"
            className="w-12 h-12 rounded-xl object-contain bg-white p-1 shadow-sm border border-brand-200 shrink-0"
          />
          <div>
            <div className="flex items-center gap-1.5 text-brand-600 font-extrabold text-xs uppercase tracking-wider">
              <Droplets className="w-3.5 h-3.5" />
              <span>Fast Booking • Coimbatore</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 leading-tight">
              Book Water Tank Cleaning
            </h3>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mb-4">
          Get fast, high-pressure mechanized water tank cleaning.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-black text-slate-900">Booking Request Sent!</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Thank you! Your request has been dispatched. Our coordination team will contact you shortly to confirm your time slot.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service Type</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white"
                >
                  <option value="Overhead Water Tank Cleaning">Overhead Tank Cleaning</option>
                  <option value="Residential Water Tank Cleaning">Residential Cleaning</option>
                  <option value="Commercial Water Tank Cleaning">Commercial Cleaning</option>
                  <option value="Apartment Water Tank Cleaning">Apartment Tank Cleaning</option>
                  <option value="Underground Water Tank Cleaning">Underground Sump Cleaning</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Area in Coimbatore</label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white"
                >
                  {companyInfo.serviceAreas.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-aqua-600 hover:from-brand-500 hover:to-aqua-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Service Booking</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Or call directly:</span>
              <a href={`tel:${companyInfo.phones[0].raw}`} className="font-bold text-brand-600 hover:underline">
                {companyInfo.phones[0].display}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
