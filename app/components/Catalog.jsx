import ProductCard from "./ProductCard.jsx"


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




export default function Index() {
    return (
      <div className="catalog-section container mx-auto flex flex-col pb-8 gap-20" style={{ fontFamily: 'inter, sans-serif', lineHeight: '1.4', color:"#3A3A3A"}}>
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
  