export default function Index(props) {
  return (
    <div className="card rounded shadow-[0_0_30px_rgba(0,0,0,0.08)] px-2">
      <div className="card-body flex flex-col justify-center items-center pt-2 px-2 pb-4">
       <img className="max-w-full" src={props.item.img} />
        <h3 className="text-lg sm:text-xl font-semibold">{props.item.title}</h3>
        <p className="text-lg mb-5">{props.item.size}</p>
        <p className="text-xl sm:text-2xl font-bold mb-3.5">{props.item.price}</p>
        <button className="btn btn-primary">Оставить заявку</button>
      </div>
    </div>
  );
}
