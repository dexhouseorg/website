import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const testimonials = [
  {
    name: 'Jane Doe',
    title: 'Professional Trader',
    testimonial: 'Dex House has revolutionized the way I trade. The unified interface and advanced tools have significantly enhanced my trading strategies.',
    avatar: '/assets/images/jane.jpg', // Replace with actual image paths
  },
  {
    name: 'John Smith',
    title: 'DeFi Analyst',
    testimonial: 'The seamless integration of multiple DEXes in Dex House makes trading efficient and hassle-free. Highly recommend!',
    avatar: '/assets/images/john.jpg',
  },
  // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Trusted by Trading Experts</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          loop
          className="w-full"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center px-6">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-24 h-24 rounded-full mb-6 object-cover"
                />
                <p className="text-lg italic mb-4">"{testi.testimonial}"</p>
                <h3 className="text-2xl font-semibold">{testi.name}</h3>
                <p className="text-gray-400">{testi.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
