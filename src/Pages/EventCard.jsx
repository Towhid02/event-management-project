import React from 'react';



const EventCard = ({events}) => {
console.log(events);
        const {name, title, image, price, rating} = events
    
    return (
        <div >
        <div className="card card-compact shadow-xl bg-green-100">
<figure><img className=' w-full h-60' src={image} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="text-left text-2xl font-bold">{name}</h2>
<p className='text-xl text-left'>{title}</p>
<div className=' flex text-base gap-5 font-semibold text-left'>
  <p>  Price: {price}  Tk</p>
  <p>Rating : {rating} </p>
</div>
<div className="card-actions justify-end">
  <a className="btn btn-success">Details</a>
</div>
</div>
</div>
    </div>
    );
};

export default EventCard;