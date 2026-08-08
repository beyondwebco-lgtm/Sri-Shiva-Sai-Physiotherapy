import Image from "next/image";
import { ShieldCheck, HeartPulse, CheckCircle2 } from "lucide-react";

export default function PatientJourney() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-card p-8 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-brand-navy font-extrabold text-xs uppercase tracking-wider">
                <HeartPulse className="w-4 h-4 text-brand-teal" />
                CLINICAL CARE APPROACH
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy leading-tight">
                Experienced Care Focused on Your Long-Term Health
              </h2>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                "Every patient is unique. Your recovery journey begins with a clear understanding of your condition, movement limitations, and rehabilitation goals."
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600">
                    <strong>Comprehensive Physical Evaluation:</strong> Assessing joint mechanics, nerve irritation, posture alignment, and functional range of motion.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600">
                    <strong>Evidence-Based Modalities:</strong> Integrating manual therapy, chiropractic posture care, electrotherapy, and progressive strengthening.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600">
                    <strong>In-Clinic & Home Visit Options:</strong> Flexible scheduling for clinic visits or doorstep treatment across Peerzadiguda and Uppal.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0" />
                <span>
                  Ethical physiotherapy practice strictly complying with standard clinical protocols.
                </span>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <Image
                  src="/images/clinic_environment.png"
                  alt="Sri Shiva Sai Physiotherapy Clinic treatment room environment in Hyderabad"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-brand-navy text-white text-xs font-bold">
                  Pristine Treatment Environment — Peerzadiguda, Uppal
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
