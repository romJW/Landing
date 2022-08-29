export default function Hero(props) {
  return (
    <div className="bg-heroBg bg-no-repeat bg-cover bg-center h-fit font-inter overflow-hidden pb-28 lg:pb-0">
      <div className="pt-40 lg:px-24 lg:pb-52 lg:pt-38 xl:pt-22 xl:pb-18 2xl:px-52 2xl:pb-56">
        <div className="
          h-fit pb-3 text-center font-semibold leading-10 uppercase text-3xl
          xs:text-4xl xs:leading-[54px] xs:tracking-wide
          md:text-5xl md:leading-[60px]
          lg:text-left
          xl:leading-[91px] xl:text-7xl
          2xl:font-bold 2xl:pb-0 2xl:mb-10">
          материалы PIR <br/> для изоляции кровли
        </div>
        <div className="
          h-fit pb-6 px-1 text-center font-light text-sm tracking-wider
          sm:mx-40 sm:mb-10
          xs:text-base xs:mx-8
          md:text-xl
          lg:mx-0 lg:mb-6 lg:pb-0 lg:px-0 lg:text-3xl lg:font-xs lg:text-left
          lg:mr-20
          2xl:mb-16 2xl:w-1/2">
          Предлагаем материалы для теплоизоляции неэксплуатируемой кровли в Казахстане
        </div>
        <button className="
          btn btn-primary block m-auto w-64 h-16 mb-12
          xs:w-80 xs:h-20 xs:text-lg
          lg:inline
          2xl:px-12 2xl:w-96 2xl:h-24 2xl:text-xl 2xl:tracking-widest">
          Перейти в каталог
        </button>
      </div>
    </div>
  );
}
