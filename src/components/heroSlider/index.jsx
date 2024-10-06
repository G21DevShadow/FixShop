import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "./slider.css";
import "swiper/css/effect-fade";
import { HERO_IMAGES } from "../../utils/constants/images-faqs";

export function HeroSlider() {
  return (
    <Swiper
      className="heroSwiper "
      modules={[Autoplay, EffectFade]}
      // autoplay={{ delay: 5000 }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={true}
      direction="horizontal"
    >
      {HERO_IMAGES.map((image, index) => {
        const { url, description } = image;
        return (
          <SwiperSlide key={index}>
            <img className="slideImg" src={url} alt={description} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
