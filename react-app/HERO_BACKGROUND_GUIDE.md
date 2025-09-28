# 🎨 Hero Background Images - Complete Guide

## 📋 **Overview**
This guide provides specifications for creating hero background images for all pages of the ASPL Fusion website. Each page has a unique hero section that requires a custom background image.

## 🎯 **Pages Requiring Hero Backgrounds**

### **1. Homepage (`/`)**
- **File**: `hero-bg-home.webp`
- **Theme**: Fusion energy visualization, energy sovereignty
- **Colors**: Primary blue (#0055c4), accent cyan (#00ffff)
- **Content**: Fusion reactor, energy grid, India's energy future

### **2. Mission (`/mission`)**
- **File**: `hero-bg-mission.webp`
- **Theme**: Mission and vision, national impact
- **Colors**: Secondary blue (#00a6ff), gradient effects
- **Content**: India's energy landscape, mission statement visuals

### **3. Technology (`/technology`)**
- **File**: `hero-bg-technology.webp`
- **Theme**: Advanced Magnetic Mirror technology
- **Colors**: Cyan accent (#00ffff), tech blue
- **Content**: Magnetic mirror system, plasma visualization, HTS magnets

### **4. Applications (`/applications`)**
- **File**: `hero-bg-applications.webp`
- **Theme**: Multiple applications, versatility
- **Colors**: Purple accent (#5227FF), multi-color
- **Content**: Medical isotopes, industrial heat, hydrogen production

### **5. Roadmap (`/roadmap`)**
- **File**: `hero-bg-roadmap.webp`
- **Theme**: Timeline, progression, phases
- **Colors**: Pink accent (#FF9FFC), gradient
- **Content**: Four-phase timeline, development milestones

### **6. Team (`/team`)**
- **File**: `hero-bg-team.webp`
- **Theme**: Team, collaboration, expertise
- **Colors**: Team blue, professional
- **Content**: Team collaboration, scientific expertise

### **7. Careers (`/careers`)**
- **File**: `hero-bg-careers.webp`
- **Theme**: Career opportunities, growth
- **Colors**: Career green, opportunity
- **Content**: Career growth, innovation, joining the team

### **8. News (`/news`)**
- **File**: `hero-bg-news.webp`
- **Theme**: Latest updates, progress
- **Colors**: News blue, information
- **Content**: News updates, progress reports

### **9. Contact (`/contact`)**
- **File**: `hero-bg-contact.webp`
- **Theme**: Connection, communication
- **Colors**: Contact blue, connection
- **Content**: Global connection, communication

### **10. About (`/about`)**
- **File**: `hero-bg-about.webp`
- **Theme**: Company story, values
- **Colors**: About blue, story
- **Content**: Company history, values, story

### **11. FAQ (`/faq`)**
- **File**: `hero-bg-faq.webp`
- **Theme**: Questions, answers, support
- **Colors**: FAQ blue, support
- **Content**: Question marks, support, help

### **12. Case Studies (`/casestudies`)**
- **File**: `hero-bg-casestudies.webp`
- **Theme**: Success stories, examples
- **Colors**: Success green, examples
- **Content**: Case study examples, success stories

## 📐 **Technical Specifications**

### **Image Dimensions**
- **Desktop**: 1920x1080px (16:9 aspect ratio)
- **Tablet**: 1536x864px (16:9 aspect ratio)
- **Mobile**: 768x432px (16:9 aspect ratio)

### **File Formats**
- **Primary**: WebP (best compression, modern browsers)
- **Fallback**: JPG (universal compatibility)
- **Vector**: SVG (for simple graphics, scalable)

### **File Naming Convention**
```
hero-bg-[page-name].webp
hero-bg-[page-name].jpg (fallback)
```

### **File Sizes (Target)**
- **WebP**: 150-300KB per image
- **JPG**: 200-400KB per image
- **Total**: Under 2MB for all hero images

## 🎨 **Design Guidelines**

### **Visual Style**
- **Style**: Modern, scientific, professional
- **Mood**: Inspiring, innovative, trustworthy
- **Aesthetic**: Clean, high-tech, futuristic
- **Color Palette**: Dark backgrounds with blue/cyan accents

### **Composition Rules**
- **Text Overlay**: Ensure text readability (white text on dark backgrounds)
- **Focal Point**: Center or rule of thirds
- **Depth**: Use layers and depth for visual interest
- **Branding**: Subtle ASPL Fusion branding elements

### **Content Requirements**
- **Relevance**: Must relate to page content
- **Quality**: High-resolution, professional quality
- **Uniqueness**: Each page should have distinct imagery
- **Consistency**: Maintain visual consistency across all pages

## 🛠️ **Implementation Steps**

### **Step 1: Create Images**
1. Design each hero background image according to specifications
2. Export in WebP format (primary) and JPG (fallback)
3. Optimize file sizes while maintaining quality
4. Test on different screen sizes

### **Step 2: Add to Assets**
1. Place images in `src/assets/images/` directory
2. Follow naming convention: `hero-bg-[page-name].webp`
3. Ensure all files are properly optimized

### **Step 3: Update CSS**
1. Add background image properties to hero sections
2. Implement responsive background sizing
3. Add fallback colors for loading states
4. Test across different devices

### **Step 4: Test and Optimize**
1. Test loading performance
2. Verify visual quality on all devices
3. Check text readability over backgrounds
4. Optimize further if needed

## 📱 **Responsive Considerations**

### **Desktop (1920x1080)**
- Full background image
- High detail and resolution
- Rich visual elements

### **Tablet (1536x864)**
- Scaled background image
- Maintained aspect ratio
- Optimized for touch interfaces

### **Mobile (768x432)**
- Simplified background
- Focus on key visual elements
- Ensure text readability

## 🎯 **Content Suggestions by Page**

### **Homepage**
- Fusion reactor core visualization
- Energy grid network
- India's energy landscape
- Clean energy future

### **Technology**
- Magnetic mirror system diagram
- Plasma containment visualization
- HTS magnet technology
- Advanced control systems

### **Applications**
- Medical isotope production
- Industrial heat applications
- Hydrogen production facility
- Grid-scale power generation

### **Mission**
- India's energy challenges
- National energy sovereignty
- Clean energy transformation
- Mission statement visualization

### **Roadmap**
- Four-phase timeline
- Development milestones
- Progress indicators
- Future vision

## 🔧 **Technical Implementation**

### **CSS Background Properties**
```css
.hero {
  background-image: url('../assets/images/hero-bg-home.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Fallback for older browsers */
.hero {
  background-image: url('../assets/images/hero-bg-home.jpg');
}
```

### **Responsive Backgrounds**
```css
@media (max-width: 768px) {
  .hero {
    background-attachment: scroll;
    background-size: cover;
  }
}
```

## 📊 **Performance Optimization**

### **Loading Strategy**
- Lazy load hero images
- Use WebP with JPG fallback
- Implement progressive loading
- Optimize file sizes

### **Caching**
- Set appropriate cache headers
- Use CDN for image delivery
- Implement image compression
- Monitor loading performance

## 🎨 **Design Tools Recommendations**

### **For Creating Images**
- **Adobe Photoshop**: Professional image editing
- **Adobe Illustrator**: Vector graphics and diagrams
- **Figma**: Collaborative design and prototyping
- **Canva**: Quick design templates

### **For Optimization**
- **TinyPNG**: Image compression
- **Squoosh**: Google's image optimization tool
- **ImageOptim**: Mac image optimization
- **WebP Converter**: Format conversion

## 📋 **Checklist**

### **Before Implementation**
- [ ] All 12 hero images created
- [ ] Images optimized for web
- [ ] WebP and JPG versions ready
- [ ] Tested on different screen sizes
- [ ] Text readability verified

### **After Implementation**
- [ ] All pages display hero backgrounds
- [ ] Responsive design working
- [ ] Loading performance acceptable
- [ ] No visual issues on any device
- [ ] Fallback images working

## 🚀 **Next Steps**

1. **Create the hero background images** according to specifications
2. **Optimize and export** in required formats
3. **Add to assets directory** with proper naming
4. **Update CSS** to implement backgrounds
5. **Test thoroughly** across all devices and browsers

This guide ensures consistent, professional hero backgrounds across all pages while maintaining optimal performance and user experience.
