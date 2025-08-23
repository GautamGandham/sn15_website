import React, { useState } from 'react';

const BACKEND_API = (import.meta as any).env?.VITE_API_BASE_URL
  ? `${(import.meta as any).env.VITE_API_BASE_URL}/api/book-demo`
  : '/api/book-demo';

const BookDemo: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    role: '',
    about: '',
    company: '',
    companyRole: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle phone number formatting and validation
    if (name === 'contact') {
      // Remove all non-digits
      const digitsOnly = value.replace(/\D/g, '');
      
      // Limit to 10 digits (Indian mobile numbers)
      if (digitsOnly.length <= 10) {
        setForm({ ...form, [name]: digitsOnly });
        setErrors({ ...errors, [name]: '' });
      }
      return;
    }
    
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!form.name.trim()) newErrors.name = 'Name is required';
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!form.contact) {
      newErrors.contact = 'Contact number is required';
    } else if (form.contact.length !== 10) {
      newErrors.contact = 'Please enter a valid 10-digit mobile number';
    } else if (!form.contact.match(/^[6-9]\d{9}$/)) {
      newErrors.contact = 'Please enter a valid Indian mobile number starting with 6, 7, 8, or 9';
    }
    
    if (!form.role) newErrors.role = 'Please select a role';
    
    if (form.role === 'company') {
      if (!form.company.trim()) newErrors.company = 'Company name is required';
      if (!form.companyRole.trim()) newErrors.companyRole = 'Your role in company is required';
    }
    
    if (!form.about.trim()) newErrors.about = 'Please provide details about yourself';
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(BACKEND_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: `+91${form.contact}`, // Add +91 prefix when sending to backend
          role: form.role,
          about: form.about,
          company: form.company,
          companyRole: form.companyRole,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setShowThankYou(true);
        if (data.previewUrl) {
          console.log('Ethereal preview URL:', data.previewUrl);
        }
      } else {
        let errText = 'Something went wrong.';
        try {
          const errData = await response.json();
          errText = `${errData.message || errText}${errData.code ? ` (code: ${errData.code})` : ''}`;
        } catch {}
        setErrorMessage(errText);
      }
    } catch (err) {
      setErrorMessage('Failed to connect to the server.');
    }
    setLoading(false);
  };

  const formatPhoneDisplay = (phone: string) => {
    if (phone.length <= 5) return phone;
    if (phone.length <= 10) return `${phone.slice(0, 5)} ${phone.slice(5)}`;
    return phone;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center px-4 py-8">
      {showThankYou ? (
        <div className="bg-white rounded-2xl shadow-xl p-12 w-full max-w-lg text-center border border-green-200">
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600">We've received your demo request and will contact you soon.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Book a Demo</h2>
            <p className="text-gray-600">Get started with a personalized demonstration</p>
          </div>
          
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-red-700">{errorMessage}</span>
              </div>
            </div>
          )}
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${
                  errors.name 
                    ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
              />
              {errors.name && <div className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.name}
              </div>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${
                  errors.email 
                    ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
              />
              {errors.email && <div className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email}
              </div>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg">
                  <span className="text-gray-600 font-medium">🇮🇳 +91</span>
                </div>
                <input
                  type="tel"
                  name="contact"
                  value={formatPhoneDisplay(form.contact)}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                  className={`w-full border rounded-r-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${
                    errors.contact 
                      ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                />
              </div>
              {errors.contact && <div className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.contact}
              </div>}
              {form.contact && form.contact.length < 10 && !errors.contact && (
                <div className="text-blue-600 text-sm mt-1">
                  {10 - form.contact.length} more digits required
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Are you a: <span className="text-red-500">*</span>
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${
                  errors.role 
                    ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
              >
                <option value="">Select your role...</option>
                <option value="student">Student</option>
                <option value="professional">Working Professional</option>
                <option value="company">Company Representative</option>
              </select>
              {errors.role && <div className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.role}
              </div>}
            </div>

            {form.role === 'company' && (
              <div className="space-y-6 pl-4 border-l-2 border-blue-200 bg-blue-50 rounded-r-lg py-4 pr-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors bg-white ${
                      errors.company 
                        ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                    }`}
                  />
                  {errors.company && <div className="text-red-500 text-sm mt-1 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.company}
                  </div>}
                </div>

                {form.company && (
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Role in Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyRole"
                      value={form.companyRole}
                      onChange={handleChange}
                      placeholder="e.g., CEO, CTO, HR Manager"
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors bg-white ${
                        errors.companyRole 
                          ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                          : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                      }`}
                    />
                    {errors.companyRole && <div className="text-red-500 text-sm mt-1 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.companyRole}
                    </div>}
                  </div>
                )}
              </div>
            )}

            {((form.role !== 'company' && form.role) || (form.role === 'company' && form.companyRole)) && (
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {form.role === 'student' ? 'Tell us about your academic background and interests' :
                   form.role === 'professional' ? 'Tell us about your professional background and goals' :
                   'Tell us about your company and requirements'} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="about"
                  value={form.about}
                  onChange={handleChange}
                  placeholder={
                    form.role === 'student' ? 'e.g., Final year Computer Science student interested in web development...' :
                    form.role === 'professional' ? 'e.g., Software engineer with 3 years experience looking to upskill in...' :
                    'e.g., We are a startup looking for training solutions for our development team...'
                  }
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors resize-none ${
                    errors.about 
                      ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                  rows={4}
                />
                {errors.about && <div className="text-red-500 text-sm mt-1 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.about}
                </div>}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-8 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Book Demo'
            )}
          </button>
          
          <p className="text-center text-gray-500 text-sm mt-4">
            All fields marked with <span className="text-red-500">*</span> are required
          </p>
        </div>
      )}
    </div>
  );
};

export default BookDemo;