# Vela Email Server

This is the backend server for handling contact form submissions from the Vela website.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

## Important: Gmail App Password

**Note:** Gmail no longer accepts regular passwords for third-party applications. You need to use an **App Password**.

### How to Generate a Gmail App Password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** if not already enabled
4. Scroll down to **App passwords** (this option only appears after 2-Step Verification is enabled)
5. Select **Mail** and **Other (Custom name)**
6. Enter "Vela Website" as the name
7. Click **Generate**
8. Copy the 16-character password (without spaces)
9. Update the password in `server/index.js` with this app password

## API Endpoints

### POST /api/send-email
Sends an email from the contact form.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

**Response:**
- `200 OK`: Email sent successfully
- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Failed to send email

### GET /api/health
Health check endpoint to verify the server is running.

## Configuration

The server runs on port 3001 by default. Make sure this port is available or update the PORT constant in `index.js`.

The email is sent to: **ihorr30@gmail.com**
