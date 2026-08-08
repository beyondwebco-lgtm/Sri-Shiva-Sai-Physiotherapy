"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HomeVisitSection from "@/components/HomeVisitSection";
import ConditionsSection from "@/components/ConditionsSection";
import HowItWorks from "@/components/HowItWorks";
import PatientJourney from "@/components/PatientJourney";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Physiotherapy Consultation");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService("General Physiotherapy Consultation");
    }
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col relative bg-slate-50 selection:bg-brand-teal selection:text-white">
      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Hero Section (Buttons removed as requested) */}
      <Hero />

      {/* Trust & Credibility Bar */}
      <TrustBar />

      {/* About Section (Photo & buttons removed, condensed text + info cards layout) */}
      <AboutSection />

      {/* Services Section (01 - 12 Grid) */}
      <ServicesSection onOpenBooking={handleOpenBooking} />

      {/* Home Visit Section */}
      <HomeVisitSection onOpenBooking={handleOpenBooking} />

      {/* Conditions We Help With */}
      <ConditionsSection onOpenBooking={handleOpenBooking} />

      {/* Treatment Process Timeline (01 - 04) */}
      <HowItWorks onOpenBooking={handleOpenBooking} />

      {/* Patient Treatment Philosophy */}
      <PatientJourney />

      {/* Location Section & Maps */}
      <LocationSection />

      {/* Final High-Converting Contact Section */}
      <ContactSection onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer />

      {/* Desktop Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileBottomBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Appointment Modal with ← Back Button */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />
    </main>
  );
}
