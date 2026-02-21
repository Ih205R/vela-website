#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting Vela Website...${NC}\n"

# Check if server dependencies are installed
if [ ! -d "server/node_modules" ]; then
  echo -e "${BLUE}📦 Installing server dependencies...${NC}"
  cd server && npm install && cd ..
fi

# Check if frontend dependencies are installed
if [ ! -d "node_modules" ]; then
  echo -e "${BLUE}📦 Installing frontend dependencies...${NC}"
  npm install
fi

echo -e "\n${GREEN}✓ Dependencies installed${NC}\n"

# Start the email server in the background
echo -e "${BLUE}📧 Starting email server on port 3001...${NC}"
cd server && npm start &
SERVER_PID=$!
cd ..

# Wait a moment for the server to start
sleep 2

# Start the Vite dev server
echo -e "${BLUE}🌐 Starting Vite dev server...${NC}\n"
npm run dev &
VITE_PID=$!

# Function to cleanup on exit
cleanup() {
  echo -e "\n${BLUE}🛑 Shutting down servers...${NC}"
  kill $SERVER_PID 2>/dev/null
  kill $VITE_PID 2>/dev/null
  exit
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Keep the script running
echo -e "\n${GREEN}✓ All servers running!${NC}"
echo -e "${GREEN}Frontend: http://localhost:5173${NC}"
echo -e "${GREEN}Backend:  http://localhost:3001${NC}"
echo -e "\n${BLUE}Press Ctrl+C to stop all servers${NC}\n"

wait
