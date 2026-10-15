import React from 'react';
import { Radio, BedDouble, Coffee, Compass, CheckCircle2, Bookmark, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      id: 1,
      title: 'Ký ức bao cấp',
      tagline: 'VĂN HÓA MỘC MẠC',
      desc: 'Giường gỗ mộc, chăn con công, phích nước và radio cassette hoài cổ.',
      icon: Radio,
      badgeColor: 'bg-[#A8322D] text-[#F4EEDD]',
      highlight: 'Chăn con công & Đài cassette',
      stamp: 'BẢO CHỨNG 1976'
    },
    {
      id: 2,
      title: 'Tiêu chuẩn tiện nghi',
      tagline: 'NGHỈ DƯỠNG TIỆN LỢI',
      desc: 'Đệm cao cấp, điều hòa êm, check-in tự động, an ninh 24/7.',
      icon: BedDouble,
      badgeColor: 'bg-[#2B3D2E] text-[#DCAE42]',
      highlight: 'Tiêu chuẩn êm ái hiện đại',
      stamp: 'AN TÂM 24/7'
    },
    {
      id: 3,
      title: 'Điểm chạm độc bản',
      tagline: 'TRẢI NGHIỆM ĐỘC QUYỀN',
      desc: 'Phục vụ Cà phê Cốt dừa trứ danh tận phòng ngủ.',
      icon: Coffee,
      badgeColor: 'bg-[#DCAE42] text-[#2B3D2E]',
      highlight: 'Cốt dừa Cộng chính hiệu',
      stamp: 'ĐỘC QUYỀN'
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#EAE2CF]/60 border-y-2 border-[#2B3D2E]/20 relative">
      {/* Decorative vintage background elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
            <span className="font-typewriter text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A8322D]">
              VỀ CHÚNG TÔI
            </span>
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B3D2E] uppercase tracking-tight mb-6">
            Ở Lại Trong Câu Chuyện Việt Nam
          </h2>

          <div className="relative p-6 sm:p-8 bg-[#FBF9F2] border-2 border-[#2B3D2E] shadow-[5px_5px_0px_#2B3D2E] rounded-md text-left sm:text-center">
            {/* Corner retro screws */}
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full border border-[#2B3D2E] bg-[#DCAE42]"></div>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full border border-[#2B3D2E] bg-[#DCAE42]"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full border border-[#2B3D2E] bg-[#DCAE42]"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full border border-[#2B3D2E] bg-[#DCAE42]"></div>

            <p className="font-body text-base sm:text-lg text-[#2B3D2E] leading-relaxed font-normal">
              "Tiếp nối hành trình văn hóa từ Cộng Cà Phê, Cộng Stay mang đến không gian sống chậm giữa lòng các đô thị di sản. Không chỉ là một chốn nghỉ chân với tiện nghi tiêu chuẩn, đây là nơi bạn hòa mình vào nếp sống mộc mạc thời bao cấp, đánh thức giác quan cùng ly cà phê phin quen thuộc mỗi sớm mai."
            </p>

            <div className="mt-4 pt-3 border-t border-dashed border-[#2B3D2E]/30 flex items-center justify-center gap-2 text-xs font-typewriter text-[#A8322D] font-bold">
              <span>★ TINH THẦN CỘNG CÀ PHÊ • NẾP NHÀ NGƯỜI VIỆT ★</span>
            </div>
          </div>
        </div>

        {/* 3 Features / Highlight Boxes as specified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="relative bg-[#DCAE42] border-2 border-[#2B3D2E] shadow-[5px_5px_0px_#2B3D2E] p-6 sm:p-7 rounded-lg flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1.5"
              >
                {/* Stamp label */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded bg-[#2B3D2E] border border-[#DCAE42] flex items-center justify-center shadow-sm">
                    <IconComponent className="w-6 h-6 text-[#F4EEDD]" />
                  </div>
                  <span className="font-typewriter text-[11px] font-bold px-2 py-1 bg-[#FBF9F2] text-[#2B3D2E] border border-[#2B3D2E] rounded shadow-[2px_2px_0px_#2B3D2E]">
                    {item.stamp}
                  </span>
                </div>

                <div>
                  <span className="font-typewriter text-[10px] tracking-wider uppercase text-[#A8322D] font-bold block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2B3D2E] uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#1E2B20] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-dashed border-[#2B3D2E]/30 flex items-center gap-2 text-xs font-semibold text-[#2B3D2E]">
                  <CheckCircle2 className="w-4 h-4 text-[#A8322D] shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
