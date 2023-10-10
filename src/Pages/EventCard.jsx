import React from 'react';
import { Link } from 'react-router-dom';



const EventCard = ({events}) => {
console.log(events);
        const {id, name, title, image, price, rating, color, backgroundColor} = events
    
    return (
        <div >
        <div className="card card-compact shadow-xl bg-base-100"  style={{ backgroundColor }}>
<figure><img className=' w-full h-60' src={image} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="text-left text-3xl font-bold font-galada" style={{color}}>{name}</h2>
<p className='text-2xl text-left font-grand '>{title}</p>
<div className=' flex text-base gap-5 font-semibold text-left font-itim' >
  <p>  Budget: {price}  Tk</p>
  <p>Rating : {rating} </p>
</div>
<div className="card-actions justify-end">
  <Link to={`/details/${id}`}><button className="btn btn-success text-xl font-itim font-semibold ">Details</button></Link>
  
</div>
</div>
</div>
    </div>
    );
};

export default EventCard;