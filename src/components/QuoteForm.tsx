'use client';

import { useState, useEffect, useRef } from 'react';

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string;
}

interface QuoteFormProps {
  quoteForm: {
    title: string;
    fields: FormField[];
    submitButton: string;
    termsText: string;
  };
  countries: string[];
}

export default function QuoteForm({ quoteForm, countries }: QuoteFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
        setCountrySearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({});
    alert('Thank you! We will contact you soon.');
  };

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const getFieldIcon = (fieldName: string) => {
    switch (fieldName.toLowerCase()) {
      case 'name':
        return (
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'country':
        return (
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'city':
        return (
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'phone':
        return (
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case 'medical issue':
      case 'medicalissue':
        return (
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        );
    }
  };

  const renderField = (field: FormField) => {
    const commonClasses = "w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm bg-white/50 backdrop-blur-sm";
    
    switch (field.type) {
      case 'select':
        if (field.options === 'countries') {
          return (
            <div className="relative" ref={dropdownRef}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {getFieldIcon(field.name)}
                </div>
                <button
                  type="button"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm bg-white/50 backdrop-blur-sm text-left flex items-center justify-between ${
                    formData[field.name] ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  <span>{formData[field.name] || `Select ${field.label.replace('*', '')}`}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {isCountryDropdownOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-hidden">
                  <div className="p-2 border-b border-gray-100">
                    <input
                      type="text"
                      placeholder="Search countries..."
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      autoFocus
                    />
                  </div>
                  <div className="max-h-48 overflow-y-auto">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map(country => (
                        <button
                          key={country}
                          type="button"
                          onClick={() => {
                            handleInputChange(field.name, country);
                            setIsCountryDropdownOpen(false);
                            setCountrySearch('');
                          }}
                          className="w-full px-4 py-2 text-sm text-left hover:bg-blue-50 transition-colors duration-150"
                        >
                          {country}
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-sm text-gray-500">
                        No countries found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        }
        return (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {getFieldIcon(field.name)}
            </div>
            <select
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              required={field.required}
              className={commonClasses}
            >
              <option value="">Select {field.label.replace('*', '')}</option>
              {field.options === 'countries' && countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        );
      
      case 'textarea':
        return (
          <div className="relative">
            <div className="absolute top-3 left-3 flex items-center pointer-events-none">
              {getFieldIcon(field.name)}
            </div>
            <textarea
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              required={field.required}
              rows={4}
              className={commonClasses}
              placeholder={`Describe your ${field.label.toLowerCase().replace('*', '')}`}
            />
          </div>
        );
      
      default:
        return (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {getFieldIcon(field.name)}
            </div>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              required={field.required}
              className={commonClasses}
              placeholder={`Enter ${field.label.toLowerCase().replace('*', '')}`}
            />
          </div>
        );
    }
  };

  return (
    <div>
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-3 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">
          {quoteForm.title}
        </h2>
        <p className="text-gray-600 text-xs">
          Get personalized medical treatment quotes
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {quoteForm.fields.slice(0, 3).map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {field.label}
              </label>
              {renderField(field)}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3">
          {quoteForm.fields.slice(3, 4).map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {field.label}
              </label>
              {renderField(field)}
            </div>
          ))}
        </div>

        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-6 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span>{quoteForm.submitButton}</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </button>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            {quoteForm.termsText}
          </p>
        </div>
      </form>
    </div>
  );
} 