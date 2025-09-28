// SEO and Structured Data Utilities
class SEOManager {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BASE_URL || 'https://dugy-jha-github-io-3j45.vercel.app';
    this.siteName = 'ASPL Fusion';
    this.defaultDescription = 'ASPL Fusion is pioneering India\'s clean energy revolution through advanced magnetic mirror fusion technology. Commercializing fusion energy through phased applications.';
    this.defaultImage = `${this.baseUrl}/assets/images/ASPL-SVG-Logo.png`;
  }

  // Set page title
  setTitle(title) {
    document.title = title ? `${title} | ${this.siteName}` : this.siteName;
  }

  // Set meta description
  setDescription(description) {
    this.setMetaTag('description', description || this.defaultDescription);
  }

  // Set meta keywords
  setKeywords(keywords) {
    this.setMetaTag('keywords', keywords);
  }

  // Set Open Graph tags
  setOpenGraph({
    title,
    description,
    image,
    url,
    type = 'website'
  }) {
    const ogTags = {
      'og:title': title || document.title,
      'og:description': description || this.defaultDescription,
      'og:image': image || this.defaultImage,
      'og:url': url || window.location.href,
      'og:type': type,
      'og:site_name': this.siteName
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      this.setMetaTag(property, content, 'property');
    });
  }

  // Set Twitter Card tags
  setTwitterCard({
    title,
    description,
    image,
    card = 'summary_large_image'
  }) {
    const twitterTags = {
      'twitter:card': card,
      'twitter:title': title || document.title,
      'twitter:description': description || this.defaultDescription,
      'twitter:image': image || this.defaultImage
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      this.setMetaTag(name, content, 'name');
    });
  }

  // Set canonical URL
  setCanonicalUrl(url) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url || window.location.href;
  }

  // Set meta tag
  setMetaTag(name, content, attribute = 'name') {
    if (!content) return;

    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  // Add structured data (JSON-LD)
  addStructuredData(data) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // Organization structured data
  getOrganizationStructuredData() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'ASPL Fusion',
      'alternateName': 'Agnira Sanlayan Private Limited',
      'url': this.baseUrl,
      'logo': this.defaultImage,
      'description': this.defaultDescription,
      'foundingDate': '2025',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '102 Mercantile House, 15 KG Marg',
        'addressLocality': 'New Delhi',
        'postalCode': '110001',
        'addressCountry': 'IN'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-011-4151-9899',
        'contactType': 'customer service',
        'email': 'info@asplfusion.com'
      },
      'sameAs': [
        'https://www.linkedin.com/company/aspl-fusion',
        'https://twitter.com/asplfusion',
        'https://www.facebook.com/asplfusion',
        'https://www.instagram.com/asplfusion',
        'https://www.youtube.com/@asplfusion'
      ]
    };
  }

  // Website structured data
  getWebsiteStructuredData() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': this.siteName,
      'url': this.baseUrl,
      'description': this.defaultDescription,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': `${this.baseUrl}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };
  }

  // Breadcrumb structured data
  getBreadcrumbStructuredData(items) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': item.url
      }))
    };
  }

  // Article structured data
  getArticleStructuredData({
    title,
    description,
    author,
    datePublished,
    dateModified,
    image,
    url
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': title,
      'description': description,
      'image': image || this.defaultImage,
      'author': {
        '@type': 'Person',
        'name': author || 'ASPL Fusion Team'
      },
      'publisher': {
        '@type': 'Organization',
        'name': this.siteName,
        'logo': {
          '@type': 'ImageObject',
          'url': this.defaultImage
        }
      },
      'datePublished': datePublished,
      'dateModified': dateModified || datePublished,
      'url': url || window.location.href
    };
  }

  // FAQ structured data
  getFAQStructuredData(faqs) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };
  }

  // Product structured data
  getProductStructuredData({
    name,
    description,
    image,
    category,
    brand = 'ASPL Fusion'
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': name,
      'description': description,
      'image': image || this.defaultImage,
      'brand': {
        '@type': 'Brand',
        'name': brand
      },
      'category': category,
      'manufacturer': {
        '@type': 'Organization',
        'name': this.siteName
      }
    };
  }

  // Set up page SEO
  setupPageSEO({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    structuredData = []
  }) {
    // Set basic meta tags
    this.setTitle(title);
    this.setDescription(description);
    this.setKeywords(keywords);
    this.setCanonicalUrl(url);

    // Set Open Graph tags
    this.setOpenGraph({
      title,
      description,
      image,
      url,
      type
    });

    // Set Twitter Card tags
    this.setTwitterCard({
      title,
      description,
      image
    });

    // Add structured data
    structuredData.forEach(data => {
      this.addStructuredData(data);
    });
  }

  // Initialize default SEO
  initializeDefaultSEO() {
    // Add organization structured data
    this.addStructuredData(this.getOrganizationStructuredData());
    
    // Add website structured data
    this.addStructuredData(this.getWebsiteStructuredData());

    // Set default meta tags
    this.setMetaTag('robots', 'index, follow');
    this.setMetaTag('author', 'ASPL Fusion');
    this.setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    this.setMetaTag('theme-color', '#0055c4');
  }
}

// Create singleton instance
const seoManager = new SEOManager();

// Initialize default SEO on load
if (typeof window !== 'undefined') {
  seoManager.initializeDefaultSEO();
}

export default seoManager;
