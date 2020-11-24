import CarouselButtons from "./CarouselButtons";
import InfoCard from "./InfoCard";

function Hero({ classModifier, heading, body, handleClick }) {
  return (
    <section className="hero">
      <div className={`hero__image hero__image${classModifier}`}>
        <CarouselButtons handleClick={handleClick} />
      </div>
      <InfoCard heading={heading} body={body} />
    </section>
  );
}

export default Hero;
