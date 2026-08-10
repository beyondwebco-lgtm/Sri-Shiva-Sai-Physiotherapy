import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Shiva Sai Physiotherapy & Chiropractic Clinic | Dr. Shankar.N | Hyderabad",
  description:
    "Sri Shiva Sai Physiotherapy & Chiropractic Clinic in Peerzadiguda, Uppal, Hyderabad. Led by Senior Physiotherapist Dr. Shankar.N (MPT Ortho, NDT) with 12+ years experience. Specialized orthopaedic, back pain, sports rehab & home visit physiotherapy.",
  keywords: [
    "Physiotherapist in Hyderabad",
    "Physiotherapy in Hyderabad",
    "Physiotherapist near Peerzadiguda",
    "Physiotherapy near Uppal",
    "Back pain physiotherapy Hyderabad",
    "Sports physiotherapy Hyderabad",
    "Neurological physiotherapy Hyderabad",
    "Orthopaedic physiotherapy Hyderabad",
    "Home physiotherapy Hyderabad",
    "Physiotherapy home visit Hyderabad",
    "Chiropractic clinic Hyderabad",
    "Dr Shankar N Physiotherapist",
  ],
  authors: [{ name: "Dr. Shankar.N" }],
  openGraph: {
    title: "Sri Shiva Sai Physiotherapy & Chiropractic Clinic | Hyderabad",
    description:
      "Move Better. Live Better. Senior Physiotherapist Dr. Shankar.N (MPT Ortho, NDT) offers expert clinical care and home visit physiotherapy in Hyderabad.",
    url: "https://srishivasai-physio.com",
    siteName: "Sri Shiva Sai Physiotherapy Clinic",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness & MedicalClinic Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Sri Shiva Sai Physiotherapy & Chiropractic Clinic",
    "alternateName": "Sri Shiva Sai Physiotherapy Clinic Hyderabad",
    "description": "Senior Physiotherapist Dr. Shankar.N (MPT Ortho, NDT) offers specialized orthopaedic, neurological, chiropractic, and home visit physiotherapy care in Hyderabad.",
    "url": "https://srishivasai-physio.com",
    "telephone": "+919652164938",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1-92/2, Bhavani Bhavnagar, Parvathapur, Peerzadiguda",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500098",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3913072,
      "longitude": 78.6075047
    },
    "medicalSpecialty": [
      "Physiotherapy",
      "Orthopedics",
      "Chiropractic",
      "Neurology",
      "SportsMedicine"
    ],
    "physician": {
      "@type": "Physician",
      "name": "Dr. Shankar.N",
      "medicalSpecialty": "Physiotherapist",
      "identifier": "153XMC1177/TSM3"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:30"
      }
    ],
    "priceRange": "₹₹"
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-slate-50 selection:bg-brand-teal selection:text-white">
        {children}
      </body>
    </html>
  );
}
