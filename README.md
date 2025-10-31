Chrome Extension to auto craft a cover letter for job applications on wellfound.com, right in your browser.

# Wellfound auto-crafter extension
// ==================== SETUP INSTRUCTIONS ====================
/*
SETUP INSTRUCTIONS:

1. CREATE FOLDER STRUCTURE:
   - Clone this repo or download and extract

2. GET A NEW API KEY AND PASTE RESUME (IMPORTANT!):
   - Go to https://aistudio.google.com/app/apikey
   - Generate a new Gemini API key
   - Replace 'YOUR_NEW_API_KEY_HERE' in popup.js with your new key
   - NEVER share this key publicly!
   - Find const = RESUME DATA and paste your resume
   
4. LOAD THE EXTENSION:
   - Open Chrome and go to: chrome://extensions/
   - Enable "Developer mode" (toggle in top-right)
   - Click "Load unpacked"
   - Select your "wellfound-auto-crafter-extension" folder
   - The extension should now appear in your browser!

5. HOW TO USE:
   - Go to Wellfound (wellfound.com)
   - Find a job posting you want to apply for
   - Select the job description text with your mouse
   - Right-click and choose "Generate Cover Letter from Selection"
   - Fill in the recruiter name and company name
   - Click "Generate Cover Letter"
   - Copy and paste into Wellfound!

6. TROUBLESHOOTING:
   - If the API call fails, check your API key
   - Make sure all files are in the same folder
   - Check the Chrome extension console for errors (click "Errors" in chrome://extensions/)

*/
