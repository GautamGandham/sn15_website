import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    warehouseSize: '',
    currentVolume: '',
    message: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setCurrentStep(4); // Show success message
  };

  const inquiryTypes = [
    { value: 'demo', label: 'Request Product Demo', icon: '🎬' },
    { value: 'partnership', label: 'Partnership Inquiry', icon: '🤝' },
    { value: 'support', label: 'Technical Support', icon: '🛠️' },
    { value: 'general', label: 'General Inquiry', icon: '💬' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative bg-saddlebrown-100">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Let's Transform Your
              <span className="text-primary-300"> Warehouse Together</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow">
              Ready to revolutionize your warehouse operations? Get in touch with our experts 
              for a personalized consultation and discover how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-saddlebrown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-primary-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">Phone</h3>
                    <p className="text-metallic-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-metallic-500">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">Email</h3>
                    <p className="text-metallic-600">info@snfifteen.com</p>
                    <p className="text-sm text-metallic-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">Headquarters</h3>
                    <p className="text-metallic-600">sn15 ai and robotics<br />bhavanipuram,vijayawada,520012</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">Live Chat</h3>
                    <p className="text-metallic-600">Available 24/7</p>
                    <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                      Start Chat →
                    </button>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-metallic-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-metallic-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">bhavanipuram</p>
                </div>
              </div>
            </div>

            {/* Multi-step Form */}
            <div className="lg:col-span-2">
              <div className="bg-metallic-50 rounded-xl p-8">
                {currentStep < 4 && (
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-primary-900">
                        {currentStep === 1 && 'What can we help you with?'}
                        {currentStep === 2 && 'Tell us about yourself'}
                        {currentStep === 3 && 'Your warehouse details'}
                      </h2>
                      <span className="text-metallic-500">Step {currentStep} of 3</span>
                    </div>
                    
                    <div className="w-full bg-metallic-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Inquiry Type */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-metallic-700 mb-4">
                          Select your inquiry type:
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {inquiryTypes.map((type) => (
                            <div
                              key={type.value}
                              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                formData.inquiryType === type.value
                                  ? 'border-primary-500 bg-primary-50'
                                  : 'border-metallic-200 hover:border-metallic-300'
                              }`}
                              onClick={() => setFormData({...formData, inquiryType: type.value})}
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{type.icon}</span>
                                <span className="font-medium text-primary-900">{type.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!formData.inquiryType}
                          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        >
                          Next
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Personal Information */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-metallic-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-metallic-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-metallic-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-metallic-700 mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-metallic-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="bg-metallic-200 text-metallic-700 px-6 py-3 rounded-lg font-semibold hover:bg-metallic-300 transition-colors duration-200"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.company}
                          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        >
                          Next
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Warehouse Details */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-metallic-700 mb-2">
                            Warehouse Size (sq ft)
                          </label>
                          <select
                            name="warehouseSize"
                            value={formData.warehouseSize}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select size</option>
                            <option value="under-10k">Under 10,000</option>
                            <option value="10k-50k">10,000 - 50,000</option>
                            <option value="50k-100k">50,000 - 100,000</option>
                            <option value="over-100k">Over 100,000</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-metallic-700 mb-2">
                            Daily Order Volume
                          </label>
                          <select
                            name="currentVolume"
                            value={formData.currentVolume}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select volume</option>
                            <option value="under-100">Under 100</option>
                            <option value="100-500">100 - 500</option>
                            <option value="500-1000">500 - 1,000</option>
                            <option value="1000-5000">1,000 - 5,000</option>
                            <option value="over-5000">Over 5,000</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-metallic-700 mb-2">
                          Implementation Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (1-3 months)</option>
                          <option value="short">Short term (3-6 months)</option>
                          <option value="medium">Medium term (6-12 months)</option>
                          <option value="long">Long term (12+ months)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-metallic-700 mb-2">
                          Additional Details
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Tell us more about your specific needs and challenges..."
                        ></textarea>
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="bg-metallic-200 text-metallic-700 px-6 py-3 rounded-lg font-semibold hover:bg-metallic-300 transition-colors duration-200"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center"
                        >
                          Submit Request
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Success Message */}
                  {currentStep === 4 && (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-primary-900 mb-4">
                        Thank You for Your Interest!
                      </h3>
                      <p className="text-metallic-600 mb-6">
                        We've received your request and will get back to you within 24 hours. 
                        One of our automation experts will contact you to discuss your specific needs.
                      </p>
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <p className="text-primary-800 font-semibold">
                          What happens next?
                        </p>
                        <ul className="text-left text-primary-700 mt-2 space-y-1">
                          <li>• Initial consultation call (30 minutes)</li>
                          <li>• Warehouse assessment and requirements analysis</li>
                          <li>• Custom solution proposal</li>
                          <li>• Live demonstration (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;