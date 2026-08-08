import Image from "next/image";
import { Award, ShieldCheck, Home } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden min-h-[75vh] flex items-center">
      {/* Decorative Medical Background Blobs */}
      <div className="absolute top-10 right-10 -z-10 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-96 h-96 bg-emerald-50/80 rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-brand-navy text-xs font-extrabold uppercase tracking-wider shadow-xs">
              <Award className="w-4 h-4 text-brand-teal" />
              <span>12+ Years of Experience</span>
            </div>

            {/* Large Hero Heading (56px-72px Desktop) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-brand-navy tracking-tight leading-[1.1]">
              Move Better. <br />
              <span className="text-brand-teal relative inline-block">
                Live Better.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-teal/30 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
              Expert Physiotherapy & Chiropractic Care in Hyderabad
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Personalized physiotherapy and rehabilitation focused on improving movement, managing pain and supporting your recovery.
            </p>

            {/* Credibility Highlights Below Description */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">12+ Years</div>
                  <div className="text-[11px] text-slate-500">Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-brand-cyan flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Senior Physio</div>
                  <div className="text-[11px] text-slate-500">Dr. Shankar.N</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Home Visits</div>
                  <div className="text-[11px] text-slate-500">Available</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Image & Floating UI Cards */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Subtle Decorative Backdrop Shape */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-teal/20 via-brand-cyan/10 to-transparent rounded-[2.5rem] blur-xl opacity-70 -z-10" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <Image
                src="/images/hero_physio.png"
                alt="Senior Physiotherapist Dr. Shankar.N treating a patient in Hyderabad clinic"
                width={650}
                height={550}
                priority
                className="w-full h-auto object-cover"
              />
              
              {/* Image Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkNavy/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating UI Card 1: 12+ Years Experience */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-3.5 animate-float-slow">
              <div className="w-11 h-11 rounded-xl bg-brand-navy text-emerald-400 flex items-center justify-center font-extrabold text-lg shadow-sm">
                12+
              </div>
              <div>
                <div className="text-xs font-extrabold text-brand-navy">Years</div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Experience</div>
              </div>
            </div>

            {/* Floating UI Card 2: Home Visits Available */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-6 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-3.5 animate-float-delayed">
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">HOME VISITS</div>
                <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">AVAILABLE</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
