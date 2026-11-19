import React from 'react';
import { Compass, ShieldCheck, Users, Globe, Award, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: 'Happy Travelers', value: '25,000+' },
    { label: 'Curated Destinations', value: '120+' },
    { label: 'Local Expert Guides', value: '350+' },
    { label: 'Years of Experience', value: '12' },
  ];

  const values = [
    {
      icon: <Compass className="w-6 h-6 text-emerald-600" />,
      title: 'Authentic Local Experiences',
      description:
        'We skip the tourist traps. Our itineraries are crafted with local insiders to connect you with genuine culture, hidden gems, and regional cuisine.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Hassle-Free & Safe',
      description:
        'From airport pickups to 24/7 on-trip support, every detail is vetted for safety and comfort so you can focus entirely on the journey.',
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: 'Sustainable Tourism',
      description:
        'We partner with eco-conscious stays and community-owned businesses, ensuring your travels positively impact the places you visit.',
    },
  ];

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block uppercase tracking-widest text-xs font-semibold text-emerald-400 mb-3">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Crafting Journeys That Stay With You Forever
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            We believe travel should be more than checking landmarks off a list—it should be about
            connection, discovery, and stories worth telling.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-3xl font-extrabold text-emerald-600">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are / Mission */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Born From a Passion for Meaningful Exploration
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Founded in 2014 by a small group of backpackers and cultural guides, our mission started
            with a simple idea: make extraordinary destinations accessible without losing the soul of
            independent travel.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Whether you are trekking through misty mountain trails, exploring ancient river valleys,
            or unwinding on secluded coastlines, our team handles every logistical detail while
            leaving room for spontaneity.
          </p>
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
            <Award className="w-5 h-5 text-emerald-600" />
            <span>Top-Rated Tour Operator — 4.9/5 Average Guest Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
            alt="Travelers exploring a scenic valley"
            className="rounded-xl object-cover h-64 w-full shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80"
            alt="Guided mountain hike"
            className="rounded-xl object-cover h-64 w-full shadow-md mt-6"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Why Travel With Us</h2>
            <p className="text-slate-600">
              Every itinerary is built around three core promises to our guests and the communities
              we visit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-emerald-700 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl">
          <Users className="w-10 h-10 mx-auto mb-4 text-emerald-200" />
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Adventure?</h2>
          <p className="text-emerald-100 max-w-xl mx-auto mb-8">
            Browse our handcrafted group tours or talk to a travel specialist to build a custom
            itinerary tailored to your pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tours"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition"
            >
              Explore All Tours <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-emerald-300 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              Customize a Trip
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;