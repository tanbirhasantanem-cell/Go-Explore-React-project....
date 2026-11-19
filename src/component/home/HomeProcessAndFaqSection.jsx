import React, { useState } from 'react';
import {
  Compass,
  Sliders,
  PlaneTakeoff,
  Plus,
  Minus,
  Send,
  CheckCircle2,
  Shield,
  CalendarCheck,
  Headphones,
} from 'lucide-react';

const STEPS = [
  {
    number: '01',
    icon: Compass,
    title: 'Pick Your Escape',
    description:
      'Browse curated small-group expeditions or filter by region, pace, and budget to find a route that fits your style.',
  },
  {
    number: '02',
    icon: Sliders,
    title: 'Customize & Lock Dates',
    description:
      'Choose your departure date, add private room upgrades or extra nights, and reserve with a flexible low deposit.',
  },
  {
    number: '03',
    icon: PlaneTakeoff,
    title: 'Show Up & Explore',
    description:
      'Your local guide handles permits, 4x4 transfers, stays, and hidden-gem stops—all you do is pack and enjoy.',
  },
];

const FAQS = [
  {
    question: 'What is included in the tour price?',
    answer:
      'All domestic ground transfers, handpicked boutique or eco-lodge stays, daily breakfasts, national park permits, and a certified local lead guide are included. International flights and personal travel insurance are separate.',
  },
  {
    question: 'Can I reschedule or cancel if my plans change?',
    answer:
      'Yes. You can reschedule to any open departure date free of charge up to 14 days before your trip, or cancel for a 100% refund within 7 days of booking.',
  },
  {
    question: 'Are these trips suitable for solo travelers?',
    answer:
      'Over 60% of our guests travel solo. You will join a small group of 8–14 like-minded travelers, with the option to share a twin room at no extra cost or upgrade to a private room.',
  },
  {
    question: 'Can you build a private custom itinerary for my group?',
    answer:
      'Absolutely. Any route on our Explore page can be adapted into a private departure for families, couples, or corporate retreats on your preferred dates.',
  },
];

const HomeProcessAndFaqSection = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleFaq = (idx) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Part 1: 3-Step Booking Process */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
            Effortless Planning
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            From Dreaming to Departing in 3 Steps
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            No spreadsheets, no permit headaches, and no tourist-bus crowds.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />

          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-3xl p-8 border border-slate-200/70 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 relative z-10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-black text-slate-100 select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mini Trust Guarantees Strip */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 bg-white rounded-2xl border border-slate-200/70 p-5">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>100% Protected & Insured Trips</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <CalendarCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Free Date Changes up to 14 Days Prior</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <Headphones className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>24/7 Live Local Concierge Support</span>
          </div>
        </div>
      </section>

      {/* Part 2: Interactive FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-emerald-500/50 shadow-md shadow-emerald-950/5'
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-base">{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition ${
                      isOpen
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Part 3: Insider Deals & Newsletter Banner */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 md:p-14 text-white shadow-xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                Secret Routes & Early Drops
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">
                Get $50 Off Your First Expedition
              </h2>
              <p className="text-slate-300 text-sm md:text-base max-w-xl">
                Join 18,000+ explorers receiving seasonal trail guides, flash seat releases, and
                members-only discounts once a month.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 px-5 py-4 rounded-2xl text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>You're in! Check your inbox for your $50 welcome voucher.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-emerald-400"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition cursor-pointer shrink-0"
                  >
                    Claim $50 Off
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-[11px] text-slate-400 mt-2.5">
                Zero spam. Unsubscribe in one click anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeProcessAndFaqSection;