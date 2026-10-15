import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Compass, CalendarCheck } from 'lucide-react';

export default function Header({ onBookNowClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Về Cộng Stay', href: '#about' },
    { label: 'Hạng phòng', href: '#rooms' },
    { label: 'Dịch vụ & Tiện ích', href: '#amenities' },
    { label: 'Ưu đãi', href: '#offers' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onBookNowClick) {
      onBookNowClick();
    } else {
      const bookingEl = document.querySelector('#booking');
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2B3D2E] shadow-xl py-2.5 border-b-2 border-[#DCAE42]'
            : 'bg-[#2B3D2E] py-3.5 border-b-2 border-[#DCAE42]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Logo Cộng Stay */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-11 h-11 rounded-full p-0.5 bg-[#DCAE42] border border-[#2B3D2E] shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src={`${import.meta.env.BASE_URL}cong-stay-logo.svg`}
                  alt="Cộng Stay Logo"
                  className="w-10 h-10 object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-black text-xl sm:text-2xl text-[#F4EEDD] tracking-wider leading-none">
                    CỘNG STAY
                  </span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#DCAE42]"></span>
                </div>
                <span className="font-typewriter text-[10px] sm:text-xs text-[#DCAE42] tracking-widest uppercase">
                  Trạm Dừng Thời Gian
                </span>
              </div>
            </a>

            {/* Center: Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm xl:text-base font-medium text-[#F4EEDD] hover:text-[#DCAE42] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#DCAE42] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
            </nav>

            {/* Right: CTA Button */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:19006868"
                className="hidden xl:flex items-center gap-1.5 text-xs text-[#F4EEDD] opacity-80 hover:opacity-100 hover:text-[#DCAE42] transition-colors"
                title="Tổng đài đặt phòng"
              >
                <Phone className="w-3.5 h-3.5 text-[#DCAE42]" />
                <span className="font-typewriter font-bold tracking-wider">1900 6868</span>
              </a>

              <button
                onClick={handleCtaClick}
                className="btn-stamp-red px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm rounded cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 mr-1.5 inline-block" />
                ĐẶT PHÒNG NGAY
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={handleCtaClick}
                className="btn-stamp-red px-3 py-1.5 text-xs rounded"
              >
                ĐẶT PHÒNG
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-[#F4EEDD] hover:text-[#DCAE42] focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#2B3D2E] border-t border-[#DCAE42]/40 px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded font-medium text-[#F4EEDD] hover:bg-[#3B4E3E] hover:text-[#DCAE42] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#DCAE42] text-xs font-mono">→</span>
                </a>
              ))}
              <div className="pt-3 border-t border-[#DCAE42]/20 flex flex-col gap-2">
                <a
                  href="tel:19006868"
                  className="flex items-center justify-center gap-2 py-2 text-sm text-[#F4EEDD] bg-[#1E2B20] rounded border border-[#DCAE42]/30"
                >
                  <Phone className="w-4 h-4 text-[#DCAE42]" />
                  <span>Tổng đài: <strong>1900 6868</strong></span>
                </a>
                <button
                  onClick={handleCtaClick}
                  className="w-full btn-stamp-red py-2.5 text-sm rounded mt-1"
                >
                  ĐẶT PHÒNG NGAY (GIẢM 10%)
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
}
