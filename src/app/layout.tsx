import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Silvertek | Election Campaign Vehicle Modification Coimbatore",
    template: "%s | Silvertek Automotive"
  },
  description: "Specialized election campaign vehicle customization in Coimbatore. We build high-tech political campaign jeeps with tactical audio, LED displays, and custom wraps. Serving Tamil Nadu.",
  keywords: [
    // Core Services
    "Election campaign vehicle modification", "Political campaign vehicle customization", "Election vehicle customization Coimbatore",
    "Customized campaign jeeps Tamil Nadu", "Political vehicle modifications Coimbatore", "Election campaign vehicle services Tamil Nadu",
    "Jeep modifications for election campaigns", "Custom election campaign vehicles", "Modified jeeps for political campaigns",
    
    // "How People Search" (Natural Language & Intent)
    "Best place to modify campaign car in Coimbatore", "Election vehicle modification cost in Tamil Nadu", "Urgent election campaign vehicle customization",
    "Jeep modification for election near me", "Low budget campaign vehicle customization", "Premium political rally vehicle makers",
    "Where can I get my election jeep designed", "Full tactical wrap for election car", "Voice recording and horn fitting for election",
    
    // Political/Role-Based Searches
    "MLA campaign vehicle design", "MP election jeep customization", "Ward member campaign vehicle", "Party leader rally van",
    "Candidate roadshow vehicle", "Independent candidate campaign jeep", "VIP political convoy cars", "Chief Minister style campaign van",
    
    // Party-Specific Style Searches (Neutral match for all)
    "DMK style election jeep", "ADMK style campaign van", "BJP election vehicle design", "Congress campaign jeep", 
    "NTK campaign vehicle", "TVK campaign vehicle", "Political party flag branding for cars",
    
    // Local / Tamil Transliterated Keywords
    "Arasiyal vandi decoration", "Election vandi design photos", "Katchi kodi vandi decoration", "Election jeep set",
    "Coimbatore arasiyal vandi workshop", "Tamil Nadu political car modification", "Mike set kattuvaathu eppadi",
    
    // Visual & Tech Specifics
    "Hydraulic lift election jeep", "Open top campaign SUV", "Election van with stage", "Sound system for political rally", 
    "LED wall campaign vehicle price", "360 degree rotating stage vehicle", "Night rally lighting setup", "Sunroof election jeep",
    
    // Regional/Hyper-Local (Nearby Cities)
    "Pollachi election vehicle service", "Tiruppur campaign jeep design", "Erode political vehicle customization", 
    "Salem election van modification", "Madurai election jeep fabrication", "Karur campaign vehicle specialists",
    
    // Original Generic Keywords
    "Best campaign vehicle service in Coimbatore", "Election vehicle branding and customization", "Loudspeaker and LED screen installation",
    "Best election campaign vehicle modifiers in Coimbatore", "Political rally vehicles with LED displays", "How to customize an election campaign vehicle",
    "Affordable election campaign vehicle modification", "Best election campaign jeep modification shop", "Custom graphics for campaign vehicles",
    "Tamil Nadu election campaign vehicle rules", "Election promotional vehicle rental", "Election campaign vehicle Coimbatore",
    "Best political campaign vehicle Tamil Nadu", "Election vehicle customization near me", "Coimbatore election vehicle modification shop",
    "Top vehicle customization services Tamil Nadu", "Custom election vehicle builders Coimbatore", "Where to modify election campaign jeep",
    "Election vehicle painting and branding", "Top election vehicle service provider Tamil Nadu", "Customized election vehicles Coimbatore",
    "Best vehicle modification shop political campaigns", "Top-rated election vehicle modification company", "Political party promotional vehicle services",
    "Custom election jeeps and vans", "Election rally vehicle modifications Coimbatore", "Buy election campaign vehicle Coimbatore",
    "Get election campaign vehicle modified Tamil Nadu", "Affordable campaign vehicle customization", "Where to modify political campaign vehicles",
    "Book your election campaign vehicle Coimbatore", "Digital election campaign vehicles Tamil Nadu", "Election campaign vehicles smart technology",
    "AI-powered election campaign jeeps", "Live streaming election campaign vehicles", "Best political vehicle customization trends 2026",
    "Car Accessories Coimbatore", "Android stereo system car", "Car Scuff plates", "Car Seat covers Coimbatore",
    
    // Brand & Competitor Targeting (Advanced SEO)
    "Silvertek", "Silvertek Coimbatore", "Silvertek Tamil Nadu", "Silvertek Automotive",
    "Jeep Club Tamil Nadu alternative", "Jeep Clinic Coimbatore alternative", 
    "Best political jeep maker in Tamil Nadu", "Campaign jeeps for elections in Tamil Nadu",
    "Which vehicle is best for political rallies in Tamil Nadu",
    
    // Political Parties & Leaders (High Search Volume)
    "DMK campaign vehicle", "AIADMK election jeep", "BJP Tamil Nadu campaign car", "NTK Seeman campaign van",
    "TVK Vijay political vehicle", "Congress election jeep Tamil Nadu", "VCK campaign vehicle",
    "M.K. Stalin campaign van design", "Edappadi K. Palaniswami campaign jeep", "Annamalai BJP campaign car",
    "Thol. Thirumavalavan campaign vehicle", "Kamal Haasan campaign vehicle",
    
    // Major Cities Targeting
    "Coimbatore", "Chennai", "Madurai", "Salem", "Tiruppur", "Trichy", "Erode", "Tirunelveli", "Vellore", "Kancheepuram"
  ],
  authors: [{ name: "Silvertek Automotive" }],
  creator: "Silvertek",
  publisher: "Silvertek",
  category: "Automotive",
  applicationName: "Silvertek Campaign Vehicles",
  metadataBase: new URL('https://silvertek.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Silvertek | Premier Election Campaign Vehicle Customization",
    description: "Transform your political campaign with Silvertek's high-tech vehicle modifications. Expert jeep customization, LED displays, and premium audio systems.",
    url: "https://silvertek.in",
    siteName: "Silvertek",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: '/images/gallery2.png',
        width: 1200,
        height: 630,
        alt: 'Silvertek Campaign Vehicle',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silvertek - Election Campaign Specialists",
    description: "The #1 choice for political vehicle customization in Tamil Nadu.",
    images: ['/images/gallery2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.020752;76.969235",
    "ICBM": "11.020752, 76.969235"
  }
};

import { FloatingActions } from "@/components/floating-actions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "Silvertek Automotive",
    "image": "https://silvertek.in/images/gallery2.png",
    "@id": "https://silvertek.in",
    "url": "https://silvertek.in",
    "telephone": "+919176726175",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "317, Venkatasamy Rd, Siddhapudur",
      "addressLocality": "Coimbatore",
      "addressRegion": "TN",
      "postalCode": "641044",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.0207519,
      "longitude": 76.9692348
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/share/1G7ebdyvtT/",
      "https://www.instagram.com/silvertekcar?igsh=ZmV5MjY3dHBjNmty",
      "https://IndiaMART.in/jAEBDB0q"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased text-slate-800 bg-white`}
      >
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
