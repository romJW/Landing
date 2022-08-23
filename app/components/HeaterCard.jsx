export default function (props) {
    return (
        <div className="card rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.08)] w-full basis-1/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 bg-white rounded-lg">
        <div className="card-body" style={{backgroundColor:props.card.color}}>
          <div className="image mx-auto">
            <img src={props.card.pic} alt=""/>
          </div>
          <div className="text text-center tracking-tight text-lg">
            <p><pre>{props.card.text}</pre></p>
          </div>
        </div>
      </div>
    );
  }
  