import banner1 from "../assets/banner.jpg"
import banner2 from "../assets/banner2.jpg"
import banner4 from "../assets/banner4.webp"

const Banner = () => {
    return (
       <div className="carousel w-full h-4/5">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner4} className=" w-full m-auto rounded-3xl brightness-50 opacity-95" />
    <div  className=" absolute inset-0 p-24 lg:p-52 ">
    <h1 className=" text-6xl font-bold text-[#EAC696]">TOWHID EVENTS</h1>
    <p className=" p-5 text-2xl text-white font-semibold">Event planners work in a wide range of industries, including corporate events, weddings, social gatherings, nonprofit functions, and more. Their primary goal is to create memorable and seamless experiences for clients and attendees.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="  w-full m-auto rounded-3xl brightness-50 opacity-95"/>
    <div  className="  absolute inset-0 p-24 lg:p-52">
    <h1 className=" text-6xl font-bold text-[#EAC696]">TOWHID EVENTS</h1>
    <p className=" p-5 text-2xl text-white font-semibold" >Event planners work in a wide range of industries, including corporate events, weddings, social gatherings, nonprofit functions, and more. Their primary goal is to create memorable and seamless experiences for clients and attendees.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner1}className="w-full m-auto rounded-3xl brightness-50 opacity-95"/>
    <div  className=" absolute inset-0 p-24 lg:p-52">
    <h1 className=" text-6xl font-bold text-[#EAC696]">TOWHID EVENTS</h1>
    <p className=" p-5 text-2xl text-white font-semibold">Event planners work in a wide range of industries, including corporate events, weddings, social gatherings, nonprofit functions, and more. Their primary goal is to create memorable and seamless experiences for clients and attendees.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> 
    );
};

export default Banner;