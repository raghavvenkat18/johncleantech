import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Droplets, Calendar, Menu, X, Shield, Clock, MessageSquare, Award } from 'lucide-react';
import { companyInfo } from '../data/cleaningData';
import InstagramIcon from './InstagramIcon';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Before & After', href: '#before-after' },
    { name: '6-Step Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Professional Executive Utility Bar */}
      <div className="w-full bg-slate-950 text-slate-300 text-xs py-2 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-slate-800">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Location & Certification */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-semibold text-brand-300">
              <MapPin className="w-3.5 h-3.5 text-aqua-400" />
              {companyInfo.location}
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              German Mechanized 150-Bar High Pressure & UV Sanitization
            </span>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {companyInfo.workingHours}
            </span>
          </div>

          {/* Quick Contact Hotlines */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <span className="text-slate-400 font-bold hidden xl:inline">Coimbatore Booking Hotlines:</span>
            <a 
              href={`tel:${companyInfo.phones[0].raw}`}
              className="flex items-center gap-1.5 font-extrabold text-white hover:text-aqua-300 transition-colors bg-brand-900/60 hover:bg-brand-800/80 px-3 py-1 rounded-full border border-brand-700/60"
            >
              <Phone className="w-3.5 h-3.5 text-aqua-400 animate-pulse" />
              <span>{companyInfo.phones[0].display}</span>
            </a>
            <a 
              href={`tel:${companyInfo.phones[1].raw}`}
              className="flex items-center gap-1.5 font-extrabold text-white hover:text-aqua-300 transition-colors bg-brand-900/60 hover:bg-brand-800/80 px-3 py-1 rounded-full border border-brand-700/60"
            >
              <Phone className="w-3.5 h-3.5 text-aqua-400" />
              <span>{companyInfo.phones[1].display}</span>
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=Hi%20John%20Clean%20Tech,%20I%20am%20looking%20for%20professional%20water%20tank%20cleaning%20in%20Coimbatore.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
            <a
              href={companyInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-bold px-3 py-1 rounded-full transition-all flex items-center gap-1.5 shadow-sm text-xs"
              title="Follow John Clean Tech on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-white" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Full-Width Navigation */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 py-3' 
            : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3.5 group">
              <img
                src="/images/logo.png"
                alt="John Clean Tech Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-contain bg-white p-1 shadow-lg shadow-brand-500/25 border border-brand-200 group-hover:scale-105 transition-transform duration-300 shrink-0"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
                    JOHN <span className="text-brand-600 font-extrabold">CLEAN TECH</span>
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-brand-100 text-brand-800 border border-brand-200">
                    Coimbatore
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-500 uppercase">
                  Professional Water Tank Cleaning Services
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors uppercase tracking-wider py-1 border-b-2 border-transparent hover:border-brand-600"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Direct Calling & Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${companyInfo.phones[0].raw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-brand-600 text-brand-700 font-extrabold text-sm hover:bg-brand-50 transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Call {companyInfo.phones[0].display}</span>
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-800 hover:from-brand-500 hover:to-brand-700 text-white font-extrabold text-sm shadow-md shadow-brand-600/30 hover:shadow-lg transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Service Slot</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-2 bg-brand-600 text-white text-xs font-bold rounded-lg shadow-sm"
              >
                Book Slot
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Expanded Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden w-full border-t border-slate-200 bg-white px-6 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-800 hover:text-brand-600 py-1.5 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${companyInfo.phones[0].raw}`}
                  className="w-full text-center py-3 rounded-xl bg-slate-100 text-brand-900 font-extrabold text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-600" />
                  Call: {companyInfo.phones[0].display}
                </a>
                <a
                  href={`tel:${companyInfo.phones[1].raw}`}
                  className="w-full text-center py-3 rounded-xl bg-slate-100 text-brand-900 font-extrabold text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-600" />
                  Call: {companyInfo.phones[1].display}
                </a>
                <a
                  href={companyInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-black text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-white" />
                  <span>Follow {companyInfo.instagramHandle} on Instagram</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="sm:col-span-2 w-full py-3.5 rounded-xl bg-brand-600 text-white font-black text-sm shadow-md"
                >
                  Book Instant Tank Cleaning
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
