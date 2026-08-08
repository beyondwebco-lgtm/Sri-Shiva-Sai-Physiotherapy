import { Award, GraduationCap, Home, HeartHandshake } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: Award,
      title: "12+ Years",
      subtitle: "Clinical Experience",
    },
    {
      icon: GraduationCap,
      title: "MPT (Ortho)",
      subtitle: "Qualified Professional",
    },
    {
      icon: Home,
      title: "Home Visits",
      subtitle: "Available",
    },
    {
      icon: HeartHandshake,
      title: "Personalized",
      subtitle: "Treatment Approach",
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-8 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-teal/40 hover:bg-white hover:shadow-card transition duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition duration-300 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-brand-navy font-heading leading-tight group-hover:text-brand-teal transition">
                    {item.title}
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    {item.subtitle}
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
