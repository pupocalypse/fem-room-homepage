import arrow from "../assets/icons/icon-arrow.svg";

function InfoCard() {
  return (
    <section className="info-card">
      <h1>Discover innovative ways to decorate</h1>
      <p>
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <a className="info-card__link" href="#">
        SHOP NOW <img className="info-card__link-arrow" src={arrow} />
      </a>
    </section>
  );
}

export default InfoCard;
