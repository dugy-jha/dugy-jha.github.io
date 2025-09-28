# ASPL Fusion Website

A modern, production-ready website for ASPL Fusion - India's pioneering fusion energy company.

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/dugy-jha/dugy-jha.github.io.git
cd dugy-jha.github.io

# Switch to testing branch
git checkout testing

# Install dependencies
cd react-app
npm install

# Start development server
npm run dev
```

### Using Deployment Scripts
```bash
# Quick deploy menu
./scripts/quick-deploy.sh

# Or individual commands
./scripts/test-local.sh          # Test locally
./scripts/deploy-testing.sh      # Deploy to testing
./scripts/deploy-production.sh   # Deploy to production
```

## 🌿 Branch Strategy

- **`main`**: Production-ready code (auto-deploys to production)
- **`testing`**: Development and testing (auto-deploys to preview)

## 📋 Development Workflow

1. **Work on `testing` branch**
2. **Test locally** with `npm run dev`
3. **Deploy to testing** for stakeholder review
4. **Get approval** from stakeholders
5. **Merge to `main`** for production deployment

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
react-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── styles/        # CSS stylesheets
│   ├── utils/         # Utility functions
│   └── assets/        # Images and static assets
├── public/            # Public assets
├── config/            # Configuration files
├── scripts/           # Deployment scripts
└── docs/              # Documentation
```

## 🚀 Deployment

### Testing Environment
- **URL**: `https://asplfusion-testing.vercel.app`
- **Trigger**: Push to `testing` branch
- **Purpose**: Stakeholder review and feedback

### Production Environment
- **URL**: `https://asplfusion.com`
- **Trigger**: Push to `main` branch
- **Purpose**: Live website for users

## 🔧 Configuration

### Environment Variables
- `VITE_GA_MEASUREMENT_ID`: Google Analytics ID
- `VITE_BASE_URL`: Base URL for the application
- `VITE_MAILCHIMP_API_KEY`: Email marketing API key
- `VITE_MAILCHIMP_LIST_ID`: Email marketing list ID

### Vercel Configuration
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x

## 📊 Features

- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Performance Optimized**: Code splitting, lazy loading
- ✅ **SEO Ready**: Meta tags, structured data
- ✅ **Analytics**: Google Analytics 4 integration
- ✅ **PWA**: Service worker, offline support
- ✅ **Security**: Enhanced headers, CSP
- ✅ **Forms**: Contact forms with reCAPTCHA
- ✅ **Search**: Enhanced search functionality

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Icons**: Font Awesome
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel
- **Version Control**: Git + GitHub

## 📞 Support

For technical issues or questions:
- **Email**: info@asplfusion.com
- **Repository**: https://github.com/dugy-jha/dugy-jha.github.io

## 📄 License

© 2024 ASPL Fusion. All rights reserved.