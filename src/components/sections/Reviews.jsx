import React from "react";
import { Star } from "lucide-react";

const ReviewCard = ({ name, location, text }) => (
  <div className="bg-slate-50 p-6 rounded-xl relative">
    <div className="flex gap-1 text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
    <p className="text-slate-700 italic mb-6">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <h5 className="font-bold text-slate-900 text-sm">{name}</h5>
        <p className="text-xs text-slate-500">{location}</p>
      </div>
    </div>
  </div>
);

function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Student Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ReviewCard
            name="Sarah J."
            location="Australia (NSW Board)"
            text="Samra helped me finally understand Trigonometry. Her assignments were perfect for practice. I went from a C to an A!"
          />
          <ReviewCard
            name="Rahul M."
            location="India (Class X)"
            text="The personalized attention I got was amazing. She is very patient and explains things until I get them right."
          />
          <ReviewCard
            name="Emily W."
            location="UK (IGCSE)"
            text="We love the flexible scheduling and the online format works great. Highly recommended for exam prep."
          />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
