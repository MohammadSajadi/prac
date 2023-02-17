import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/return';

const Return = () => {
  const [userId, setUserId] = useState('');
  const [bikeId, setBikeId] = useState('');
  const [locationId, setLocationId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, {
        userId,
        bikeId, 
        locationId
      });
      console.log(response.data);
      // Reset form values
      setUserId('');
      setBikeId('');
      setLocationId('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(parseInt(e.target.value))}
        />
      </label>
      <label>
        Bike ID:
        <input
          type="text"
          value={bikeId}
          onChange={(e) => setBikeId(parseInt(e.target.value))}
        />
      </label>
      <label>
        LocationId:
        <input
          type="text"
          value={locationId}
          onChange={(e) => setLocationId(parseInt(e.target.value))}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Return;

