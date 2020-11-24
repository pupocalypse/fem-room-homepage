import iconLeftAngle from "../assets/icons/icon-angle-left.svg";
import iconRightAngle from "../assets/icons/icon-angle-right.svg";

function CarouselButtons() {
  return (
    <div className="carousel-buttons">
      <img className="carousel-buttons__button" src={iconLeftAngle} alt="" />
      <img className="carousel-buttons__button" src={iconRightAngle} alt="" />
    </div>
  );
}

export default CarouselButtons;
