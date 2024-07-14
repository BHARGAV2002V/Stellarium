const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/star', async (req, res) => {
  const { name } = req.query;
  try {
    const response = await axios.get(`http://localhost:8090/api/objects/info?name=${name}`);
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching star data:', error);
    res.status(500).send('Error fetching star data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
