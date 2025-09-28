# 🔄 ASPL Fusion - Development Workflow Reminder

## 🌿 **CURRENT BRANCH STATUS**
- **Active Branch**: `testing` ✅
- **Local Server**: Running on `http://localhost:3000` or `http://localhost:3001` ✅
- **Development Mode**: Active for testing and development ✅

## 📋 **DEVELOPMENT WORKFLOW RULES**

### **✅ ALWAYS WORK ON TESTING BRANCH**
- All changes must be made on the `testing` branch
- Never make direct changes to `main` branch
- Use `git checkout testing` before making any changes

### **🔄 CHANGE WORKFLOW**
1. **Make changes** on `testing` branch
2. **Test locally** with `npm run dev`
3. **Commit changes** to `testing` branch
4. **Push to testing** for stakeholder review
5. **Wait for explicit approval** before merging to `main`

### **🚀 PRODUCTION DEPLOYMENT**
- **ONLY** merge to `main` when explicitly requested
- **ONLY** after stakeholder approval
- **ONLY** after thorough testing in testing environment

## 🛠️ **CURRENT SETUP**

### **Local Development**
```bash
# Current status
Branch: testing
Server: http://localhost:3000 (or 3001)
Status: Ready for development
```

### **Available Commands**
```bash
# Test locally
./scripts/test-local.sh

# Deploy to testing environment
./scripts/deploy-testing.sh

# Deploy to production (ONLY when requested)
./scripts/deploy-production.sh

# Quick deploy menu
./scripts/quick-deploy.sh
```

## ⚠️ **IMPORTANT REMINDERS**

### **DO NOT**
- ❌ Make changes directly to `main` branch
- ❌ Merge to `main` without explicit request
- ❌ Deploy to production without stakeholder approval
- ❌ Skip testing environment

### **ALWAYS DO**
- ✅ Work on `testing` branch
- ✅ Test changes locally first
- ✅ Get stakeholder approval before production
- ✅ Use the deployment scripts
- ✅ Follow the established workflow

## 📊 **BRANCH STRATEGY**

### **Testing Branch (`testing`)**
- **Purpose**: Development and stakeholder review
- **URL**: `https://asplfusion-testing.vercel.app` (after Vercel setup)
- **Changes**: All development work happens here
- **Deployment**: Automatic preview deployment

### **Main Branch (`main`)**
- **Purpose**: Production-ready code
- **URL**: `https://asplfusion.com` (after Vercel setup)
- **Changes**: Only after explicit merge request
- **Deployment**: Production deployment

## 🎯 **NEXT STEPS**

1. **Continue development** on `testing` branch
2. **Test changes locally** as you make them
3. **Commit and push** to `testing` for stakeholder review
4. **Wait for explicit request** to merge to `main`
5. **Use deployment scripts** for all deployments

## 📞 **WORKFLOW CONFIRMATION**

**Current Status**: ✅ Ready for development on testing branch
**Local Server**: ✅ Running and accessible
**Workflow**: ✅ Proper branch strategy in place
**Next Action**: Make changes on testing branch as needed

---

**Remember**: All changes go through `testing` → stakeholder review → explicit approval → `main` → production deployment.
