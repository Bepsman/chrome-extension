# chrome-extension
// ==================== SETUP INSTRUCTIONS ====================
/*
SETUP INSTRUCTIONS:

1. CREATE FOLDER STRUCTURE:
   - Create a new folder called "wellfound-cover-letter-extension"
   - Inside it, create these files with the exact names shown above

2. GET A NEW API KEY (IMPORTANT!):
   - Go to https://aistudio.google.com/app/apikey
   - Generate a new Gemini API key
   - Replace 'YOUR_NEW_API_KEY_HERE' in popup.js with your new key
   - NEVER share this key publicly!

3. CREATE ICONS:
   - You need 3 icon files: icon16.png, icon48.png, icon128.png
   - You can create simple icons or use any PNG images (they just need to exist)
   - Or temporarily remove the icons section from manifest.json

4. LOAD THE EXTENSION:
   - Open Chrome and go to: chrome://extensions/
   - Enable "Developer mode" (toggle in top-right)
   - Click "Load unpacked"
   - Select your "wellfound-cover-letter-extension" folder
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

FILES YOU NEED TO CREATE:
- manifest.json
- background.js
- popup.html
- popup.js
- icon16.png (or remove icons from manifest)
- icon48.png (or remove icons from manifest)
- icon128.png (or remove icons from manifest)
*/
