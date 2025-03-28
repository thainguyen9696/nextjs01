import React from 'react';
import Link from 'next/link';

const categories = [
  {
    id: 'figurines',
    name: 'Figurines & Models',
    description: 'Detailed figurines and scale models',
    icon: (
      <svg className="h-12 w-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path>
      </svg>
    )
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    description: 'Decorative items for your home',
    icon: (
      <svg className="h-12 w-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
    )
  },
  {
    id: 'gadgets',
    name: 'Gadgets & Accessories',
    description: 'Useful gadgets and tech accessories',
    icon: (
      <svg className="h-12 w-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    )
  },
  {
    id: 'jewelry',
    name: 'Jewelry & Accessories',
    description: 'Wearable 3D printed accessories',
    icon: (
      <svg className="h-12 w-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
      </svg>
    )
  }
];

export default function CategorySection() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Shop by Category</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id}
            href={`/products?category=${category.id}`}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow text-center group"
          >
            <div className="flex justify-center mb-4">
              {category.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-blue-600">
              {category.name}
            </h3>
            <p className="text-gray-600 text-sm">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
