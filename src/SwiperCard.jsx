// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//Import the card component (content of the card)
import CardProfile from "./CardProfile.jsx";

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
                {/*Obviously going to be a loop around all the different card profiles*/}
                <SwiperSlide><CardProfile/></SwiperSlide>
                <SwiperSlide><CardProfile/></SwiperSlide>
                <SwiperSlide><CardProfile/></SwiperSlide>
                <SwiperSlide><CardProfile/></SwiperSlide>
                <SwiperSlide><CardProfile/></SwiperSlide>
                <SwiperSlide><CardProfile/></SwiperSlide>
                <SwiperSlide><CardProfile/></SwiperSlide>
                <SwiperSlide><CardProfile/></SwiperSlide>
                <SwiperSlide><CardProfile/></SwiperSlide>
            </Swiper>
        </>
    );
}
