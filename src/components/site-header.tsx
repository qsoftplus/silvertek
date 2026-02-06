'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { SilvertekLogo } from '@/components/silvertek-logo';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Car Care', href: '#car-care' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <SilvertekLogo 
             className="transition-transform group-hover:scale-105" 
             textColor={isScrolled ? "text-slate-900" : "text-white"}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-primary",
                isScrolled ? "text-slate-600" : "text-slate-200 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden hover:bg-white/10 z-50", 
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] border-l-0 bg-slate-900 text-white p-0">
             {/* Mobile Menu Backdrop & Content */}
             <div className="flex flex-col h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 px-6 py-8 relative overflow-hidden">
                {/* Decorative BG elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

                <div className="flex items-center justify-between mb-12 relative z-10">
                   <div className="flex items-center gap-3">
                      <SilvertekLogo className="h-12 w-auto" textColor="text-white" />
                   </div>
                   {/* Close button is handled by Sheet primitive, but we can customize if needed */}
                </div>

                <nav className="flex flex-col items-center justify-center gap-6 flex-1 relative z-10">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-3xl font-bold text-slate-300 hover:text-white hover:scale-105 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-4 mt-auto relative z-10">
                   <Button className="w-full h-14 rounded-xl text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20" asChild>
                    <Link href="tel:+919176726175">
                       Call Now
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full h-14 rounded-xl text-lg font-bold bg-white/5 text-white border-white/10 hover:bg-white/10 hover:text-white" asChild>
                    <Link href="https://wa.me/919176726175">
                      WhatsApp
                    </Link>
                  </Button>
                </div>
             </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
