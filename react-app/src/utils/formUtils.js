// Form submission utilities
export const FORM_COOLDOWN_MINUTES = 5; // 5 minutes cooldown between submissions

// Check if form was recently submitted
export const canSubmitForm = (formType = 'contact') => {
  const lastSubmission = localStorage.getItem(`form_submission_${formType}`);
  if (!lastSubmission) return true;
  
  const lastSubmissionTime = parseInt(lastSubmission);
  const currentTime = Date.now();
  const cooldownMs = FORM_COOLDOWN_MINUTES * 60 * 1000;
  
  return (currentTime - lastSubmissionTime) > cooldownMs;
};

// Record form submission
export const recordFormSubmission = (formType = 'contact') => {
  localStorage.setItem(`form_submission_${formType}`, Date.now().toString());
};

// Get remaining cooldown time
export const getRemainingCooldown = (formType = 'contact') => {
  const lastSubmission = localStorage.getItem(`form_submission_${formType}`);
  if (!lastSubmission) return 0;
  
  const lastSubmissionTime = parseInt(lastSubmission);
  const currentTime = Date.now();
  const cooldownMs = FORM_COOLDOWN_MINUTES * 60 * 1000;
  const remaining = cooldownMs - (currentTime - lastSubmissionTime);
  
  return Math.max(0, remaining);
};

// Format remaining time for display
export const formatRemainingTime = (milliseconds) => {
  const minutes = Math.ceil(milliseconds / (60 * 1000));
  return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
};

// Check if user has submitted too many forms recently (rate limiting)
export const checkRateLimit = () => {
  const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
  const currentTime = Date.now();
  const oneHourAgo = currentTime - (60 * 60 * 1000);
  
  // Filter submissions from the last hour
  const recentSubmissions = submissions.filter(time => time > oneHourAgo);
  
  // Allow maximum 3 submissions per hour
  if (recentSubmissions.length >= 3) {
    return {
      allowed: false,
      message: 'Too many submissions. Please wait before submitting again.'
    };
  }
  
  return { allowed: true };
};

// Record submission for rate limiting
export const recordSubmission = () => {
  const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
  submissions.push(Date.now());
  localStorage.setItem('form_submissions', JSON.stringify(submissions));
};

// Clear old submissions (cleanup)
export const cleanupOldSubmissions = () => {
  const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
  const currentTime = Date.now();
  const oneDayAgo = currentTime - (24 * 60 * 60 * 1000);
  
  const recentSubmissions = submissions.filter(time => time > oneDayAgo);
  localStorage.setItem('form_submissions', JSON.stringify(recentSubmissions));
};
