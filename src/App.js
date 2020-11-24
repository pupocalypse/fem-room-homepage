import "./styles/app.css";

import galleryImageDark from "./assets/images/image-about-dark.jpg";
import galleryImageLight from "./assets/images/image-about-light.jpg";

import Header from "./components/Header";
import CarouselButtons from "./components/CarouselButtons";
import InfoCard from "./components/InfoCard";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero-image hero-image--slide-1">
          <CarouselButtons />
        </section>
        <InfoCard />
        <img className="gallery-image" src={galleryImageDark} alt="" />
        <About />
        <img className="gallery-image" src={galleryImageLight} alt="" />
      </main>
    </div>
  );
}

export default App;
