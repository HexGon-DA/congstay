import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Offers from './components/Offers';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { CalendarCheck, Phone } from 'lucide-react';

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [appliedOffer, setAppliedOffer] = useState('');

  const scrollToBooking = () => {
    const el = document.querySelector('#booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    scrollToBooking();
  };

  const handleSelectLocation = (loc) => {
    setSelectedLocation(loc);
    scrollToBooking();
  };

  const handleApplyOffer = (code) => {
    setAppliedOffer(code);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#F4EEDD] text-[#2B3D2E] flex flex-col font-body selection:bg-[#A8322D] selection:text-[#F4EEDD]">
      {/* Khối 1: Header */}
      <Header onBookNowClick={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Khối 2: Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onRoomsClick={() => {
            const el = document.querySelector('#rooms');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectLocation={handleSelectLocation}
        />

        {/* Khối 3: Về chúng tôi (Giới thiệu nhanh) */}
        <About />

        {/* Khối 4: Danh mục phòng nghỉ (Hạng phòng & Giá niêm yết) */}
        <Rooms onSelectRoom={handleSelectRoom} />

        {/* Dịch vụ & Tiện ích (Menu Section) */}
        <Amenities />

        {/* Ưu đãi (Menu Section) */}
        <Offers onApplyOffer={handleApplyOffer} />

        {/* Khối 5: Form Đặt Phòng Trực Tiếp (Booking Section) */}
        <BookingForm
          initialRoom={selectedRoom}
          initialLocation={selectedLocation}
          appliedCode={appliedOffer}
        />

        {/* Khối 6: Khách hàng nói gì (Đánh giá) */}
        <Testimonials />
      </main>

      {/* Khối 7: Footer (Chân trang) */}
      <Footer />

      {/* Floating Quick Action Button for Mobile */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden flex flex-col gap-2">
        <a
          href="tel:19006868"
          className="w-12 h-12 rounded-full bg-[#2B3D2E] text-[#DCAE42] border-2 border-[#DCAE42] shadow-[3px_3px_0px_#2B3D2E] flex items-center justify-center"
          aria-label="Gọi tổng đài"
        >
          <Phone className="w-5 h-5" />
        </a>
        <button
          onClick={scrollToBooking}
          className="w-12 h-12 rounded-full bg-[#A8322D] text-[#F4EEDD] border-2 border-[#2B3D2E] shadow-[3px_3px_0px_#2B3D2E] flex items-center justify-center animate-bounce"
          aria-label="Đặt phòng ngay"
        >
          <CalendarCheck className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
