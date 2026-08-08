"use client";

import { Phone, MessageSquare, Calendar } from "lucide-react";

interface MobileBottomBarProps {
  onOpenBooking: (service?: string) => void;
}

export default function MobileBottomBar({ onOpenBooking }: MobileBottomBarProps) {
  const phone = "9652164938";
  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    "Hello, I would like to book an appointment at Sri Shiva Sai Physiotherapy & Chiropractic Clinic."
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2 px-3">
      <div className="grid grid-cols-3 gap-2">
        {/* CALL button */}
        <a
          href={`tel:${phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-brand-navy hover:bg-slate-200 transition text-center"
        >
          <Phone className="w-4 h-4 text-brand-navy mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight uppercase">CALL</span>
        </a>

        {/* WHATSAPP button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition text-center shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight uppercase">WHATSAPP</span>
        </a>

        {/* BOOK APPOINTMENT button */}
        <button
          onClick={() => onOpenBooking()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-navy text-white hover:bg-brand-darkNavy transition text-center shadow-md"
        >
          <Calendar className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight uppercase">BOOK</span>
        </button>
      </div>
    </div>
  );
}
