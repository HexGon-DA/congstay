import React from 'react';
import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "Không gian hoài niệm chụp ảnh rất đẹp, nệm êm và cực kỳ sạch sẽ. Thích nhất là sáng thức dậy được uống cốt dừa ngay tại phòng.",
      author: "Minh Anh",
      location: "Hà Nội",
      roomStayed: "Đã lưu trú: Phòng Mậu Dịch",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      quote: "An authentic cultural stay right in Hanoi Old Quarter. Peaceful, cozy, and great hospitality!",
      author: "Claire",
      location: "Du khách Pháp",
      roomStayed: "Stayed at: Standard Heritage Room",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#EAE2CF]/60 border-t-2 border-[#2B3D2E]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
            <span className="font-typewriter text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A8322D]">
              ĐÁNH GIÁ TỪ DU KHÁCH
            </span>
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B3D2E] uppercase tracking-tight mb-4">
            Khách Hàng Nói Gì Về Cộng Stay
          </h2>
          <p className="font-body text-base sm:text-lg text-[#3A4A3C]">
            Những dòng lưu bút chân thành từ bạn bè bốn phương khi ghé trạm dừng di sản của chúng tôi.
          </p>
        </div>

        {/* 2 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="relative bg-[#DCAE42] border-2 border-[#2B3D2E] shadow-[5px_5px_0px_#2B3D2E] rounded-lg p-6 sm:p-8 flex flex-col justify-between"
            >
              {/* Quote icon & stars */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#A8322D]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#2B3D2E] text-[#DCAE42] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Exact Quote text */}
                <p className="font-body text-base sm:text-lg text-[#1E2B20] font-medium leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t-2 border-dashed border-[#2B3D2E]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#2B3D2E]"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#2B3D2E] uppercase">
                      {rev.author}
                    </h4>
                    <span className="font-typewriter text-xs text-[#2B3D2E]/80">
                      ({rev.location})
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-typewriter text-[#2B3D2E] bg-[#FBF9F2] px-2 py-1 rounded border border-[#2B3D2E]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A8322D]" />
                    Đã kiểm chứng
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
