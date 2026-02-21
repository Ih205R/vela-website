# Vela Website - Deployment Guide

Complete guide for deploying the Vela website to production using Vercel (frontend) and Render (backend).

---

## 📋 Prerequisites

Before deploying, ensure you have:
- [x] GitHub account
- [x] Vercel account (sign up at https://vercel.com)
- [x] Render account (sign up at https://render.com)
- [x] Gmail App Password configured
- [x] Git installed locally
- [x] Your project committed to a Git repository

---

## Part 1: Prepare Your Project for Deployment

### Step 1: Create GitHub Repository

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name: `vela-website`
   - Make it Public or Private
   - Don't initialize with README (we already have one)

2. **Push your code to GitHub:**
   ```bash
   cd /Users/ihorromanenko/Documents/Vela-webiste
   
   # Initialize git if not already done
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Vela website ready for deployment"
   
   # Add remote (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/vela-website.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Step 2: Prepare Environment Variables

Create a `.env.example` file in the root for documentation:
```bash
# Frontend environment variables (Vercel)
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## Part 2: Deploy Backend to Render

### Step 1: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Authorize Render to access your repositories

### Step 2: Create Web Service

1. **Click "New +" → "Web Service"**

2. **Connect Repository:**
   - Select your `vela-website` repository
   - Click "Connect"

3. **Configure Service:**
   ```
   Name:              vela-email-server
   Region:            Frankfurt (EU Central) or closest to you
   Branch:            main
   Root Directory:    server
   Runtime:           Node
   Build Command:     npm install
   Start Command:     npm start
   ```

4. **Select Plan:**
   - Choose "Free" plan (or paid plan for better performance)

5. **Environment Variables:**
   Click "Advanced" and add:
   ```
   EMAIL_USER=ihorr30@gmail.com
   EMAIL_PASS=vhoa scrf ugpx jxln
   PORT=3001
   NODE_ENV=production
   ```

6. **Click "Create Web Service"**
   - Render will automatically deploy your backend
   - Wait 2-3 minutes for deployment
   - Copy your service URL (e.g., `https://vela-email-server.onrender.com`)

### Step 3: Update Backend Code for Production

The backend needs to be updated to use environment variables:

**Update `server/index.js`:**
```javascript
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://vela-website.vercel.app', // Add your Vercel domain
    'https://your-custom-domain.com'   // Add custom domain if any
  ],
  credentials: true
}));
app.use(express.json());

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'ihorr30@gmail.com',
    pass: process.env.EMAIL_PASS || 'vhoa scrf ugpx jxln'
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER || 'ihorr30@gmail.com',
    to: process.env.EMAIL_USER || 'ihorr30@gmail.com',
    subject: \`Vela Contact Form: Message from \${name}\`,
    html: \`
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">New Contact Form Submission</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> \${name}</p>
          <p><strong>Email:</strong> \${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">\${message}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 12px;">
          This email was sent from the Vela website contact form.
        </p>
      </div>
    \`,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Vela email server is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Vela Email API', 
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      sendEmail: 'POST /api/send-email'
    }
  });
});

app.listen(PORT, () => {
  console.log(\`✓ Vela email server running on port \${PORT}\`);
});
```

**Commit and push changes:**
```bash
git add server/index.js
git commit -m "Update backend for production deployment"
git push origin main
```

Render will automatically redeploy when you push to main.

### Step 4: Test Backend

Test your deployed backend:
```bash
# Health check
curl https://vela-email-server.onrender.com/api/health

# Should return:
# {"status":"OK","message":"Vela email server is running","timestamp":"..."}
```

---

## Part 3: Deploy Frontend to Vercel

### Step 1: Update Frontend API URL

**Create `vite.config.js` (if not exists) or update it:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'gsap-vendor': ['gsap']
        }
      }
    }
  }
})
```

**Update `src/components/Contact.jsx`:**
```javascript
// Update the handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const newErrors = validateForm();
  
  if (Object.keys(newErrors).length === 0) {
    try {
      // Use environment variable or fallback
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      
      const response = await fetch(\`\${apiUrl}/api/send-email\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: '✓ Message sent successfully! We\\'ll be in touch soon.' }
        }));
        
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: '✗ Failed to send message. Please try again later.' }
      }));
    }
  } else {
    setErrors(newErrors);
  }
};
```

**Create `.env.production` file in the root:**
```
VITE_API_URL=https://vela-email-server.onrender.com
```

**Add to `.gitignore`:**
```
.env.local
.env.production.local
```

**Commit changes:**
```bash
git add .
git commit -m "Configure frontend for production deployment"
git push origin main
```

### Step 2: Deploy to Vercel

**Option A: Using Vercel Dashboard (Recommended)**

1. **Go to https://vercel.com/new**

2. **Import Git Repository:**
   - Click "Import Git Repository"
   - Select your `vela-website` repository
   - Click "Import"

3. **Configure Project:**
   ```
   Project Name:       vela-website
   Framework Preset:   Vite
   Root Directory:     ./
   Build Command:      npm run build
   Output Directory:   dist
   Install Command:    npm install
   ```

4. **Environment Variables:**
   Click "Environment Variables" and add:
   ```
   VITE_API_URL=https://vela-email-server.onrender.com
   ```
   (Replace with your actual Render backend URL)

5. **Click "Deploy"**
   - Vercel will build and deploy your site
   - Wait 2-3 minutes
   - You'll get a URL like `https://vela-website.vercel.app`

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd /Users/ihorromanenko/Documents/Vela-webiste
vercel

# Follow the prompts:
# - Set up and deploy: Y
# - Which scope: Your account
# - Link to existing project: N
# - Project name: vela-website
# - In which directory is your code: ./
# - Auto-detected Vite, continue: Y
# - Override build command: N
# - Override output directory: N

# Deploy to production
vercel --prod
```

### Step 3: Update Backend CORS

After getting your Vercel URL, update the backend CORS:

**In Render Dashboard:**
1. Go to your `vela-email-server` service
2. Click "Environment"
3. Add new variable:
   ```
   ALLOWED_ORIGINS=https://vela-website.vercel.app,https://your-custom-domain.com
   ```

**Or update `server/index.js` directly:**
```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://vela-website.vercel.app',
    'https://vela-website-git-main-yourname.vercel.app' // Add all Vercel preview URLs
  ],
  credentials: true
}));
```

Commit and push changes.

---

## Part 4: Custom Domain (Optional)

### For Vercel (Frontend):

1. **Go to Project Settings:**
   - Open your project in Vercel
   - Click "Settings" → "Domains"

2. **Add Domain:**
   - Enter your domain: `www.vela-lang.dev`
   - Click "Add"
   - Follow DNS instructions

3. **DNS Configuration:**
   Add these records to your domain provider:
   ```
   Type    Name    Value
   CNAME   www     cname.vercel-dns.com
   A       @       76.76.21.21
   ```

### For Render (Backend):

1. **Go to Service Settings:**
   - Open your service in Render
   - Click "Settings" → "Custom Domains"

2. **Add Domain:**
   - Enter: `api.vela-lang.dev`
   - Add CNAME record to your DNS:
   ```
   Type    Name    Value
   CNAME   api     vela-email-server.onrender.com
   ```

3. **Update Frontend:**
   Update `.env.production`:
   ```
   VITE_API_URL=https://api.vela-lang.dev
   ```

---

## Part 5: Post-Deployment Testing

### Test Frontend:
1. Visit your Vercel URL: `https://vela-website.vercel.app`
2. Check all pages load correctly
3. Test navigation between pages
4. Verify cookie popup appears
5. Check Privacy Policy and Terms pages

### Test Contact Form:
1. Fill out the contact form
2. Click "Send Message"
3. Check for success toast
4. Verify email arrives at `ihorr30@gmail.com`

### Test Backend Health:
```bash
curl https://vela-email-server.onrender.com/api/health
```

---

## Part 6: Monitoring & Maintenance

### Vercel:
- **Analytics:** Enable Vercel Analytics in dashboard
- **Logs:** View deployment logs in Vercel dashboard
- **Redeploy:** Push to main branch auto-redeploys

### Render:
- **Logs:** View in Render dashboard → Logs tab
- **Metrics:** Check memory/CPU usage
- **Auto-deploy:** Enabled by default on push

### Keep Backend Alive:
Render free tier sleeps after 15 minutes of inactivity. To keep it alive:

**Option 1: Cron Job (Free)**
Use a service like https://cron-job.org:
```
URL: https://vela-email-server.onrender.com/api/health
Interval: Every 10 minutes
```

**Option 2: Upgrade to Paid Plan**
- Starts at $7/month
- No sleep time
- Better performance

---

## Part 7: Troubleshooting

### Frontend Issues:

**Build fails on Vercel:**
```bash
# Check build locally
npm run build

# If successful, commit any missing files
git add dist
git commit -m "Add build files"
git push
```

**Environment variables not working:**
- Ensure variables start with `VITE_`
- Redeploy after adding variables
- Clear cache: Settings → Clear Cache and Redeploy

### Backend Issues:

**CORS errors:**
- Update CORS origins in `server/index.js`
- Include all Vercel preview URLs
- Redeploy

**Emails not sending:**
- Check Gmail App Password in Render environment variables
- View logs in Render dashboard
- Test health endpoint

**Backend sleeps (Free tier):**
- First request after sleep takes 30-60 seconds
- Set up cron job to keep alive
- Or upgrade to paid plan

---

## Part 8: Complete Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed to Render
- [ ] Environment variables set in Render
- [ ] Backend health check passes
- [ ] Frontend deployed to Vercel
- [ ] Environment variables set in Vercel
- [ ] Frontend builds successfully
- [ ] Website loads correctly
- [ ] Cookie popup appears
- [ ] Navigation works
- [ ] Contact form sends emails
- [ ] Email received successfully
- [ ] Custom domain configured (optional)
- [ ] SSL/HTTPS enabled (automatic)
- [ ] Analytics configured (optional)

---

## Quick Reference

### URLs:
- **Frontend (Vercel):** https://vela-website.vercel.app
- **Backend (Render):** https://vela-email-server.onrender.com
- **Health Check:** https://vela-email-server.onrender.com/api/health

### Dashboards:
- **Vercel:** https://vercel.com/dashboard
- **Render:** https://dashboard.render.com
- **GitHub:** https://github.com/YOUR_USERNAME/vela-website

### Commands:
```bash
# Redeploy frontend
git push origin main

# Redeploy backend
git push origin main

# View frontend logs
vercel logs

# Manual deploy to Vercel
vercel --prod
```

---

## 🎉 Success!

Your Vela website is now live and ready for the world!

**Next Steps:**
1. Share your website URL
2. Monitor analytics and logs
3. Set up custom domain
4. Enable Vercel Analytics
5. Configure backup/monitoring alerts

For support, contact: ihorr30@gmail.com

---

Built with ❤️ for Vela
