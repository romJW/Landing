export default function (props) {
    return (
        <div className="card rounded-sm shadow-xl w-full basis-1/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 bg-white rounded-lg">
        <div className="card-body">
          <div className="image mx-auto">
            <img src={props.card.pic} alt="" className="w-9 h-9 sm:w-11 sm:h-11"/>
          </div>
          <div className="text text-center tracking-tight text-lg">
            <p><pre className="text-sm sm:text-lg" style={{ fontFamily: 'inter-regular, sans-serif',  lineHeight: '1.4' }}>{props.card.text}</pre></p>
          </div>
        </div>
      </div>
    );
  }
  