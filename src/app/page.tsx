import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProjectGallery, HeroCarousel } from '@/components/project-gallery';
import { CheckCircle2, Megaphone, Gauge, Zap, Phone, Star, Volume2, Music, Eye, Armchair, Cpu, Map, Clock, Trophy, ShieldCheck, Globe2, Headphones } from 'lucide-react';

export const metadata: Metadata = {
  title: "Silvertek | Best Election Campaign Vehicle Customization in Coimbatore",
  description: "Visit our shop in Coimbatore for premium election campaign vehicle modifications. We specialize in tactical signals, audio systems, and LED displays for political success.",
  keywords: [
    "Shop location Coimbatore", "Fields election campaign",
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
  openGraph: {
     title: "Silvertek - Election Campaign Vehicle Specialists Coimbatore",
     description: "Visit our customized vehicle workshop in Coimbatore. We build victory machines for elections.",
     images: ['/images/gallery2.png'], 
  }
};

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-50 font-sans selection:bg-primary/20 selection:text-primary">
      <SiteHeader />
      
      <main className="flex-1">
        {/* HERO SECTION via Carousel Component */}
        <section id="home">
          <HeroCarousel />
        </section>

        {/* TRUST BADGE STRIP */}
        {/* TRUST BADGE STRIP */}
        <div className="bg-white py-10 relative z-20 shadow-xl -mt-8 mx-4 md:mx-12 rounded-2xl border border-slate-100">
          <div className="container px-4">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                {/* Since 2012 */}
                <div className="flex flex-col items-center gap-3 group cursor-default">
                  <div className="p-3.5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-6 w-6 fill-current" />
                  </div>
                  <div className="text-center">
                    <span className="block text-slate-900 font-black text-xl tracking-tight">Since 2012</span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Industry Leader</span>
                  </div>
                </div>

                {/* 500+ Fleet */}
                <div className="flex flex-col items-center gap-3 group cursor-default">
                   <div className="p-3.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="h-6 w-6" strokeWidth={2.5} />
                   </div>
                   <div className="text-center">
                    <span className="block text-slate-900 font-black text-xl tracking-tight">500+ Fleet</span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Ready to Deploy</span>
                   </div>
                </div>

                {/* Statewide Reach */}
                <div className="flex flex-col items-center gap-3 group cursor-default">
                   <div className="p-3.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl text-white shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Globe2 className="h-6 w-6" strokeWidth={2.5} />
                   </div>
                   <div className="text-center">
                    <span className="block text-slate-900 font-black text-xl tracking-tight">Statewide</span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Service Network</span>
                   </div>
                </div>

                {/* 24/7 Support */}
                <div className="flex flex-col items-center gap-3 group cursor-default">
                   <div className="p-3.5 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl text-white shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Headphones className="h-6 w-6" strokeWidth={2.5} />
                   </div>
                   <div className="text-center">
                    <span className="block text-slate-900 font-black text-xl tracking-tight">24/7 Support</span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">On-Site Techs</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* GALLERY SECTION (High Priority) */}
        <div className="bg-slate-50/50">
          <ProjectGallery />
        </div>

        {/* SERVICES SECTION */}
        <section 
          id="services" 
          className="py-12 md:py-24 relative overflow-hidden bg-white"
        >
          {/* Subtle Political Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>
          
          <div className="container px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold tracking-wide uppercase text-xs mb-4">
                Our Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                Designed for <span className="text-primary">Victory</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                We combine automotive engineering with political branding to create vehicles that ensure your message reaches every voter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                 icon={<Megaphone className="h-6 w-6 text-white fill-current" />}
                 title="Sonic Projection"
                 description="AHUJA tactical horn arrays engineered for 2km+ clear voice penetration."
                 className="bg-orange-50/80 hover:bg-orange-100/80"
              />
              <ServiceCard 
                 icon={<Volume2 className="h-6 w-6 text-white" strokeWidth={2.5} />}
                 title="High-Gain Audio"
                 description="Concert-grade digital amplifiers with zero-latency anti-feedback tech."
                 className="bg-emerald-50/80 hover:bg-emerald-100/80"
              />
              <ServiceCard 
                 icon={<Zap className="h-6 w-6 text-white fill-current" />}
                 title="Assault Lighting"
                 description="1000W LED floodlights & high-intensity strobes for night rally dominance."
                 className="bg-amber-50/80 hover:bg-amber-100/80"
              />
              <ServiceCard 
                 icon={<CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2.5} />}
                 title="Mobile Stage"
                 description="Heavy duty steel base platform for 360° candidate visibility"
                 className="bg-sky-50/80 hover:bg-sky-100/80"
              />
              <ServiceCard 
                 icon={<Star className="h-6 w-6 text-white fill-current" />}
                 title="Tactical Wrap"
                 description="High-gloss premium vinyl branding with 10-year UV protection guarantee."
                 className="bg-rose-50/80 hover:bg-rose-100/80"
              />
              <ServiceCard 
                 icon={<Gauge className="h-6 w-6 text-white" strokeWidth={2.5} />}
                 title="Power Guard"
                 description="Silent fuel base generator systems for uninterrupted campaign runs."
                 className="bg-indigo-50/80 hover:bg-indigo-100/80"
              />
            </div>
          </div>
        </section>

        {/* GENERAL AUTOMOTIVE SERVICES */}
        <section className="py-12 md:py-24 relative overflow-hidden" id="car-care">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply"
            style={{ 
              backgroundImage: "url('/images/bg/car_care_bg_indian_real.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="container px-4 relative z-10">
            <div className="max-w-xl mx-auto text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                 Complete <span className="text-primary">Automotive Care</span>
               </h2>
               <p className="text-slate-600 font-medium">
                 Beyond campaign vehicles, we are making modification of vehicles with premium accessories and expert repairing service for all passenger cars
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
               {/* Card 1: Audio & Entertainment */}
                <div className="bg-white/80 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center group hover:border-primary/50 hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-white hover:to-primary/5">
                   <div className="h-14 w-14 md:h-16 md:w-16 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md group-hover:bg-primary transition-colors duration-300">
                     <Music className="h-6 w-6 md:h-8 md:w-8" strokeWidth={2} />
                   </div>
                   <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Audio & Entertainment</h3>
                   <p className="text-slate-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                     Immersive sound experiences with top-tier audio systems and noise isolation.
                   </p>
                   <ul className="text-sm font-bold text-slate-700 space-y-2 mb-4 w-full text-left pl-4 md:pl-8">
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" strokeWidth={3} /> Android Stereo Systems</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" strokeWidth={3} /> Hi-End Audio & Speakers</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" strokeWidth={3} /> Car Damping (Soundproofing)</li>
                   </ul>
                </div>

               {/* Card 2: Lighting & Visuals */}
                <div className="bg-white/80 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center group hover:border-secondary/50 hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-white hover:to-secondary/5">
                   <div className="h-14 w-14 md:h-16 md:w-16 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md group-hover:bg-secondary group-hover:text-slate-900 transition-colors duration-300">
                     <Eye className="h-6 w-6 md:h-8 md:w-8" strokeWidth={2} />
                   </div>
                   <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Lighting & Visuals</h3>
                   <p className="text-slate-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                     enhance visibility and aesthetics with premium lighting and custom wraps.
                   </p>
                    <ul className="text-sm font-bold text-slate-700 space-y-2 mb-4 w-full text-left pl-4 md:pl-8">
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0" strokeWidth={3} /> Projector Headlights & LEDs</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0" strokeWidth={3} /> Premium Car Wrapping</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0" strokeWidth={3} /> Sun Control Films</li>
                   </ul>
                </div>

               {/* Card 3: Comfort & Accessories */}
                <div className="bg-white/80 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center group hover:border-primary/50 hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-white hover:to-primary/5">
                   <div className="h-14 w-14 md:h-16 md:w-16 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md group-hover:bg-primary transition-colors duration-300">
                     <Armchair className="h-6 w-6 md:h-8 md:w-8" strokeWidth={2} />
                   </div>
                   <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Comfort & Style</h3>
                   <p className="text-slate-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                     Upgrade your interior with custom fittings and functional accessories.
                   </p>
                   <ul className="text-sm font-bold text-slate-700 space-y-2 mb-4 w-full text-left pl-4 md:pl-8">
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" strokeWidth={3} /> Seat Covers & Floor Mats</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" strokeWidth={3} /> Horn installation</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" strokeWidth={3} /> General Accessories</li>
                   </ul>
                </div>

               {/* Card 4: Advanced Electronics */}
                <div className="bg-white/80 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center group hover:border-secondary/50 hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-white hover:to-secondary/5">
                   <div className="h-14 w-14 md:h-16 md:w-16 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md group-hover:bg-secondary group-hover:text-slate-900 transition-colors duration-300">
                     <Cpu className="h-6 w-6 md:h-8 md:w-8" strokeWidth={2} />
                   </div>
                   <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Electronics & Keys</h3>
                   <p className="text-slate-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                     Expert coding, scanning, and electrical solutions for modern vehicles.
                   </p>
                    <ul className="text-sm font-bold text-slate-700 space-y-2 mb-4 w-full text-left pl-4 md:pl-8">
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0" strokeWidth={3} /> Key Programming & Smart Keys</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0" strokeWidth={3} /> ECM Scanning & Sensor Wiring</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0" strokeWidth={3} /> Power Windows & Remotes</li>
                   </ul>
                </div>
            </div>
          </div>
        </section>

        {/* HISTORY / ABOUT */}
        <section 
           id="about" 
           className="py-12 md:py-24 relative bg-white"
        >
           <div className="container px-4 relative z-10">
              <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-12 border border-slate-100 overflow-hidden relative group shadow-sm">
                 
                 <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                    <div className="order-2 lg:order-1">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white border border-slate-800 text-sm font-bold uppercase tracking-wide mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Our Legacy
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Building <span className="text-primary">Victory Machines</span> <br/> Since 2012
                      </h2>
                      <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                        <p>
                          Transforming ordinary four wheelers into powerful election campaign vehicles for Tamil Nadu politics. We provide comprehensive vehicle modification, campaign van remodeling, and political vehicle customization. From low-cost solutions to premium setups, we offer high-quality workshop services for election promotions.
                        </p>
                        <p>
                          We specialize in rally vehicle setup, party campaign van design, sound system installation, LED branding, sticker wrapping, and creative political advertising for <strong className="text-slate-900 font-extrabold">all political campaigns</strong>. If you are a political campaign coordinator, rally organizer, or promotion team looking for affordable and reliable campaign vehicle modification in Tamil Nadu, Silvertek is here for you.
                        </p>
                        <p>
                          Our designs are field-tested for the harsh realities of roadshows. We prioritize <strong className="text-slate-900">"Neat & Clean"</strong> aesthetics that project professionalism and stability.
                        </p>
                      </div>
                      
                      <div className="mt-8 flex flex-col sm:flex-row gap-4">
                         <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-primary/30 transition-colors shadow-sm">
                           <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-lg">
                             <CheckCircle2 size={20} />
                           </div>
                           <span className="font-bold text-slate-900">Field Tested</span>
                         </div>
                         <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-primary/30 transition-colors shadow-sm">
                           <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-lg">
                             <CheckCircle2 size={20} />
                           </div>
                           <span className="font-bold text-slate-900">Modern Finish</span>
                         </div>
                      </div>
                    </div>
                    
                    <div className="order-1 lg:order-2 relative h-[300px] md:h-[450px] lg:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 transform transition-transform duration-700 hover:scale-[1.02]">
                       <Image 
                         src="/images/gallery2.png" 
                         alt="Silvertek Workshop Audio Demo Room and Office"
                         fill
                         sizes="(max-width: 1024px) 100vw, 50vw"
                         className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent flex items-end p-8">
                          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-slate-900 w-full shadow-lg">
                             <p className="text-5xl font-black mb-1 text-primary">12+</p>
                             <p className="text-base font-medium text-slate-600 uppercase tracking-wide">Years of Excellence</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* PRE-FOOTER CTA */}
        <section className="py-12 md:py-24 bg-slate-50 text-center relative overflow-hidden">
          <div className="container px-4 relative z-10 max-w-4xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
               Ready to Launch Your Campaign?
             </h2>
             <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
               Don&apos;t leave your roadshow to chance. Partner with the experts who understand the art of political visibility.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="rounded-full h-14 px-10 text-base font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105 w-full sm:w-auto" asChild>
                   <Link href="tel:+919176726175">
                     <Phone className="mr-2 h-5 w-5" />
                     Talk to an Expert
                   </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-base font-bold bg-white text-slate-900 border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-all hover:scale-105 w-full sm:w-auto" asChild>
                  <Link href="https://wa.me/919176726175">
                    WhatsApp Us
                  </Link>
                </Button>
             </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function ServiceCard({ 
  icon, 
  title, 
  description,
  className,
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  className?: string, 
}) {
  return (
    <Card className={`border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden relative ${className || 'bg-white hover:bg-slate-50/50'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <CardContent className="p-8 relative z-10">
        <div className={`mb-6 h-12 w-12 rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 bg-slate-900 text-white group-hover:bg-primary`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-3 text-slate-900`}>{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
