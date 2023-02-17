import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bike = () => {
  const [bikes, setBikes] = useState([]);
  const [bikeCode, setBikeCode] = useState('');
  const [status, setStatus] = useState('');
  const [locationId, setLocationId] = useState('');

  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/bike');
      setBikes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:3001/api/bike', {
        bikeCode,
        status,
        locationId,
      });
      fetchBikes();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:3001/api/bike/${id}`, {
        bikeCode,
        status,
        locationId,
      });
      fetchBikes();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/bike/${id}`);
      fetchBikes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Bikes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Bike Code</th>
            <th>Status</th>
            <th>Location ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bikes.map((bike) => (
            <tr key={bike.id}>
              <td>{bike.id}</td>
              <td>{bike.bikeCode}</td>
              <td>{bike.status}</td>
              <td>{bike.locationId}</td>
              <td>
                <button onClick={() => handleUpdate(bike.id)}>Update</button>
                <button onClick={() => handleDelete(bike.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Create Bike</h2>
      <form>
        <label>
          Bike Code:
          <input
            type="text"
            value={bikeCode}
            onChange={(e) => setBikeCode(e.target.value)}
          />
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="AVAILABLE">AVAILABLE</option>
            <option value="RESERVED">RESERVED</option>
            <option value="DAMAGED">DAMAGED</option>
            <option value="LOST">LOST</option>
        </select>
        </label>
        <label>
          Location ID:
          <input
            type="text"
            value={locationId}
            onChange={(e) => setLocationId(parseInt(e.target.value))}
          />
        </label>
        <button type="button" onClick={handleCreate}>
          Create Bike
        </button>
      </form>
    </div>
  );
};

export default Bike;
