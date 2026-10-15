import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Bed, Mail, Phone, User, CheckCircle2, AlertCircle, Stamp, Sparkles } from 'lucide-react';
import BookingModal from './BookingModal';

export default function BookingForm({ initialRoom, initialLocation, appliedCode }) {
  // Today's date in YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [destination, setDestination] = useState('Hà Nội (Phố Cổ)');
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState('Phòng Mậu Dịch (Deluxe Retro Suite)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Sync initial props if updated externally
  useEffect(() => {
    if (initialRoom) {
      if (initialRoom.name.includes('Cửa Ô')) {
        setRoomType('Phòng Cửa Ô (Standard Heritage Room)');
      } else if (initialRoom.name.includes('Mậu Dịch')) {
        setRoomType('Phòng Mậu Dịch (Deluxe Retro Suite)');
      } else if (initialRoom.name.includes('Trạm Dừng')) {
        setRoomType('Phòng Trạm Dừng (Family Loft)');
      }
    }
  }, [initialRoom]);

  useEffect(() => {
    if (initialLocation) {
      setDestination(initialLocation);
    }
  }, [initialLocation]);

  useEffect(() => {
    if (appliedCode) {
      setDiscountCode(appliedCode);
    }
  }, [appliedCode]);

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();

  // Price estimate
  const getRoomPrice = () => {
    if (roomType.includes('Cửa Ô')) return 950000;
    if (roomType.includes('Trạm Dừng')) return 1850000;
    return 1450000; // Phòng Mậu Dịch default
  };

  const rawTotal = getRoomPrice() * nights;
  const isDiscountValid = discountCode.trim().toUpperCase() === 'CONGSTAY10';
  const discountAmount = isDiscountValid ? rawTotal * 0.1 : 0;
  const finalTotal = rawTotal - discountAmount;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!fullName.trim()) {
      setErrorMsg('Vui lòng nhập Họ và tên của bạn.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Vui lòng nhập Số điện thoại liên hệ.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Vui lòng nhập địa chỉ Email hợp lệ.');
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMsg('Ngày trả phòng phải sau ngày nhận phòng ít nhất 1 đêm.');
      return;
    }

    // Generate random booking code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const destCode = destination.includes('Hà Nội') ? 'HN' : destination.includes('Sa Pa') ? 'SP' : 'HA';
    const code = `CS-${destCode}-${randomNum}`;

    const bookingData = {
      bookingCode: code,
      destination,
      checkIn,
      checkOut,
      totalNights: nights,
      adults,
      children,
      roomType,
      fullName,
      phone,
      email,
      note,
      discountCode: isDiscountValid ? discountCode.trim().toUpperCase() : null,
      totalPriceFormatted: new Intl.NumberFormat('vi-VN').format(finalTotal) + ' VNĐ',
    };

    setSubmittedBooking(bookingData);
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-[#F4EEDD] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
            <span className="font-typewriter text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A8322D]">
              PHIẾU ĐẶT TRẠM TRỰC TIẾP
            </span>
            <span className="w-8 h-[2px] bg-[#DCAE42]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B3D2E] uppercase tracking-tight mb-4">
            Đăng Ký Lưu Trú Di Sản
          </h2>
          <p className="font-body text-base sm:text-lg text-[#3A4A3C]">
            Điền thông tin đặt phòng để Cộng Stay chuẩn bị chu đáo ấm trà nóng và phòng thơm đón bạn.
          </p>
        </div>

        {/* Vintage Bao Cấp Ration Form Container */}
        <div className="relative bg-[#FBF9F2] border-3 border-[#2B3D2E] shadow-[8px_8px_0px_#2B3D2E] rounded-lg p-6 sm:p-10">
          {/* Top Form Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-8 border-b-2 border-[#2B3D2E] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-[#2B3D2E] flex items-center justify-center p-1 border border-[#DCAE42]">
                <img src="/cong-stay-logo.svg" alt="Logo" className="w-9 h-9" />
              </div>
              <div>
                <h3 className="font-heading font-black text-lg text-[#2B3D2E] tracking-wider uppercase">
                  CỘNG STAY • TRẠM DỪNG THỜI GIAN
                </h3>
                <span className="font-typewriter text-xs text-[#A8322D] font-bold">
                  SỔ CUNG ỨNG LƯU TRÚ QUỐC GIA 1976
                </span>
              </div>
            </div>

            <div className="seal-stamp px-3 py-1 font-typewriter text-[11px] font-bold">
              <span>★ TIẾP NHẬN 24/7 ★</span>
              <span>ĐẢM BẢO CHẤT LƯỢNG</span>
            </div>
          </div>

          {/* Error notification if any */}
          {errorMsg && (
            <div className="mb-6 p-4 bg-[#A8322D]/10 border-2 border-[#A8322D] rounded flex items-center gap-3 text-sm text-[#A8322D] font-medium">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* The Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Điểm đến (Dropdown 3 cơ sở) */}
            <div>
              <label className="block font-heading text-xs sm:text-sm font-bold text-[#2B3D2E] uppercase mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A8322D]" />
                1. Chọn điểm đến (Cơ sở Cộng Stay) <span className="text-[#A8322D]">*</span>
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-4 py-3 font-medium text-[#2B3D2E] focus:outline-none focus:ring-2 focus:ring-[#DCAE42] text-sm sm:text-base cursor-pointer"
              >
                <option value="Hà Nội (Phố Cổ)">Hà Nội (Phố Cổ) — 36 Phố Cổ, Hoàn Kiếm</option>
                <option value="Sa Pa">Sa Pa — Thị trấn trong sương, Lào Cai</option>
                <option value="Hội An">Hội An — Phố Cổ sông Hoài, Quảng Nam</option>
              </select>
            </div>

            {/* Row 2: Check-in & Check-out */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block font-heading text-xs sm:text-sm font-bold text-[#2B3D2E] uppercase mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#A8322D]" />
                  2. Ngày nhận phòng (Check-in) <span className="text-[#A8322D]">*</span>
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-4 py-3 font-mono font-medium text-[#2B3D2E] focus:outline-none focus:ring-2 focus:ring-[#DCAE42] text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label className="block font-heading text-xs sm:text-sm font-bold text-[#2B3D2E] uppercase mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#A8322D]" />
                  3. Ngày trả phòng (Check-out) <span className="text-[#A8322D]">*</span>
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-4 py-3 font-mono font-medium text-[#2B3D2E] focus:outline-none focus:ring-2 focus:ring-[#DCAE42] text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Row 3: Số lượng khách (Người lớn / Trẻ em) & Hạng phòng mong muốn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block font-heading text-xs sm:text-sm font-bold text-[#2B3D2E] uppercase mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#A8322D]" />
                  4. Số lượng khách <span className="text-[#A8322D]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-typewriter text-[#2B3D2E]/80 mb-1">Người lớn</label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-3 py-2.5 font-medium text-[#2B3D2E] text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>{n} người lớn</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-typewriter text-[#2B3D2E]/80 mb-1">Trẻ em (&lt;12t)</label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-3 py-2.5 font-medium text-[#2B3D2E] text-sm"
                    >
                      {[0, 1, 2, 3].map((n) => (
                        <option key={n} value={n}>{n} trẻ em</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-heading text-xs sm:text-sm font-bold text-[#2B3D2E] uppercase mb-2 flex items-center gap-2">
                  <Bed className="w-4 h-4 text-[#A8322D]" />
                  5. Hạng phòng mong muốn <span className="text-[#A8322D]">*</span>
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-4 py-3 font-medium text-[#2B3D2E] focus:outline-none focus:ring-2 focus:ring-[#DCAE42] text-sm sm:text-base cursor-pointer"
                >
                  <option value="Phòng Cửa Ô (Standard Heritage Room)">
                    Phòng Cửa Ô — 950.000 VNĐ / đêm
                  </option>
                  <option value="Phòng Mậu Dịch (Deluxe Retro Suite)">
                    Phòng Mậu Dịch — 1.450.000 VNĐ / đêm (Có ban công)
                  </option>
                  <option value="Phòng Trạm Dừng (Family Loft)">
                    Phòng Trạm Dừng — 1.850.000 VNĐ / đêm (Gác lửng)
                  </option>
                </select>
              </div>
            </div>

            {/* Row 4: Thông tin liên hệ (Họ và tên, Số điện thoại, Email) */}
            <div className="pt-4 border-t-2 border-dashed border-[#2B3D2E]/30">
              <h4 className="font-heading text-xs sm:text-sm font-bold text-[#2B3D2E] uppercase mb-4">
                6. Thông tin khách đại diện nhận phòng
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-typewriter text-[#2B3D2E] mb-1 font-bold">
                    Họ và tên <span className="text-[#A8322D]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-3.5 py-2.5 text-sm font-medium text-[#2B3D2E] placeholder:text-[#2B3D2E]/40 focus:outline-none focus:ring-2 focus:ring-[#DCAE42]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-typewriter text-[#2B3D2E] mb-1 font-bold">
                    Số điện thoại <span className="text-[#A8322D]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-3.5 py-2.5 text-sm font-mono font-medium text-[#2B3D2E] placeholder:text-[#2B3D2E]/40 focus:outline-none focus:ring-2 focus:ring-[#DCAE42]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-typewriter text-[#2B3D2E] mb-1 font-bold">
                    Email nhận xác nhận <span className="text-[#A8322D]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="ban@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-3.5 py-2.5 text-sm font-medium text-[#2B3D2E] placeholder:text-[#2B3D2E]/40 focus:outline-none focus:ring-2 focus:ring-[#DCAE42]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Optional Coupon Code & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-typewriter text-[#2B3D2E] mb-1 font-bold">
                  Mã ưu đãi / Tem phiếu (nếu có):
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Nhập mã (VD: CONGSTAY10)"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-1 bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-3 py-2 text-xs uppercase font-mono font-bold text-[#A8322D] placeholder:text-[#2B3D2E]/40"
                  />
                  {isDiscountValid && (
                    <span className="inline-flex items-center text-xs text-[#2B3D2E] bg-[#DCAE42] px-2 py-1 rounded font-bold">
                      -10%
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-typewriter text-[#2B3D2E] mb-1 font-bold">
                  Ghi chú đón tiếp:
                </label>
                <input
                  type="text"
                  placeholder="Giờ tới trạm dự kiến, trà thảo mộc..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full bg-[#F4EEDD] border-2 border-[#2B3D2E] rounded px-3 py-2 text-xs text-[#2B3D2E] placeholder:text-[#2B3D2E]/40"
                />
              </div>
            </div>

            {/* Price Preview summary box */}
            <div className="p-4 bg-[#DCAE42]/20 border-2 border-[#2B3D2E] rounded flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
              <div>
                <span className="font-typewriter text-[#2B3D2E]/80">Tạm tính lưu trú ({nights} đêm): </span>
                <span className="font-bold text-[#2B3D2E]">{roomType.split('—')[0]}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#2B3D2E]/70 mr-1">Tổng tiền ước tính:</span>
                <strong className="font-heading font-black text-lg text-[#A8322D]">
                  {new Intl.NumberFormat('vi-VN').format(finalTotal)} VNĐ
                </strong>
              </div>
            </div>

            {/* Nút gửi màu đỏ: XÁC NHẬN ĐẶT TRẠM */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full btn-stamp-red py-4 text-base sm:text-lg rounded cursor-pointer tracking-wider shadow-[4px_4px_0px_#2B3D2E]"
              >
                XÁC NHẬN ĐẶT TRẠM
              </button>
              <p className="text-center font-typewriter text-xs text-[#2B3D2E]/70 mt-3">
                ★ Cam kết giữ phòng chuẩn xác • Không thu phụ phí ẩn • Hủy phòng linh hoạt ★
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Pop-up modal after submission */}
      {submittedBooking && (
        <BookingModal
          booking={submittedBooking}
          onClose={() => setSubmittedBooking(null)}
        />
      )}
    </section>
  );
}
