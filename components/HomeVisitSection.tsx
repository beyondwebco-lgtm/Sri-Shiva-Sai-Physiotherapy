import Image from "next/image";
import { Home, MessageSquare, Phone, CheckCircle2, Calendar } from "lucide-react";

interface HomeVisitSectionProps {
  onOpenBooking: (serviceName: string) => void;
}

export default function HomeVisitSection({ onOpenBooking }: HomeVisitSectionProps) {
  const phone = "9652164938";
  const homeVisitMsg = encodeURIComponent(
    "Hello, I would like to enquire about a home physiotherapy visit."
  );
  const whatsappUrl = `https://wa.me/91${phone}?text=${homeVisitMsg}`;

  return (
    <section id="home-visits" className="py-24 bg-brand-darkNavy text-white relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-extrabold text-xs uppercase tracking-wider">
              <Home className="w-4 h-4 text-emerald-400" />
              <span>DOORSTEP PHYSIOTHERAPY CARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
              Physiotherapy Care, <br />
              <span className="text-emerald-400">Wherever You Need It.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Home visits are available for patients who may find it difficult or inconvenient to travel to the clinic.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  Ideal for post-operative joint surgery, stroke recovery, and elderly mobility assistance.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  Therapeutic equipment and clinical care delivered straight to your living room in Hyderabad.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  Flexible scheduling covering Peerzadiguda, Uppal, and surrounding areas.
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-xl transition transform active:scale-98"
              >
                <MessageSquare className="w-5 h-5" />
                BOOK A HOME VISIT
              </a>

              <button
                onClick={() => onOpenBooking("Home Visit Physiotherapy")}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-sm transition"
              >
                <Calendar className="w-5 h-5 text-emerald-400" />
                Schedule Consultation
              </button>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2 pt-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call direct: </span>
              <a href={`tel:${phone}`} className="font-bold text-white hover:underline">
                9652164938
              </a>
            </div>

          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/images/home_visit_physio.png"
                alt="Physiotherapist conducting home visit in Hyderabad"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkNavy/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl text-slate-900 text-xs font-bold shadow-lg">
                "WE UNDERTAKE HOME VISIT ALSO" — Dr. Shankar.N
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
