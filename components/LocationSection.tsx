import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from "lucide-react";

export default function LocationSection() {
  const phone = "9652164938";
  const address = "I-92/2, Beside Parvatapur SBI Branch, Peerzadiguda, Uppal, Hyderabad, Telangana";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Sri Shiva Sai Physiotherapy Clinic Beside Parvatapur SBI Branch Peerzadiguda Uppal Hyderabad"
  )}`;

  return (
    <section id="location" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-brand-navy font-extrabold text-xs uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-brand-teal" />
            CONVENIENT CLINIC LOCATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy">
            Visit Sri Shiva Sai Physiotherapy & Chiropractic Clinic
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Peerzadiguda, Uppal, Hyderabad, Telangana
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Clinic Information Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-card space-y-5">
              
              <div>
                <h3 className="text-xl font-extrabold font-heading text-brand-navy">
                  Sri Shiva Sai Physiotherapy & Chiropractic Clinic
                </h3>
                <p className="text-xs font-bold text-brand-teal mt-0.5">
                  Dr. Shankar.N (MPT Ortho, NDT) — Senior Physiotherapist
                </p>
              </div>

              <div className="flex items-start gap-3.5 text-slate-700 text-xs sm:text-sm pt-2">
                <MapPin className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong><br />
                  I-92/2, Beside Parvatapur SBI Branch,<br />
                  Peerzadiguda, Uppal, Hyderabad, Telangana
                </span>
              </div>

              <div className="flex items-center gap-3.5 text-slate-700 text-xs sm:text-sm">
                <Phone className="w-5 h-5 text-brand-navy shrink-0" />
                <span>
                  <strong>Phone / WhatsApp:</strong>{" "}
                  <a href={`tel:${phone}`} className="font-bold text-brand-navy hover:underline">
                    9652164938
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-3.5 text-slate-700 text-xs sm:text-sm">
                <Clock className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Clinic Operating Hours:</div>
                  <div className="text-slate-600">Monday – Saturday: 9:00 AM – 8:30 PM</div>
                  <div className="text-slate-600">Sunday: Prior Appointment / Home Visit</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-emerald-700 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Landmark: Beside Parvatapur State Bank of India (SBI)</span>
              </div>

            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-navy hover:bg-brand-darkNavy text-white font-extrabold text-sm shadow-md transition transform active:scale-98"
            >
              <Navigation className="w-4 h-4 text-emerald-400" />
              GET DIRECTIONS
            </a>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7">
            <div className="w-full h-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
              <iframe
                title="Sri Shiva Sai Physiotherapy Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.133276856428!2d78.5714!3d17.4052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f7895064e43%3A0x633391df79768df8!2sPeerzadiguda%2C%20Uppal%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
