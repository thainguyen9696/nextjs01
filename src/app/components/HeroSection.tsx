import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1 className="hero-section__title">
            Quality <span>3D Printing</span> for Everyone
          </h1>
          <p className="hero-section__description">
            Discover our wide range of 3D printed products or let us help bring your ideas to life
            with our professional 3D printing services.
          </p>
          <div className="hero-section__cta">
            <Link href="/products">
              <Button className="btn-primary">Browse Products</Button>
            </Link>
            <Link href="/services" className="btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
        
        <div className="hero-section__image">
          <div className="hero-section__printer">
            <div className="hero-section__printer-platform"></div>
            <div className="hero-section__printer-arm"></div>
            <div className="hero-section__printer-head"></div>
            <div className="hero-section__printer-model"></div>
          </div>
          
          {/* Decorative shapes */}
          <div className="hero-section__shape hero-section__shape--circle"></div>
          <div className="hero-section__shape hero-section__shape--dots"></div>
        </div>
      </div>
      
      {/* Featured Labels */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-white border-t border-blue-100">
        <div className="flex flex-col items-center justify-center p-4 md:p-6 border-r border-blue-100">
          <svg className="h-8 w-8 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-sm md:text-base font-medium text-gray-700">Quick Production</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 md:p-6 border-r border-blue-100">
          <svg className="h-8 w-8 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          <span className="text-sm md:text-base font-medium text-gray-700">High Quality</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 md:p-6 border-r border-blue-100">
          <svg className="h-8 w-8 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
          <span className="text-sm md:text-base font-medium text-gray-700">Custom Designs</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 md:p-6">
          <svg className="h-8 w-8 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span className="text-sm md:text-base font-medium text-gray-700">Fast Shipping</span>
        </div>
      </div>
    </section>
  );
}
