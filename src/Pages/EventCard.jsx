import React from 'react';

const EventCard = ({events}) => {
console.log(events);
        const {name, title, image} = events
    
    return (
        <div >
        <div className="card card-compact shadow-xl bg-green-100">
<figure><img className=' w-full h-60' src={image} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">{name}</h2>
<p>{title}</p>
<div className="card-actions justify-end">
  <button className="btn btn-primary">Details</button>
</div>
</div>
</div>
    </div>
    );
};

export default EventCard;