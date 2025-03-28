import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <Link href={`/products/${product.id}`}>
          <div className="flex items-center justify-center h-full bg-blue-50">
            <svg
              className="w-24 h-24 text-blue-100"
              xmlns="http://www.w3.org/2000/svg"
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
        </Link>
        
        <div className="product-card__image-overlay"></div>
        
        {product.inStock === false && (
          <div className="product-card__image-badge product-card__image-badge--out-of-stock">
            Out of Stock
          </div>
        )}
        
        <div className="product-card__image-actions">
          <button aria-label="Add to wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button aria-label="Quick view">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="product-card__content">
        <div className="product-card__category">{product.category}</div>
        
        <h3 className="product-card__title">
          <Link href={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        
        <div className="product-card__rating">
          <div className="product-card__rating-stars">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={i < Math.floor(product.rating) ? '' : 'text-gray-300'}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="product-card__rating-count">({product.reviewCount})</div>
        </div>
        
        <p className="product-card__description">{product.description}</p>
        
        <div className="product-card__specs">
          <div className="product-card__specs-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"></path>
              <path d="M4 14h.01"></path>
              <path d="M9 14h.01"></path>
              <path d="M14 14h.01"></path>
              <path d="M19 14h.01"></path>
            </svg>
            {product.material}
          </div>
          <div className="product-card__specs-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            {product.dimensions}
          </div>
        </div>
        
        <div className="product-card__print-time">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span className="product-card__print-time-label">Print Time:</span>
          <span className="product-card__print-time-value">{product.printTime}</span>
        </div>
        
        <div className="product-card__footer">
          <div className="product-card__footer-price">
            {formatCurrency(product.price)}
          </div>
          <button 
            className={`product-card__footer-action ${!product.inStock ? 'product-card__footer-action--disabled' : ''}`}
            disabled={!product.inStock}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
