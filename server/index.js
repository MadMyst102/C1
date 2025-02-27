const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const setupWebSocket = require('./websocket');

const app = express();
const server = http.createServer(app);

// Enable CORS
app.use(cors());

// Setup WebSocket
const wsHandler = setupWebSocket(server);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// Backup endpoint
app.get('/backup', (req, res) => {
  const backup = {
    cashiers: wsHandler.getCashiers(),
    reports: wsHandler.getReports(),
    timestamp: new Date().toISOString()
  };
  res.json(backup);
});

// Restore endpoint
app.post('/restore', express.json(), (req, res) => {
  try {
    const { cashiers, reports } = req.body;
    wsHandler.updateData({ cashiers, reports });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
