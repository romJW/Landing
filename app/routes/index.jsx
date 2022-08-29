import Header from '../components/Header';
import Heater from "../components/Heater";
import Catalog from "../components/Catalog.jsx";
import Map from "../components/Map.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import { MobileMenuContext } from '../contexts/MobileMenu.js'

const nav = [
  { title: 'PIR-Кровля Эксперт', path: '/', id: '1' },
  { title: 'PIR-Кровля СМАРТ', path: '/', id: '2' },
  { title: 'PirroSlope', path: '/', id: '3' },
];

const socials = [
  { logo: 'fa-brands fa-vk', path: '/', id: '1' },
  { logo: 'fa-brands fa-instagram', path: '/', id: '2' },
  { logo: 'fa-brands fa-facebook-f', path: '/', id: '3' },
];

export default function () {
  return (
    <div
      style={{
        fontFamily: 'inter-regular, sans-serif',
        fontSize: '18px',
        color: '#fff',
        lineHeight: '1.4',
      }}
    >
      <Header nav={nav} socials={socials} />
      <MobileMenuContext.Consumer>
        {({ isOpen }) => !isOpen && (
          <>
            <Hero/>
            <Heater/>
            <Catalog/>
            <Map/>
            <Footer/>
          </>
        )}
      </MobileMenuContext.Consumer>
    </div>
  )
}
