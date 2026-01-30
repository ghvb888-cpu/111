
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { FeatureCardProps } from './types';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all group">
    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
      <i className={`fas ${icon} text-indigo-600 group-hover:text-white text-xl transition-colors`}></i>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const FEATURES: FeatureCardProps[] = [
  {
    title: "TypeScript Powered",
    description: "Built with type safety in mind for a robust development experience and fewer bugs.",
    icon: "fa-code"
  },
  {
    title: "Tailwind CSS",
    description: "Ultra-fast styling with utility classes. Responsive, modern, and highly customizable.",
    icon: "fa-wind"
  },
  {
    title: "React 18+",
    description: "Leveraging the latest React features like Concurrent Mode and improved hooks.",
    icon: "fa-atom"
  },
  {
    title: "Optimized Performance",
    description: "Lightweight architecture ensuring lightning-fast load times and smooth interactions.",
    icon: "fa-bolt"
  },
  {
    title: "Component Driven",
    description: "Atomic design approach making the application easy to scale and maintain.",
    icon: "fa-layer-group"
  },
  {
    title: "Ready for AI",
    description: "Easily integrate Gemini API or other LLMs to build next-generation intelligent apps.",
    icon: "fa-brain"
  }
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'popular'>('all');

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Capabilities</h2>
            <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Everything you need to ship faster.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              Our starter kit provides all the essential tools and patterns to jumpstart your development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build something amazing?</h2>
              <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Join thousands of developers building world-class applications with our minimalist philosophy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-slate-50 transition-all">
                  Get Started for Free
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-indigo-400 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
