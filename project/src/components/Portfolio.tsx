import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

const portfolioItems = [
  {
    category: 'Instagram Post',
    title: 'Brand Social Media Campaign',
    color: 'from-pink-500 to-purple-600',
  },
  {
    category: 'Poster',
    title: 'Music Event Promotion',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Flyer',
    title: 'Restaurant Opening Flyer',
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Instagram Post',
    title: 'Product Launch Announcement',
    color: 'from-green-500 to-teal-500',
  },
  {
    category: 'Banner',
    title: 'Website Hero Banner',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    category: 'Poster',
    title: 'Corporate Conference Poster',
    color: 'from-gray-700 to-gray-900',
  },
  {
    category: 'Flyer',
    title: 'Fitness Center Promotion',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    category: 'Instagram Post',
    title: 'Fashion Brand Collection',
    color: 'from-rose-500 to-pink-600',
  },
  {
    category: 'Banner',
    title: 'E-commerce Sale Banner',
    color: 'from-purple-600 to-indigo-600',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Instagram Post', 'Poster', 'Flyer', 'Banner'];

  const filteredItems =
    filter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore my recent work and see the quality of designs I deliver to clients.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${item.color} flex items-center justify-center relative`}
              >
                <div className="text-white text-center p-6">
                  <div className="text-sm font-medium mb-2 opacity-90">
                    {item.category}
                  </div>
                  <div className="text-xl font-bold">{item.title}</div>
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-90">
                    <div className="bg-white rounded-full p-3">
                      <ExternalLink className="text-gray-900" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">2024</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            These are some of the my works and services i provide, pls feel free to contact me below.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
