# 🚀 Deployment Guide - Survtyx Portfolio

## FREE Hosting with Custom Domain (Recommended: Vercel)

---

## Option 1: Vercel (RECOMMENDED) ⭐

**Why Vercel?**
- ✅ **100% FREE** for personal projects
- ✅ Custom domain included (FREE SSL)
- ✅ Automatic deployments from Git
- ✅ Lightning fast CDN
- ✅ Perfect for React/Vite apps
- ✅ Zero configuration needed

### Step-by-Step Guide

#### **Part A: Deploy to Vercel**

1. **Push your code to GitHub** (if not already)
   ```bash
   # Initialize git (if needed)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Survtyx portfolio"
   
   # Create repo on GitHub.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/survytx.git
   git branch -M main
   git push -u origin main
   ```

2. **Sign up for Vercel**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub" (easiest)
   - Authorize Vercel to access your GitHub

3. **Import Your Project**
   - Click "Add New..." → "Project"
   - Select your `survytx` repository
   - Click "Import"
   
4. **Configure Build Settings** (Auto-detected ✅)
   - Framework Preset: **Vite** (should auto-detect)
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
   - Install Command: `npm install` ✅
   
5. **Click "Deploy"**
   - Wait 1-2 minutes
   - Your site is live at `https://survytx.vercel.app` 🎉

#### **Part B: Add Your Custom Domain**

1. **Buy a domain** (if you don't have one)
   - **Namecheap**: $8-12/year (.com)
   - **Porkbun**: $7-10/year (.com) - Cheapest
   - **Google Domains**: $12/year
   - **Cloudflare Registrar**: $8-9/year (at cost pricing)

2. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Type your domain: `survtyx.com`
   - Click "Add"

3. **Configure DNS** (Choose ONE method)

   **Method A - Nameservers (Recommended - Easiest)**
   - Vercel will show you nameservers like:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```
   - Go to your domain registrar (Namecheap/Porkbun/etc)
   - Find "Nameservers" or "DNS Settings"
   - Change to "Custom Nameservers"
   - Add Vercel's nameservers
   - Save (takes 5-60 minutes to propagate)

   **Method B - DNS Records (Alternative)**
   - Add these DNS records at your registrar:
     ```
     Type: A
     Name: @ (or leave blank)
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

4. **Wait for SSL Certificate** (Automatic)
   - Vercel auto-generates FREE SSL (HTTPS)
   - Usually takes 5-10 minutes
   - Check status in Vercel dashboard

5. **Done! 🎉**
   - Your site is live at `https://survtyx.com`
   - HTTPS enabled automatically
   - Auto-deploys on every Git push

---

## Option 2: Netlify (Alternative)

**Great if you prefer Netlify's interface**

### Quick Steps:

1. **Push code to GitHub** (same as Vercel)

2. **Sign up at https://netlify.com**
   - Continue with GitHub
   
3. **Add New Site**
   - "Import from Git" → Select your repo
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

4. **Add Custom Domain**
   - Site Settings → Domain Management
   - Add custom domain
   - Follow DNS instructions (similar to Vercel)

**Limits**: 100GB bandwidth/month (plenty for portfolio)

---

## Option 3: Cloudflare Pages (Good for Speed)

1. **Sign up at https://pages.cloudflare.com**
2. **Connect GitHub**
3. **Configure Build**
   - Build command: `npm run build`
   - Output: `dist`
4. **Add Custom Domain**
   - If your domain is on Cloudflare: Automatic
   - If not: Add DNS records

**Bonus**: Fastest CDN, great analytics

---

## Option 4: GitHub Pages (Free but Limited)

⚠️ **Note**: Requires extra config for SPAs (Single Page Apps)

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/survytx",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Custom Domain**
   - Add `CNAME` file in `public/` with your domain
   - Configure DNS at registrar

**Limitation**: Doesn't support SPA routing as well as Vercel/Netlify

---

## 🎯 Recommendation

**For you, I recommend Vercel because:**

1. ✅ Zero configuration (we already added `vercel.json`)
2. ✅ Best for React/Vite apps
3. ✅ Automatic HTTPS
4. ✅ Perfect custom domain support
5. ✅ Auto-deploys from Git
6. ✅ Amazing developer experience

---

## 📊 Comparison Table

| Feature | Vercel | Netlify | Cloudflare Pages | GitHub Pages |
|---------|--------|---------|------------------|--------------|
| **Free Tier** | 100GB bandwidth | 100GB bandwidth | Unlimited | Unlimited |
| **Custom Domain** | ✅ Free | ✅ Free | ✅ Free | ✅ Free |
| **SSL/HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto |
| **Build Time** | Fast | Fast | Fastest | Slow |
| **SPA Support** | Perfect | Perfect | Perfect | Manual Config |
| **Best For** | React/Next | React/Gatsby | Any | Static Sites |

---

## 🔥 Quick Win Commands

Once you choose Vercel and have it deployed:

```bash
# Make a change to your site
# Edit any file

# Commit and push
git add .
git commit -m "Update hero text"
git push

# 🎉 Auto-deploys in 30 seconds!
```

---

## 🆘 Troubleshooting

### "Domain not working after 1 hour"
- Check DNS propagation: https://dnschecker.org
- Make sure you updated nameservers OR A records (not both)
- Clear browser cache (Ctrl+Shift+Delete)

### "Build failed on Vercel"
- Check build logs in Vercel dashboard
- Make sure `package.json` dependencies are correct
- Try building locally: `npm run build`

### "Images not loading"
- Make sure images are in `public/images/` folder
- Check image paths start with `/images/`
- Verify images are committed to Git

---

## 📧 Need Help?

If you get stuck during deployment, common issues:
1. DNS propagation takes 5-60 minutes (be patient)
2. Make sure you committed all files to Git
3. Check Vercel build logs for errors

---

**Total Time to Deploy**: 15-30 minutes (including domain setup)
**Cost**: $0 for hosting + $8-12/year for domain

Let's get your site live! 🚀

