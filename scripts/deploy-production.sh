#!/bin/bash

# ASPL Fusion - Deploy to Production Environment
# This script deploys approved changes to production

echo "🚀 ASPL Fusion - Deploying to Production Environment..."

# Check if we're in the right directory
if [ ! -f "react-app/package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Confirmation prompt
echo "⚠️  WARNING: This will deploy to PRODUCTION!"
echo "📍 Production URL: https://asplfusion.com"
echo ""
read -p "Have you tested the changes in the testing environment? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled. Please test in testing environment first."
    exit 1
fi

read -p "Have stakeholders approved the changes? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled. Please get stakeholder approval first."
    exit 1
fi

# Switch to main branch
echo "📝 Switching to main branch..."
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Merge testing branch
echo "🔄 Merging testing branch..."
git merge testing

if [ $? -eq 0 ]; then
    echo "✅ Merge successful!"
else
    echo "❌ Merge failed! Please resolve conflicts manually."
    exit 1
fi

# Build and test
echo "🔨 Building and testing..."
cd react-app
npm install
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi

# Go back to root and push to production
cd ..
echo "🚀 Pushing to production..."
git push origin main

echo ""
echo "✅ Production deployment triggered!"
echo "📍 Production URL: https://asplfusion.com"
echo ""
echo "📋 Post-deployment checklist:"
echo "   1. Verify website loads correctly"
echo "   2. Test all forms and functionality"
echo "   3. Check Google Analytics is tracking"
echo "   4. Monitor for any errors"
echo "   5. Notify stakeholders of go-live"
echo ""
echo "🎉 Deployment complete! Monitor the site closely for the first few hours."
