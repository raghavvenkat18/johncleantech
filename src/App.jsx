import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import ServicesSection from './components/ServicesSection';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import ProcessSection from './components/ProcessSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleSelectService = (serviceTitle) => {
    // Scroll smoothly to contact or open modal
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      setSelectedService(serviceTitle);
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenBooking(serviceTitle);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-500 selection:text-white pb-20 md:pb-0 overflow-x-hidden w-full">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main>
        {/* Promotional Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Quick Highlights / Counter Stats */}
        <QuickStats />

        {/* Services Section with all 5 core requested categories */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Before and After Gallery Showcase (Interactive & Cards) */}
        <BeforeAfterGallery onBookNow={(title) => handleSelectService(title)} />

        {/* 6-Step Mechanized Process */}
        <ProcessSection onBookCleaning={() => handleOpenBooking()} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section with exact prompt details & Booking Form */}
        <ContactSection selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Bottom Bar for Mobile Devices */}
      <StickyMobileBar />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
