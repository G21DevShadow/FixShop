//Components hero
import { Hero } from "./layout/hero";
import { MenuIcon } from "./components/menuIcons";
import { HeroSlider } from "./components/heroSlider";
import { Menu } from "./components/menu";
import { List } from "./components/list";
import { Logo } from "./components/logo";
//components welcome
import { Welcome } from "./layout/welcome";
import { ButtonContact } from "./components/buttonContact";
//components advantages
import { Advantages } from "./layout/advantages";
//components productSection
import { ProductSection } from "./layout/productSection";
import { ProductCategory } from "./components/productCategory";
import { ProductSlider } from "./components/productSlider";
//components infoSection
import { InfoSection } from "./layout/infoSection";
import { Info } from "./components/info";
//components publicity
import { Publicity } from "./layout/publicity";
import { PublicitySlider } from "./components/publicitySlider";
import { FaqAccordion } from "./components/faq";
//components comments
import { Comments } from "./layout/comments";
import { Form } from "./components/form";
import { CommentSlider } from "./components/commentSlides";
//components footer
import { Footer } from "./layout/footer";
import { FooterContent } from "./components/footerContent";

//componentes
import { Title } from "./components/title";
import { useToggle } from "./hooks/all/activate";

function App() {
  //Instancia para el menu
  const { activate: toggleMenu, state: isMenuActive } = useToggle();
  //Instancia para la lista
  const { activate: toggleList, state: isListActive } = useToggle();

  return (
    <>
      <Hero>
        <MenuIcon activate={toggleMenu} active={isMenuActive} />
        <HeroSlider />
        <Menu active={isMenuActive}>
          <List logo={<Logo />} activate={toggleList} active={isListActive} />
        </Menu>
      </Hero>
      <Welcome button={<ButtonContact />} />
      <Advantages
        title={<Title text={"Por que usar FixShop"} color={"#eff3f8"} />}
      />
      <ProductSection
        title={
          <Title text={"Que producto quieres comprar hoy!"} color={"#0c1633"} />
        }
        productCategory={<ProductCategory />}
        productSlider={<ProductSlider />}
      />
      <InfoSection>
        <Info logo={<Logo />} button={<ButtonContact />} />
      </InfoSection>
      <Publicity>
        <PublicitySlider />
        <FaqAccordion title={<Title text={"Preguntas frecuentes"} />} />
      </Publicity>
      <Comments
        title={<Title text={"Comentarios"} />}
        form={<Form />}
        commentCard={<CommentSlider />}
      ></Comments>
      <Footer>
        <FooterContent />
      </Footer>
    </>
  );
}
//mama
//lectura: https://es.react.dev/learn/reusing-logic-with-custom-hooks
//@import url("../../styles/width.css");
//@import url("../../styles/colors.css");
export default App;
//https://www.youtube.com/watch?v=TOPkdU9h5es
