import React from 'react';
import { Bed, Users, Maximize2, Coffee, Check, Star, ShieldCheck, Sparkles } from 'lucide-react';

export const ROOMS_DATA = [
  {
    id: 'cua-o',
    name: 'Phòng Cửa Ô',
    subname: 'Standard Heritage Room',
    badge: 'MỘC MẠC & ẤM CÚNG',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Phòng Cửa Ô 1 giường đôi đèn vàng ấm bàn ghế gỗ nan',
    description: 'Diện tích 20m², hướng phố cổ, bình tráng men và trà thảo mộc chào đón.',
    specs: {
      area: '20m²',
      bed: '1 Giường đôi lớn (Queen)',
      view: 'Hướng ngõ phố cổ',
      guests: '2 Người lớn'
    },
    amenities: [
      'Bình tráng men & Trà thảo mộc chào đón',
      'Đèn bàn vàng ấm & Bàn ghế gỗ nan hoài cổ',
      'Đệm cao cấp & Điều hòa êm 2 chiều',
      'Phòng tắm tiện nghi với vòi sen áp lực'
    ],
    priceNumber: 950000,
    priceFormatted: '950.000 VNĐ',
    period: '/ đêm',
    isPopular: false
  },
  {
    id: 'mau-dich',
    name: 'Phòng Mậu Dịch',
    subname: 'Deluxe Retro Suite',
    badge: 'LỰA CHỌN PHỔ BIẾN NHẤT',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Phòng Mậu Dịch ban công ngói âm dương góc pha cà phê phin riêng',
    description: 'Diện tích 30m², ban công thoáng, miễn phí 2 ly Cà phê Cốt dừa mỗi sáng.',
    specs: {
      area: '30m²',
      bed: '1 Giường King hoặc 2 Giường đơn',
      view: 'Ban công ngói âm dương thoáng đãng',
      guests: '2 - 3 Người lớn'
    },
    amenities: [
      'Miễn phí 2 ly Cà phê Cốt dừa mỗi sáng',
      'Góc pha cà phê phin thủ công riêng biệt',
      'Ban công ngói âm dương nhìn phố phường',
      'Máy hát đĩa vinyl & Quạt tai voi cổ'
    ],
    priceNumber: 1450000,
    priceFormatted: '1.450.000 VNĐ',
    period: '/ đêm',
    isPopular: true
  },
  {
    id: 'tram-dung',
    name: 'Phòng Trạm Dừng',
    subname: 'Family Loft',
    badge: 'GIA ĐÌNH & NHÓM BẠN',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Phòng Trạm Dừng gia đình gác lửng kệ sách cũ và trò chơi dân gian',
    description: 'Dành cho nhóm 4 người, không gian sinh hoạt chung ấm cúng.',
    specs: {
      area: '45m² (Gác lửng)',
      bed: '2 Giường đôi lớn (Tầng & Lửng)',
      view: 'Không gian mở mái ngói',
      guests: '4 - 5 Người'
    },
    amenities: [
      'Kệ sách văn học cũ & Truyện tranh hoài niệm',
      'Bộ sưu tập trò chơi dân gian (Ô ăn quan, cờ cá ngựa)',
      'Không gian sinh hoạt chung rộng rãi',
      'Tặng set trà cúc mật ong & Kẹo lạc Hà Nội'
    ],
    priceNumber: 1850000,
    priceFormatted: '1.850.000 VNĐ',
    period: '/ đêm',
    isPopular: false
  }
];

export default function Rooms({ onSelectRoom }) {
  const handleSelect = (room) => {
    if (onSelectRoom) {
      onSelectRoom(room);
    }
  };

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-[#F4EEDD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
            <span className="font-typewriter text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A8322D]">
              BẢNG NIÊM YẾT HẠNG PHÒNG
            </span>
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B3D2E] uppercase tracking-tight mb-4">
            Danh Mục Gian Phòng Nghỉ
          </h2>
          <p className="font-body text-base sm:text-lg text-[#3A4A3C]">
            Mỗi gian phòng là một nếp nhà xưa lưu giữ hồn cốt văn hóa, kết hợp cùng tiện nghi êm ái hiện đại.
          </p>
        </div>

        {/* 3 Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {ROOMS_DATA.map((room) => (
            <div
              key={room.id}
              className={`paper-card rounded-lg flex flex-col justify-between overflow-hidden relative group ${
                room.isPopular ? 'border-3 border-[#A8322D] ring-2 ring-[#DCAE42]/50' : 'border-2 border-[#2B3D2E]'
              }`}
            >
              {/* Popular Badge if applicable */}
              {room.isPopular && (
                <div className="absolute top-0 right-0 z-20 bg-[#A8322D] text-[#F4EEDD] text-[11px] font-heading font-extrabold px-3 py-1 rounded-bl-lg shadow uppercase tracking-wider flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current text-[#DCAE42]" />
                  <span>Yêu thích nhất</span>
                </div>
              )}

              {/* Top part: Image & Titles */}
              <div>
                {/* Room Image */}
                <div className="relative overflow-hidden aspect-[16/10] border-b-2 border-[#2B3D2E]">
                  <img
                    src={room.image}
                    alt={room.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#2B3D2E]/90 text-[#F4EEDD] px-2.5 py-1 rounded text-xs font-typewriter">
                    {room.specs.area} • {room.specs.guests}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Badge & Title */}
                  <div className="mb-3">
                    <span className="font-typewriter text-[11px] font-bold text-[#A8322D] uppercase tracking-wider block mb-1">
                      {room.badge}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2B3D2E] uppercase">
                      {room.name}
                    </h3>
                    <p className="font-typewriter text-xs text-[#2B3D2E]/70 italic mb-2">
                      ({room.subname})
                    </p>
                  </div>

                  {/* Description as requested */}
                  <p className="font-body text-sm sm:text-base text-[#2B3D2E] leading-relaxed mb-4 bg-[#F4EEDD] p-3 rounded border border-[#2B3D2E]/20">
                    {room.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-5 text-xs text-[#2B3D2E]">
                    {room.amenities.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#A8322D] mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom part: Price & CTA Button */}
              <div className="p-5 sm:p-6 pt-0 border-t border-dashed border-[#2B3D2E]/20 mt-auto">
                <div className="flex items-baseline justify-between mb-4 mt-3">
                  <span className="font-typewriter text-xs text-[#2B3D2E]/80 uppercase">
                    Giá niêm yết:
                  </span>
                  <div className="text-right">
                    <span className="font-heading font-black text-xl sm:text-2xl text-[#A8322D]">
                      {room.priceFormatted}
                    </span>
                    <span className="font-typewriter text-xs text-[#2B3D2E] ml-1">
                      {room.period}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleSelect(room)}
                  className="w-full btn-stamp-red py-3 text-sm rounded cursor-pointer"
                >
                  Chọn phòng này
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Heritage hospitality */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#DCAE42]/20 border border-[#2B3D2E]/30 rounded text-xs sm:text-sm text-[#2B3D2E]">
            <Sparkles className="w-4 h-4 text-[#A8322D]" />
            <span>Mọi hạng phòng đều bao gồm bữa sáng truyền thống và trà phin chào đón.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
