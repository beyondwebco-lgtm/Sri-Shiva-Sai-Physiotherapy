import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from "lucide-react";

export default function LocationSection() {
  const phone = "9652164938";
  const address = "1-92/2, Bhavani Bhavnagar, Parvathapur, Peerzadiguda, Hyderabad, Telangana 500098";
  const mapsUrl = "https://maps.app.goo.gl/VkdHPPKJZd5vWdQdA";

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
            Parvathapur, Peerzadiguda, Hyderabad, Telangana
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
                <a 
                  href={mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-brand-navy"
                >
                  <strong>Address:</strong><br />
                  1-92/2, Bhavani Bhavnagar,<br />
                  Parvathapur, Peerzadiguda,<br />
                  Hyderabad, Telangana 500098
                </a>
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
                <span>Location: Parvathapur, Peerzadiguda, Hyderabad, Telangana</span>
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
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 relative group cursor-pointer"
            >
              <iframe
                title="Sri Shiva Sai Physiotherapy Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4265184253413!2d78.60750469999999!3d17.3913072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f00741a5607%3A0xe0271e50ada6221f!2sSri%20shiva%20sai%20physiotherapy%20clinic!5e0!3m2!1sen!2sin!4v1786380045776!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full pointer-events-none"
              />
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-all flex items-end justify-center p-4">
                <div className="bg-white/95 backdrop-blur-xs px-4 py-2 rounded-xl shadow-lg border border-slate-200 text-brand-navy font-bold text-xs flex items-center gap-2 group-hover:scale-105 transition-transform">
                  <Navigation className="w-4 h-4 text-brand-teal" />
                  <span>Click to open exact location in Google Maps</span>
                </div>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
