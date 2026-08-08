"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, X, Calendar, MessageSquare, Phone, User, Home, Activity } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  selectedService = "General Physiotherapy Consultation",
}: AppointmentModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(selectedService);
  const [date, setDate] = useState("");
  const [isHomeVisit, setIsHomeVisit] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
      if (selectedService.toLowerCase().includes("home visit")) {
        setIsHomeVisit(true);
      }
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const whatsappNumber = "9652164938";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageParts = [
      `Hello, I would like to book an appointment at Sri Shiva Sai Physiotherapy & Chiropractic Clinic.`,
      name ? `• Name: ${name}` : null,
      phone ? `• Contact: ${phone}` : null,
      `• Requested Service: ${service}`,
      isHomeVisit ? `• Type: Home Visit Required` : `• Type: Clinic Visit`,
      date ? `• Preferred Date: ${date}` : null,
      notes ? `• Symptoms/Notes: ${notes}` : null,
    ].filter(Boolean);

    const fullMessage = encodeURIComponent(messageParts.join("\n"));
    const url = `https://wa.me/91${whatsappNumber}?text=${fullMessage}`;
    window.open(url, "_blank");
    onClose();
  };

  const servicesList = [
    "General Physiotherapy Consultation",
    "Orthopaedic Physiotherapy",
    "Back Pain Treatment",
    "Neck Pain Treatment",
    "Sciatica Treatment",
    "Chiropractic Care & Posture Alignment",
    "Home Visit Physiotherapy",
    "Neurological Physiotherapy",
    "Sports Injury Rehabilitation",
    "Spondylitis Treatment",
    "Arthritis Rehabilitation",
    "Paralysis Rehabilitation",
    "Head & Neck Pain Treatment",
    "Post-Injury Rehabilitation",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-100 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-brand-darkNavy p-6 text-white relative border-b border-slate-800">
          
          {/* Top Bar with Prominent Back Button */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-teal hover:bg-emerald-600 text-white font-extrabold text-xs shadow-md border border-white/20 transition transform active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span>← Back</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition cursor-pointer"
              aria-label="Close appointment form"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-emerald-400 text-xs font-extrabold tracking-wider uppercase mb-1">
            <Calendar className="w-4 h-4" /> Quick Appointment Booking
          </div>
          <h3 className="text-xl font-bold font-heading text-white">
            Sri Shiva Sai Physiotherapy Clinic
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Consult Dr. Shankar.N (MPT Ortho, NDT) — Peerzadiguda, Uppal
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Patient Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Patient Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                required
                placeholder="Enter patient name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Phone Number / WhatsApp *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="tel"
                required
                placeholder="Enter 10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Select Treatment / Service *
            </label>
            <div className="relative">
              <Activity className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400 pointer-events-none" />
              <select
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  if (e.target.value.toLowerCase().includes("home visit")) {
                    setIsHomeVisit(true);
                  }
                }}
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal appearance-none"
              >
                {servicesList.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Preferred Consultation Date (Optional)
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal"
            />
          </div>

          {/* Home Visit Option */}
          <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Home className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-extrabold text-slate-900">
                  Request Home Visit Physiotherapy
                </div>
                <div className="text-[11px] font-medium text-slate-600">
                  We undertake home visits across Hyderabad
                </div>
              </div>
            </div>
            <input
              type="checkbox"
              checked={isHomeVisit}
              onChange={(e) => setIsHomeVisit(e.target.checked)}
              className="w-5 h-5 accent-emerald-600 rounded cursor-pointer shrink-0"
            />
          </div>

          {/* Symptoms Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Brief Description of Pain / Symptoms (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g., Lower back stiffness for 2 weeks, neck discomfort..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal resize-none"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition"
            >
              <MessageSquare className="w-4 h-4" />
              BOOK VIA WHATSAPP (9652164938)
            </button>

            <a
              href={`tel:${whatsappNumber}`}
              className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-brand-navy" />
              OR CALL CLINIC DIRECTLY: 9652164938
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
