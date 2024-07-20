// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//Import the card component (content of the card)
import Card from "./Card.jsx";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function SwiperCard() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
            </Swiper>
        </>
    );
}
