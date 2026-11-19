
import React, { useState } from 'react';
import {
  ArrowUpRight,
  Star,
  Quote,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from 'lucide-react';

const BENTO_DESTINATIONS = [
  {
    id: 'bandarban',
    name: 'Bandarban Highlands',
    country: 'Chittagong Hill Tracts',
    toursCount: 14,
    startingPrice: 280,
    tag: 'Most Popular',
    span: 'md:col-span-2 md:row-span-2',
    height: 'h-80 md:h-full',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sylhet',
    name: 'Sylhet Tea Valleys',
    country: 'Northeast Region',
    toursCount: 9,
    startingPrice: 210,
    tag: 'Lush & Scenic',
    span: 'md:col-span-2',
    height: 'h-64',
    image:
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'saint-martin',
    name: "Saint Martin's Coral Island",
    country: 'Bay of Bengal',
    toursCount: 7,
    startingPrice: 260,
    tag: 'Coastal Escape',
    span: 'md:col-span-1',
    height: 'h-64',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sundarbans',
    name: 'Sundarbans Mangrove',
    country: 'Khulna Delta',
    toursCount: 6,
    startingPrice: 340,
    tag: 'Wildlife Safari',
    span: 'md:col-span-1',
    height: 'h-64',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Nadia Rahman',
    role: 'Solo Traveler • Dhaka',
    tour: 'Cloud Peaks of Bandarban Expedition',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote:
      'Everything from the 4x4 hill transfers to the sunrise campsite at Nilgiri was seamless. Our local guide knew hidden trails no tourist bus ever reaches.',
  },
  {
    id: 2,
    name: 'Marcus & Elena Vance',
    role: 'Couple • London, UK',
    tour: 'Emerald Highlands & Tea Trails',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote:
      'Hands down the best-organized small-group trip we have taken in Asia. Authentic homestays, incredible regional food, and zero hidden fees.',
  },
  {
    id: 3,
    name: 'Tanvir Ahmed',
    role: 'Photographer • Chattogram',
    tour: 'Mangrove Safari & Royal Delta',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote:
      'The silent wooden boat dawn cruise through the narrow mangrove creeks was pure magic. You can tell this team truly respects nature.',
  },
];

const HomeShowcaseSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentReview = TESTIMONIALS[activeTestimonial];

  return (
    <div className="bg-white text-slate-900">
      {/* Section 1: Asymmetric Bento Grid of Top Destinations */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
              <Sparkles className="w-4 h-4" />
              Trending Regions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Iconic Landscapes, Curated For You
            </h2>
          </div>

          <a
            href="/explore"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-emerald-600 transition group self-start md:self-auto"
          >
            Browse all 120+ destinations
            <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:auto-rows-[260px]">
          {BENTO_DESTINATIONS.map((dest) => (
            <a
              key={dest.id}
              href={`/explore?region=${dest.id}`}
              className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${dest.span} ${dest.height}`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                  {dest.tag}
                </span>
                <span className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{dest.country}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold leading-snug mb-2">{dest.name}</h3>
                <div className="flex items-center justify-between text-xs text-slate-200 pt-2 border-t border-white/15">
                  <span>{dest.toursCount} curated tours</span>
                  <span className="font-semibold text-white">
                    From <span className="text-emerald-300 text-sm">${dest.startingPrice}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Section 2: Traveler Stories & Social Proof */}
      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Trust Pitch */}
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
              Traveler Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Loved by 25,000+ Explorers Worldwide
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              Real feedback from guests who traded crowded bus tours for authentic, locally guided
              adventures.
            </p>

            {/* Rating Summary Pill */}
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 mb-8">
              <div className="text-3xl font-extrabold text-emerald-400">4.9</div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300">Based on 3,400+ verified trip reviews</p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                aria-label="Previous review"
                className="w-11 h-11 rounded-full border border-white/15 hover:bg-white/10 flex items-center justify-center transition cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next review"
                className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center transition cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-slate-400 ml-2">
                0{activeTestimonial + 1} / 0{TESTIMONIALS.length}
              </span>
            </div>
          </div>

          {/* Right Column: Active Glassmorphic Review Card */}
          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-10 shadow-2xl">
              <Quote className="w-10 h-10 text-emerald-400/40 mb-6" />

              <p className="text-lg md:text-xl text-slate-100 leading-relaxed font-medium mb-8">
                "{currentReview.quote}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3.5">
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-400/50"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-white">{currentReview.name}</h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-xs text-slate-400">{currentReview.role}</p>
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 self-start sm:self-auto">
                  Trip: {currentReview.tour}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeShowcaseSection;