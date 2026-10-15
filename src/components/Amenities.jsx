import React from 'react';
import { Coffee, Bike, BookOpen, Camera, Sparkles, Wifi, Shield, Clock } from 'lucide-react';

export default function Amenities() {
  const items = [
    {
      icon: Coffee,
      title: 'Cà phê Cốt dừa tại phòng',
      desc: 'Thưởng thức món đồ uống trứ danh của Cộng Cà Phê ngay khi vừa thức giấc trong không gian hoài cổ.'
    },
    {
      icon: Bike,
      title: 'Xe đạp phố cổ miễn phí',
      desc: 'Những chiếc xe đạp mộc mạc sẵn sàng để bạn thong dong qua 36 phố phường, ngắm nhìn nhịp sống Hà Nội xưa.'
    },
    {
      icon: BookOpen,
      title: 'Tủ sách báo & Băng Cassette',
      desc: 'Bộ sưu tập những cuốn tiểu thuyết kinh điển, báo Nhân Dân xưa và những bản tình ca Trịnh Công Sơn mộc mạc.'
    },
    {
      icon: Camera,
      title: 'Góc chụp ảnh thời bao cấp',
      desc: 'Tự do mượn các trang phục retro (áo chấn thủ, nón cối, khăn rằn) để lưu giữ những khoảnh khắc độc nhất.'
    },
    {
      icon: Wifi,
      title: 'Tiện nghi số âm tường',
      desc: 'Internet tốc độ cao phủ sóng toàn trạm, khóa cửa mã số thông minh, bảo đảm tính tiện lợi tối tân.'
    },
    {
      icon: Clock,
      title: 'Hỗ trợ khách hàng 24/7',
      desc: 'Đội ngũ lễ tân "mậu dịch viên" thân tình, mến khách luôn đồng hành cùng hành trình của bạn mọi thời điểm.'
    }
  ];

  return (
    <section id="amenities" className="py-16 sm:py-24 bg-[#EAE2CF]/70 border-t-2 border-[#2B3D2E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
            <span className="font-typewriter text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A8322D]">
              DỊCH VỤ & TIỆN ÍCH
            </span>
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B3D2E] uppercase tracking-tight mb-4">
            Trải Nghiệm Lưu Trú Hoài Niệm
          </h2>
          <p className="font-body text-base sm:text-lg text-[#3A4A3C]">
            Không chỉ là một chỗ ngả lưng, mỗi khoảnh khắc tại Cộng Stay là sự giao thoa trọn vẹn giữa văn hóa truyền thống và tiện ích đời sống.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="p-6 bg-[#FBF9F2] border-2 border-[#2B3D2E] shadow-[4px_4px_0px_#2B3D2E] rounded-md hover:bg-[#F4EEDD] transition-colors"
              >
                <div className="w-12 h-12 rounded bg-[#2B3D2E] text-[#DCAE42] flex items-center justify-center mb-4 border border-[#DCAE42]">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2B3D2E] uppercase mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-[#2B3D2E]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
