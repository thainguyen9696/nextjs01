'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { useCart } from '@/lib/hooks/useCart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { cart } = useCart();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <>
      <header className="header">
        <div className="header__container">
          {/* Logo */}
          <div className="header__logo">
            <Link href="/">
              <svg 
                className="h-8 w-8 text-blue-600" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M6 17.5l-3-3v-5l3-3 9 9v6z"></path>
                <path d="M17.5 17.5l-3-3v-2l3-3 2 2v4z"></path>
                <path d="M14.5 6.5l-9 9-2-2v-4l3-3 8-3z"></path>
              </svg>
              <span>3D Print Shop</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="header__nav">
            <Link
              href="/"
              className={`header__nav-item ${isActive('/') ? 'header__nav-item--active' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`header__nav-item ${isActive('/products') ? 'header__nav-item--active' : ''}`}
            >
              Products
            </Link>
            <Link
              href="/services"
              className={`header__nav-item ${isActive('/services') ? 'header__nav-item--active' : ''}`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`header__nav-item ${isActive('/contact') ? 'header__nav-item--active' : ''}`}
            >
              Contact
            </Link>
          </nav>
          
          {/* User Actions */}
          <div className="header__actions">
            {/* Search */}
            <div className="header__search">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input type="text" placeholder="Search products..." />
            </div>
            
            {/* Cart */}
            <Link href="/cart" className="header__icon-btn">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              {cart.totalItems > 0 && (
                <span className="header__cart-count">
                  {cart.totalItems}
                </span>
              )}
            </Link>
            
            {/* User Profile */}
            {user ? (
              <div className="header__user-menu">
                <button 
                  onClick={toggleProfile}
                  className="header__user-menu-trigger"
                >
                  <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0D8ABC&color=fff`} alt={user.name} />
                  <span>{user.name}</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                <div className={`header__user-menu-dropdown ${isProfileOpen ? '' : 'header__user-menu-dropdown--hidden'}`}>
                  <div className="header__user-menu-dropdown-info">
                    <h5>{user.name}</h5>
                    <p>{user.email}</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div>
                      <Link href="/profile">My Profile</Link>
                      <Link href="/orders">My Orders</Link>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          logout();
                          setIsProfileOpen(false);
                        }}
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href="/auth"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Sign In
              </Link>
            )}
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="header__mobile-trigger"
            >
              <svg 
                className={isMenuOpen ? 'hidden' : 'block'}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg 
                className={isMenuOpen ? 'block' : 'hidden'}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? '' : 'mobile-menu--hidden'}`}>
        <div className="mobile-menu__header">
          <div className="mobile-menu__header-logo">
            <svg 
              className="h-8 w-8 text-blue-600" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M6 17.5l-3-3v-5l3-3 9 9v6z"></path>
              <path d="M17.5 17.5l-3-3v-2l3-3 2 2v4z"></path>
              <path d="M14.5 6.5l-9 9-2-2v-4l3-3 8-3z"></path>
            </svg>
            <span>3D Print Shop</span>
          </div>
          <button 
            className="mobile-menu__header-close"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <nav className="mobile-menu__nav">
          <Link
            href="/"
            className={isActive('/') ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={isActive('/products') ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/services"
            className={isActive('/services') ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={isActive('/contact') ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        
        {user && (
          <div className="mobile-menu__user">
            <div className="mobile-menu__user-info">
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0D8ABC&color=fff`} 
                alt={user.name} 
              />
              <div>
                <h5>{user.name}</h5>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="mobile-menu__user-actions">
              <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                My Profile
              </Link>
              <Link href="/orders" onClick={() => setIsMenuOpen(false)}>
                My Orders
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
        
        <div className="mobile-menu__footer">
          <div className="mobile-menu__footer-actions">
            <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              Cart
            </Link>
            {!user && (
              <Link href="/auth" onClick={() => setIsMenuOpen(false)}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                </svg>
                Sign In
              </Link>
            )}
            <a href="tel:+1234567890">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
