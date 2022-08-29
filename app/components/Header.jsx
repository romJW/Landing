import { BrowserRouter as Router, Link } from 'react-router-dom';
import { MobileMenuContext } from '../contexts/MobileMenu.js'

const mobileSocials = [
  { logo: 'fa-brands fa-vk', path: '/', id: '1' },
  { logo: 'fa-brands fa-instagram', path: '/', id: '2' },
  { logo: 'fa-brands fa-facebook-f', path: '/', id: '3' },
];

const mobileNav = [
  { title: 'PIR-Кровля Эксперт', path: '/', id: '1' },
  { title: 'PIR-Кровля СМАРТ', path: '/', id: '2' },
  { title: 'PirroSlope', path: '/', id: '3' },
  { title: 'Об утеплителе', path: '/', id: '4' },
  { title: 'Каталог', path: '/', id: '5' },
  { title: 'Контакты', path: '/', id: '6' },
];

function MobileMenu(props) {
  return (
    <div className="header-mobile container mx-auto py-5 flex flex-col justify-center align-center gap-6 bg-white inset-0 object-cover w-screen text-black">
      <div className="header-mobile__nav mx-auto flex flex-col justify-center align-center text-center gap-7">
        {props.nav.map((option) => {
          return (
            <>
              <Link className="font-bold text-base" key={option.id} rel="nofollow" to={option.path} onClick={props.onClose}>
                {option.title}
              </Link>
              <div className="w-16 border border-[#DEDEDE] mx-auto"></div>
            </>
          );
        })}
      </div>
      <button className="header-mobile__btn btn btn-primary w-56 mx-auto">
        Оставить заявку
      </button>
      <div className="header-mobile__phone-section mx-auto text-center">
        <a rel="nofollow" href="tel:+7 (727) 328-80-81"><p className="text-lg font-bold">+7 (727) 328-80-81</p></a>
        <a rel="nofollow" href="tel:+7 (771) 741-18-77"><p className="text-lg font-bold">+7 (771) 741-18-77</p></a>
        <button className="header-mobile__feedback-modal block text-sm underline mb-3.5">Получить обратный звонок</button>
        <div className="w-16 border border-[#DEDEDE] mx-auto"></div>
      </div>
      <p className="header-mobile__site text-sm mx-auto">info@abbex.kz</p>
      <div className="w-16 border border-[#DEDEDE] mx-auto"></div>
      <div className="header-mobile__socials flex justify-center gap-2.5">
        {props.socials.map((social) => (
          <Link key={social.id} rel="nofollow" to={social.path}>
            <div className="bg-[#393939] border border-white rounded-full w-10 h-10 grid">
              <i className={social.logo} style={{color:"#fff",display:"block", justifySelf:"center", alignSelf:"center" }}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header(props) {
  return (
    <MobileMenuContext.Consumer>
      {({ isOpen, toggle }) => (
        <header className="lg:mt-[-104px] w-screen lg:mx-auto lg:container 2xl:w-full flex flex-col justify-center sticky top-[-1px] z-50">
          <div className="header__container flex  items-center justify-between px-6 pt-8 pb-4 bg-[#414141] lg:bg-transparent">
            <Link rel="nofollow" to="/" className="header__logo">
              <img src='assets/Logo.png' alt="logo" className="w-36 lg:w-48" />
            </Link>
            <div className="header__nav hidden lg:flex gap-6">
              {props.nav.map((option) => (
                <Link key={option.id} rel="nofollow" to={option.path} onClick={option.func}>
                  {option.title}
                </Link>
              ))}
            </div>
            <div className="header__contact-section hidden items-center lg:flex flex-col-reverse gap-1 xl:flex-row xl:gap-7">
            <div className="header__socials flex gap-2.5 justify-around">
              {props.socials.map((social) => (
                <Link key={social.id} rel="nofollow" to={social.path}>
                  <div className="border border-white rounded-full w-8 h-8 grid">
                    <i className={social.logo} style={{color:"#fff",display:"block", justifySelf:"center", alignSelf:"center" }}/>
                  </div>
                </Link>
              ))}
            </div>
            <div className="header__phone-section">
              <a rel="nofollow" href="tel:+7 (495) 111-11-11"><p className="text-2xl font-bold">+7 (495) 111-11-11</p></a>
              <button className="header__feedback-modal block text-base underline">Получить обратный звонок</button>
            </div>
            </div>
            <div className="header__menu  flex gap-2.5 items-center lg:hidden"onClick={toggle} >
              <p className="text-sm" >Меню</p>
            {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </div>
          </div>
          {isOpen && <MobileMenu socials={mobileSocials} nav={mobileNav} onClose={toggle}/>}
        </header>
      )}
    </MobileMenuContext.Consumer>
  );
}
