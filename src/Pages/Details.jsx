import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsEvent from './DetailsEvent';
import Navbar from './Navbar';

const Details = () => {


    const [event, setEvent] = useState({})
    const {id} = useParams()
    const events = useLoaderData()
    
    useEffect(() =>{
        const findEvent = events?.find(event => event.id == id);
        console.log(findEvent);
        setEvent(findEvent)

    },[ id, events])
    
    
    return (
        <div>
            <Navbar></Navbar>
            <DetailsEvent event = {event}></DetailsEvent>
        </div>
    )
};

export default Details;