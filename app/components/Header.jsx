import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Menu from './icons/Menu.jsx'
import Close from './icons/Close.jsx'



export default function (props) {
  const [modalOpen, setModalOpen] = React.useState(true)
  return (
    <header className="w-screen 2xl:w-full flex flex-col justify-center sticky top-[-1px] 2xl:sticky z-10">
      <div className="header__container container mx-auto flex items-center justify-between px-6 pt-8 pb-4 ">
        <Link to="/" className="header__logo">
          <img src='assets/Logo.png' alt="logo" className="w-36 lg:w-48" />
        </Link>
        <div className="header__nav hidden lg:flex gap-6">
          {props.nav.map((option) => (
            <Link key={option.id} to={option.path}>
              {option.title}
            </Link>
          ))}
        </div>
        <div className="header__contact-section hidden lg:flex flex-col-reverse gap-1 xl:flex-row xl:gap-7">
        <div className="header__socials flex gap-2.5 justify-around">
          {props.socials.map((social) => (
            <Link key={social.id} to={social.path}>
              <div className="border border-white rounded-full w-8 h-8 grid">
                <i class={social.logo} style={{color:"#fff",display:"block", justifySelf:"center", alignSelf:"center" }}/>
              </div>
            </Link>
          ))}
        </div>
        <div className="header__phone-section">
          <a href="tel:+7 (495) 111-11-11"><p className="text-2xl">+7 (495) 111-11-11</p></a>
          <button className="header__feedback-modal block text-base underline">Получить обратный звонок</button>
        </div>
        </div>
        <div className="header__menu  flex gap-2.5 lg:hidden"onClick={()=>setModalOpen(!modalOpen)} >
          <p className="self-start text-sm" >Меню</p>
        
        {modalOpen ? <Menu/> : <Close/>}
        
        </div>
      </div>
    </header>
  );
}
