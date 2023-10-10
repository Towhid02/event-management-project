

const DetailsEvent = ({event}) => {
    console.log(event);

    const {title, image, description, price, rating, color, backgroundColor } = event || {};
    return (
      <div className="card w-full bg-[#9b8abd] shadow-xl text-black"  style={{ backgroundColor }}>
   
      <div className="card-body items-center text-center">
      <h2 className="card-title text-4xl font-grand font-bold" style={{color}}>{title}</h2>
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl w-full" />
      </figure>
        <p className=" font-itim">{description}</p>
       <div className=" flex gap-20 font-galada">
       <p>Budget: {price} Tk</p>
         <p>Rating: {rating}</p>
       </div>
      </div>
    </div>
        
    );
};
export default DetailsEvent;

