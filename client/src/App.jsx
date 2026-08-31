import Hero from "./components/Hero";
import PhaseTimeline from "./components/PhaseTimeline";
import Footer from "./components/Footer";
import { phases } from "./data/phases";

function App() {
  return (
    <>
      <Hero />
      <PhaseTimeline phases={phases} />
      <Footer />
    </>
  );
}

export default App;
