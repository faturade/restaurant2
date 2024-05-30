import React, { useState } from 'react';
import { fetchData, addData, updateData, partialUpdateData, deleteData } from "../api/api";
import { showSuccessAlert, showErrorAlert } from '../utils/alertutils';
import Button from './Button';

const MyComponent = () => {
  const [data, setData] = useState(null);

  const handleFetchData = async () => {
    try {
      const fetchedData = await fetchData();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddData = async (newData) => {
    try {
      await addData(newData);
      handleFetchData();
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleUpdateData = async (id, updatedData) => {
    try {
      await updateData(id, updatedData);
      handleFetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handlePartialUpdateData = async (id, partialUpdatedData) => {
    try {
      await partialUpdateData(id, partialUpdatedData);
      handleFetchData();
    } catch (error) {
      console.error('Error partially updating data:', error);
    }
  };

  const handleDeleteData = async (id) => {
    try {
      await deleteData(id);
      handleFetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
