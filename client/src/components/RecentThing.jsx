import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentThings = () => {
  const [things, setThings] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/thing')
      .then((response) => {
        const sortedThings = response.data.things.sort((a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        const recentThings = sortedThings.slice(0, 3);
        setThings(recentThings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>3 recent things:</p>
      <ul>
        {things.map((thing) => (
          <li key={thing._id}>{thing.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentThings;



