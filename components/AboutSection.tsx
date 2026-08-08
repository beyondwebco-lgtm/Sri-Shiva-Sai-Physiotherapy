import { GraduationCap, Award, ShieldCheck, User, Calendar } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Subtitle */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-brand-navy font-extrabold text-xs uppercase tracking-wider">
            ABOUT THE CLINIC
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy leading-tight">
            Experienced Care. <br className="hidden sm:inline" />
            <span className="text-brand-teal">Personalized Recovery.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1">
            "With 12+ years of clinical experience, Dr. Shankar.N provides personalized physiotherapy and rehabilitation care focused on improving movement, managing pain and supporting recovery."
          </p>
        </div>

        {/* Doctor Information Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Doctor & Designation */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-teal hover:bg-white hover:shadow-card transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-navy text-emerald-400 flex items-center justify-center font-bold shadow-sm">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Doctor</div>
              <h3 className="text-lg font-extrabold font-heading text-brand-navy group-hover:text-brand-teal transition mt-0.5">
                Dr. Shankar.N
              </h3>
              <p className="text-xs font-semibold text-slate-600">Senior Physiotherapist</p>
            </div>
          </div>

          {/* Card 2: Qualifications */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-teal hover:bg-white hover:shadow-card transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-teal text-white flex items-center justify-center font-bold shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Qualifications</div>
              <h3 className="text-lg font-extrabold font-heading text-brand-navy group-hover:text-brand-teal transition mt-0.5">
                MPT (Ortho), NDT
              </h3>
              <p className="text-xs font-semibold text-slate-600">Orthopaedic & Neuro Specialist</p>
            </div>
          </div>

          {/* Card 3: Experience */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-teal hover:bg-white hover:shadow-card transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Experience</div>
              <h3 className="text-lg font-extrabold font-heading text-brand-navy group-hover:text-brand-teal transition mt-0.5">
                12+ Years
              </h3>
              <p className="text-xs font-semibold text-slate-600">Clinical Physiotherapy Care</p>
            </div>
          </div>

          {/* Card 4: Registration Number */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-teal hover:bg-white hover:shadow-card transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Registration</div>
              <h3 className="text-lg font-extrabold font-heading text-brand-navy group-hover:text-brand-teal transition mt-0.5">
                153XMC1177/TSM3
              </h3>
              <p className="text-xs font-semibold text-slate-600">Regd. State Medical Council</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
