import React from 'react';
import { Tag, Sparkles, Gift, ArrowRight } from 'lucide-react';

export default function Offers({ onApplyOffer }) {
  const offers = [
    {
      code: 'CONGSTAY10',
      title: 'Phiếu Giảm 10% Cho Lần Đầu Tiên',
      desc: 'Áp dụng cho mọi đơn đặt trạm trực tiếp trên website. Nhận ngay ưu đãi khi thanh toán.',
      badge: 'ƯU ĐÃI NỔI BẬT',
      deadline: 'Áp dụng quanh năm'
    },
    {
      code: 'COTDDUA24',
      title: 'Tặng Ly Cà Phê Cốt Dừa Hàng Ngày',
      desc: 'Miễn phí thưởng thức 02 ly cà phê cốt dừa phục vụ tại phòng cho đơn từ 2 đêm trở lên.',
      badge: 'ĐẶC QUYỀN CỘNG',
      deadline: 'Áp dụng cho mọi hạng phòng'
    },
    {
      code: 'DISAN1976',
      title: 'Gói Trải Nghiệm Mậu Dịch 3N2Đ',
      desc: 'Bao gồm trọn gói phòng Mậu Dịch, bữa sáng mộc, tour xe đạp phố cổ và quà tặng lưu niệm.',
      badge: 'GÓI COMBO TIẾT KIỆM',
      deadline: 'Số lượng có hạn mỗi tuần'
    }
  ];

  return (
    <section id="offers" className="py-16 sm:py-20 bg-[#F4EEDD] border-t-2 border-[#2B3D2E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
            <span className="font-typewriter text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A8322D]">
              SỔ PHIẾU CUNG ỨNG
            </span>
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#2B3D2E] uppercase tracking-tight mb-3">
            Chính Sách & Ưu Đãi Độc Quyền
          </h2>
          <p className="font-body text-base text-[#3A4A3C]">
            Chọn phiếu ưu đãi phù hợp và nhập mã khi đặt phòng để nhận mức giá tốt nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-[#FBF9F2] border-2 border-[#2B3D2E] rounded-md shadow-[4px_4px_0px_#2B3D2E] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-typewriter text-[11px] font-bold text-[#A8322D] bg-[#A8322D]/10 px-2.5 py-1 rounded border border-[#A8322D]/30">
                    {offer.badge}
                  </span>
                  <Tag className="w-4 h-4 text-[#A8322D]" />
                </div>

                <h3 className="font-heading text-lg font-bold text-[#2B3D2E] uppercase mb-2">
                  {offer.title}
                </h3>
                <p className="font-body text-sm text-[#2B3D2E]/80 leading-relaxed mb-4">
                  {offer.desc}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-dashed border-[#2B3D2E]/20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-typewriter text-[#2B3D2E]/70 block">MÃ TEM PHIẾU:</span>
                    <span className="font-typewriter text-sm font-extrabold text-[#A8322D] tracking-wider">
                      {offer.code}
                    </span>
                  </div>
                  <button
                    onClick={() => onApplyOffer && onApplyOffer(offer.code)}
                    className="btn-stamp-red px-3 py-1.5 text-xs rounded cursor-pointer"
                  >
                    Dùng mã này
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
