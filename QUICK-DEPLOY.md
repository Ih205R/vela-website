# Quick Deployment Guide - Vela Website

## 🚀 Fast Track Deployment

### Prerequisites (5 minutes)
1. Create GitHub account: https://github.com/join
2. Create Vercel account: https://vercel.com/signup (use GitHub login)
3. Create Render account: https://render.com/register (use GitHub login)

---

## Step 1: Push to GitHub (2 minutes)

```bash
cd /Users/ihorromanenko/Documents/Vela-webiste

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Vela website"

# Create repository on GitHub first, then:
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/vela-website.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy Backend to Render (5 minutes)

1. **Go to:** https://dashboard.render.com
2. **Click:** "New +" → "Web Service"
3. **Connect:** Your `vela-website` repository
4. **Configure:**
   ```
   Name:           vela-email-server
   Root Directory: server
   Runtime:        Node
   Build Command:  npm install
   Start Command:  npm start
   ```
5. **Add Environment Variables:**
   ```
   EMAIL_USER=ihorr30@gmail.com
   EMAIL_PASS=vhoa scrf ugpx jxln
   PORT=3001
   NODE_ENV=production
   ```
6. **Click:** "Create Web Service"
7. **Wait:** 2-3 minutes for deployment
8. **Copy:** Your backend URL (e.g., `https://vela-email-server.onrender.com`)

---

## Step 3: Deploy Frontend to Vercel (3 minutes)

1. **Update `.env.production` with your Render URL:**
   ```
   VITE_API_URL=https://vela-email-server.onrender.com
   ```
   Replace with YOUR actual Render URL from Step 2

2. **Commit the change:**
   ```bash
   git add .env.production
   git commit -m "Add production API URL"
   git push origin main
   ```

3. **Go to:** https://vercel.com/new
4. **Click:** "Import Git Repository"
5. **Select:** Your `vela-website` repository
6. **Configure:**
   ```
   Framework Preset: Vite
   Root Directory:   ./
   Build Command:    npm run build
   Output Directory: dist
   ```
7. **Add Environment Variable:**
   ```
   Name:  VITE_API_URL
   Value: https://vela-email-server.onrender.com
   ```
   (Use YOUR Render URL)

8. **Click:** "Deploy"
9. **Wait:** 2-3 minutes
10. **Done!** You'll get a URL like: `https://vela-website.vercel.app`

---

## Step 4: Test Your Deployment (2 minutes)

1. **Visit your Vercel URL:** `https://vela-website.vercel.app`
2. **Test the contact form:**
   - Fill out name, email, message
   - Click "Send Message"
   - Check `ihorr30@gmail.com` for the email

3. **Test backend health:**
   ```bash
   curl https://vela-email-server.onrender.com/api/health
   ```

---

## 🎉 You're Live!

Your website is now deployed and accessible worldwide!

**Frontend:** https://vela-website.vercel.app  
**Backend:** https://vela-email-server.onrender.com

### Next Steps:
- Share your website URL
- Add custom domain (optional)
- Enable Vercel Analytics
- Set up uptime monitoring

---

## 🐛 Common Issues

**Contact form not working?**
- Check Render environment variables (EMAIL_USER, EMAIL_PASS)
- Verify backend URL in `.env.production` is correct
- Check Render logs for errors

**Build failed on Vercel?**
- Check build logs
- Test locally: `npm run build`
- Ensure all dependencies are in package.json

**Backend sleeping?**
- Render free tier sleeps after 15 min
- First request may take 30-60 seconds
- Set up cron job or upgrade plan

---

## 📚 Full Documentation

For detailed instructions, see: **DEPLOYMENT.md**

---

**Need Help?** Contact: ihorr30@gmail.com
