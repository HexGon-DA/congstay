import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Heart } from 'lucide-react';

// Custom SVG Brand Icons
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  const [subEmail, setSubEmail] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subEmail && subEmail.includes('@')) {
      setSubSuccess(true);
      setTimeout(() => {
        setSubEmail('');
      }, 500);
    }
  };

  return (
    <footer className="bg-[#2B3D2E] text-[#F4EEDD] border-t-4 border-[#DCAE42] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-[#DCAE42]/30">
          
          {/* Cột 1: Thông tin liên hệ */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-lg bg-[#E8DEC9] p-0.5 flex items-center justify-center border-2 border-[#DCAE42] overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}cong-stay-logo.png`} alt="Cộng Stay" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-heading font-black text-lg text-[#F4EEDD] tracking-wider uppercase leading-none">
                  CỘNG STAY
                </h3>
                <span className="font-typewriter text-xs text-[#DCAE42] uppercase tracking-wider">Time Capsule Heritage Stay</span>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#F4EEDD]/80 mb-6 leading-relaxed">
              Trải nghiệm lưu trú di sản 24/7 mang đậm nếp sống thời bao cấp và hương vị cà phê Việt Nam quen thuộc.
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              {/* Địa chỉ */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#DCAE42] mt-0.5 shrink-0" />
                <div>
                  <span className="font-typewriter text-[#DCAE42] text-[11px] block uppercase">Địa chỉ trạm chính:</span>
                  <span className="font-medium">36 Phố Cổ, Quận Hoàn Kiếm, Hà Nội</span>
                </div>
              </div>

              {/* Hotline & Email */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#DCAE42] mt-0.5 shrink-0" />
                <div>
                  <span className="font-typewriter text-[#DCAE42] text-[11px] block uppercase">Hotline đặt phòng:</span>
                  <a href="tel:19006868" className="hover:text-[#DCAE42] font-mono font-bold text-sm">
                    1900 6868
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#DCAE42] mt-0.5 shrink-0" />
                <div>
                  <span className="font-typewriter text-[#DCAE42] text-[11px] block uppercase">Hộp thư điện tử:</span>
                  <a href="mailto:booking@congstay.vn" className="hover:text-[#DCAE42] font-mono">
                    booking@congstay.vn
                  </a>
                </div>
              </div>

              {/* Giờ nhận/trả phòng */}
              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#DCAE42] mt-0.5 shrink-0" />
                <div>
                  <span className="font-typewriter text-[#DCAE42] text-[11px] block uppercase">Giờ nhận/trả phòng:</span>
                  <span className="font-medium">Check-in 14:00 – Check-out 12:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cột 2: Hệ sinh thái mạng xã hội */}
          <div>
            <h4 className="font-heading font-bold text-base text-[#DCAE42] uppercase tracking-wider mb-4 border-b border-[#DCAE42]/20 pb-2">
              Hệ Sinh Thái Mạng Xã Hội
            </h4>
            <p className="font-body text-xs sm:text-sm text-[#F4EEDD]/80 mb-5 leading-relaxed">
              Theo dõi Cộng Stay để ngắm nhìn những góc phố cổ Hà Nội, các chương trình văn hóa truyền thống và nhận tin ưu đãi sớm nhất.
            </p>

            <div className="space-y-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 bg-[#1E2B20] border border-[#DCAE42]/30 rounded hover:border-[#DCAE42] hover:bg-[#344737] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#A8322D] flex items-center justify-center text-[#F4EEDD]">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold block text-[#F4EEDD]">Instagram</span>
                    <span className="text-[11px] font-mono text-[#DCAE42]">@congstay.official</span>
                  </div>
                </div>
                <span className="text-xs text-[#DCAE42] font-mono group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* Facebook Fanpage */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 bg-[#1E2B20] border border-[#DCAE42]/30 rounded hover:border-[#DCAE42] hover:bg-[#344737] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#2B3D2E] border border-[#DCAE42] flex items-center justify-center text-[#DCAE42]">
                    <FacebookIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold block text-[#F4EEDD]">Fanpage Facebook</span>
                    <span className="text-[11px] font-mono text-[#DCAE42]">Cộng Stay</span>
                  </div>
                </div>
                <span className="text-xs text-[#DCAE42] font-mono group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Retro tag */}
            <div className="mt-5 p-3 bg-[#1E2B20] rounded border border-dashed border-[#DCAE42]/30 text-center">
              <span className="font-typewriter text-[11px] text-[#DCAE42]">
                #CongStay #TramDungThoiGian #CaPheCotDua
              </span>
            </div>
          </div>

          {/* Cột 3: Đăng ký nhận tin */}
          <div>
            <h4 className="font-heading font-bold text-base text-[#DCAE42] uppercase tracking-wider mb-4 border-b border-[#DCAE42]/20 pb-2">
              Đăng Ký Nhận Tin
            </h4>

            <p className="font-body text-xs sm:text-sm text-[#F4EEDD]/90 mb-4 font-medium leading-relaxed">
              Nhập email nhận phiếu giảm 10% cho lần lưu trú đầu tiên và các ưu đãi văn hóa định kỳ.
            </p>

            {subSuccess ? (
              <div className="p-4 bg-[#DCAE42] text-[#2B3D2E] rounded border-2 border-[#F4EEDD] animate-fadeIn">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-[#A8322D]" />
                  <strong className="font-heading font-bold text-sm uppercase">ĐÃ TIẾP NHẬN THƯ MỜI!</strong>
                </div>
                <p className="text-xs leading-normal font-medium">
                  Cảm ơn bạn! Mã giảm 10% của bạn là: <strong className="font-mono text-sm text-[#A8322D]">CONGSTAY10</strong>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Địa chỉ email của bạn..."
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    className="w-full bg-[#1E2B20] border-2 border-[#DCAE42]/60 rounded px-4 py-3 text-sm text-[#F4EEDD] placeholder:text-[#F4EEDD]/50 focus:outline-none focus:border-[#DCAE42]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-stamp-red py-3 text-xs sm:text-sm rounded cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2 inline" />
                  Nhận phiếu giảm giá 10%
                </button>
              </form>
            )}

            <div className="mt-4 pt-3 text-[11px] font-typewriter text-[#F4EEDD]/60 leading-normal">
              ★ Chúng tôi cam kết bảo mật thông tin và chỉ gửi thông tin hữu ích về văn hóa & ưu đãi phòng.
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4EEDD]/70 gap-3">
          <p className="font-typewriter text-center sm:text-left">
            © 2026 CỘNG STAY — Trạm Dừng Thời Gian. Phát triển từ tinh thần văn hóa Cộng Cà Phê.
          </p>
          <div className="flex items-center gap-4 text-xs font-typewriter text-[#DCAE42]">
            <span>Hà Nội</span>
            <span>•</span>
            <span>Sa Pa</span>
            <span>•</span>
            <span>Hội An</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
