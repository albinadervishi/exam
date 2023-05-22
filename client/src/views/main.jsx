import React, { useState } from 'react'
import ThingForm from '../components/ThingForm';
import ThingList from '../components/ThingList';
import RecentThings from '../components/RecentThing';

const Main = (props) => {
    const [thing, setThing] = useState([]);

    // const removeFromDom = productId => {
    //     setProduct(product.filter(product => product._id != productId)); 
    // }
    
    return (
        <div>
            <h1>Like Dashboard</h1>
           <ThingList thing={thing}  setThing={setThing} />
            <hr/>
           <ThingForm thing={thing}  setThing={setThing}  />
           <hr/>
           <RecentThings thing={thing}  setThing={setThing} />
        </div>
    )
}
export default Main;