const API_URL = 'https://api.example.com';

const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/data`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const addData = async (newData) => {
  try {
    const response = await fetch(`${API_URL}/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding data:', error);
    throw error;
  }
};

const updateData = async (id, newData) => {
  try {
    const response = await fetch(`${API_URL}/data/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

const partialUpdateData = async (id, newData) => {
  try {
    const response = await fetch(`${API_URL}/data/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

const deleteData = async (id) => {
  try {
    await fetch(`${API_URL}/data/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

export { fetchData, addData, updateData, partialUpdateData, deleteData };
