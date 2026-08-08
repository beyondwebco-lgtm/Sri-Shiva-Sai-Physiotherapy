import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, MapPin } from "lucide-react";

export default function Footer() {
  const phone = "9652164938";
  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    "Hello, I would like to enquire about physiotherapy treatment."
  )}`;

  return (
    <footer className="bg-brand-darkNavy text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Clinic Logo, Name & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="Sri Shiva Sai Physiotherapy & Chiropractic Clinic Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-extrabold text-white text-base leading-tight">
                  SRI SHIVA SAI
                </div>
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-wider">
                  Physiotherapy & Chiropractic Clinic
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Senior Physiotherapist Dr. Shankar.N (MPT Ortho, NDT) provides personalized physical therapy, joint rehabilitation, chiropractic posture care, and home visits in Hyderabad.
            </p>

            <div className="text-xs text-slate-400 space-y-1 font-medium">
              <div>Dr. Shankar.N — MPT (Ortho), NDT</div>
              <div>Senior Physiotherapist (12+ Years Exp)</div>
              <div>Regd. No: 153XMC1177/TSM3</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-emerald-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition">About Clinic</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition">Specialized Services</a></li>
              <li><a href="#conditions" className="hover:text-emerald-400 transition">Conditions We Treat</a></li>
              <li><a href="#home-visits" className="hover:text-emerald-400 transition">Home Visits</a></li>
              <li><a href="#location" className="hover:text-emerald-400 transition">Contact & Location</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Orthopaedic Physiotherapy</li>
              <li>Back Pain Treatment</li>
              <li>Sports Rehabilitation</li>
              <li>Neurological Physiotherapy</li>
              <li>Home Visit Physiotherapy</li>
              <li>Chiropractic Care</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Contact Us
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  I-92/2, Beside Parvatapur SBI Branch,<br />
                  Peerzadiguda, Uppal, Hyderabad, Telangana
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Phone / WhatsApp: </span>
                <a href={`tel:${phone}`} className="font-bold text-white hover:underline">
                  9652164938
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: </span>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 hover:underline">
                  9652164938
                </a>
              </div>
            </div>

            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-[11px] text-slate-400">
              Doorstep home visit physiotherapy available across Hyderabad.
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Sri Shiva Sai Physiotherapy & Chiropractic Clinic. All rights reserved.</p>
          <p>Dr. Shankar.N (MPT Ortho, NDT) | Peerzadiguda, Uppal, Hyderabad</p>
        </div>

      </div>
    </footer>
  );
}
