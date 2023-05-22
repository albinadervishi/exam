import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate, Link} from "react-router-dom";

const Details =() => {
    const [thing, setThing] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/thing/" + id)
            .then( res => {
                console.log(res.data);
                setThing(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);

    const handleLikes = () => {
        axios
          .post('http://localhost:8000/api/thing/' + id)
          .then((res) => {
            setThing({ ...thing,  likes: thing.likes + 1 });
            navigate("/" );
          })
          .catch((err) => console.log(err));
      };

    const deleteThing = (thingId) => {
        axios.delete('http://localhost:8000/api/thing/' + thingId)
            .then(res => {
                const updatedThing = { ...thing }; 
                delete updatedThing[thingId];
                setThing(updatedThing);
                navigate("/", { replace: true });
            })
            .catch(err => console.log(err))
    }

    
    const resetLikes = () => {
        axios
          .put('http://localhost:8000/api/thing/' + id)
          .then((res) => {
            setThing({ ...thing,  likes:0 });
          })
          .catch((err) => console.log(err));
      };

 return (
   <div>
     <div className="dashboard">
       <h1>Like Dashboard</h1>
       <p>
         <Link to={"/"}>go to home</Link>
       </p>
     </div>
     <h2>{thing.name}</h2>
     <p>Likes: {thing.likes}</p>
     <div className="buttons">
        <button onClick={handleLikes}>Like</button>
       <button onClick={(e)=>{deleteThing(thing._id)}}> Delete This Thing</button>
       <button onClick={resetLikes}>Reset Likes</button>
       <button>
         <Link to={"/thing/edit/" + thing._id}>Change Name</Link>
       </button>
     </div>
   </div>
 );
}

export default Details;