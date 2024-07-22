import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                speed={2000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    // type: 'fraction'
                }}

                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="/image/slid/slide.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/image/slid/slide-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/image/slid/slide-3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/image/slid/slide-4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/image/slid/slide-5.jpg" alt="" /></SwiperSlide>

            </Swiper>
        </>
    );
}
