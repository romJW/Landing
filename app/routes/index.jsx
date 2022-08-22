import Header from '../components/Header';
import logo from "../assets/Logo.png"
const nav = [
  { title: 'PIR-Кровля Эксперт', path: '/', id: '1' },
  { title: 'PIR-Кровля СМАРТ', path: '/', id: '2' },
  { title: 'PirroSlope', path: '/', id: '3' },
];
const socials = [
  { logo: 'fa-brands fa-instagram fa-2x', path: '/', id: '1' },
  { logo: 'fa-solid fa-user fa-2x', path: '/', id: '2' },
  { logo: 'fa-brands fa-vk fa-2x', path: '/', id: '3' },
];
export default function () {
 
  return <Header logo={logo} nav={nav} socials={socials} />;
}
