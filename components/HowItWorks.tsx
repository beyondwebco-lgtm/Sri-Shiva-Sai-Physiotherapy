import { ClipboardCheck, FileSpreadsheet, Activity, TrendingUp } from "lucide-react";

interface HowItWorksProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  const steps = [
    {
      num: "01",
      icon: ClipboardCheck,
      title: "Assessment",
      desc: "Understand your condition, pain history, and biomechanical movement limitations through detailed examination.",
    },
    {
      num: "02",
      icon: FileSpreadsheet,
      title: "Personalized Plan",
      desc: "Create a customized physical therapy and rehabilitation approach suited specifically to your goals.",
    },
    {
      num: "03",
      icon: Activity,
      title: "Treatment & Rehab",
      desc: "Work progressively toward better movement, pain reduction, and functional strength under clinical supervision.",
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Progress",
      desc: "Continuously review, refine, and adjust the rehabilitation approach as your mobility improves.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-brand-navy font-extrabold text-xs uppercase tracking-wider">
            TREATMENT PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy">
            Your Path to Recovery
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A structured, 4-step rehabilitation process focused on evaluating, treating, and restoring your daily mobility.
          </p>
        </div>

        {/* Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-3xl p-7 hover:bg-white hover:border-brand-teal hover:shadow-card transition-all duration-300 space-y-4 group relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-heading text-brand-teal">
                      {st.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition duration-300 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-teal transition">
                    {st.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="w-full h-1 bg-slate-200 group-hover:bg-brand-teal transition rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-navy hover:bg-brand-darkNavy text-white font-extrabold text-sm shadow-xl transition transform active:scale-95"
          >
            BOOK YOUR INITIAL ASSESSMENT
          </button>
        </div>

      </div>
    </section>
  );
}
