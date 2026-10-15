import React from 'react';
import { CheckCircle2, Calendar, MapPin, Bed, Users, Phone, Mail, User, X, Printer, ShieldCheck } from 'lucide-react';

export default function BookingModal({ booking, onClose }) {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FBF9F2] border-3 border-[#2B3D2E] shadow-[8px_8px_0px_#2B3D2E] rounded-lg overflow-hidden animate-scaleUp">
        {/* Vintage Top Header */}
        <div className="bg-[#2B3D2E] text-[#F4EEDD] px-6 py-4 border-b-2 border-[#DCAE42] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#DCAE42] flex items-center justify-center text-[#2B3D2E] font-black text-sm">
              ★
            </div>
            <div>
              <h3 className="font-heading font-black text-base sm:text-lg text-[#F4EEDD] tracking-wider uppercase">
                PHIẾU XÁC NHẬN ĐẶT TRẠM
              </h3>
              <p className="font-typewriter text-xs text-[#DCAE42]">
                Mã số lưu trú: <strong>{booking.bookingCode}</strong>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#F4EEDD] hover:text-[#DCAE42] p-1 rounded transition-colors"
            aria-label="Đóng popup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Main required confirmation text with prominent alert */}
          <div className="p-4 bg-[#DCAE42]/20 border-2 border-[#2B3D2E] rounded-md mb-6 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#A8322D] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-heading font-bold text-base text-[#2B3D2E] mb-1">
                TIẾP NHẬN THÀNH CÔNG!
              </h4>
              <p className="font-body text-sm font-semibold text-[#A8322D] leading-relaxed">
                "Cộng Stay đã nhận thông tin và sẽ gửi mã xác nhận qua Email/SMS trong 5 phút"
              </p>
            </div>
          </div>

          {/* Details Summary Voucher */}
          <div className="bg-[#F4EEDD] border border-[#2B3D2E]/30 rounded p-4 mb-6 relative">
            <div className="absolute top-2 right-2 text-right">
              <span className="font-typewriter text-[10px] text-[#2B3D2E]/60 uppercase block">Trạng thái</span>
              <span className="text-xs font-bold text-[#2B3D2E] bg-[#DCAE42] px-2 py-0.5 rounded border border-[#2B3D2E]">
                ĐÃ DUYỆT
              </span>
            </div>

            <h5 className="font-typewriter text-xs uppercase tracking-widest text-[#2B3D2E]/70 mb-3 font-bold border-b border-[#2B3D2E]/20 pb-1">
              CHI TIẾT PHIẾU ĐẶT PHÒNG
            </h5>

            <div className="space-y-2 text-xs sm:text-sm text-[#2B3D2E]">
              <div className="flex justify-between py-1 border-b border-dashed border-[#2B3D2E]/20">
                <span className="text-[#2B3D2E]/70">Người liên hệ:</span>
                <span className="font-bold">{booking.fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-dashed border-[#2B3D2E]/20">
                <span className="text-[#2B3D2E]/70">Số điện thoại:</span>
                <span className="font-bold font-mono">{booking.phone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-dashed border-[#2B3D2E]/20">
                <span className="text-[#2B3D2E]/70">Email:</span>
                <span className="font-bold">{booking.email}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-dashed border-[#2B3D2E]/20">
                <span className="text-[#2B3D2E]/70">Trạm dừng (Cơ sở):</span>
                <span className="font-bold text-[#A8322D]">{booking.destination}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-dashed border-[#2B3D2E]/20">
                <span className="text-[#2B3D2E]/70">Hạng phòng:</span>
                <span className="font-bold">{booking.roomType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-dashed border-[#2B3D2E]/20">
                <span className="text-[#2B3D2E]/70">Thời gian lưu trú:</span>
                <span className="font-bold">
                  {booking.checkIn} → {booking.checkOut} ({booking.totalNights} đêm)
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-dashed border-[#2B3D2E]/20">
                <span className="text-[#2B3D2E]/70">Số lượng khách:</span>
                <span className="font-bold">{booking.adults} Người lớn{booking.children > 0 ? `, ${booking.children} Trẻ em` : ''}</span>
              </div>
              {booking.discountCode && (
                <div className="flex justify-between py-1 border-b border-dashed border-[#2B3D2E]/20 text-[#A8322D]">
                  <span>Ưu đãi áp dụng:</span>
                  <span className="font-mono font-bold">Mã {booking.discountCode} (-10%)</span>
                </div>
              )}
              <div className="flex justify-between pt-2 text-sm sm:text-base font-bold">
                <span className="font-typewriter uppercase">Tạm tính:</span>
                <span className="text-[#A8322D] font-black">{booking.totalPriceFormatted}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.print()}
              className="flex-1 btn-army-outline py-2.5 text-xs sm:text-sm rounded"
            >
              <Printer className="w-4 h-4 mr-1.5 inline" />
              In phiếu lưu trú
            </button>
            <button
              onClick={onClose}
              className="flex-1 btn-stamp-red py-2.5 text-xs sm:text-sm rounded"
            >
              Hoàn tất & Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
