import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link} from "react-router-dom";

const Update =(props) => {
    const { id } = useParams(); 
    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/thing/' + id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.log(err))
    }, [])

    const updateThing = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/thing/' + id, { name })
            .then(res => {
                console.log(res);
                navigate("/thing/" + id ); 
            })
            .catch(err => console.log(err))
    }

    return (
      <div>
        <div className="dashboard">
          <h1>Like Dashboard</h1>
          <p><Link to={"/"}>go to home</Link></p>
        </div>
        <p>Change the name of this thing</p>
        <p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </p>
        <button onClick={updateThing}>Change Name</button>
      </div>
    );
}

export default Update;