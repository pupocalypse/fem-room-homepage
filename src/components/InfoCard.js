import arrow from "../assets/icons/icon-arrow.svg";

function InfoCard({ heading, body }) {
  return (
    <section className="info-card">
      <h1>{heading}</h1>
      <p>{body}</p>
      <a className="info-card__link" href="#">
        SHOP NOW <img className="info-card__link-arrow" src={arrow} />
      </a>
    </section>
  );
}

export default InfoCard;
