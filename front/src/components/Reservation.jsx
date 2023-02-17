import React, { useState } from 'react';
import axios from 'axios';

const Reservation = () => {
  const [userId, setUserId] = useState('');
  const [bikeId, setBikeId] = useState('');
  const [status, setStatus] = useState('ACTIVE');
  const [locationId, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/reservation', {
        userId,
        bikeId,
        status,
        locationId,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="bikeId">Bike ID:</label>
        <input
          type="text"
          id="bikeId"
          value={bikeId}
          onChange={(e) => setBikeId(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="ACTIVE">Active</option>
          <option value="COMPLETED">Completed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={locationId}
          onChange={(e) => setLocation(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Reservation;
