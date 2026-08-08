"use client";

import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const phone = "9652164938";
  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    "Hello, I would like to enquire about physiotherapy treatment."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 px-5 rounded-full shadow-2xl transition transform hover:scale-105 group border-2 border-white/20"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full" />
      </div>
      <span className="text-xs font-extrabold tracking-wide font-heading">
        Chat on WhatsApp
      </span>
    </a>
  );
}
