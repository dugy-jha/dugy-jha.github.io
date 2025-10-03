/**
 * Comprehensive form validation utilities
 */

// Validation rules
export const VALIDATION_RULES = {
  // Email validation
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  
  // Phone validation (Indian format)
  phone: {
    pattern: /^(\+91|91)?[6-9]\d{9}$/,
    message: 'Please enter a valid Indian phone number'
  },
  
  // Name validation
  name: {
    pattern: /^[a-zA-Z\s]{2,50}$/,
    message: 'Name must be 2-50 characters and contain only letters and spaces'
  },
  
  // Company name validation
  company: {
    pattern: /^[a-zA-Z0-9\s&.,-]{2,100}$/,
    message: 'Company name must be 2-100 characters'
  },
  
  // Message validation
  message: {
    minLength: 10,
    maxLength: 1000,
    message: 'Message must be between 10 and 1000 characters'
  },
  
  // Required field validation
  required: {
    message: 'This field is required'
  },
  
  // Password validation
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
  }
};

// Validation functions
export const validators = {
  // Check if field is required and not empty
  required: (value) => {
    if (!value || value.trim() === '') {
      return { isValid: false, message: VALIDATION_RULES.required.message };
    }
    return { isValid: true };
  },
  
  // Email validation
  email: (value) => {
    if (!value) return { isValid: true }; // Allow empty if not required
    
    const rule = VALIDATION_RULES.email;
    if (!rule.pattern.test(value)) {
      return { isValid: false, message: rule.message };
    }
    return { isValid: true };
  },
  
  // Phone validation
  phone: (value) => {
    if (!value) return { isValid: true }; // Allow empty if not required
    
    const rule = VALIDATION_RULES.phone;
    if (!rule.pattern.test(value.replace(/\s/g, ''))) {
      return { isValid: false, message: rule.message };
    }
    return { isValid: true };
  },
  
  // Name validation
  name: (value) => {
    if (!value) return { isValid: true }; // Allow empty if not required
    
    const rule = VALIDATION_RULES.name;
    if (!rule.pattern.test(value)) {
      return { isValid: false, message: rule.message };
    }
    return { isValid: true };
  },
  
  // Company validation
  company: (value) => {
    if (!value) return { isValid: true }; // Allow empty if not required
    
    const rule = VALIDATION_RULES.company;
    if (!rule.pattern.test(value)) {
      return { isValid: false, message: rule.message };
    }
    return { isValid: true };
  },
  
  // Message validation
  message: (value) => {
    if (!value) return { isValid: true }; // Allow empty if not required
    
    const rule = VALIDATION_RULES.message;
    if (value.length < rule.minLength || value.length > rule.maxLength) {
      return { isValid: false, message: rule.message };
    }
    return { isValid: true };
  },
  
  // Password validation
  password: (value) => {
    if (!value) return { isValid: true }; // Allow empty if not required
    
    const rule = VALIDATION_RULES.password;
    if (value.length < rule.minLength) {
      return { isValid: false, message: `Password must be at least ${rule.minLength} characters` };
    }
    if (!rule.pattern.test(value)) {
      return { isValid: false, message: rule.message };
    }
    return { isValid: true };
  },
  
  // Confirm password validation
  confirmPassword: (value, originalPassword) => {
    if (!value) return { isValid: true }; // Allow empty if not required
    
    if (value !== originalPassword) {
      return { isValid: false, message: 'Passwords do not match' };
    }
    return { isValid: true };
  },
  
  // URL validation
  url: (value) => {
    if (!value) return { isValid: true }; // Allow empty if not required
    
    try {
      new URL(value);
      return { isValid: true };
    } catch {
      return { isValid: false, message: 'Please enter a valid URL' };
    }
  },
  
  // Number validation
  number: (value, min = null, max = null) => {
    if (!value) return { isValid: true }; // Allow empty if not required
    
    const num = parseFloat(value);
    if (isNaN(num)) {
      return { isValid: false, message: 'Please enter a valid number' };
    }
    
    if (min !== null && num < min) {
      return { isValid: false, message: `Value must be at least ${min}` };
    }
    
    if (max !== null && num > max) {
      return { isValid: false, message: `Value must be at most ${max}` };
    }
    
    return { isValid: true };
  },
  
  // Date validation
  date: (value, minDate = null, maxDate = null) => {
    if (!value) return { isValid: true }; // Allow empty if not required
    
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return { isValid: false, message: 'Please enter a valid date' };
    }
    
    if (minDate && date < new Date(minDate)) {
      return { isValid: false, message: `Date must be after ${minDate}` };
    }
    
    if (maxDate && date > new Date(maxDate)) {
      return { isValid: false, message: `Date must be before ${maxDate}` };
    }
    
    return { isValid: true };
  }
};

// Form validation class
export class FormValidator {
  constructor(formElement, options = {}) {
    this.form = formElement;
    this.options = {
      validateOnBlur: true,
      validateOnChange: true,
      showErrors: true,
      ...options
    };
    this.errors = {};
    this.validators = {};
    
    this.init();
  }
  
  init() {
    // Add event listeners
    if (this.options.validateOnBlur) {
      this.form.addEventListener('blur', this.handleBlur.bind(this), true);
    }
    
    if (this.options.validateOnChange) {
      this.form.addEventListener('input', this.handleInput.bind(this), true);
    }
    
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }
  
  // Add validation rule for a field
  addRule(fieldName, validators, options = {}) {
    this.validators[fieldName] = {
      validators: Array.isArray(validators) ? validators : [validators],
      required: options.required || false,
      ...options
    };
  }
  
  // Validate a single field
  validateField(fieldName) {
    const field = this.form.querySelector(`[name="${fieldName}"]`);
    if (!field) return { isValid: true };
    
    const value = field.value;
    const fieldConfig = this.validators[fieldName];
    
    if (!fieldConfig) return { isValid: true };
    
    // Check if field is required
    if (fieldConfig.required) {
      const requiredResult = validators.required(value);
      if (!requiredResult.isValid) {
        this.setFieldError(fieldName, requiredResult.message);
        return { isValid: false, message: requiredResult.message };
      }
    }
    
    // Run other validators
    for (const validator of fieldConfig.validators) {
      let result;
      
      if (typeof validator === 'function') {
        result = validator(value);
      } else if (typeof validator === 'string' && validators[validator]) {
        result = validators[validator](value);
      } else if (validator.name && validators[validator.name]) {
        result = validators[validator.name](value, ...(validator.params || []));
      }
      
      if (result && !result.isValid) {
        this.setFieldError(fieldName, result.message);
        return { isValid: false, message: result.message };
      }
    }
    
    // Clear error if validation passes
    this.clearFieldError(fieldName);
    return { isValid: true };
  }
  
  // Validate entire form
  validateForm() {
    let isValid = true;
    this.errors = {};
    
    for (const fieldName in this.validators) {
      const result = this.validateField(fieldName);
      if (!result.isValid) {
        isValid = false;
        this.errors[fieldName] = result.message;
      }
    }
    
    return { isValid, errors: this.errors };
  }
  
  // Set field error
  setFieldError(fieldName, message) {
    const field = this.form.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    
    // Add error class
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    
    // Show error message
    if (this.options.showErrors) {
      this.showErrorMessage(field, message);
    }
    
    // Store error
    this.errors[fieldName] = message;
  }
  
  // Clear field error
  clearFieldError(fieldName) {
    const field = this.form.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    
    // Remove error class
    field.classList.remove('error');
    field.removeAttribute('aria-invalid');
    
    // Hide error message
    if (this.options.showErrors) {
      this.hideErrorMessage(field);
    }
    
    // Remove from errors
    delete this.errors[fieldName];
  }
  
  // Show error message
  showErrorMessage(field, message) {
    // Remove existing error message
    this.hideErrorMessage(field);
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.setAttribute('role', 'alert');
    errorElement.textContent = message;
    
    // Insert after field
    field.parentNode.insertBefore(errorElement, field.nextSibling);
    
    // Set aria-describedby
    const errorId = `error-${field.name}-${Date.now()}`;
    errorElement.id = errorId;
    field.setAttribute('aria-describedby', errorId);
  }
  
  // Hide error message
  hideErrorMessage(field) {
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.remove();
    }
    field.removeAttribute('aria-describedby');
  }
  
  // Handle blur event
  handleBlur(event) {
    if (event.target.name && this.validators[event.target.name]) {
      this.validateField(event.target.name);
    }
  }
  
  // Handle input event
  handleInput(event) {
    if (event.target.name && this.validators[event.target.name]) {
      // Clear error on input if field becomes valid
      const result = this.validateField(event.target.name);
      if (result.isValid) {
        this.clearFieldError(event.target.name);
      }
    }
  }
  
  // Handle form submission
  handleSubmit(event) {
    const result = this.validateForm();
    
    if (!result.isValid) {
      event.preventDefault();
      
      // Focus first error field
      const firstErrorField = this.form.querySelector('.error');
      if (firstErrorField) {
        firstErrorField.focus();
      }
      
      // Announce error to screen readers
      if (window.screenReader) {
        window.screenReader.announce(
          `Form has ${Object.keys(result.errors).length} error(s). Please correct them and try again.`,
          'assertive'
        );
      }
    }
  }
  
  // Get form data
  getFormData() {
    const formData = new FormData(this.form);
    const data = {};
    
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    
    return data;
  }
  
  // Reset form
  resetForm() {
    this.form.reset();
    this.errors = {};
    
    // Clear all error states
    const errorFields = this.form.querySelectorAll('.error');
    errorFields.forEach(field => {
      field.classList.remove('error');
      field.removeAttribute('aria-invalid');
      field.removeAttribute('aria-describedby');
    });
    
    // Remove all error messages
    const errorMessages = this.form.querySelectorAll('.field-error');
    errorMessages.forEach(message => message.remove());
  }
  
  // Destroy validator
  destroy() {
    this.form.removeEventListener('blur', this.handleBlur.bind(this), true);
    this.form.removeEventListener('input', this.handleInput.bind(this), true);
    this.form.removeEventListener('submit', this.handleSubmit.bind(this));
  }
}

// Utility function to create a form validator
export const createFormValidator = (formElement, rules, options = {}) => {
  const validator = new FormValidator(formElement, options);
  
  // Add rules
  for (const [fieldName, fieldRules] of Object.entries(rules)) {
    validator.addRule(fieldName, fieldRules.validators, {
      required: fieldRules.required,
      ...fieldRules.options
    });
  }
  
  return validator;
};

// Common form configurations
export const FORM_CONFIGS = {
  contact: {
    name: {
      validators: ['required', 'name'],
      required: true
    },
    email: {
      validators: ['required', 'email'],
      required: true
    },
    company: {
      validators: ['company'],
      required: false
    },
    phone: {
      validators: ['phone'],
      required: false
    },
    message: {
      validators: ['required', 'message'],
      required: true
    }
  },
  
  newsletter: {
    email: {
      validators: ['required', 'email'],
      required: true
    }
  },
  
  inquiry: {
    name: {
      validators: ['required', 'name'],
      required: true
    },
    email: {
      validators: ['required', 'email'],
      required: true
    },
    company: {
      validators: ['required', 'company'],
      required: true
    },
    phone: {
      validators: ['phone'],
      required: false
    },
    interest: {
      validators: ['required'],
      required: true
    },
    message: {
      validators: ['message'],
      required: false
    }
  }
};

export default {
  VALIDATION_RULES,
  validators,
  FormValidator,
  createFormValidator,
  FORM_CONFIGS
};
