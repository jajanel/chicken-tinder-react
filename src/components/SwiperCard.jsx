// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

//Import the card component (content of the card)
import CardProfile from "./CardProfile.jsx";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../style.css';

// import required modules
import {EffectCards} from 'swiper/modules';

import {profilsPoule} from "../assets/photos.js";

export default function SwiperCard() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >

                {
                    profilsPoule.map(profil => {
                        return (
                            <SwiperSlide key={profil.id}>
                                <CardProfile key={profil.id}
                                             src={profil.src}
                                             nom={profil.nom}
                                             race={profil.race}
                                             age={profil.age}
                                             description={profil.description}

                                />
                            </SwiperSlide>)
                    })
                }

            </Swiper>
        </>
    );
}
