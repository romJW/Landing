const data = [
  {
    pic: 'assets/heaterConduct.svg',
    text: `Крайне низкая
теплопроводность`,
    id: 1,
  },
  {
    pic: 'assets/heaterRange.svg',
    text: `Широкий температурный диапазоном
эксплуатации – от -70 до +120°С`,
    id: 2,
  },
  {
    pic: 'assets/heaterAbsorb.svg',
    text: `Нулевое водопоглощение и хорошее
сопротивление паропроницанию`,
    id: 3,
  },
  {
    pic: 'assets/heaterEmission.svg',
    text: `PIR не выделяет вредных веществ
в любых режимах эксплуатации`,
    id: 4,
  },
  {
    pic: 'assets/heaterDensity.svg',
    text: `Низкая плотность, высокие
прочностные характеристики`,
    id: 5,
  },
  {
    pic: 'assets/heaterOil.svg',
    text: `Cтоек к воздействию
    масел и растворителей`,
    id: 6,
  },
];

function HeaterCard(props) {
  return (
    <div className="card rounded-sm shadow-xl w-full basis-1/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 bg-white rounded-lg">
      <div className="card-body">
        <div className="image mx-auto">
          <img src={props.card.pic} alt="" className="w-9 h-9 sm:w-11 sm:h-11"/>
        </div>
        <div className="text text-center tracking-tight text-lg">
          <p className="text-sm sm:text-lg" style={{ fontFamily: 'inter-regular, sans-serif',  lineHeight: '1.4' }}>
            {props.card.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Heater() {
  return (
    <div
      className="section text-sm sm:text-lg heater-section mx-auto text-black "
      style={{ fontFamily: 'inter-regular, sans-serif',  lineHeight: '1.4' }}
    >
      <div className="heater-section__container container mx-auto">
        <div className="heater-section__info flex">
          <img src="assets/heater.png" alt="heater" className="hidden lg:block"/>
          <div className="heater-section__about p-6">
            <h2 className="heater-section__title font-bold text-3xl text-center lg:text-5xl mb-8">
              Об утеплителе
            </h2>
            <p className="heater-section__text mb-6">
              PIR (вспененный полиизоцианурат) – полимерный утеплитель нового поколения. На
              сегодняшний день это самый эффективный и современный теплоизоляционный материал на
              российском рынке.
            </p>
            <img src="assets/heater.png" alt="heater" className=" mx-auto max-w-full lg:hidden" />
            <p className="heater-section__text ">
              PIR отличается рекордно низкой теплопроводностью: всего 0,021-0,023 Вт/м•К. Это
              означает, что для качественного утепления достаточно более тонкого слоя PIR по сравнению
              с другими разновидностями теплоизоляции.
            </p>
          </div>
        </div>
        <div className="heater-section__cards container mx-auto justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-5">
          {data.map((card) => (
            <HeaterCard
              card={card}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
