export default function Index() {
  return (
    <div
      className="text-black text-xl"
      style={{ fontFamily: 'inter, sans-serif', lineHeight: '1.4', color:"#393939" }}>
      <div className="relative container mx-auto">
      <h3 className="md:hidden font-bold text-center text-3xl">КОНТАКТЫ</h3>
        <div className="card card-body !hidden md:!flex flex-col gap-5 absolute z-10 pr-44 !rounded-none bg-white justify-center top-10 left-5 py-7 2xl:left-5">
          <div>
          <span className="font-bold text-xl">Адрес</span>
            <p className="text-xl">Казахстан, г. Алматы,</p>
            <p>ул.Нурмакова 1A</p>
          </div>
          <div className="mail">
            <p className="font-bold text-xl">Электронная почта</p>
            <p className="">info@abbex.kz</p>
          </div>
          <div class="flex gap-6 2xl:gap-10">
            <div class="flex flex-col grow">
              <p className="font-bold text-xl">Телефон</p>
              <a href="tel:+7 (727) 328-80-81">+7 (727) 328-80-81</a>
              <a href="tel:+7 (771) 741-18-77">+7 (771) 741-18-77</a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="md:hidden text-base flex flex-col justify-center p-4 gap-4">
          <div>
            <span className="font-bold text-xl">Адрес</span>
          </div>
          <div className=" flex justify-between ">
            <span className="text-sm hidden xs:block">Казахстан, г. Алматы,</span>
            <span className="text-sm hidden xs:block">ул.Нурмакова, 1A</span>
            <span className="text-sm xs:hidden">Казахстан, г. Алматы, ул.Нурмакова, 1A</span>
          </div>
          <div className="mail">
            <p className="font-bold">Электронная почта</p>
            <p className="text-sm">info@abbex.kz</p>
          </div>
          <div className="flex">
            <div className="flex flex-col grow ">
              <p className="font-bold">Телефон</p>
              <a className="text-sm" href="tel:+7 (727) 328-80-81">
                +7 (727) 328-80-81
              </a>
              <a className="text-sm" href="tel:+7 (771) 741-18-77">
                +7 (771) 741-18-77
              </a>
            </div>
          </div>
        </div>
        <iframe
          src="https://yandex.com/map-widget/v1/-/CCUBJQD8xB"
          width="100%"
          height="456"
          frameborder="0"
          allowfullscreen="true"
          style={{ position: 'relative' }}></iframe>
      </div>
    </div>
  );
}
