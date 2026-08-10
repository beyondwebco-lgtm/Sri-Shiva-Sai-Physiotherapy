"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

interface FaqSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function FaqSection({ onOpenBooking }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const phone = "9652164938";
  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    "Hello, I have a question regarding physiotherapy treatment at Sri Shiva Sai Clinic."
  )}`;

  const faqs = [
    {
      q: "Do you provide home physiotherapy visits?",
      a: "Yes! Sri Shiva Sai Physiotherapy Clinic undertakes home visits across Peerzadiguda, Uppal, and surrounding areas in Hyderabad for patients who find it difficult to travel due to pain, post-surgical recovery, or mobility limitations.",
    },
    {
      q: "What conditions do you treat?",
      a: "We treat back pain, neck pain, sciatica, spondylitis, osteoarthritis, sports injuries, paralysis recovery, stroke rehabilitation, nerve compressions, and joint stiffness.",
    },
    {
      q: "Do I need an appointment?",
      a: "Prior booking is recommended to avoid waiting times and ensure Dr. Shankar.N is available to conduct a thorough physical examination.",
    },
    {
      q: "Do you treat sports injuries?",
      a: "Yes, we provide athletic rehabilitation for sprains, muscle tears, tendinitis, joint overuse, and post-injury sports recovery.",
    },
    {
      q: "Do you provide neurological physiotherapy?",
      a: "Yes, Dr. Shankar.N holds NDT (Neuro-Developmental Therapy) certification, specializing in stroke rehab, paralysis recovery, and gait balance retraining.",
    },
    {
      q: "Do you treat back and neck pain?",
      a: "Back and neck pain treatment is one of our primary specializations. We utilize targeted spinal mobilization, lumbar/cervical decompression, and core stabilization routines.",
    },
    {
      q: "Do you provide chiropractic care?",
      a: "Yes, we integrate gentle spinal adjustments, joint manipulation, and posture alignment care alongside physical therapy.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at 1-92/2, Bhavani Bhavnagar, Parvathapur, Peerzadiguda, Hyderabad, Telangana 500098.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can book easily by clicking 'BOOK AN APPOINTMENT', calling us at 9652164938, or sending a direct message on WhatsApp.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-brand-navy font-extrabold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-brand-teal" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Clear information about consultations, treatment methods, home visits, and appointments.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold font-heading text-brand-navy hover:text-brand-teal transition"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-teal shrink-0 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp CTA below FAQ */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
          <h3 className="text-xl font-bold font-heading text-brand-navy">
            Have a question not listed here?
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Contact Dr. Shankar.N directly on WhatsApp for quick guidance regarding your condition.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition"
            >
              <MessageSquare className="w-5 h-5" />
              Ask Us on WhatsApp (9652164938)
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand-navy hover:bg-brand-darkNavy text-white font-extrabold text-sm shadow-md transition"
            >
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
