import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import EventCard from "./EventCard";


const Home = () => {

    const events = useLoaderData()
    console.log(events);
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <div className=" max-w-6xl mx-auto font-poppins my-2">
            
          
           <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-4xl '>
            {
                events.map(event => <EventCard key={events.id} events={event}></EventCard>)
            }
           </div>
           </div>

          
           <Footer></Footer>
        </div>
    );
};

export default Home;