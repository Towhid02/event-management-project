import React from 'react';
import Navbar from '../Pages/Navbar';

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-left p-8'>
            <h1 className=' text-5xl font-bold text-center'>About Us</h1>
               <div className=' p-8'>
                <p className='text-xl font-semibold  p-8'>We are a team of experienced and passionate social event planners who specialize in creating unforgettable events for our clients. We understand that every event is unique, and we work closely with our clients to bring their vision to life.</p>
                <p className='text-xl font-semibold  p-8'>We offer a wide range of services, including:</p>
                <ul className='text-xl font-semibold  p-8'>
                    <li>Event planning and coordination</li>
                    <li>Venue selection and booking</li>
                    <li>Vendor selection and management</li>
                    <li>Budget management</li>
                    <li>Timeline developmen</li>
                    <li>Décor and design</li>
                    <li>Catering and beverage coordination</li>
                    <li>Entertainment coordination</li>
                    <li>Transportation coordinatio</li>
                </ul>
                <p className='text-xl font-semibold  p-8'>We are committed to providing our clients with the highest level of service and support. We are detail-oriented and organized, and we go above and beyond to make sure that every event is a success.</p>
            </div>
        </div>
            <div  className='text-left p-8'>
            <h1 className=' text-5xl font-bold text-center'>Why Choose Us?</h1>
               <div className='text-xl font-semibold '>
                <p  className=' p-8'>We have a team of experienced and passionate social event planners who are dedicated to creating unforgettable events for our clients. We offer a wide range of services, and we are committed to providing our clients with the highest level of service and support.</p>
                <p  className=' p-8'>If you are looking for a social event planner who can help you create a truly unforgettable event, contact us today for a consultation.</p>
            </div>
        </div>
    </div>
    );
};

export default AboutUs;