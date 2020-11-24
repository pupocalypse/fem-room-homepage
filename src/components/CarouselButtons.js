import iconLeftAngle from "../assets/icons/icon-angle-left.svg";
import iconRightAngle from "../assets/icons/icon-angle-right.svg";

function CarouselButtons({ handleClick }) {
  return (
    <div className="carousel-buttons">
      <button
        className="carousel-buttons__button"
        onClick={() => handleClick(-1)}
      >
        <img className="carousel-buttons__icon" src={iconLeftAngle} alt="" />
      </button>
      <button
        className="carousel-buttons__button"
        onClick={() => handleClick(1)}
      >
        <img className="carousel-buttons__icon" src={iconRightAngle} alt="" />
      </button>
    </div>
  );
}

export default CarouselButtons;
