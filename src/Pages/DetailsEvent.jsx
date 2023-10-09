

const DetailsEvent = ({event}) => {
    console.log(event);

    const {title, image, description } = event || {};
    return (
        <div>
           <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={image}alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};
export default DetailsEvent;