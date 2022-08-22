import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function (props) {
  return (
    <header className="w-screen 2xl:w-full flex flex-col justify-center sticky top-[-1px] 2xl:sticky z-10">
      <div className="header__container bg-blue-500 flex">
        <div className="header__logo">
          <img src={props.logo} alt="logo" />
        </div>
        <div className="header__nav flex">
          {props.nav.map((option) => (
            <Link key={option.id} to={option.path}>
              {option.title}
            </Link>
          ))}
        </div>
        <div className="header__socials flex">
          {props.socials.map((social) => (
            <Link key={social.id} to={social.path}>
              <div className="border border-white rounded-full w-8 h-8 ">
                <i class={social.logo}/>
              </div>
            </Link>
          ))}
        </div>
        <div className="header__phone-section">
          <a href="tel:+7 (771) 741-18-22">+7 (771) 741-18-22</a>
          <p className="header__feedback-modal">Получить обратный звонок</p>
        </div>
      </div>
    </header>
  );
}
