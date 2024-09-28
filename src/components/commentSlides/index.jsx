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
        // autoplay={{ delay: 7000 }}
        spaceBetween={20}
        effect="slider"
        fadeEffect={{ crossFade: true }}
        loop={true}
        direction="horizontal"
        breakpoints={{
          1023: {
            direction: "vertical",
            spaceBetween: 15,
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <CommentCard
            UrlFace={"./src/assets/icons/faceIcon/faceHappy.svg"}
            userName={"John Doe"}
            commentText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus est, maximus nec porta ut, eleifend non massa. Aenean luctus dui vitae sapien gravida congue. Sed sed sapien et orci.."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard
            UrlFace={"./src/assets/icons/faceIcon/faceHappy.svg"}
            userName={"John Doe"}
            commentText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus est, maximus nec porta ut, eleifend non massa. Aenean luctus dui vitae sapien gravida congue. Sed sed sapien et orci."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard
            UrlFace={"./src/assets/icons/faceIcon/faceHappy.svg"}
            userName={"John Doe"}
            commentText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus est, maximus nec porta ut, eleifend non massa. Aenean luctus dui vitae sapien gravida congue. Sed sed sapien et orci."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard
            UrlFace={"./src/assets/icons/faceIcon/faceHappy.svg"}
            userName={"John Doe"}
            commentText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus est, maximus nec porta ut, eleifend non massa. Aenean luctus dui vitae sapien gravida congue. Sed sed sapien et orci."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard
            UrlFace={"./src/assets/icons/faceIcon/faceHappy.svg"}
            userName={"John Doe"}
            commentText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus est, maximus nec porta ut, eleifend non massa. Aenean luctus dui vitae sapien gravida congue. Sed sed sapien et orci."
            }
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
