#!/bin/bash

# ASPL Fusion - Deploy to Testing Environment
# This script deploys changes to the testing branch for stakeholder review

echo "🚀 ASPL Fusion - Deploying to Testing Environment..."

# Check if we're in the right directory
if [ ! -f "react-app/package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Ensure we're on testing branch
echo "📝 Ensuring we're on testing branch..."
current_branch=$(git branch --show-current)
if [ "$current_branch" != "testing" ]; then
    echo "⚠️  Currently on $current_branch branch. Switching to testing..."
    git checkout testing
fi

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin testing

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

# Go back to root and commit any changes
cd ..
echo "💾 Committing changes..."
git add .
git commit -m "feat: Deploy to testing environment - $(date '+%Y-%m-%d %H:%M:%S')"

# Push to trigger Vercel preview deployment
echo "🚀 Pushing to testing branch..."
git push origin testing

echo ""
echo "✅ Testing deployment triggered!"
echo "📍 Check Vercel dashboard for preview URL"
echo "📍 Preview URL will be: https://asplfusion-testing.vercel.app"
echo ""
echo "📋 Next steps:"
echo "   1. Wait for Vercel deployment to complete"
echo "   2. Test the preview URL thoroughly"
echo "   3. Share preview URL with stakeholders"
echo "   4. Collect feedback and make necessary changes"
echo "   5. When ready, run ./scripts/deploy-production.sh"
