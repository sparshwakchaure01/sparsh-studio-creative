import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Sparkles className="text-blue-600 mr-2" size={18} />
            <span className="text-sm font-medium text-blue-600">
              Professional Design Services by Sparsh Wakchaure
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Clean, Modern Designs for
            <br />
            <span className="text-blue-600">Brands & Businesses</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Transform your brand with professional graphic design services.
            From social media posts to marketing materials, I create designs
            that convert and captivate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('services')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-medium flex items-center justify-center shadow-lg shadow-blue-600/30"
            >
              Order Design
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-medium"
            >
              View Portfolio
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600 mt-1">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">30+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24h</div>
              <div className="text-sm text-gray-600 mt-1">Fast Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5★</div>
              <div className="text-sm text-gray-600 mt-1">Quality Work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
