import React, { useState } from 'react';
import { Users, Check, Star, Clock, Gift, Eye, RefreshCw } from 'lucide-react';

export const ROOMS_DATA = [
  {
    id: 'cua-o',
    name: 'Phòng Cửa Ô',
    subname: 'Standard Heritage Room',
    headline: 'Nét duyên mộc mạc giữa lòng phố cổ',
    badge: 'MỘC MẠC & ẤM CÚNG',
    image: './images/rooms/phong-cua-o-v2.jpg',
    imageAlt: 'Phòng Cửa Ô 20m² ngõ phố cổ cửa chớp gỗ đèn vàng ấm áp phong cách Cộng hoài niệm',
    specs: {
      area: '20m²',
      guests: 'Tối đa 2 người lớn (1 giường đôi)',
      view: 'Hướng ngõ phố cổ yên bình, đón gió trời qua ô cửa chớp gỗ'
    },
    amenities: [
      'Miễn phí set trà sen / thảo mộc chào đón & bánh đậu xanh mậu dịch',
      'Phích nước Rạng Đông, cốc tráng men hoài niệm',
      'Đèn đọc sách ánh vàng ấm áp, đài cassette vintage',
      'Phòng tắm khép kín với tinh dầu sả chanh thư giãn'
    ],
    prices: {
      weekday: 750000,
      weekdayFormatted: '750.000 VNĐ',
      weekend: 950000,
      weekendFormatted: '950.000 VNĐ'
    },
    webPerks: [
      'Miễn phí set trà sen chào đón & bánh đậu xanh mậu dịch',
      'Tặng voucher giảm 10% đồ uống tại toàn hệ thống Cộng Cà Phê'
    ],
    isPopular: false
  },
  {
    id: 'mau-dich',
    name: 'Phòng Mậu Dịch',
    subname: 'Deluxe Retro Suite',
    headline: 'Không gian di sản sang trọng & Hương vị cà phê sớm mai',
    badge: 'LỰA CHỌN PHỔ BIẾN NHẤT',
    image: './images/rooms/phong-mau-dich-v2.jpg',
    imageAlt: 'Phòng Mậu Dịch 30m² ban công mái ngói âm dương rêu phong máy hát đĩa than cà phê cốt dừa',
    specs: {
      area: '30m²',
      guests: 'Tối đa 2 – 3 người lớn (1 giường 4 cọc King-size)',
      view: 'Ban công riêng hướng trực diện ra mái ngói âm dương rêu phong'
    },
    amenities: [
      'Đặc quyền: Tặng 02 ly Cà phê Cốt dừa trứ danh mỗi sáng phục vụ tận phòng',
      'Quầy pha chế phin nhôm truyền thống & hạt cà phê rang mộc cao cấp',
      'Máy hát đĩa than / cassette cổ điển cùng tuyển tập nhạc xưa êm dịu',
      'Ban công ngắm trọn mái ngói phố cổ với bàn ghế thư giãn ngoài trời',
      'Bồn tắm ngâm thảo dược truyền thống'
    ],
    prices: {
      weekday: 1300000,
      weekdayFormatted: '1.300.000 VNĐ',
      weekend: 1600000,
      weekendFormatted: '1.600.000 VNĐ'
    },
    webPerks: [
      'Miễn phí 02 ly Cà phê Cốt dừa phục vụ mỗi sáng',
      'Tặng set trà thảo mộc & trải nghiệm pha phin thủ công tại phòng'
    ],
    isPopular: true
  },
  {
    id: 'tram-dung',
    name: 'Phòng Trạm Dừng',
    subname: 'Family Loft',
    headline: 'Tổ ấm gác lửng cho gia đình & những cuộc hội ngộ thân tình',
    badge: 'GIA ĐÌNH & NHÓM BẠN',
    image: './images/rooms/phong-tram-dung-v2.jpg',
    imageAlt: 'Phòng Trạm Dừng 45m² duplex gác lửng sofa cổ điển tủ sách trò chơi dân gian ô ăn quan',
    specs: {
      area: '45m² (Thiết kế Duplex có gác lửng)',
      guests: '4 – 5 khách (Lý tưởng cho gia đình hoặc nhóm bạn thân)',
      view: 'Cửa vòm kính lớn ôm trọn mảng xanh và phố phường nhộn nhịp'
    },
    amenities: [
      'Bố cục 2 giường lớn (1 giường trệt master + 1 đệm gác lửng tiện nghi)',
      'Khu vực phòng khách riêng với sofa cổ điển, bàn trà gỗ lớn',
      'Tủ sách văn hóa - nghệ thuật xưa và bộ trò chơi dân gian tương tác (Ô ăn quan, cờ cá ngựa, cờ tướng)',
      'Bộ ấm chén trà men sứ Bát Tràng và phích nước nóng phục vụ cả gia đình',
      'Ưu đãi voucher Tem Phiếu Mậu Dịch giảm 15% tại toàn bộ hệ thống Cộng Cà Phê'
    ],
    prices: {
      weekday: 1750000,
      weekdayFormatted: '1.750.000 VNĐ',
      weekend: 2150000,
      weekendFormatted: '2.150.000 VNĐ'
    },
    webPerks: [
      'Tặng voucher "Tem Phiếu Mậu Dịch" giảm 15% đồ uống tại Cộng Cà Phê',
      'Miễn phí bộ trò chơi dân gian (Ô ăn quan, cờ vua...) tại phòng'
    ],
    isPopular: false
  }
];

export default function Rooms({ onSelectRoom }) {
  const [dayType, setDayType] = useState('weekday'); // 'weekday' | 'weekend'

  const handleSelect = (room) => {
    if (onSelectRoom) {
      onSelectRoom({
        ...room,
        selectedDayType: dayType,
        selectedPriceNumber: dayType === 'weekday' ? room.prices.weekday : room.prices.weekend,
        selectedPriceFormatted: dayType === 'weekday' ? room.prices.weekdayFormatted : room.prices.weekendFormatted
      });
    }
  };

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-[#F4EEDD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
            <span className="font-typewriter text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A8322D]">
              BẢNG NIÊM YẾT HẠNG PHÒNG DI SẢN
            </span>
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B3D2E] uppercase tracking-tight mb-4">
            Danh Mục Gian Phòng Nghỉ
          </h2>
          <p className="font-body text-base sm:text-lg text-[#3A4A3C]">
            Không gian lưu trú di sản sang trọng, kết hợp tinh tế giữa nếp sống xưa thời bao cấp và tiện nghi tiêu chuẩn cao cấp.
          </p>

          {/* Day Type Toggle Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-[#EAE2CF] border-2 border-[#2B3D2E] rounded-lg shadow-[3px_3px_0px_#2B3D2E]">
            <button
              onClick={() => setDayType('weekday')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-heading font-bold rounded transition-all cursor-pointer ${
                dayType === 'weekday'
                  ? 'bg-[#2B3D2E] text-[#F4EEDD] shadow-sm'
                  : 'text-[#2B3D2E] hover:text-[#A8322D]'
              }`}
            >
              Ngày Thường (CN – Th5)
            </button>
            <button
              onClick={() => setDayType('weekend')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-heading font-bold rounded transition-all cursor-pointer ${
                dayType === 'weekend'
                  ? 'bg-[#A8322D] text-[#F4EEDD] shadow-sm'
                  : 'text-[#2B3D2E] hover:text-[#A8322D]'
              }`}
            >
              Cuối Tuần (Th6 – Th7 & Lễ)
            </button>
          </div>
        </div>

        {/* 3 Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {ROOMS_DATA.map((room) => {
            const currentPrice = dayType === 'weekday' ? room.prices.weekdayFormatted : room.prices.weekendFormatted;
            return (
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
                  <div className="relative overflow-hidden aspect-[16/11] border-b-2 border-[#2B3D2E] bg-[#2B3D2E]">
                    <img
                      src={room.image}
                      alt={room.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B3D2E]/70 via-transparent to-transparent pointer-events-none"></div>

                    {/* Area tag on photo */}
                    <div className="absolute bottom-2 left-2 bg-[#F4EEDD]/95 text-[#2B3D2E] border border-[#2B3D2E] px-2.5 py-1 rounded text-[11px] font-typewriter font-bold shadow-sm">
                      {room.specs.area}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    {/* Badge & Title */}
                    <div className="mb-3">
                      <span className="font-typewriter text-[11px] font-bold text-[#A8322D] uppercase tracking-wider block mb-1">
                        {room.badge}
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2B3D2E] uppercase leading-tight">
                        {room.name}
                      </h3>
                      <p className="font-typewriter text-xs text-[#2B3D2E]/70 italic mb-1">
                        ({room.subname})
                      </p>
                      <p className="font-heading text-xs font-semibold text-[#A8322D] mt-1 italic">
                        "{room.headline}"
                      </p>
                    </div>

                    {/* Specifications Box */}
                    <div className="bg-[#F4EEDD] p-3 rounded border border-[#2B3D2E]/20 text-xs text-[#2B3D2E] mb-4 space-y-1.5">
                      <div className="flex items-start gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#A8322D] shrink-0 mt-0.5" />
                        <span><strong>Sức chứa:</strong> {room.specs.guests}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#A8322D] shrink-0 mt-0.5" />
                        <span><strong>Tầm nhìn:</strong> {room.specs.view}</span>
                      </div>
                    </div>

                    {/* Highlights list */}
                    <div className="mb-4">
                      <span className="font-typewriter text-[10px] uppercase font-bold text-[#2B3D2E]/80 tracking-wider block mb-2">
                        Tiện ích nổi bật:
                      </span>
                      <div className="space-y-1.5 text-xs text-[#2B3D2E]">
                        {room.amenities.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#A8322D] mt-0.5 shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Web Perks Box */}
                    <div className="p-3 bg-[#DCAE42]/20 border border-dashed border-[#2B3D2E]/40 rounded mb-4">
                      <span className="font-heading text-[11px] font-bold text-[#2B3D2E] flex items-center gap-1 mb-1.5">
                        <Gift className="w-3.5 h-3.5 text-[#A8322D]" />
                        Đặc quyền khi đặt qua Web:
                      </span>
                      <ul className="space-y-1 text-[11px] text-[#2B3D2E]">
                        {room.webPerks.map((perk, pidx) => (
                          <li key={pidx} className="flex items-start gap-1.5">
                            <span className="text-[#A8322D] font-bold">•</span>
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom part: Price & CTA Button */}
                <div className="p-5 sm:p-6 pt-0 border-t border-dashed border-[#2B3D2E]/20 mt-auto">
                  <div className="flex items-baseline justify-between mb-4 mt-3">
                    <div>
                      <span className="font-typewriter text-xs text-[#2B3D2E]/80 uppercase block">
                        {dayType === 'weekday' ? 'Giá ngày thường:' : 'Giá cuối tuần/lễ:'}
                      </span>
                      <span className="text-[10px] font-mono text-[#2B3D2E]/60">
                        {dayType === 'weekday' ? '(CN – Th5)' : '(Th6 – Th7 & Lễ Tết)'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-heading font-black text-xl sm:text-2xl text-[#A8322D]">
                        {currentPrice}
                      </span>
                      <span className="font-typewriter text-xs text-[#2B3D2E] ml-1">
                        / đêm
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
            );
          })}
        </div>

        {/* 2 Chính Sách Đặt Phòng Nổi Bật */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 sm:p-6 bg-[#FBF9F2] border-2 border-[#2B3D2E] shadow-[4px_4px_0px_#2B3D2E] rounded-lg flex items-start gap-4">
            <div className="w-12 h-12 rounded bg-[#A8322D] text-[#F4EEDD] flex items-center justify-center shrink-0 border border-[#2B3D2E]">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-[#2B3D2E] uppercase mb-1.5">
                Miễn phí đổi/hủy lịch linh hoạt
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#3A4A3C] leading-relaxed">
                Hỗ trợ linh hoạt dời ngày lưu trú hoàn toàn miễn phí trước 48 giờ check-in (áp dụng cho các đơn đặt ngày thường).
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-[#FBF9F2] border-2 border-[#2B3D2E] shadow-[4px_4px_0px_#2B3D2E] rounded-lg flex items-start gap-4">
            <div className="w-12 h-12 rounded bg-[#2B3D2E] text-[#DCAE42] flex items-center justify-center shrink-0 border border-[#DCAE42]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-[#2B3D2E] uppercase mb-1.5">
                Early Check-in / Late Check-out
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#3A4A3C] leading-relaxed">
                Ưu tiên nhận phòng sớm hoặc trả phòng muộn 1 tiếng (tùy thuộc vào tình trạng phòng trống thực tế tại trạm dừng).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
