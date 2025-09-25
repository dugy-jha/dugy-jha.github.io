#!/bin/bash

# Build the React app
echo "Building React app..."
npm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete!"
echo "Your site should be available at: https://dugy-jha.github.io/"
