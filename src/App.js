import { useState } from "react";

import "./styles/app.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

import galleryImageDark from "./assets/images/image-about-dark.jpg";
import galleryImageLight from "./assets/images/image-about-light.jpg";

const slidesData = [
  {
    classModifier: "--slide-1",
    heading: "Discover innovative ways to decorate",
    body:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    classModifier: "--slide-2",
    heading: "We are available all across the globe",
    body:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    classModifier: "--slide-3",
    heading: "Manufactured with the best materials",
    body:
      "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

function App() {
  const [heroData, setHeroData] = useState(slidesData[0]);

  const handleClick = (inc) => {
    const index = slidesData.findIndex(
      (obj) => obj.classModifier === heroData.classModifier
    );
    if (index === 2 && inc === 1) {
      setHeroData(slidesData[0]);
    } else if (index === 0 && inc == -1) {
      setHeroData(slidesData[2]);
    } else {
      setHeroData(slidesData[index + inc]);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Hero
          classModifier={heroData.classModifier}
          heading={heroData.heading}
          body={heroData.body}
          handleClick={handleClick}
        />
        <img className="gallery-image" src={galleryImageDark} alt="" />
        <About />
        <img className="gallery-image" src={galleryImageLight} alt="" />
      </main>
    </div>
  );
}

export default App;
