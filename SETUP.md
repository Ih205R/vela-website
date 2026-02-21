# Vela Website - Complete Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Gmail account with App Password configured

### Installation

1. **Clone or navigate to the project:**
```bash
cd /Users/ihorromanenko/Documents/Vela-webiste
```

2. **Install frontend dependencies:**
```bash
npm install
```

3. **Install server dependencies:**
```bash
cd server
npm install
cd ..
```

## 📧 Email Configuration (Important!)

The contact form sends emails using Gmail. You **must** configure a Gmail App Password:

### Step 1: Enable 2-Step Verification
1. Go to https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Under "How you sign in to Google", click **2-Step Verification**
4. Follow the steps to enable it

### Step 2: Generate App Password
1. Go back to **Security**
2. Click **App passwords** (only visible after 2-Step Verification is enabled)
3. Select app: **Mail**
4. Select device: **Other (Custom name)**
5. Enter name: **Vela Website**
6. Click **Generate**
7. Copy the 16-character password (spaces don't matter)

### Step 3: Update Server Configuration
1. Open `server/index.js`
2. Find the `transporter` configuration (around line 11)
3. The password has already been configured with your App Password

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ihorr30@gmail.com',
    pass: 'vhoa scrf ugpx jxln'  // ✓ Configured
  }
});
```

## 🎯 Running the Application

### Option 1: Run Both Servers Together (Recommended)
```bash
npm run start:all
```
or
```bash
./start.sh
```

This will start:
- Frontend on http://localhost:5173
- Backend on http://localhost:3001

Press `Ctrl+C` to stop both servers.

### Option 2: Run Servers Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server
```
or
```bash
cd server
npm start
```

## 🧪 Testing the Contact Form

1. Open http://localhost:5173 in your browser
2. Navigate to the "Contact Us" section
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Click "Send Message"
5. You should see a success toast notification
6. Check ihorr30@gmail.com for the email

## 🏗️ Project Structure

```
Vela-website/
├── src/                    # Frontend React app
│   ├── components/         # React components
│   ├── App.jsx            # Main app
│   └── main.jsx           # Entry point
├── server/                # Backend email server
│   ├── index.js           # Express server with Nodemailer
│   ├── package.json       # Server dependencies
│   └── README.md          # Server documentation
├── public/                # Static assets
├── package.json           # Frontend dependencies
└── start.sh              # Script to run both servers
```

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run server` - Start email server
- `cd server && npm start` - Start email server (alternative)

### Combined
- `npm run start:all` - Start both frontend and backend
- `./start.sh` - Start both servers (alternative)

## 🐛 Troubleshooting

### Email Not Sending
1. **Check Gmail App Password:** Make sure you're using an App Password, not your regular Gmail password
2. **2-Step Verification:** Ensure 2-Step Verification is enabled on your Google account
3. **Check Console:** Look for errors in the terminal running the server
4. **CORS Issues:** Make sure the backend is running on port 3001

### Backend Not Starting
- Check if port 3001 is already in use: `lsof -i :3001`
- Kill the process: `kill -9 <PID>`

### Frontend Not Connecting to Backend
- Ensure the backend is running on http://localhost:3001
- Check browser console for CORS errors
- Verify the fetch URL in `Contact.jsx` matches the server URL

## 📝 Email Configuration Details

**Email Sender:** ihorr30@gmail.com  
**Email Recipient:** ihorr30@gmail.com  
**SMTP Service:** Gmail  
**Port:** 3001 (API server)  

All contact form submissions will be sent to the configured email address with:
- Sender's name
- Sender's email (set as reply-to)
- Message content
- Formatted HTML email template

## 🔒 Security Notes

⚠️ **Important:** Never commit your Gmail App Password to version control!

- The password is currently hardcoded in `server/index.js`
- For production, use environment variables:
  ```javascript
  pass: process.env.EMAIL_PASS
  ```
- Create a `.env` file in the `server/` directory (already gitignored)

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the `dist` folder
```

### Backend (Heroku/Railway/Render)
Deploy the `server` folder as a separate Node.js app.

Update the fetch URL in `Contact.jsx`:
```javascript
const response = await fetch('https://your-backend-url.com/api/send-email', {
  // ...
});
```

## 📞 Support

For issues or questions:
- Check `server/README.md` for backend-specific docs
- Review the main `README.md` for project overview
- Contact: ihorr30@gmail.com

---

Built with ❤️ for Vela
