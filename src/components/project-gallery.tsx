'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ZoomIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Enhanced dataset
// Enhanced dataset
const projectImages = [
  { src: '/images/project_1_enhanced.png', alt: 'Premium Campaign Isuzu', tag: 'Exterior' },
  { src: '/images/hq_project6.png', alt: 'Rear Platform Design', tag: 'Interior' },
  { src: '/images/hq_project2.png', alt: 'Night Lighting Setup', tag: 'Lighting' },
  { src: '/images/hq_project3.png', alt: 'High-Fidelity Audio', tag: 'Sound' },
  { src: '/images/hq_project4.png', alt: 'Side Profile', tag: 'Exterior' },

  { src: '/images/project_5_natural.png', alt: 'Custom Front Bumper', tag: 'Modification' },
];

export function ProjectGallery() {
  const displayedImages = projectImages;

  return (
    <>
      {/* REAL FIELD WORKS */}
      <section 
        className="py-12 md:py-24 relative bg-white" 
        id="gallery"
      >
        <div className="container px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Delivered <span className="text-primary">Projects</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Explore our portfolio of campaign-ready vehicles. <br/>Built for the leaders of tomorrow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-slate-50">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           <p className="text-xs font-bold uppercase tracking-wider mb-1 text-slate-900 bg-secondary px-2 py-0.5 rounded w-fit">{image.tag}</p>
                           <h3 className="font-bold text-lg text-white">{image.alt}</h3>
                        </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none shadow-2xl">
                   <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black ring-1 ring-white/10">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                    <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors backdrop-blur-sm">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export function HeroCarousel() {
  return (
    <div className="relative w-full overflow-hidden">
         <Carousel className="w-full" opts={{ loop: true, duration: 40 }}>
            <CarouselContent>
                 <CarouselItem className="relative h-[100dvh] min-h-[500px] w-full flex items-center justify-center">
                     {/* CINEMATIC HERO BACKGROUND */}
                     <div 
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{ backgroundImage: "url('/images/bg/rally_night_hero.png')" }}
                     >
                        {/* Red/Yellow Political Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                        <div className="absolute inset-0 bg-black/40"></div>
                     </div>
                     
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10 pt-20">
                         <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 max-w-5xl mx-auto">
                           {/* Campaign Badge */}
                           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/90 text-slate-900 text-[10px] sm:text-xs md:text-sm font-bold mb-4 md:mb-8 shadow-xl border border-white/20 backdrop-blur-sm">
                             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
                             Voter Outreach Specialists
                           </span>
                           
                           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-4 md:mb-8 leading-[1.05] drop-shadow-2xl px-2">
                             Command the <span className="text-secondary">Campaign.</span>
                           </h1>
                           
                           <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed mb-8 md:mb-12 drop-shadow-lg px-4 hidden sm:block">
                             Integrated solutions for <span className="text-secondary font-bold">Political Victory</span>. <br className="hidden md:block"/>High-Decibel Engineering.
                           </p>

                           <p className="text-sm text-white/90 max-w-xs mx-auto font-medium leading-relaxed mb-6 drop-shadow-lg px-2 sm:hidden">
                             Integrated solutions for <span className="text-secondary font-bold">Political Victory</span>.
                           </p>
                           
                           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full px-4 max-w-sm sm:max-w-none mx-auto">

                             <Button size="lg" variant="outline" className="w-auto rounded-full text-xs sm:text-base md:text-lg font-bold px-8 h-10 sm:h-12 md:h-16 md:px-10 bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-md transition-all hover:scale-105" asChild>
                               <Link href="#gallery">Our Design</Link>
                             </Button>
                           </div>
                         </div>
                     </div>
                 </CarouselItem>
                  
             </CarouselContent>
          </Carousel>
    </div>
  )
}
