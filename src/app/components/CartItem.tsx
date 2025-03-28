'use client';

import React from 'react';
import { CartItem as CartItemType } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

export default function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
  return (
    <li className="border-b border-gray-100 last:border-b-0">
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
        {/* Product Image */}
        <div className="w-full sm:w-20 h-20 bg-blue-50 rounded-md flex items-center justify-center">
          <svg
            className="w-10 h-10 text-blue-100"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"></path>
            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
            <path d="M5 3h6.5a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 11.5v-7A1.5 1.5 0 0 1 2.5 3H5z"></path>
          </svg>
        </div>
        
        {/* Product Details */}
        <div className="flex-1">
          <h3 className="text-gray-800 font-medium mb-1">{item.name}</h3>
          <p className="text-gray-500 text-sm mb-2">{item.printTime} Print Time</p>
          
          {/* Price and Quantity */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Qty:</span>
              <select
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(parseInt(e.target.value))}
                className="border border-gray-300 rounded-md p-1 text-sm"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center">
              <span className="font-medium text-blue-600">{formatCurrency(item.price * item.quantity)}</span>
              <button
                onClick={onRemove}
                className="ml-4 text-red-500 hover:text-red-700"
                aria-label="Remove item"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
