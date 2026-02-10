import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Clock, Facebook, Instagram, Twitter, Mail, User, Store } from 'lucide-react';
import { SilvertekLogo } from '@/components/silvertek-logo';

export function SiteFooter() {
  return (
    <footer className="relative bg-slate-50 text-slate-900 py-16 border-t border-slate-200 overflow-hidden" id="contact">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30 mix-blend-multiply pointer-events-none"
        style={{ 
          backgroundImage: "url('/images/bg/campaign_footer_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content */}
      <div className="container px-4 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
               <SilvertekLogo className="h-10 w-auto" />
            </Link>
            <p className="text-slate-900 leading-relaxed text-sm max-w-xs font-bold">
              Transforming vehicles into election-winning machines. The preferred choice for political leaders across Tamil Nadu since 2012.
            </p>
            <div className="flex gap-4">
               {/* Social connections */}
               <a href="https://www.facebook.com/share/1G7ebdyvtT/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-[#1877F2] transition-colors duration-300 shadow-md ring-2 ring-white">
                 <Facebook size={18} />
               </a>
               <a href="https://www.instagram.com/silvertekcar?igsh=ZmV5MjY3dHBjNmty" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all duration-300 shadow-md ring-2 ring-white">
                 <Instagram size={18} />
               </a>
               <a href="https://IndiaMART.in/jAEBDB0q" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-[#2e3192] transition-colors duration-300 shadow-md ring-2 ring-white" title="IndiaMART">
                 <Store size={18} />
               </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-black font-extrabold text-lg uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                 <div className="flex items-center gap-3 text-slate-900">
                    <div className="h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center shadow-md ring-2 ring-white">
                      <User size={16} className="text-white" />
                    </div>
                    <span className="font-bold text-base">Jothikumar</span>
                 </div>
              </li>
              <li>
                <a href="tel:+919176726175" className="flex items-center gap-3 hover:text-primary transition-colors group">
                  <div className="h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-primary transition-colors shadow-md ring-2 ring-white">
                    <Phone size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-slate-900 text-base">+91 91767 26175</span>
                </a>
              </li>
              <li>
                <a href="mailto:aruljothikumar2@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                  <div className="h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-primary transition-colors shadow-md ring-2 ring-white">
                    <Mail size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm md:text-base break-all">aruljothikumar2@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919176726175" className="flex items-center gap-3 hover:text-green-700 transition-colors group">
                  <div className="h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-green-600 transition-colors shadow-md ring-2 ring-white">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-slate-900 group-hover:text-green-700">WhatsApp Support</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-black font-extrabold text-lg uppercase tracking-wide">Location</h4>
            <div className="flex items-start gap-4">
              <div className="h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center shrink-0 mt-1 shadow-md ring-2 ring-white">
                 <MapPin size={16} className="text-white" />
              </div>
              <address className="not-italic text-sm text-slate-900 leading-relaxed font-bold">
                <a 
                  href="https://www.google.com/maps/place/silvertek+car+accessories/@11.0207519,76.9692348,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba858fa0cc7e39d:0x15a46f9f3f2b2b76!8m2!3d11.0207519!4d76.9718097!16s%2Fg%2F11cjg5f235?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  317, Venkatasamy Rd,<br />
                  Siddhapudur, New Siddhapudur,<br />
                  Coimbatore, Tamil Nadu 641044
                </a>
              </address>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-black font-extrabold text-lg uppercase tracking-wide">Legacy</h4>
             <ul className="space-y-4 text-sm text-slate-900 font-bold">
               <li className="flex items-center gap-3">
                 <Clock size={18} className="text-slate-900" strokeWidth={2.5} />
                 <span>Est. 2012 (Official)</span>
               </li>
               <li className="flex items-center gap-3">
                 <Clock size={18} className="text-slate-900" strokeWidth={2.5} />
                 <span>2002-2012 Field Experience</span>
               </li>
               <li className="text-xs text-slate-700 pt-3 border-t border-slate-300 mt-2 font-bold uppercase tracking-wide">
                 We build trust, one vehicle at a time.
               </li>
             </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-700 pt-8 border-t border-slate-300 font-bold uppercase tracking-wide">
          <p>© {new Date().getFullYear()} Silvertek Customz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
