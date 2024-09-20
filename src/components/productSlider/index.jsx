import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "./productSlider.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
//componente
import { Product } from "../product";
import { useToggle } from "../../hooks/all/activate";

export function ProductSlider({ product }) {
  const { state, activate } = useToggle();
  return (
    <section className="product-content">
      <Swiper
        className="product-slider "
        modules={[Autoplay, EffectFade, Navigation]}
        spaceBetween={20}
        navigation
        effect="slider"
        fadeEffect={{ crossFade: true }}
        loop={true}
        direction="horizontal"
      >
        <SwiperSlide>
          <Product
            active={state}
            toggleActive={activate}
            images={"./src/assets/images/imgSliderProduct/mouse.jpeg"}
            name={"Mouse USB con cable"}
            description={
              "Ratón USB con cable para ordenadores y portátiles, ratón ergonómico con clics duraderos"
            }
            units={"3"}
            code={"MU001"}
            price={"17.000"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            images={"./src/assets/images/imgSliderProduct/mouse.jpeg"}
            name={"Mouse USB con cable"}
            description={
              "Ratón USB con cable para ordenadores y portátiles, ratón ergonómico con clics duraderos"
            }
            units={"3"}
            code={"MU001"}
            price={"17.000"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            images={"./src/assets/images/imgSliderProduct/mouse.jpeg"}
            name={"Mouse USB con cable"}
            description={
              "Ratón USB con cable para ordenadores y portátiles, ratón ergonómico con clics duraderos"
            }
            units={"3"}
            code={"MU001"}
            price={"17.000"}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
