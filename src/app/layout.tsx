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
    default: "Silvertek | #1 Election Campaign Vehicle Customization in Coimbatore & Tamil Nadu",
    template: "%s | Silvertek Automotive"
  },
  description: "Premier election campaign vehicle modification shop in Coimbatore. We specialize in customizing political campaign jeeps with high-end audio, LED screens, tactical wraps, and smart technology. Serving all of Tamil Nadu since 2012.",
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
    "Car Accessories Coimbatore", "Android stereo system car", "Car Scuff plates", "Car Seat covers Coimbatore"
  ],
  authors: [{ name: "Silvertek Automotive" }],
  creator: "Silvertek",
  publisher: "Silvertek",
  category: "Automotive",
  applicationName: "Silvertek Campaign Vehicles",
  openGraph: {
    title: "Silvertek | Premier Election Campaign Vehicle Customization",
    description: "Transform your political campaign with Silvertek's high-tech vehicle modifications. Expert jeep customization, LED displays, and premium audio systems in Coimbatore.",
    url: "https://silvertek.in",
    siteName: "Silvertek",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silvertek - Election Campaign Specialists",
    description: "The #1 choice for political vehicle customization in Tamil Nadu.",
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
    google: "google-site-verification-token", // Placeholder, user can update
  },
  alternates: {
    canonical: "https://silvertek.in",
  },
};

import { FloatingActions } from "@/components/floating-actions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-slate-800 bg-white`}
      >
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
