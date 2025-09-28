# ASPL Fusion - Deployment Pipeline & Workflow

## 🌿 **Branch Strategy**

### **Main Branch (`main`)**
- **Purpose**: Production-ready code
- **Deployment**: Auto-deploys to production Vercel
- **Access**: Only after testing and approval
- **URL**: `https://asplfusion.com` (production)

### **Testing Branch (`testing`)**
- **Purpose**: Development and testing
- **Deployment**: Auto-deploys to preview Vercel
- **Access**: For stakeholder review and feedback
- **URL**: `https://asplfusion-testing.vercel.app` (preview)

---

## 🔄 **Development Workflow**

### **1. Local Development (Testing Branch)**
```bash
# Switch to testing branch
git checkout testing

# Make your changes
# ... edit files ...

# Test locally
cd react-app
npm run dev

# Commit changes
git add .
git commit -m "feat: Description of changes"

# Push to testing branch
git push origin testing
```

### **2. Stakeholder Review**
- **Automatic**: Vercel creates preview deployment
- **URL**: Shared with stakeholders for feedback
- **Testing**: All features tested in preview environment
- **Feedback**: Collected and documented

### **3. Production Deployment**
```bash
# After stakeholder approval, merge to main
git checkout main
git merge testing
git push origin main

# This triggers production deployment
```

---

## 🚀 **Deployment Scripts**

### **Local Testing Script**
```bash
#!/bin/bash
# File: scripts/test-local.sh

echo "🧪 Starting local testing..."

# Switch to testing branch
git checkout testing

# Install dependencies
cd react-app
npm install

# Run tests
npm run build
npm run dev

echo "✅ Local testing complete. Visit http://localhost:3000"
```

### **Deploy to Testing Script**
```bash
#!/bin/bash
# File: scripts/deploy-testing.sh

echo "🚀 Deploying to testing environment..."

# Ensure we're on testing branch
git checkout testing

# Pull latest changes
git pull origin testing

# Build and test
cd react-app
npm install
npm run build

# Push to trigger Vercel preview
git push origin testing

echo "✅ Testing deployment triggered. Check Vercel dashboard for preview URL."
```

### **Deploy to Production Script**
```bash
#!/bin/bash
# File: scripts/deploy-production.sh

echo "🚀 Deploying to production..."

# Ensure we're on main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge testing branch
git merge testing

# Push to trigger production deployment
git push origin main

echo "✅ Production deployment triggered. Check Vercel dashboard for status."
```

---

## 📋 **Pre-Deployment Checklist**

### **Testing Branch Checklist**
- [ ] **Code Review**: All changes reviewed
- [ ] **Local Testing**: Tested on local development server
- [ ] **Build Test**: `npm run build` succeeds without errors
- [ ] **Linting**: No linting errors
- [ ] **Performance**: Core Web Vitals acceptable
- [ ] **Mobile**: Responsive design tested
- [ ] **Forms**: Contact and newsletter forms working
- [ ] **Analytics**: Google Analytics tracking active

### **Production Deployment Checklist**
- [ ] **Stakeholder Approval**: Feedback incorporated
- [ ] **Testing Complete**: All features tested in preview
- [ ] **Performance**: Optimized and fast loading
- [ ] **Security**: Headers and protection active
- [ ] **SEO**: Meta tags and structured data correct
- [ ] **Analytics**: Tracking configured and working
- [ ] **Backup**: Previous version backed up
- [ ] **Rollback Plan**: Ready to revert if needed

---

## 🔧 **Vercel Configuration**

### **Branch-Based Deployments**
```json
{
  "git": {
    "deploymentEnabled": {
      "main": true,
      "testing": true
    }
  },
  "github": {
    "autoAlias": false
  }
}
```

### **Environment Variables**
- **Production**: Set in Vercel dashboard for `main` branch
- **Testing**: Set in Vercel dashboard for `testing` branch
- **Local**: Use `.env.local` file (not committed)

---

## 📊 **Monitoring & Analytics**

### **Production Monitoring**
- **Uptime**: Vercel provides uptime monitoring
- **Performance**: Core Web Vitals tracking
- **Analytics**: Google Analytics 4 dashboard
- **Errors**: Error boundary logging
- **User Feedback**: Contact form submissions

### **Testing Monitoring**
- **Preview URLs**: Vercel preview deployments
- **Build Logs**: Vercel build logs for testing branch
- **Performance**: Preview environment performance
- **Stakeholder Feedback**: Documented feedback collection

---

## 🚨 **Emergency Procedures**

### **Rollback Process**
```bash
# Quick rollback to previous commit
git checkout main
git reset --hard HEAD~1
git push --force origin main

# Or rollback to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

### **Hotfix Process**
```bash
# Create hotfix branch from main
git checkout main
git checkout -b hotfix/issue-description

# Make urgent fixes
# ... fix critical issues ...

# Test quickly
npm run build

# Deploy directly to main (skip testing for critical fixes)
git checkout main
git merge hotfix/issue-description
git push origin main
```

---

## 📞 **Stakeholder Communication**

### **Testing Phase**
- **Share Preview URL**: Send Vercel preview link
- **Feedback Collection**: Use structured feedback form
- **Timeline**: Set clear review deadlines
- **Changes**: Document all requested changes

### **Production Launch**
- **Announcement**: Notify stakeholders of go-live
- **URL**: Share production URL
- **Monitoring**: Set up monitoring alerts
- **Support**: Provide contact for issues

---

## 🎯 **Best Practices**

### **Development**
- Always work on `testing` branch first
- Test locally before pushing
- Write descriptive commit messages
- Keep commits focused and atomic

### **Deployment**
- Never push directly to `main` without testing
- Always get stakeholder approval before production
- Monitor deployments closely
- Have rollback plan ready

### **Communication**
- Document all changes
- Share preview URLs promptly
- Collect feedback systematically
- Respond to issues quickly

---

## 📚 **Quick Reference**

### **Common Commands**
```bash
# Start local development
git checkout testing
cd react-app && npm run dev

# Deploy to testing
git push origin testing

# Deploy to production
git checkout main
git merge testing
git push origin main

# Check deployment status
vercel ls
```

### **Important URLs**
- **Production**: `https://asplfusion.com`
- **Testing**: `https://asplfusion-testing.vercel.app`
- **Vercel Dashboard**: `https://vercel.com/dashboard`
- **GitHub Repository**: `https://github.com/dugy-jha/dugy-jha.github.io`

This pipeline ensures safe, controlled deployments with proper testing and stakeholder approval before production releases.
