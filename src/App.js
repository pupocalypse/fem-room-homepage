import "./styles/app.css";

import Header from "./components/Header";
import InfoCard from "./components/InfoCard";

function App() {
  return (
    <div className="App">
      {/* header - logo, navigation */}
      <Header />
      {/* hero image */}
      <section className="hero-image hero-image--slide-1"></section>
      {/* general info - heading, text, cta */}
      <InfoCard />
      {/* gallery image 1 */}
      {/* about */}
      {/* gallery image 2 */}
    </div>
  );
}

export default App;
