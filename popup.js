const GEMINI_API_KEY = ''; // REPLACE WITH NEW API KEY!
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

const RESUME_DATA = `
`; 

document.addEventListener('DOMContentLoaded', async () => {
  const recruiterNameInput = document.getElementById('recruiterName');
  const companyNameInput = document.getElementById('companyName');
  const jobDescriptionInput = document.getElementById('jobDescription');
  const generateBtn = document.getElementById('generateBtn');
  const outputTextarea = document.getElementById('output');
  const statusDiv = document.getElementById('status');
  const copyBtn = document.getElementById('copyBtn');
  const clearBtn = document.getElementById('clearBtn');

  // Load job description from storage if available
  chrome.storage.local.get(['jobDescription'], (result) => {
    if (result.jobDescription) {
      jobDescriptionInput.value = result.jobDescription;
    }
  });

  generateBtn.addEventListener('click', async () => {
    const recruiterName = recruiterNameInput.value.trim();
    const companyName = companyNameInput.value.trim();
    const jobDescription = jobDescriptionInput.value.trim();

    if (!recruiterName || !companyName || !jobDescription) {
      showStatus('Please fill in all fields', 'error');
      return;
    }

    generateBtn.disabled = true;
    showStatus('Generating your cover letter...', 'loading');
    outputTextarea.value = '';
    copyBtn.style.display = 'none';
    clearBtn.style.display = 'none';

    try {
      const coverLetter = await generateCoverLetter(recruiterName, companyName, jobDescription);
      outputTextarea.value = coverLetter;
      showStatus('Cover letter generated successfully! 🎉', 'success');
      copyBtn.style.display = 'block';
      clearBtn.style.display = 'block';
    } catch (error) {
      showStatus('Error: ' + error.message, 'error');
    } finally {
      generateBtn.disabled = false;
    }
  });

  copyBtn.addEventListener('click', () => {
    outputTextarea.select();
    document.execCommand('copy');
    showStatus('Copied to clipboard! 📋', 'success');
  });

  clearBtn.addEventListener('click', () => {
    outputTextarea.value = '';
    copyBtn.style.display = 'none';
    clearBtn.style.display = 'none';
    showStatus('Cleared', 'success');
    setTimeout(() => hideStatus(), 1500);
  });

  function showStatus(message, type) {
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
    statusDiv.style.display = 'block';
  }

  function hideStatus() {
    statusDiv.style.display = 'none';
  }

  async function generateCoverLetter(recruiterName, companyName, jobDescription) {
    const prompt = `You are an expert at writing personalized, compelling cover letters for job applications on Wellfound.

TASK: Write a note to ${recruiterName} at ${companyName} explaining why I would be a good fit for this role.

MY RESUME:
${RESUME_DATA}

JOB DESCRIPTION:
${jobDescription}

INSTRUCTIONS:
1. Write in first person, addressing ${recruiterName} directly
2. Keep it concise (150-250 words) - recruiters are busy
3. Be professional but personable and authentic
4. Highlight 2-3 most relevant achievements/skills from my resume that match the job requirements
5. Show genuine enthusiasm for the role and company
6. Include specific metrics and results where relevant
7. End with a clear call to action
8. Don't use generic phrases - make it feel personal and tailored
9. Don't just list qualifications - tell a brief story of why I'm excited about this opportunity

Write the note now:`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to generate cover letter');
    }

    const data = await response.json();
    const coverLetter = data.candidates[0].content.parts[0].text;
    return coverLetter.trim();
  }
});
