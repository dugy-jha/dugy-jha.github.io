#!/bin/bash

# ASPL Fusion - Quick Deploy Script
# This script provides a menu for common deployment tasks

echo "🚀 ASPL Fusion - Quick Deploy Menu"
echo "=================================="
echo ""
echo "Select an option:"
echo "1. Test locally (start dev server)"
echo "2. Deploy to testing environment"
echo "3. Deploy to production"
echo "4. Check deployment status"
echo "5. Rollback to previous version"
echo "6. Exit"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo "🧪 Starting local testing..."
        ./scripts/test-local.sh
        ;;
    2)
        echo "🚀 Deploying to testing..."
        ./scripts/deploy-testing.sh
        ;;
    3)
        echo "🚀 Deploying to production..."
        ./scripts/deploy-production.sh
        ;;
    4)
        echo "📊 Checking deployment status..."
        echo "📍 Production: https://asplfusion.com"
        echo "📍 Testing: https://asplfusion-testing.vercel.app"
        echo "📍 Vercel Dashboard: https://vercel.com/dashboard"
        echo ""
        echo "Current branch: $(git branch --show-current)"
        echo "Last commit: $(git log -1 --oneline)"
        ;;
    5)
        echo "⚠️  Rollback to previous version..."
        read -p "Are you sure? This will revert the last commit. (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            git reset --hard HEAD~1
            git push --force origin main
            echo "✅ Rollback complete!"
        else
            echo "❌ Rollback cancelled."
        fi
        ;;
    6)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid option. Please run the script again."
        exit 1
        ;;
esac
