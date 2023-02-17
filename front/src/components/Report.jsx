import React, { useState } from 'react';
import axios from 'axios';

const Report = () => {
  const [userId, setUserId] = useState('');
  const [bikeId, setBikeId] = useState('');
  const [status, setStatus] = useState('PENDING');
  const [details, setDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/report', {
        userId,
        bikeId,
        status,
        details,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(parseInt(e.target.value))} />
      </label>
      <br />
      <label>
        Bike ID:
        <input type="text" value={bikeId} onChange={(e) => setBikeId(parseInt(e.target.value))} />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="PENDING">Pending</option>
          <option value="RESOLVED">Resolved</option>
        </select>
      </label>
      <br />
      <label>
        Details:
        <textarea value={details} onChange={(e) => setDetails(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit Report</button>
    </form>
  );
};

export default Report;
