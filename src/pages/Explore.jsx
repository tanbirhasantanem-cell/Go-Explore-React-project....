import React, { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  Clock,
  Star,
  Heart,
  SlidersHorizontal,
  ArrowUpRight,
  Compass,
  Mountain,
  Palmtree,
  Landmark,
  Flame,
  Sparkles,
  X,
} from 'lucide-react';

const TOURS_DATA = [
  {
    id: 1,
    title: 'Emerald Highlands & Tea Trails',
    location: 'Sylhet & Sreemangal',
    category: 'Nature',
    durationDays: 4,
    price: 320,
    rating: 4.9,
    reviews: 142,
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80',
    highlights: ['Misty tea estates', 'Lawachara rainforest walk', 'Waterfall trek'],
  },
  {
    id: 2,
    title: 'Cloud Peaks of Bandarban Expedition',
    location: 'Chittagong Hill Tracts',
    category: 'Adventure',
    durationDays: 5,
    price: 450,
    rating: 4.95,
    reviews: 98,
    badge: 'Top Rated',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    highlights: ['Nilgiri sunrise', 'Boga Lake camp', 'Indigenous village stay'],
  },
  {
    id: 3,
    title: 'Coral Reefs & Turquoise Horizon',
    location: "Cox's Bazar & Saint Martin",
    category: 'Beach',
    durationDays: 3,
    price: 290,
    rating: 4.8,
    reviews: 215,
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    highlights: ['Private island cruise', 'Sunset beach bonfire', 'Snorkeling coves'],
  },
  {
    id: 4,
    title: 'Mangrove Safari & Royal Delta',
    location: 'Sundarbans',
    category: 'Nature',
    durationDays: 4,
    price: 390,
    rating: 4.85,
    reviews: 76,
    badge: 'Eco Pick',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    highlights: ['Silent canal boat safari', 'Canopy watchtower', 'Wildlife spotting'],
  },
  {
    id: 5,
    title: 'Ancient Terracotta & Silk Route',
    location: 'Rajshahi & Paharpur',
    category: 'Culture',
    durationDays: 3,
    price: 240,
    rating: 4.75,
    reviews: 64,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
    highlights: ['UNESCO Buddhist Vihara', 'Artisan silk weaving', 'Padma river sunset'],
  },
  {
    id: 6,
    title: 'Alpine Ridge & Glacier Traverse',
    location: 'Annapurna Circuit, Nepal',
    category: 'Adventure',
    durationDays: 8,
    price: 890,
    rating: 4.98,
    reviews: 184,
    badge: 'Bucket List',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80',
    highlights: ['High-altitude teahouses', 'Poon Hill panorama', 'Sherpa-led trek'],
  },
];

const CATEGORIES = [
  { name: 'All', icon: Compass },
  { name: 'Adventure', icon: Mountain },
  { name: 'Nature', icon: Flame },
  { name: 'Beach', icon: Palmtree },
  { name: 'Culture', icon: Landmark },
];

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState('popular');
  const [wishlist, setWishlist] = useState([2]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || tour.category === selectedCategory;
      const matchesPrice = tour.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviews - a.reviews; // 'popular'
    });
  }, [searchQuery, selectedCategory, maxPrice, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setMaxPrice(1000);
    setSortBy('popular');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Modern Hero + Floating Search Bar */}
      <section className="relative bg-slate-950 text-white pt-20 pb-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Curated 2026 Departures
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Explore Your Next{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Unforgettable
            </span>{' '}
            Escape
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Handpicked small-group expeditions, coastal retreats, and cultural immersions led by
            local experts.
          </p>
        </div>
      </section>

      {/* Glassmorphic Filter & Search Dock */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-4 md:p-5">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations, regions, or tour names..."
                className="w-full pl-11 pr-9 py-3 rounded-xl bg-slate-100/80 border border-transparent focus:border-emerald-500 focus:bg-white focus:outline-none text-sm transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-xl bg-slate-100/80 text-sm font-medium text-slate-700 border border-transparent focus:border-emerald-500 focus:bg-white focus:outline-none cursor-pointer"
            >
              <option value="popular">Sort: Most Popular</option>
              <option value="rating">Sort: Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {/* Filter Drawer Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition cursor-pointer ${
                showFilters
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Budget
            </button>
          </div>

          {/* Expandable Budget Slider */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1 max-w-md">
                <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                  <span>Max Budget per Person</span>
                  <span className="text-emerald-600 text-sm">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="1000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-slate-500 hover:text-emerald-600 self-start sm:self-end"
              >
                Reset all filters
              </button>
            </div>
          )}

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-slate-100 no-scrollbar">
            {CATEGORIES.map(({ name, icon: Icon }) => {
              const active = selectedCategory === name;
              return (
                <button
                  key={name}
                  onClick={() => setSelectedCategory(name)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition cursor-pointer ${
                    active
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-emerald-400' : 'text-slate-500'}`} />
                  {name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Header & Tour Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-slate-500">
            Showing <span className="font-bold text-slate-900">{filteredTours.length}</span>{' '}
            curated {filteredTours.length === 1 ? 'experience' : 'experiences'}
          </p>
          {wishlist.length > 0 && (
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
              {wishlist.length} Saved to Wishlist
            </span>
          )}
        </div>

        {filteredTours.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200/70 p-16 text-center">
            <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-800 mb-1">No matching tours found</h3>
            <p className="text-slate-500 text-sm mb-6">
              Try adjusting your search keywords, category, or maximum budget.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredTours.map((tour) => {
              const isSaved = wishlist.includes(tour.id);
              return (
                <article
                  key={tour.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      {tour.badge ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                          {tour.badge}
                        </span>
                      ) : (
                        <span />
                      )}

                      <button
                        onClick={() => toggleWishlist(tour.id)}
                        aria-label="Save tour"
                        className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm hover:scale-110 transition cursor-pointer"
                      >
                        <Heart
                          className={`w-4 h-4 transition ${
                            isSaved ? 'fill-rose-500 text-rose-500' : 'text-slate-700'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Bottom Location Pill */}
                    <div className="absolute bottom-3.5 left-4 flex items-center gap-1.5 text-white text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{tour.location}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="inline-flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        {tour.durationDays} Days
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {tour.rating}{' '}
                        <span className="text-slate-400 font-normal">({tour.reviews})</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition mb-3 line-clamp-1">
                      {tour.title}
                    </h3>

                    {/* Highlights Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {tour.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Footer: Price & CTA */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                          From
                        </span>
                        <span className="text-xl font-extrabold text-slate-900">
                          ${tour.price}
                        </span>
                        <span className="text-xs text-slate-500"> / person</span>
                      </div>

                      <a
                        href={`/tours/${tour.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition shadow-sm"
                      >
                        View Trip
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default ExplorePage;