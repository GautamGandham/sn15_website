import React from 'react';
import { Smartphone, CheckCircle2 } from 'lucide-react';

const WelcomeApp: React.FC = () => {
  const features = [
    'Personalized greetings based on preferences',
    'Customer recognition with privacy controls',
    'Multilingual support out-of-the-box',
    'Seamless integration with CRM/POS',
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Smartphone className="w-4 h-4" /> Experience Apps
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Welcome App</h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Elevate your customer experience with AI-driven greetings, smart routing, and context-aware engagement.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=700&fit=crop" alt="Welcome App" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WelcomeApp;