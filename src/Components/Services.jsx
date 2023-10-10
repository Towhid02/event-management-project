import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { useLoaderData } from 'react-router-dom';
import EventCard from '../Pages/EventCard';
import Navbar from '../Pages/Navbar';


const Services = () => {

    const AuthInfo = useContext(AuthContext)
    console.log(AuthInfo);

    const events = useLoaderData()
    console.log(events);
   

    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h1 className=' text-4xl font-grand font-semibold text-[#35d83d]'>
                Our Services
            </h1>
            <div className=" max-w-6xl mx-auto font-poppins my-2">
            
          
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-4xl p-5'>
             {
             events.map(event => <EventCard key={event.id} events={event}></EventCard>)
             }
            </div>
            </div>
            </div>

        </div>
    );
};

export default Services;