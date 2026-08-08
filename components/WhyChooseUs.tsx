import { Award, UserCheck, Shield, Home, HeartHandshake, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Award,
      title: "12+ Years Experience",
      desc: "Dr. Shankar.N brings over a decade of clinical rehabilitation experience in musculoskeletal and neurological recovery.",
    },
    {
      icon: UserCheck,
      title: "Personalized Treatment",
      desc: "Custom physical therapy and rehabilitation regimens tailored to your specific biomechanics, pain level, and lifestyle.",
    },
    {
      icon: Shield,
      title: "Orthopaedic Expertise",
      desc: "Specialized MPT (Ortho) & NDT training for spinal alignment, joint mobilization, and nerve decompression.",
    },
    {
      icon: Home,
      title: "Home Visit Availability",
      desc: "Dedicated doorstep physiotherapy across Peerzadiguda, Uppal, and surrounding areas in Hyderabad.",
    },
    {
      icon: HeartHandshake,
      title: "Patient-Centered Care",
      desc: "Focused on functional recovery, ergonomic re-education, and long-term joint health to prevent recurrence.",
    },
    {
      icon: MapPin,
      title: "Convenient Hyderabad Location",
      desc: "Easily accessible clinic located right beside Parvatapur SBI Branch in Peerzadiguda, Uppal.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-brand-navy font-extrabold text-xs uppercase tracking-wider">
            OUR COMMITMENT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy">
            Why Choose Sri Shiva Sai?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Dedicated to providing transparent, ethical, and evidence-based physiotherapy designed around your physical well-being.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 text-brand-teal group-hover:bg-brand-navy group-hover:text-emerald-400 transition duration-300 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-teal transition">
                  {pt.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
