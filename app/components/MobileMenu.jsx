import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <div className="header-mobile w-screen mx-auto py-5 flex flex-col justify-center align-center gap-6 bg-white inset-0 object-cover w-screen text-black">
    <div className="header-mobile__nav mx-auto flex flex-col justify-center align-center text-center gap-7">
      {props.nav.map((option) => {
        return (
            <>
          <Link className="font-bold text-base" key={option.id} to={option.path} onClick={option.func}>
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
          <a href="tel:+7 (727) 328-80-81"><p className="text-lg font-bold">+7 (727) 328-80-81</p></a>
          <a href="tel:+7 (771) 741-18-77"><p className="text-lg font-bold">+7 (771) 741-18-77</p></a>
          <button className="header-mobile__feedback-modal block text-sm underline mb-3.5">Получить обратный звонок</button>
          <div className="w-16 border border-[#DEDEDE] mx-auto"></div>
        </div>
        <p className="header-mobile__site text-sm mx-auto">info@abbex.kz</p>
        <div className="w-16 border border-[#DEDEDE] mx-auto"></div>
        <div className="header-mobile__socials flex justify-center gap-2.5">
          {props.socials.map((social) => (
            <Link key={social.id} to={social.path}>
              <div className="bg-[#393939] border border-white rounded-full w-10 h-10 grid">
                <i className={social.logo} style={{color:"#fff",display:"block", justifySelf:"center", alignSelf:"center" }}/>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
}
