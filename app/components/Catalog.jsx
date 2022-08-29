const itemsExpert =[
    {img:'assets/tileExpert.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:1},
    {img:'assets/tileExpert.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:2},
    {img:'assets/tileExpert.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:3},
    {img:'assets/tileExpert.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:4},
    {img:'assets/tileExpert.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:5},
    {img:'assets/tileExpert.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:6},
    {img:'assets/tileExpert.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:7},
    {img:'assets/tileExpert.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:8},
]
const itemsSmart =[
    {img:'assets/tileSmart1.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:1},
    {img:'assets/tileSmart1.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:2},
    {img:'assets/tileSmart1.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:3},
    {img:'assets/tileSmart1.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:4},
    {img:'assets/tileSmart1.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:5},
    {img:'assets/tileSmart1.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:6},
    {img:'assets/tileSmart1.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:7},
    {img:'assets/tileSmart1.png', title:"Pirro Membrane", size:"1200 x 1200 мм", price:"12 345 Тг./кв.м",id:8},
]

function ProductCard(props) {
  return (
    <div className="card rounded shadow-xl px-2 mx-auto w-[280px] sm:w-full">
      <div className="card-body flex flex-col justify-center items-center pt-2 mx-auto">
        <img className="max-w-full" src={props.item.img} />
        <h3 className="text-lg sm:text-xl font-semibold">{props.item.title}</h3>
        <p className="text-lg mb-5">{props.item.size}</p>
        <p className="text-xl sm:text-2xl font-bold mb-3.5">{props.item.price}</p>
        <button className="btn btn-primary">Оставить заявку</button>
      </div>
    </div>
  );
}

export default function Catalog() {
    return (
      <div className="catalog-section container section mx-auto flex flex-col gap-20" style={{ fontFamily: 'inter, sans-serif', lineHeight: '1.4', color:"#3A3A3A"}}>
        <div className="catalog-section__expert flex flex-col p-8 gap-8">
        <h2 className="catalog-section__title text-3xl font-bold sm:text-5xl text-center">PIR-КРОВЛЯ ЭКСПЕРТ</h2>
        <div className="catalog-section__items grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {itemsExpert.map((item)=><ProductCard item={item} key={item.id}/>)}
        </div>
        </div>
        <div className="catalog-section__smart flex flex-col pb-8 gap-8">
        <h2 className="catalog-section__title text-3xl font-bold sm:text-5xl text-center">PIR-КРОВЛЯ СМАРТ</h2>
        <div className="catalog-section__items grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {itemsSmart.map((item)=><ProductCard item={item} key={item.id}/>)}
        </div>
        </div>
      </div>
    );
  }

