import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search, Compass } from 'lucide-react';

export default function TourHeroSection() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState('2 Travelers');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ destination, date, travelers });
    // Add your search routing logic here
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden font-sans">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80" 
          alt="Scenic mountain landscape with lake" 
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full flex flex-col items-center text-center lg:items-start lg:text-left">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400 text-sm font-medium mb-6 shadow-lg">
          <Compass className="w-4 h-4 animate-spin-slow" />
          <span>Explore the Unexplored Adventures</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-3xl leading-[1.1] mb-6">
          Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Unforgettable</span> Memories
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mb-10 font-normal leading-relaxed">
          Discover handpicked destinations, immersive local experiences, and seamless tour planning tailored just for you.
        </p>

        {/* Interactive Search/Booking Widget */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
            
            {/* Destination Input */}
            <div className="flex items-center gap-3 bg-white/90 rounded-2xl px-4 py-3.5 text-left border border-transparent focus-within:border-emerald-500 transition">
              <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-500">Location</label>
                <input 
                  type="text" 
                  placeholder="Where are you going?" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-slate-900 text-sm font-medium focus:outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Date Picker Input */}
            <div className="flex items-center gap-3 bg-white/90 rounded-2xl px-4 py-3.5 text-left border border-transparent focus-within:border-emerald-500 transition">
              <Calendar className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-500">Date</label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-slate-900 text-sm font-medium focus:outline-none"
                />
              </div>
            </div>

            {/* Travelers Selector */}
            <div className="flex items-center gap-3 bg-white/90 rounded-2xl px-4 py-3.5 text-left border border-transparent focus-within:border-emerald-500 transition">
              <Users className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-500">Guests</label>
                <select 
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full bg-transparent text-slate-900 text-sm font-medium focus:outline-none cursor-pointer"
                >
                  <option>1 Traveler</option>
                  <option>2 Travelers</option>
                  <option>3-5 Travelers</option>
                  <option>6+ Group Tour</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button 
              type="submit" 
              className="h-full min-h-[52px] bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl px-6 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Search className="w-5 h-5" />
              <span>Explore Now</span>
            </button>

          </form>
        </div>

        {/* Trust Indicators / Quick Stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span><strong>4.9/5</strong> Rating from 2,500+ reviews</span>
          </div>
          <div className="hidden sm:block text-white/30">•</div>
          <div><span>✨ <strong>100+</strong> Curated Destinations</span></div>
          <div className="hidden sm:block text-white/30">•</div>
          <div><span>🛡️ 24/7 Dedicated Support</span></div>
        </div>

      </div>
    </div>
  );
}