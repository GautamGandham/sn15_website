import React from 'react';
import { Bot, CheckCircle2 } from 'lucide-react';
import botImg from '../../assets/bot.jpg';

const ServiceBot: React.FC = () => {
  const features = [
    'Autonomous indoor navigation',
    'Natural language understanding',
    'Real-time customer assistance',
    '24/7 operation with auto-docking',
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Bot className="w-4 h-4" /> Autonomous Assistance
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Service Bot</h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Enhance your venue with autonomous, friendly, and intelligent service robots that delight customers and reduce workload.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden p-4">
              <img src={botImg} alt="Service Bot" className="w-full h-80 object-contain rounded-2xl bg-gray-50" />
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

export default ServiceBot;