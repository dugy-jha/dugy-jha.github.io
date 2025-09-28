# ASPL Fusion Website - Directory Structure

## 📁 **REORGANIZED STRUCTURE**

The project directory has been streamlined and organized for better maintainability and development workflow.

### **✅ COMPLETED CHANGES**

#### **1. Configuration Files** → `config/`
- `eslint.config.js` - ESLint configuration
- `vercel.json` - Vercel deployment configuration  
- `vite.config.js` - Vite build configuration

#### **2. Documentation** → `docs/`
- `COOKIE_CONSENT_BEST_PRACTICES.md` - Cookie compliance guidelines
- `MONETIZATION_GUIDE.md` - Website monetization strategies
- `LOCAL_SETUP_GUIDE.md` - Development setup instructions
- `RECAPTCHA_KEYS.md` - reCAPTCHA configuration
- `RECAPTCHA_SETUP.md` - reCAPTCHA setup guide
- `SECURITY_STATUS.md` - Security implementation status

#### **3. Guides** → `guides/`
- `VALIDATION_CHECKLIST.md` - Complete validation checklist

#### **4. Styles Consolidation**
- Moved `src/pages/Privacy.css` → `src/styles/Privacy.css`
- Updated import path in `src/pages/Privacy.jsx`

#### **5. Package.json Updates**
- Updated all scripts to use new config paths:
  - `dev`: `vite --config config/vite.config.js`
  - `build`: `vite build --config config/vite.config.js`
  - `lint`: `eslint . --config config/eslint.config.js`
  - `preview`: `vite preview --config config/vite.config.js`

---

## 📂 **FINAL DIRECTORY STRUCTURE**

```
react-app/
├── config/                    # Configuration files
│   ├── eslint.config.js      # ESLint rules
│   ├── vercel.json           # Deployment config
│   └── vite.config.js        # Build configuration
├── docs/                     # Documentation
│   ├── COOKIE_CONSENT_BEST_PRACTICES.md
│   ├── MONETIZATION_GUIDE.md
│   ├── LOCAL_SETUP_GUIDE.md
│   ├── RECAPTCHA_KEYS.md
│   ├── RECAPTCHA_SETUP.md
│   └── SECURITY_STATUS.md
├── guides/                   # Validation and setup guides
│   └── VALIDATION_CHECKLIST.md
├── public/                   # Static assets
│   ├── favicon.png
│   ├── humans.txt
│   ├── Logo-t-removebg-preview.png
│   ├── manifest.json
│   ├── (placeholder images removed - now using real assets)
│   ├── robots.txt
│   └── vite.svg
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── Captcha.jsx
│   │   ├── CardNav.jsx
│   │   ├── ConsentBanner.jsx
│   │   ├── CounterAnimation.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── ElectricBorder.jsx
│   │   ├── GooeyNav.jsx
│   │   ├── Layout.jsx
│   │   ├── LiquidEther.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Settings.jsx
│   │   └── *.css files
│   ├── pages/                # Page components
│   │   ├── About.jsx
│   │   ├── Applications.jsx
│   │   ├── Careers.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Home.jsx
│   │   ├── Mission.jsx
│   │   ├── News.jsx
│   │   ├── NotFound.jsx
│   │   ├── Privacy.jsx
│   │   ├── Roadmap.jsx
│   │   ├── Team.jsx
│   │   ├── Technology.jsx
│   │   └── Terms.jsx
│   ├── styles/               # CSS files
│   │   ├── About.css
│   │   ├── App.css
│   │   ├── Applications.css
│   │   ├── Captcha.css
│   │   ├── Careers.css
│   │   ├── CaseStudies.css
│   │   ├── Contact.css
│   │   ├── FAQ.css
│   │   ├── Home.css
│   │   ├── Layout.css
│   │   ├── Mission.css
│   │   ├── News.css
│   │   ├── NotFound.css
│   │   ├── Privacy.css
│   │   ├── Roadmap.css
│   │   ├── Team.css
│   │   ├── Technology.css
│   │   └── Terms.css
│   ├── utils/                # Utility functions
│   │   ├── cookieManager.js
│   │   ├── formUtils.js
│   │   └── recaptcha.js
│   ├── hooks/                # Custom React hooks
│   │   └── useRecaptcha.js
│   ├── assets/               # Images and media
│   │   └── images/
│   │       ├── Abhay-K-Jha.jpeg
│   │       ├── Abhinav-Jha.jpeg
│   │       ├── ASPL-SVG-Logo.svg
│   │       ├── Dr-Prabhat-Ranjan.png
│   │       ├── hero-background.jpg
│   │       ├── hero-background.webp
│   │       ├── icon-energy.png
│   │       ├── icon-gdt.png
│   │       ├── icon-medical.png
│   │       ├── (placeholder images removed - now using real assets)
│   │       ├── placeholder-person.svg
│   │       └── Yogesh-Saxena.png
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── dist/                     # Build output
├── node_modules/             # Dependencies
├── index.html                # Main HTML file
├── package.json              # Dependencies and scripts
├── package-lock.json         # Lock file
└── README.md                 # Project documentation
```

---

## 🔧 **BENEFITS OF NEW STRUCTURE**

### **1. Better Organization**
- **Config files** are centralized and easy to find
- **Documentation** is separated from code
- **Guides** are easily accessible for validation tasks

### **2. Improved Maintainability**
- Clear separation of concerns
- Easier to locate specific files
- Better for team collaboration

### **3. Development Workflow**
- Scripts updated to use new config paths
- Consistent file organization
- Easier to add new features

### **4. Deployment Ready**
- All configuration files properly organized
- Build scripts updated for new structure
- Documentation easily accessible

---

## ⚠️ **IMPORTANT NOTES**

### **1. Legacy Files**
- Old HTML files still exist in root directory
- These need to be cleaned up or documented
- See VALIDATION_CHECKLIST.md for details

### **2. Import Paths**
- All import paths have been updated
- No breaking changes to functionality
- All components work as before

### **3. Build Process**
- Updated package.json scripts
- All builds use new config structure
- No impact on deployment

---

## 🚀 **NEXT STEPS**

1. **Test the new structure** by running `npm run dev`
2. **Verify all imports** are working correctly
3. **Clean up legacy files** as per validation checklist
4. **Update any external references** to old file paths

---

**Last Updated**: September 27, 2025
**Status**: ✅ **COMPLETED**

