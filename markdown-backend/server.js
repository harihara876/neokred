const express = require('express');
const { marked } = require('marked');  // Update here
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/convert', (req, res) => {
  const { markdown } = req.body;
  try {
    const html = marked(markdown); // This will now work correctly
    res.json({ html });
  } catch (error) {
    res.status(500).json({ error: 'Markdown conversion failed.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
