import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MobileMenu from './MobileMenu.jsx'


const mobileSocials = [
  { logo: 'fa-brands fa-vk', path: '/', id: '1' },
  { logo: 'fa-brands fa-instagram', path: '/', id: '2' },
  { logo: 'fa-brands fa-facebook-f', path: '/', id: '3' },
];

export default function (props) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const mobileNav = [
    { title: 'PIR-Кровля Эксперт', path: '/', id: '1', func:()=>setModalOpen(false) },
    { title: 'PIR-Кровля СМАРТ', path: '/', id: '2', func:()=>setModalOpen(false) },
    { title: 'PirroSlope', path: '/', id: '3', func:()=>setModalOpen(false)},
    { title: 'Об утеплителе', path: '/', id: '4', func:()=>setModalOpen(false) },
    { title: 'Каталог', path: '/', id: '5', func:()=>setModalOpen(false) },
    { title: 'Контакты', path: '/', id: '6', func:()=>setModalOpen(false) },
  ];
  return (
    <header className="w-screen mx-auto container 2xl:w-full flex flex-col justify-center sticky top-[-1px] 2xl:sticky z-10">
      <div className="header__container container mx-auto flex  items-center justify-between px-6 pt-8 pb-4 bg-[#414141] lg:bg-transparent">
        <Link to="/" className="header__logo">
          <img src='assets/Logo.png' alt="logo" className="w-36 lg:w-48" />
        </Link>
        <div className="header__nav hidden lg:flex gap-6">
          {props.nav.map((option) => (
            <Link key={option.id} to={option.path} onClick={option.func}>
              {option.title}
            </Link>
          ))}
        </div>
        <div className="header__contact-section hidden items-center lg:flex flex-col-reverse gap-1 xl:flex-row xl:gap-7">
        <div className="header__socials flex gap-2.5 justify-around">
          {props.socials.map((social) => (
            <Link key={social.id} to={social.path}>
              <div className="border border-white rounded-full w-8 h-8 grid">
                <i className={social.logo} style={{color:"#fff",display:"block", justifySelf:"center", alignSelf:"center" }}/>
              </div>
            </Link>
          ))}
        </div>
        <div className="header__phone-section">
          <a href="tel:+7 (495) 111-11-11"><p className="text-2xl font-bold">+7 (495) 111-11-11</p></a>
          <button className="header__feedback-modal block text-base underline">Получить обратный звонок</button>
        </div>
        </div>
        <div className="header__menu  flex gap-2.5 items-center lg:hidden"onClick={()=>setModalOpen(!modalOpen)} >
          <p className="text-sm" >Меню</p>
        {modalOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </div>
      </div>
      {modalOpen && <MobileMenu socials={mobileSocials} nav={mobileNav}/>}
    </header>
  );
}