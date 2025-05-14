import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, CreativeWorks",
      testimonial:
        "This service exceeded my expectations. The team was professional and delivered high-quality work.",
      image: "https://i.pravatar.cc/200?img=1",
    },
    {
      name: "Emily Davis",
      role: "Product Manager, TechCorp",
      testimonial:
        "A fantastic experience! The results were exactly what we needed, and the process was seamless.",
      image: "https://i.pravatar.cc/200?img=2",
    },
    {
      name: "Michael Brown",
      role: "Lead Developer, CodeBase",
      testimonial:
        "Highly recommend! Their attention to detail and commitment to quality are unparalleled.",
      image: "https://i.pravatar.cc/200?img=3",
    },
    {
      name: "Sophia Wilson",
      role: "Designer, PixelStudio",
      testimonial:
        "The best team I’ve worked with! Their creativity and expertise brought our vision to life.",
      image: "https://i.pravatar.cc/200?img=4",
    },
  ];

  return (
    <section className="py-10 sm:py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="mt-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <h3 className="mt-2 text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <p className="mt-6 text-center text-gray-600">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
