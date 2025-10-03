/**
 * Structured Data (JSON-LD) utilities for SEO
 */

// Organization structured data
export const getOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ASPL Fusion",
    "alternateName": "ASPL Fusion Technologies",
    "description": "ASPL Fusion is commercializing fusion energy through a disciplined, phased strategy to solve critical national challenges in healthcare, industry, and energy security.",
    "url": "https://asplfusion.com",
    "logo": "https://asplfusion.com/Logo-t-removebg-preview.png",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Prof. Prabhat Ranjan",
      "jobTitle": "Director"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@asplfusion.com"
    },
    "sameAs": [
      "https://asplfusion.com"
    ],
    "industry": "Energy Technology",
    "slogan": "Pioneering India's Clean Energy Future"
  };
};

// Website structured data
export const getWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ASPL Fusion",
    "description": "Commercializing fusion energy through a disciplined, phased strategy to solve critical national challenges.",
    "url": "https://asplfusion.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://asplfusion.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ASPL Fusion",
      "logo": {
        "@type": "ImageObject",
        "url": "https://asplfusion.com/Logo-t-removebg-preview.png"
      }
    }
  };
};

// Technology/Product structured data
export const getTechnologyStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Advanced Magnetic Mirror Fusion Technology",
    "description": "A revolutionary magnetic mirror fusion device engineered for superior stability, easier maintenance, and a faster path to commercial viability.",
    "brand": {
      "@type": "Brand",
      "name": "ASPL Fusion"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "ASPL Fusion"
    },
    "category": "Fusion Energy Technology",
    "applicationCategory": "Energy Production",
    "featureList": [
      "High-Temperature Superconducting (HTS) magnets",
      "Linear geometry design",
      "Modular scalability",
      "Medical isotope production capability",
      "Industrial heat applications",
      "Hydrogen production capability"
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "priceCurrency": "INR",
      "description": "Commercial fusion energy technology"
    }
  };
};

// Service structured data
export const getServicesStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fusion Energy Solutions",
    "description": "Comprehensive fusion energy solutions including medical isotope production, industrial heat applications, hydrogen production, and grid-scale electricity generation.",
    "provider": {
      "@type": "Organization",
      "name": "ASPL Fusion"
    },
    "serviceType": "Energy Technology Services",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fusion Energy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medical Isotope Production",
            "description": "Domestic production of critical medical radioisotopes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Heat Applications",
            "description": "Clean, high-temperature process heat for heavy industry"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hydrogen Production",
            "description": "Green hydrogen production using fusion energy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grid-Scale Electricity",
            "description": "Clean, safe, and abundant 24/7 baseload power"
          }
        }
      ]
    }
  };
};

// Article structured data for news/blog posts
export const getArticleStructuredData = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": "ASPL Fusion"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ASPL Fusion",
      "logo": {
        "@type": "ImageObject",
        "url": "https://asplfusion.com/Logo-t-removebg-preview.png"
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "image": article.image ? {
      "@type": "ImageObject",
      "url": article.image
    } : undefined
  };
};

// FAQ structured data
export const getFAQStructuredData = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Breadcrumb structured data
export const getBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Local Business structured data
export const getLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://asplfusion.com",
    "name": "ASPL Fusion",
    "description": "Fusion energy technology company pioneering India's clean energy future",
    "url": "https://asplfusion.com",
    "telephone": "+91-XXX-XXXX-XXXX",
    "email": "info@asplfusion.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "INR, USD"
  };
};

// Utility function to inject structured data into the page
export const injectStructuredData = (data) => {
  // Remove existing structured data script
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Create new script element
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Utility function to inject multiple structured data objects
export const injectMultipleStructuredData = (dataArray) => {
  // Remove existing structured data scripts
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => script.remove());

  // Create new script elements for each data object
  dataArray.forEach(data => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  });
};
