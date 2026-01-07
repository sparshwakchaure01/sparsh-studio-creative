import { Download, ShoppingCart } from 'lucide-react';

interface ShopProps {
  onNavigate: (section: string) => void;
}

const products = [
  {
    title: 'Instagram Post Templates Pack',
    description: '30 professionally designed Instagram post templates. Fully editable in Canva.',
    price: '₹1080',
    originalPrice: '₹2050',
    features: ['30 unique designs', 'Fully editable', 'Instant download', 'Commercial license'],
    badge: 'Best Seller',
  },
  {
    title: 'Business Flyer Templates',
    description: '15 modern business flyer templates perfect for promotions and events.',
    price: '₹900',
    originalPrice: '₹1250',
    features: ['15 flyer designs', 'Print-ready', 'Easy to customize', 'Multiple formats'],
    badge: null,
  },
  {
    title: 'Social Media Bundle',
    description: 'Complete social media pack with 50+ templates for Instagram, Facebook & more.',
    price: '₹1620',
    originalPrice: '₹2250',
    features: ['50+ templates', 'All formats', 'Brand guidelines', 'Lifetime updates'],
    badge: 'Popular',
  },
  {
    title: 'Poster Design Collection',
    description: '20 eye-catching poster templates for events, sales, and announcements.',
    price: '₹1260',
    originalPrice: '1950',
    features: ['20 poster templates', 'A3 & A4 sizes', 'High resolution', 'Easy editing'],
    badge: null,
  },
  {
    title: 'Minimalist Brand Kit',
    description: 'Professional brand kit with logos, business cards, and social media templates.',
    price: '₹2250',
    originalPrice: '3150',
    features: ['Complete brand kit', 'Logo variations', '100+ templates', 'Style guide'],
    badge: 'Premium',
  },
  {
    title: 'Instagram Story Templates',
    description: '40 stunning Instagram story templates with modern designs.',
    price: '₹750',
    originalPrice: '₹1250',
    features: ['40 story templates', 'Animated options', 'Canva format', 'Instant access'],
    badge: null,
  },
];

export default function Shop({ onNavigate }: ShopProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Digital Products & Templates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready-to-use design templates that save you time and money.
            Download instantly and customize for your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {product.badge && (
                <div className="bg-blue-600 text-white text-xs font-bold py-1 px-4 text-center">
                  {product.badge}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-6 mb-6 flex items-center justify-center">
                  <Download className="text-blue-600" size={48} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>

                <p className="text-gray-600 mb-6 flex-1">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through mb-1">
                      {product.originalPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <ShoppingCart className="mr-2" size={18} />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Download className="text-blue-600 mx-auto mb-4" size={36} />
              <h4 className="font-bold text-gray-900 mb-2">Instant Download</h4>
              <p className="text-sm text-gray-600">
                Get immediate access via Google Drive after purchase
              </p>
            </div>
            <div>
              <ShoppingCart className="text-blue-600 mx-auto mb-4" size={36} />
              <h4 className="font-bold text-gray-900 mb-2">Easy Customization</h4>
              <p className="text-sm text-gray-600">
                All templates are fully editable in Canva
              </p>
            </div>
            <div>
              <div className="text-blue-600 mx-auto mb-4 text-3xl font-bold">✓</div>
              <h4 className="font-bold text-gray-900 mb-2">Commercial License</h4>
              <p className="text-sm text-gray-600">
                Use for personal and commercial projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
