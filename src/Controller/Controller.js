const fs = require('fs');
const path = require('path');
const axios = require('axios');

const filePath = path.join(__dirname, '..', '..', 'data', 'data.json');
const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';



// Fetch data from URL and save to file
const fetchData = async () => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('Data fetched and saved successfully.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};




// Get all data from file
const getData = () => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};




// Get data by ID
const getDataById = (id) => {
  const data = getData();
  return data.find(item => item.id === id); 
};





// Add a new user
const addUser = (newUser) => {
  const data = getData();
  // Check if user with same ID already exists
  if (data.find(item => item.id === newUser.id)) {
    throw new Error('User with this ID already exists');
  }
  data.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return newUser;
};




// Update an existing user
const updateUser = (id, updatedUser) => {
  const data = getData();
  const index = data.findIndex(item => item.id === id);

  if (index !== -1) {
    data[index] = { ...data[index], ...updatedUser };
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return data[index];
  }

  return null;
};





// Delete a user
const deleteUser = (id) => {
  let data = getData();
  const index = data.findIndex(item => item.id === id);

  if (index !== -1) {
    const [deletedUser] = data.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return deletedUser;
  }

  return null;
};



module.exports = { fetchData, getData, getDataById, addUser, updateUser, deleteUser };
