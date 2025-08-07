'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItem {
  name: string;
  url: string;
  submenu?: any[];
  isCTA?: boolean;
}

interface HeaderProps {
  navigation: {
    mainMenu: MenuItem[];
    languages: string[];
  };
  siteInfo: {
    name: string;
    logo: string;
  };
}

export default function Header({ navigation, siteInfo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setMobileDropdowns({});
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const toggleMobileDropdown = (menuName: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <span className="text-xl font-bold text-gray-900">{siteInfo.name}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.mainMenu.map((item) => (
              <div key={item.name} className="relative group">
                {item.isCTA ? (
                  <Link
                    href={item.url}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 ml-4"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                      {item.submenu && (
                        <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    
                    {/* Desktop Dropdown Menu */}
                    {item.submenu && (
                      <div className="absolute left-0 mt-1 w-80 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                        <div className="py-3">
                          {item.submenu.map((subItem: any, index: number) => (
                            <div key={index} className="px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-colors duration-150">
                              <Link 
                                href={subItem.url} 
                                className="text-gray-700 hover:text-blue-600 block font-medium text-sm"
                              >
                                {subItem.country || subItem.name}
                              </Link>
                              {subItem.specialties && (
                                <div className="mt-1 text-xs text-gray-500">
                                  {subItem.specialties.slice(0, 3).join(', ')}
                                  {subItem.specialties.length > 3 && '...'}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector - DISABLED */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <select className="text-sm border border-gray-200 rounded px-2 py-1 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
              {navigation.languages.map((lang) => (
                <option key={lang} value={lang.toLowerCase()}>
                  {lang}
                </option>
              ))}
            </select>
          </div> */}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-sm z-50">
            <div className="h-full overflow-y-auto">
              <div className="px-4 py-6 space-y-3">
                {navigation.mainMenu.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 pb-3">
                    {item.isCTA ? (
                      <Link
                        href={item.url}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-6 py-4 text-base font-medium rounded-xl text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.url}
                            className="text-gray-700 hover:text-blue-600 block py-4 text-base font-medium flex-1"
                            onClick={() => !item.submenu && setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                          {item.submenu && (
                            <button
                              onClick={() => toggleMobileDropdown(item.name)}
                              className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200"
                            >
                              <svg 
                                className={`w-5 h-5 transition-transform duration-200 ${mobileDropdowns[item.name] ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>
                        
                        {/* Mobile Dropdown */}
                        {item.submenu && mobileDropdowns[item.name] && (
                          <div className="ml-4 mt-3 space-y-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                            {item.submenu.map((subItem: any, index: number) => (
                              <Link
                                key={index}
                                href={subItem.url}
                                className="text-gray-600 hover:text-blue-600 block py-3 px-4 text-sm rounded-lg hover:bg-white transition-all duration-200 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.country || subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Close button for mobile */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center text-gray-500 hover:text-blue-600 py-3 text-base font-medium transition-colors duration-200"
                  >
                    Close Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 