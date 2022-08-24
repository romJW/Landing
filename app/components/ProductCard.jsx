export default function Index(props) {
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
