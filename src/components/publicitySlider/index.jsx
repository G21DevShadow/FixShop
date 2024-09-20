import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "./publicitySlider.css";
import "swiper/css/effect-fade";
import { PUBLICITY_IMAGES } from "../../utils/constants";

export function PublicitySlider() {
  return (
    <Swiper
      className="publicitySwiper "
      modules={[Autoplay, EffectFade]}
      //   autoplay={{ delay: 6000 }}
      effect="slide"
      fadeEffect={{ crossFade: true }}
      loop={true}
      direction="horizontal"
    >
      {PUBLICITY_IMAGES.map((image, index) => {
        const { url, description } = image;
        return (
          <SwiperSlide key={index}>
            <img className="publicity-slideImg" src={url} alt={description} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
