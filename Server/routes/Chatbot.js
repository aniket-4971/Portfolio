const express = require('express');
const { getChatResponse } = require('../services/ai');
const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required and must be a string.' });
  }

  try {
    const reply = await getChatResponse(message);
    res.status(200).json({ reply });
  } catch (error) {
    console.error('Error processing chat message:', error.message);
    res.status(500).json({ error: 'Failed to process the request. Please try again later.' });
  }
});

module.exports = router;
