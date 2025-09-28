#!/bin/bash

# ASPL Fusion - Local Testing Script
# This script sets up local testing environment

echo "🧪 ASPL Fusion - Starting Local Testing..."

# Check if we're in the right directory
if [ ! -f "react-app/package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Switch to testing branch
echo "📝 Switching to testing branch..."
git checkout testing

# Install dependencies
echo "📦 Installing dependencies..."
cd react-app
npm install

# Run build test
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please fix errors before proceeding."
    exit 1
fi

# Start development server
echo "🚀 Starting development server..."
echo "📍 Local URL: http://localhost:3000"
echo "📍 Network URL: http://localhost:3001 (if port 3000 is busy)"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
