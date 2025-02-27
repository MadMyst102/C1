# Cashier Management System

A real-time cashier management system built with React, TypeScript, and WebSocket.

## Features

- Add and manage cashiers
- Track cash sales and returns
- Real-time synchronization across multiple clients
- Generate and export reports as PDF
- Import/Export data functionality
- Arabic interface
- Multi-client support with real-time updates
- Data persistence across sessions

## Development Setup

1. Install dependencies:
```bash
# Install client dependencies
npm install

# Install server dependencies
cd server && npm install
```

2. Start the servers:
```bash
# Terminal 1 - Start WebSocket server
cd server && npm run dev

# Terminal 2 - Start React development server
npm run dev
```

3. Access the application:
- Client: http://localhost:5173
- WebSocket Server: ws://localhost:3000

## Docker Deployment

```bash
# Build and run using Docker Compose
docker-compose up -d
```

Access the application at http://localhost:5173

## Network Access

1. Find your local IP address:
   - Windows: `ipconfig`
   - Linux/Mac: `ifconfig` or `ip addr`

2. Other clients can access at:
   - http://YOUR_IP:5173

## Data Persistence

- Data syncs across clients via WebSocket
- Use export/import for backup/restore
- Docker deployment persists data in `./data`
