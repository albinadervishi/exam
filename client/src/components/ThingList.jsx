import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const ThingList= (props) => {
    const {thing, setThing} = props;
    const {id} = useParams();

    thing.sort((a, b) =>
      a.likes > b.likes ? -1 : 1
    );

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/thing")
    	.then((res)=>{
            setThing(res.data.things);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])


    const handleLikes = (thingId) => {
        axios
          .post(`http://localhost:8000/api/thing/${thingId}`)
          .then((res) => {
            const updatedThing = thing.map((thing) => {
                if (thing._id === thingId) {
                  return { ...thing, likes: thing.likes + 1 };
                }
                return thing;
              });
              setThing(updatedThing);
            })
          .catch((err) => console.log(err));
      };
    
    return (
      <div>
        <p>Like these things!</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Things</th>
              <th scope="col">Likes</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {thing.map((thing, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td><Link to={`/thing/${thing._id}`}><p>{thing.name}</p></Link></td>
                <td>{thing.likes}</td>
                <td><button onClick={() => handleLikes(thing._id)}>Like</button><button><Link to={`/thing/edit/${thing._id}`}>Edit</Link></button></td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
}
export default ThingList;