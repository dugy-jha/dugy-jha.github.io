# Vercel Setup Guide - Branch-Based Deployments

## 🎯 **Objective**
Set up Vercel to automatically deploy:
- **`testing` branch** → Preview environment for stakeholder review
- **`main` branch** → Production environment

## 🚀 **Vercel Dashboard Configuration**

### **Step 1: Import Project**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Import from GitHub: `dugy-jha/dugy-jha.github.io`
4. **Root Directory**: `react-app`
5. **Framework Preset**: Vite
6. **Build Command**: `npm run build`
7. **Output Directory**: `dist`

### **Step 2: Configure Branch Deployments**
1. Go to **Project Settings** → **Git**
2. Enable **"Production Branch"**: `main`
3. Enable **"Preview Deployments"**: `testing`
4. Set **"Auto-deploy"** for both branches

### **Step 3: Environment Variables**
Set these in **Project Settings** → **Environment Variables**:

#### **Production (main branch)**
```
VITE_GA_MEASUREMENT_ID=G-9YB22RMX5Y
VITE_BASE_URL=https://asplfusion.com
VITE_MAILCHIMP_API_KEY=your_production_key
VITE_MAILCHIMP_LIST_ID=your_production_list_id
```

#### **Preview (testing branch)**
```
VITE_GA_MEASUREMENT_ID=G-9YB22RMX5Y
VITE_BASE_URL=https://asplfusion-testing.vercel.app
VITE_MAILCHIMP_API_KEY=your_testing_key
VITE_MAILCHIMP_LIST_ID=your_testing_list_id
```

### **Step 4: Custom Domains (Optional)**
1. Go to **Project Settings** → **Domains**
2. Add custom domain for production: `asplfusion.com`
3. Configure DNS settings as instructed by Vercel

## 🔧 **Configuration Files**

### **vercel.json (Production)**
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 📊 **Deployment URLs**

### **Production**
- **URL**: `https://asplfusion.com` (or your custom domain)
- **Branch**: `main`
- **Trigger**: Push to main branch
- **Purpose**: Live website for users

### **Testing/Preview**
- **URL**: `https://asplfusion-testing.vercel.app`
- **Branch**: `testing`
- **Trigger**: Push to testing branch
- **Purpose**: Stakeholder review and feedback

## 🔄 **Deployment Workflow**

### **Testing Deployment**
```bash
# Make changes on testing branch
git checkout testing
# ... make changes ...
git add .
git commit -m "feat: Description of changes"
git push origin testing

# Vercel automatically creates preview deployment
# Share preview URL with stakeholders
```

### **Production Deployment**
```bash
# After stakeholder approval
git checkout main
git merge testing
git push origin main

# Vercel automatically deploys to production
```

## 📋 **Post-Setup Checklist**

- [ ] **Project imported** from GitHub
- [ ] **Root directory** set to `react-app`
- [ ] **Build settings** configured (Vite, npm run build, dist)
- [ ] **Branch deployments** enabled (main + testing)
- [ ] **Environment variables** set for both branches
- [ ] **Custom domain** configured (if applicable)
- [ ] **DNS settings** updated (if using custom domain)
- [ ] **Test deployment** by pushing to testing branch
- [ ] **Verify preview URL** works correctly
- [ ] **Test production deployment** by merging to main

## 🚨 **Troubleshooting**

### **Build Failures**
- Check **Build Logs** in Vercel dashboard
- Verify **Node.js version** (should be 18.x)
- Ensure **dependencies** are properly installed
- Check for **TypeScript errors** or **linting issues**

### **Environment Variables Not Working**
- Verify variables are set for the correct **branch**
- Check variable names start with **VITE_**
- Ensure **no typos** in variable names
- **Redeploy** after adding new variables

### **Custom Domain Issues**
- Verify **DNS settings** are correct
- Check **SSL certificate** status
- Ensure **domain is verified** in Vercel
- Wait for **DNS propagation** (up to 24 hours)

## 📞 **Support**

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **GitHub Issues**: https://github.com/dugy-jha/dugy-jha.github.io/issues

## 🎉 **Success Indicators**

✅ **Testing branch** pushes create preview deployments  
✅ **Main branch** pushes create production deployments  
✅ **Environment variables** are properly loaded  
✅ **Custom domain** resolves correctly  
✅ **Builds complete** without errors  
✅ **Website loads** and functions properly  

Once all items are checked, your deployment pipeline is ready for stakeholder review and production use!
