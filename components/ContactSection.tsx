import { Calendar, MessageSquare, Phone, MapPin } from "lucide-react";

interface ContactSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  const phone = "9652164938";
  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    "Hello, I would like to book an appointment at Sri Shiva Sai Physiotherapy & Chiropractic Clinic."
  )}`;

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-brand-darkNavy via-brand-navy to-brand-darkNavy text-white relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          PRIORITIZE YOUR PHYSICAL HEALTH
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight max-w-3xl mx-auto">
          Ready to Take the Next Step?
        </h2>

        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
          Speak with our team about your physiotherapy and rehabilitation needs.
        </p>

        {/* Big CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base shadow-2xl transition transform active:scale-98"
          >
            <Calendar className="w-5 h-5 text-white" />
            BOOK AN APPOINTMENT
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-white hover:bg-slate-100 text-brand-navy font-extrabold text-base shadow-xl transition transform active:scale-98"
          >
            <MessageSquare className="w-5 h-5 text-emerald-600" />
            WHATSAPP US
          </a>
        </div>

        {/* Phone details bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Direct Call / WhatsApp: <a href={`tel:${phone}`} className="font-bold text-white hover:underline">9652164938</a></span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <a href="https://maps.app.goo.gl/VkdHPPKJZd5vWdQdA" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white">
              Parvathapur, Peerzadiguda, Hyderabad
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
