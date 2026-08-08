import {
  Bone,
  Activity,
  Stethoscope,
  Zap,
  Trophy,
  Brain,
  ShieldAlert,
  HeartPulse,
  UserCheck,
  Sparkles,
  Home,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenBooking: (serviceName: string) => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const phone = "9652164938";

  const services = [
    {
      num: "01",
      title: "Orthopaedic Physiotherapy",
      icon: Bone,
      description: "Specialized musculoskeletal therapy for joint, bone, ligament, and post-fracture rehabilitation.",
    },
    {
      num: "02",
      title: "Back Pain Treatment",
      icon: Activity,
      description: "Lumbar mobilization, core stabilization, disc pain relief, and postural alignment routines.",
    },
    {
      num: "03",
      title: "Neck Pain Treatment",
      icon: Stethoscope,
      description: "Cervical spine mobilization, muscle spasm relief, and ergonomic posture re-education.",
    },
    {
      num: "04",
      title: "Sciatica Treatment",
      icon: Zap,
      description: "Targeted nerve decompression techniques and therapeutic stretches to relieve radiating leg pain.",
    },
    {
      num: "05",
      title: "Sports Injury Rehabilitation",
      icon: Trophy,
      description: "Rehabilitation for sprains, muscle tears, tendinitis, and athletic performance recovery.",
    },
    {
      num: "06",
      title: "Neurological Physiotherapy",
      icon: Brain,
      description: "NDT certified rehabilitation for motor re-learning, gait balance, and stroke recovery support.",
    },
    {
      num: "07",
      title: "Spondylitis Rehabilitation",
      icon: ShieldAlert,
      description: "Therapeutic interventions for cervical and lumbar spondylitis to reduce joint inflammation.",
    },
    {
      num: "08",
      title: "Arthritis Rehabilitation",
      icon: HeartPulse,
      description: "Pain-relieving electrotherapy, joint mobilization, and exercises for osteoarthritic stiffness.",
    },
    {
      num: "09",
      title: "Paralysis Rehabilitation",
      icon: UserCheck,
      description: "Structured long-term physical therapy focusing on movement restoration and functional mobility.",
    },
    {
      num: "10",
      title: "Head & Neck Pain Treatment",
      icon: Activity,
      description: "Specialized care for cervicogenic headaches, upper trapezius tightness, and neck tension.",
    },
    {
      num: "11",
      title: "Chiropractic Care",
      icon: Sparkles,
      description: "Gentle spinal adjustments, joint manipulation, and posture realignment for nerve tension relief.",
    },
    {
      num: "12",
      title: "Home Visit Physiotherapy",
      icon: Home,
      description: "Personalized physiotherapy care delivered directly at your home residence across Hyderabad.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-brand-navy font-extrabold text-xs uppercase tracking-wider">
            OUR SPECIALIZATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy">
            Specialized Physiotherapy Care
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Professional treatment and rehabilitation for a wide range of musculoskeletal, neurological and mobility-related conditions.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            const waUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
              `Hello, I would like to enquire about ${s.title}.`
            )}`;

            return (
              <div
                key={s.num}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => onOpenBooking(s.title)}
              >
                <div className="space-y-4">
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-heading text-slate-300 group-hover:text-brand-teal transition duration-300">
                      {s.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition duration-300 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-teal transition">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>

                {/* Footer Action Arrow & WhatsApp Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire WhatsApp</span>
                  </a>

                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-teal group-hover:text-white text-slate-500 flex items-center justify-center transition">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
