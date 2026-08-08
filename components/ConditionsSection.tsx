import { ArrowRight, Activity } from "lucide-react";

interface ConditionsSectionProps {
  onOpenBooking: (conditionName: string) => void;
}

export default function ConditionsSection({ onOpenBooking }: ConditionsSectionProps) {
  const phone = "9652164938";

  const conditions = [
    { name: "Back Pain", tag: "Lumbar Spine", waText: "Hello, I would like to enquire about treatment for back pain." },
    { name: "Neck Pain", tag: "Cervical Spine", waText: "Hello, I would like to enquire about treatment for neck pain." },
    { name: "Sciatica", tag: "Nerve Pain", waText: "Hello, I would like to enquire about treatment for sciatica." },
    { name: "Spondylitis", tag: "Joint Stiffness", waText: "Hello, I would like to enquire about spondylitis rehabilitation." },
    { name: "Arthritis", tag: "Joint Pain", waText: "Hello, I would like to enquire about arthritis rehabilitation." },
    { name: "Sports Injuries", tag: "Sprains & Tears", waText: "Hello, I would like to enquire about sports injury rehabilitation." },
    { name: "Neurological Conditions", tag: "Motor Recovery", waText: "Hello, I would like to enquire about neurological physiotherapy." },
    { name: "Paralysis Rehabilitation", tag: "Limb & Tone Rehab", waText: "Hello, I would like to enquire about paralysis rehabilitation." },
    { name: "Head & Neck Pain", tag: "Cervicogenic Pain", waText: "Hello, I would like to enquire about head & neck pain treatment." },
    { name: "Mobility Problems", tag: "Gait & Balance", waText: "Hello, I would like to enquire about mobility & gait rehabilitation." },
    { name: "Post-Injury Rehabilitation", tag: "Post-Fracture / Surgery", waText: "Hello, I would like to enquire about post-injury rehabilitation." },
  ];

  return (
    <section id="conditions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-brand-navy font-extrabold text-xs uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-brand-teal" />
            CLINICAL FOCUS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy">
            Conditions We Commonly Help With
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Comprehensive clinical evaluations and personalized physical rehabilitation plans for pain relief and functional mobility.
          </p>
        </div>

        {/* Condition Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {conditions.map((item, idx) => {
            const waUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(item.waText)}`;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-teal hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => onOpenBooking(item.name)}
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-extrabold text-brand-teal uppercase tracking-wider mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy group-hover:text-brand-teal transition">
                    {item.name}
                  </h3>
                </div>

                <div className="pt-6 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-brand-navy transition">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:underline"
                  >
                    Enquire
                  </a>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition text-brand-teal" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
