const express = require('express');
const { getData, getDataById, addUser, updateUser, deleteUser } = require('../Controller/Controller');

const router = express.Router();

// Fetch all data with sorting and filtering
router.get('/data', (req, res) => {
  const { sort, filter } = req.query;
  let data = getData();

  // Basic filtering
  if (filter) {
    data = data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
  }

  // Basic sorting
  if (sort) {
    const [key, order] = sort.split(':');
    data = data.sort((a, b) => {
      if (a[key] < b[key]) return order === 'desc' ? 1 : -1;
      if (a[key] > b[key]) return order === 'desc' ? -1 : 1;
      return 0;
    });
  }

  // Return the count and the data
  res.json({
    count: data.length,
    data: data
  });
});

// Fetch data by ID
router.get('/data/:id', (req, res) => {
  const { id } = req.params;
  const item = getDataById(id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Add a new user
router.post('/data', (req, res) => {
  const newUser = req.body;
  
  if (!newUser || !newUser.id) {
    return res.status(400).json({ message: 'Invalid user data' });
  }

  try {
    const addedUser = addUser(newUser);
    res.status(201).json(addedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an existing user
router.put('/data/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  const result = updateUser(id, updatedUser);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user
router.delete('/data/:id', (req, res) => {
  const { id } = req.params;
  const deletedUser = deleteUser(id);

  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
