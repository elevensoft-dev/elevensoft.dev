"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <>
      <section className="section-elegant bg-neutral-950">
        <div className="container-elegant">
          {/* Section Title */}
          <div className="mx-auto text-center mb-16">
            <h2 className="title-section text-center">
              <span className="gradient-text-hero">Depoimentos</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              O que nossos clientes dizem sobre a transformação da sua segurança digital
            </p>
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            {/* Slider main container */}
            <div className="swiper testimonial-01 mb-20 pb-22.5">
              {/* Additional required wrapper */}
              <Swiper
                spaceBetween={50}
                slidesPerView={2}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                  // when window width is >= 640px
                  0: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {testimonialData.map((review) => (
                  <SwiperSlide key={review?.id}>
                    <SingleTestimonial review={review} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
