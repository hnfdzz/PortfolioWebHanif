import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../../data/portfolioData';

const Testimonials = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="container mx-auto max-w-5xl z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item, index) => (
            <div key={index} className="glass-card rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
                <span className="text-white text-sm font-bold ml-2">{item.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              <div>
                <h4 className="text-white font-bold">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;