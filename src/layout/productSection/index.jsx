import "./product.css";

export function ProductSection({ title, productCategory, productSlider }) {
  return (
    <section className="products">
      {title}
      <section className="products-container">
        {productCategory}
        {productSlider}
      </section>
    </section>
  );
}
