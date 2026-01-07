import {
  Instagram,
  FileText,
  LayoutTemplate,
  Image,
  PenTool,
  Frame,
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

const services = [
  {
    icon: Instagram,
    title: 'Instagram Post Design',
    description: 'Eye-catching social media posts that drive engagement and build your brand presence.',
    features: [
      'Custom design to match your brand',
      'Square and story formats',
      'Source files included',
      '24-48h delivery',
    ],
    price: 'Rs.360',
  },
  {
    icon: FileText,
    title: 'Poster Design',
    description: 'Professional posters for events, promotions, or informational purposes.',
    features: [
      'Print-ready high resolution',
      'Any size (A4, A3, custom)',
      'Unlimited revisions',
      '48-72h delivery',
    ],
    price: 'Rs.720',
  },
  {
    icon: LayoutTemplate,
    title: 'Flyer Design',
    description: 'Compelling flyers that communicate your message effectively and attract attention.',
    features: [
      'Single or double-sided',
      'Print-ready files',
      'Multiple formats (PDF, JPG)',
      '24-48h delivery',
    ],
    price: 'Rs.540',
  },
  {
    icon: Frame,
    title: 'Banner Design',
    description: 'Web and print banners for advertising, websites, or social media platforms.',
    features: [
      'Any dimensions',
      'Web or print optimized',
      'Multiple formats',
      '24-48h delivery',
    ],
    price: 'Rs.630',
  },
  {
    icon: PenTool,
    title: 'Canva Template Design',
    description: 'Fully editable Canva templates for easy customization and brand consistency.',
    features: [
      'Fully customizable',
      'Professional layouts',
      'Multiple variations',
      'Instant delivery',
    ],
    price: 'RS.450',
  },
  {
    icon: Image,
    title: 'Photo Editing',
    description: 'Professional photo retouching and enhancement for stunning visual results.',
    features: [
      'Background removal',
      'Color correction',
      'Retouching & enhancement',
      '24h delivery',
    ],
    price: 'Rs.360',
  },
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Design Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality design solutions tailored to your business needs.
            Fast delivery, affordable pricing, and premium results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-blue-600" size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-600">Starting from</span>
                  <div className="text-2xl font-bold text-gray-900">
                    {service.price}
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose My Design Services?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold mb-2">Fast Delivery</div>
              <p className="text-blue-100">
                Most projects delivered within 24-48 hours
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Clean Designs</div>
              <p className="text-blue-100">
                Modern, professional designs that convert
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Affordable Rates</div>
              <p className="text-blue-100">
                Premium quality at competitive prices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
