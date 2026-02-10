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
                "md:hidden z-50 transition-colors", 
                isScrolled 
                  ? "text-slate-900 hover:bg-slate-100 hover:text-slate-900" 
                  : "text-white hover:bg-white/10 hover:text-white"
              )}
            >
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] border-l border-slate-100 bg-white/95 backdrop-blur-xl text-slate-900 p-0 shadow-2xl">
             <div className="flex flex-col h-full px-6 py-8 relative overflow-hidden">
                <div className="flex items-center justify-between mb-12 relative z-10">
                   <div className="flex items-center gap-3">
                      <SilvertekLogo className="h-10 w-auto" textColor="text-slate-900" />
                   </div>
                </div>

                <nav className="flex flex-col items-center justify-center gap-6 flex-1 relative z-10">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-2xl font-bold text-slate-800 hover:text-primary hover:scale-105 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-4 mt-auto relative z-10">
                   <Button className="w-full h-12 rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                    <Link href="tel:+919176726175">
                       Call Now
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full h-12 rounded-xl text-base font-bold bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100" asChild>
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
