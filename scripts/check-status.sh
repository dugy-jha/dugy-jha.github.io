#!/bin/bash

# ASPL Fusion - Status Check Script
# This script checks the current development status

echo "🔍 ASPL Fusion - Development Status Check"
echo "========================================"
echo ""

# Check current branch
current_branch=$(git branch --show-current)
echo "📝 Current Branch: $current_branch"

# Check if we're in the right directory
if [ ! -f "react-app/package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if development server is running
echo "🌐 Checking development server..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
    echo "✅ Development server running on http://localhost:3000"
elif curl -s -o /dev/null -w "%{http_code}" http://localhost:3001 | grep -q "200"; then
    echo "✅ Development server running on http://localhost:3001"
else
    echo "⚠️  Development server not running"
    echo "   Run: ./scripts/test-local.sh to start development server"
fi

# Check git status
echo ""
echo "📊 Git Status:"
git status --porcelain | head -10
if [ $(git status --porcelain | wc -l) -gt 10 ]; then
    echo "   ... and $(($(git status --porcelain | wc -l) - 10)) more files"
fi

# Check last commit
echo ""
echo "📝 Last Commit:"
git log -1 --oneline

# Check branch status
echo ""
echo "🌿 Branch Status:"
git branch -v

# Check if we're on testing branch
if [ "$current_branch" = "testing" ]; then
    echo ""
    echo "✅ WORKFLOW STATUS: Ready for development on testing branch"
    echo "📍 All changes will go through: testing → stakeholder review → main → production"
    echo ""
    echo "🚀 Available Commands:"
    echo "   ./scripts/test-local.sh          # Start local development"
    echo "   ./scripts/deploy-testing.sh      # Deploy to testing environment"
    echo "   ./scripts/deploy-production.sh   # Deploy to production (when requested)"
    echo "   ./scripts/quick-deploy.sh        # Interactive deployment menu"
else
    echo ""
    echo "⚠️  WARNING: Not on testing branch!"
    echo "   Run: git checkout testing"
    echo "   Then: ./scripts/test-local.sh"
fi

echo ""
echo "🎯 Ready for development! Make changes on the testing branch."
