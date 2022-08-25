import Header from '../components/Header';
import Heater from "../components/Heater";
import Catalog from "../components/Catalog.jsx"
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
      }}>
      <div className="hero-section">
        <img
          src="/assets/hero.png"
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
        <Header nav={nav} socials={socials} />
      </div>
      <Heater/>
      <Catalog/>
    </div>
  )
}