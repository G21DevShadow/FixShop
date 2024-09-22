import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "./commentSlider.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { CommentCard } from "../commentCard";

export function CommentSlider() {
  return (
    <section>
      <Swiper
        className="comment-slider"
        modules={[Autoplay, EffectFade]}
        spaceBetween={20}
        effect="slider"
        fadeEffect={{ crossFade: true }}
        loop={true}
        direction="horizontal"
      >
        <SwiperSlide>
          <CommentCard
            UrlFace={"./src/assets/icons/faceIcon/faceHappy.svg"}
            userName={"John Doe"}
            commentText={"Excelente pagina"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard
            UrlFace={"./src/assets/icons/faceIcon/faceHappy.svg"}
            userName={"John Doe"}
            commentText={"Excelente pagina"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard
            UrlFace={"./src/assets/icons/faceIcon/faceHappy.svg"}
            userName={"John Doe"}
            commentText={"Excelente pagina"}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
