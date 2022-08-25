export default function(props){
  return(
    <div id="footer" className="outline outline-green-600 py-5">
        <div className="modal" id="my-modal-2">
            <div className="modal-box rounded">
              <div className="h-fit py-5 px-3 text-center">
                <div className="text-black mb-5 text-sm xs:text-base">
                  Оставьте ваши данные и наш менеджер свяжется с Вами,
                  чтобы рассчитать количество и стоимость материалов
                </div>
                <div className="w-full inline-grid grid-cols-1 gap-3">
                  <input type="text" placeholder="Ваше имя" className="input input-bordered w-full text-base xs:input-lg" />
                  <input type="text" placeholder="Номер телефона" className="input input-bordered w-full text-base xs:input-lg" />
                  <button className="btn btn-primary text-base xs:btn-lg">Заказать звонок</button>
                </div>
                <div className="mt-3 text-sm">Нажимая на кнопку, вы соглашаетесь с 
                  <a href="">
                    <span className="text-blue-200"> условиями обработки персональных данных</span>
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className="w-5/6 py-5 pr-10 m-auto">
        <img src="images/abbex.png" alt="" className="mb-5"/>
        <footer className="footer bg-neutral text-neutral-focus inline-grid grid-cols-2 gap-y-2 gap-x-12 md:gap-x-14 md:grid md:grid-flow-column md:gap-10 md:grid-cols-4 relative">
          <div>
            <span className="footer-title footer-headlines opacity-100">Информация</span> 
            <a className="link link-hover">Об утеплителе</a>
            <a className="link link-hover">Каталог</a>
            <a className="link link-hover">Контакты</a>
          </div> 
          <div>
            <span className="footer-title opacity-100">PIR-кровля эксперт</span> 
            <a className="link link-hover">PIR-кровля эксперт</a>
            <a className="link link-hover">PIR-кровля СМАРТ</a>
            <a className="link link-hover">PirroSlope</a>
          </div> 
          <div>
            <span className="footer-title opacity-100">Контакты</span> 
            <a className="link-hover font-bold">+7 (495) 111-11-11</a>
            <a className="link-hover font underline underline-offset-4">Получить обратный звонок</a>
          </div>
          <div className="grid grid-flow-col gap-4 mt-5 float-right w-32 xs:mt-20 md:mt-5 md:absolute right-0 top-12">
            <a><img src="images/social1.png" alt=""/></a>
            <a><img src="images/social2.png" alt="" /></a>
            <a><img src="images/social3.png" alt="" /></a>
          </div>
          <a href="#my-modal-2"><button className="btn btn-primary btn-md block w-52 right-0 my-4 md:text-xs md:w-fit md:my-0 md:absolute lg:text-sm lg:w-52">Оставить заявку</button></a>
        </footer>
        <div className="text-secondary-content text-sm mt-2">Политика защиты и обработки <br/> персональных данных</div>
      </div>
    </div>
  );
}