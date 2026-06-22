# Inventory Management System MREN - Deployment Guide

## 🚀 Quick Start Deployment

### Prerequisites
- GitHub Account
- Vercel Account (vercel.com)
- Node.js 18+ installed locally

---

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `Inventory-Management-System-MREN`
3. Description: `Inventory Management System using MREN Stack`
4. Choose **Public** (for easy deployment)
5. Click **Create repository**

---

## Step 2: Update Git Remote & Push to GitHub

```bash
# Navigate to your project
cd "c:\Users\navee\OneDrive\Desktop\pro\Inventory-Management-System-MREN"

# Update the git remote to your new repository
git remote set-url origin https://github.com/Inventory/Inventory-Management-System-MREN.git

# Push to GitHub
git push -u origin main
```

---

## Step 3: Deploy Backend to Vercel

### Option A: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to backend directory
cd backend

# Deploy
vercel
```

**When prompted:**
- Link to existing project? → **No**
- Set project name → `inventory-management-backend`
- Set production folder → **Default (Server.js)**

### Option B: Deploy via Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Select **backend** folder as root directory
5. Add environment variables:
   ```
   MONGO_URI=mongodb://naveenbhumarapu369_db_user:Naveen177@ac-dh52hes-shard-00-00.hhdxkj0.mongodb.net:27017,ac-dh52hes-shard-00-01.hhdxkj0.mongodb.net:27017,ac-dh52hes-shard-00-02.hhdxkj0.mongodb.net:27017/NVN?ssl=true&replicaSet=atlas-n68q91-shard-0&authSource=admin&appName=Cluster0
   JWT_SECRET=nvnsecret
   NODE_ENV=production
   ```
6. Click **Deploy**

**Backend URL will be:** `https://inventory-management-backend-<random>.vercel.app`

---

## Step 4: Deploy Frontend to Vercel

### After Backend Deployment, Update Frontend

1. Copy your backend URL (e.g., `https://inventory-management-backend-xyz.vercel.app`)
2. Update `frontend/.env`:
   ```
   VITE_API_URL=https://inventory-management-backend-xyz.vercel.app
   ```

### Deploy Frontend

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Select **frontend** folder as root directory
5. Build & Output Settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variables:
   ```
   VITE_API_URL=https://inventory-management-backend-xyz.vercel.app
   ```
7. Click **Deploy**

**Frontend URL will be:** `https://inventory-management-system-mren-<random>.vercel.app`

---

## Step 5: Update CORS in Backend (If Needed)

The backend `server.js` already includes both frontend URLs:
```javascript
cors({
  origin: process.env.NODE_ENV === "production" 
    ? ["https://inventory-management-system-mren.vercel.app", "https://inventory-management-system-mren-chi.vercel.app"]
    : "http://localhost:5173",
  credentials: true,
})
```

Update these URLs in `backend/server.js` if your Vercel URLs are different.

---

## Environment Variables Summary

### Backend (.env)
```
MONGO_URI=mongodb://naveenbhumarapu369_db_user:Naveen177@ac-dh52hes-shard-00-00.hhdxkj0.mongodb.net:27017,ac-dh52hes-shard-00-01.hhdxkj0.mongodb.net:27017,ac-dh52hes-shard-00-02.hhdxkj0.mongodb.net:27017/NVN?ssl=true&replicaSet=atlas-n68q91-shard-0&authSource=admin&appName=Cluster0
JWT_SECRET=nvnsecret
PORT=5000
NODE_ENV=production
```

### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.vercel.app
```

---

## Changes Made for Deployment ✅

- ✅ Environment variable support added
- ✅ Dynamic API URL configuration (all hardcoded URLs replaced)
- ✅ CORS configuration updated for production
- ✅ Vercel configuration files created (vercel.json)
- ✅ Config module created (frontend/src/config.js)
- ✅ All pages updated to use environment variables
- ✅ Changes committed to Git

---

## Testing Before Deployment

### Local Testing
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (in another terminal)
cd frontend
npm install
npm run dev
```

### Environment Variables (Local)
- Create `backend/.env` with the variables above
- Create `frontend/.env` with `VITE_API_URL=http://localhost:5000`

---

## Troubleshooting

### CORS Errors
- Ensure backend CORS includes your frontend URL
- Check network tab in browser for actual error

### 403 Errors on API Calls
- Verify backend is running
- Check environment variables are set correctly
- Verify MongoDB connection string is valid

### Vercel Deployment Issues
- Check logs: `vercel logs`
- Ensure all dependencies are in package.json
- Check Node version compatibility

---

## Support Resources
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Vite Docs: https://vitejs.dev/

---

**Status:** ✅ Code ready for deployment. Follow the steps above to go live!
