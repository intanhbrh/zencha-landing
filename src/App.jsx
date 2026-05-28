import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RitualMessage from "./components/RitualMessage";
import BlendsSlider from "./components/BlendsSlider";
import RitualFacts from "./components/RitualFacts";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <RitualMessage />
      <BlendsSlider />
      <RitualFacts />
      <Benefits />
      <Reviews />
      <Footer />
    </main>
  );
}

export default App;
