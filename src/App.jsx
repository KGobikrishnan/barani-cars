import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Transformation from './components/Transformation';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Brands from './components/Brands';
import Team from './components/Team';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Transformation />
        <Gallery />
        <WhyChooseUs />
        <Brands />
        <Team />
        <Reviews />
        <CTA />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;
