# Google reCAPTCHA v3 Setup Guide

## 🔑 Getting Your reCAPTCHA Site Key

### Step 1: Register Your Site
1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" to add a new site
3. Fill in the form:
   - **Label**: ASPL Fusion Website
   - **reCAPTCHA type**: Select "reCAPTCHA v3"
   - **Domains**: Add your domains:
     - `localhost` (for development)
     - `dugy-jha-github-io-3j45.vercel.app` (for Vercel deployment)
     - `asplfusion.com` (if you have a custom domain)
   - **Accept Terms**: Check the terms of service
   - **Submit**: Click "Submit"

### Step 2: Get Your Keys
After creating the site, you'll get:
- **Site Key** (public) - This goes in your frontend code
- **Secret Key** (private) - This goes in your backend/server

### Step 3: Update the Code

#### Frontend (React App)
1. **Update `index.html`**:
   ```html
   <!-- Replace the placeholder with your actual site key -->
   <script src="https://www.google.com/recaptcha/api.js?render=YOUR_ACTUAL_SITE_KEY"></script>
   ```

2. **Update `src/utils/recaptcha.js`**:
   ```javascript
   // Replace with your actual site key
   const RECAPTCHA_SITE_KEY = 'YOUR_ACTUAL_SITE_KEY';
   ```

#### Backend (Formspree Integration)
Formspree supports reCAPTCHA v3! You can:
1. **Option 1**: Use Formspree's built-in reCAPTCHA support
   - Add your reCAPTCHA site key to Formspree settings
   - Formspree will automatically verify the tokens

2. **Option 2**: Custom backend verification
   - Create an API endpoint to verify reCAPTCHA tokens
   - Use your secret key to verify with Google's API

### Step 4: Test Your Implementation

#### Development Testing
1. Start your development server: `npm run dev`
2. Open http://localhost:3000
3. Try submitting forms - you should see reCAPTCHA working invisibly
4. Check browser console for any errors

#### Production Testing
1. Deploy to Vercel
2. Test forms on your live site
3. Monitor reCAPTCHA analytics in Google Console

## 🛠️ Current Implementation Features

### ✅ What's Already Implemented
- **reCAPTCHA v3 Integration**: Invisible verification on all forms
- **Form Protection**: Contact form, Newsletter forms (Home & News pages)
- **Loading States**: Shows "Loading security verification..." while reCAPTCHA loads
- **Error Handling**: Graceful fallback if reCAPTCHA fails to load
- **Rate Limiting**: Still maintains 5-minute cooldown and hourly limits
- **User Experience**: No visible captcha - completely invisible to users

### 🔧 Form Actions Used
- **Contact Form**: `contact_form`
- **Newsletter Forms**: `newsletter_subscribe`

### 📊 reCAPTCHA v3 Benefits
- **Invisible**: No user interaction required
- **Score-based**: Google provides a score (0.0-1.0) for each interaction
- **Better UX**: No puzzles or challenges for users
- **Advanced Protection**: Uses machine learning to detect bots
- **Analytics**: Detailed insights in Google Console

## 🚨 Important Notes

### Security Considerations
1. **Never expose your secret key** in frontend code
2. **Always verify tokens** on your backend
3. **Set appropriate score thresholds** (typically 0.5-0.7)
4. **Monitor reCAPTCHA analytics** for suspicious activity

### Development vs Production
- **Development**: Use `localhost` in your domain list
- **Production**: Add your actual domain to the reCAPTCHA site
- **Testing**: reCAPTCHA works differently in development vs production

### Formspree Integration
Formspree has built-in reCAPTCHA support:
1. Go to your Formspree dashboard
2. Navigate to your form settings
3. Enable reCAPTCHA protection
4. Add your site key
5. Formspree will handle verification automatically

## 🔍 Troubleshooting

### Common Issues
1. **"reCAPTCHA not loaded"**: Check if script is loading correctly
2. **"Invalid site key"**: Verify your site key is correct
3. **"Domain not registered"**: Add your domain to reCAPTCHA settings
4. **Forms not submitting**: Check browser console for errors

### Debug Mode
Add this to your browser console to see reCAPTCHA scores:
```javascript
// This will show reCAPTCHA scores in console
window.grecaptcha.ready(() => {
  window.grecaptcha.execute('YOUR_SITE_KEY', {action: 'test'}).then(token => {
    console.log('reCAPTCHA token:', token);
  });
});
```

## 📈 Next Steps

1. **Get your reCAPTCHA keys** from Google Console
2. **Update the placeholder keys** in the code
3. **Test thoroughly** in development and production
4. **Monitor analytics** in Google reCAPTCHA Console
5. **Set up backend verification** if not using Formspree's built-in support

## 🎯 Current Status

- ✅ **Code Implementation**: Complete
- ⏳ **Site Key Setup**: Needs your actual keys
- ✅ **Form Integration**: All forms ready
- ✅ **Error Handling**: Implemented
- ✅ **Loading States**: Implemented
- ✅ **Rate Limiting**: Still active alongside reCAPTCHA

Once you get your reCAPTCHA keys, just replace the placeholder values and you're ready to go!
