import React from 'react';
import { Coffee, MapPin, Sparkles, Bed, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Hero({ onBookClick, onRoomsClick, onSelectLocation }) {
  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 lg:py-20 overflow-hidden">
      {/* Background paper texture & decorative accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#2B3D2E_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top retro announcement badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-[#DCAE42] border-2 border-[#2B3D2E] shadow-[3px_3px_0px_#2B3D2E] rounded text-xs sm:text-sm font-semibold text-[#2B3D2E]">
            <span className="w-2 h-2 rounded-full bg-[#A8322D] animate-pulse"></span>
            <span className="font-typewriter uppercase tracking-wider">Phiếu Cung Ứng Lưu Trú Di Sản • Khai Trương 3 Cơ Sở Mới</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-block mb-3">
              <span className="font-typewriter text-xs sm:text-sm uppercase tracking-widest text-[#A8322D] font-bold border-b-2 border-[#A8322D] pb-0.5">
                ★ HÀNH TRÌNH TỪ VĂN HÓA ĐẾN NẾP SỐNG ★
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#2B3D2E] leading-tight tracking-tight uppercase mb-4 sm:mb-6">
              From Vietnamese Coffee <br className="hidden sm:inline" />
              <span className="text-[#A8322D] relative inline-block">
                to Vietnamese Living
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#DCAE42]" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,7 Q50,0 100,7" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg lg:text-xl text-[#3A4A3C] font-medium leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              <strong className="text-[#2B3D2E] font-bold">Cộng Stay: Trạm Dừng Thời Gian</strong> — Trải nghiệm lưu trú di sản 24/7 giữa lòng phố cổ. Đánh thức giác quan với ly cà phê cốt dừa quen thuộc và nếp sống thảnh thơi thời bao cấp.
            </p>

            {/* 2 Buttons as specified */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={onBookClick ? onBookClick : () => handleScroll('#booking')}
                className="w-full sm:w-auto btn-stamp-red px-6 sm:px-8 py-3.5 text-sm sm:text-base rounded group cursor-pointer"
              >
                <span>Đặt phòng nhận ưu đãi</span>
                <ArrowRight className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onRoomsClick ? onRoomsClick : () => handleScroll('#rooms')}
                className="w-full sm:w-auto btn-army-outline px-6 sm:px-8 py-3.5 text-sm sm:text-base rounded cursor-pointer"
              >
                <Bed className="w-4 h-4 mr-2 inline-block" />
                <span>Xem các gian phòng</span>
              </button>
            </div>

            {/* 3 Quick Destinations Selector */}
            <div className="pt-4 border-t-2 border-[#2B3D2E]/20 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <span className="font-typewriter text-xs uppercase text-[#2B3D2E] font-bold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#A8322D]" />
                3 Trạm Dừng:
              </span>
              {[
                { name: 'Hà Nội (Phố Cổ)', code: 'HN' },
                { name: 'Sa Pa (Mù Sương)', code: 'SP' },
                { name: 'Hội An (Phố Hoài)', code: 'HA' }
              ].map((loc) => (
                <button
                  key={loc.name}
                  onClick={() => onSelectLocation && onSelectLocation(loc.name)}
                  className="px-2.5 py-1 text-xs font-semibold bg-[#FBF9F2] hover:bg-[#DCAE42] text-[#2B3D2E] border border-[#2B3D2E] rounded transition-all shadow-[2px_2px_0px_#2B3D2E] cursor-pointer"
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Image with Retro Frame & Details */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Retro Postal Stamp Frame */}
              <div className="relative p-3 sm:p-4 bg-[#FBF9F2] border-3 border-[#2B3D2E] shadow-[8px_8px_0px_#2B3D2E] rounded-lg">
                {/* Main image: Retro bedroom, wooden window looking out to Hanoi Old Quarter, tray with coconut coffee */}
                <div className="relative overflow-hidden rounded border-2 border-[#2B3D2E] aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
                    alt="Phòng ngủ Cộng Stay với cửa sổ gỗ nhìn ra phố cổ và cà phê cốt dừa"
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-95"
                    loading="eager"
                  />
                  {/* Subtle warm vintage film overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B3D2E]/80 via-transparent to-[#DCAE42]/20 mix-blend-multiply pointer-events-none"></div>

                  {/* Coconut Coffee Badge on Image */}
                  <div className="absolute top-3 left-3 bg-[#F4EEDD]/95 backdrop-blur-sm px-3 py-1.5 rounded border border-[#2B3D2E] shadow flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-[#A8322D]" />
                    <span className="font-heading text-xs font-bold text-[#2B3D2E]">Cà phê cốt dừa tận phòng</span>
                  </div>

                  {/* Heritage Window Caption bottom */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#2B3D2E]/90 text-[#F4EEDD] p-2.5 rounded border border-[#DCAE42] text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-typewriter uppercase tracking-wider text-[#DCAE42] font-bold">
                        Góc Cửa Sổ Phố Cổ 1976
                      </span>
                      <span className="text-[11px] font-mono text-[#F4EEDD]/80">36 Phố Phường</span>
                    </div>
                  </div>
                </div>

                {/* Decorative vintage postage stamp in corner */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#DCAE42] border-2 border-[#2B3D2E] shadow-[4px_4px_0px_#2B3D2E] rounded-full flex flex-col items-center justify-center p-1 text-center transform rotate-12 pointer-events-none">
                  <span className="text-[9px] font-typewriter font-bold text-[#2B3D2E]">CỘNG CHỨNG</span>
                  <span className="text-xs font-heading font-black text-[#A8322D]">DI SẢN</span>
                  <span className="text-[8px] font-typewriter text-[#2B3D2E]">★ 100% ★</span>
                </div>

                {/* Bottom quote badge */}
                <div className="mt-3 pt-3 border-t-2 border-dashed border-[#2B3D2E]/30 flex items-center justify-between text-xs text-[#2B3D2E]">
                  <span className="font-typewriter">Mã trạm: <strong>CS-HAN-01</strong></span>
                  <span className="font-typewriter text-[#A8322D] font-bold">● Đang mở cửa đón khách</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
