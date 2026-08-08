"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, Menu, X, Calendar } from "lucide-react";

interface HeaderProps {
  onOpenBooking: (service?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phone = "9652164938";
  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    "Hello, I would like to book an appointment at Sri Shiva Sai Physiotherapy & Chiropractic Clinic."
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Conditions", href: "#conditions" },
    { name: "Home Visits", href: "#home-visits" },
    { name: "Contact", href: "#location" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-white py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Clinic Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 relative flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Sri Shiva Sai Physiotherapy & Chiropractic Clinic Logo"
              width={44}
              height={44}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div>
            <div className="font-heading font-extrabold text-brand-navy text-base sm:text-lg leading-none tracking-tight">
              SRI SHIVA SAI
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-brand-teal uppercase mt-0.5">
              Physiotherapy & Chiropractic Clinic
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-slate-700 hover:text-brand-teal transition-colors py-1 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-brand-navy transition"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-brand-navy">
              <Phone className="w-4 h-4 text-brand-teal" />
            </div>
            <span>9652164938</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-darkNavy text-white font-bold text-xs shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            BOOK APPOINTMENT
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="px-3.5 py-2 text-xs font-bold bg-brand-navy text-white rounded-lg shadow-sm"
          >
            Book
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-800 hover:text-brand-navy rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-semibold text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-lg transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-sm border border-emerald-200"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              WhatsApp: 9652164938
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-navy text-white font-bold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              Book An Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
