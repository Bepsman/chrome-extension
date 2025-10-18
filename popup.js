const GEMINI_API_KEY = 'AIzaSyDPGbdu5ezxX1PV6T45nN6H9Trsg8zbEAA'; // REPLACE WITH NEW API KEY!
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

const RESUME_DATA = `
EMMANUEL CHUKWUEMEKA CHUKWUEMEKA
munachemeka@gmail.com +234 806 552 3545 Enugu, Nigeria 2002-10-10 Nigerian
linkedin.com/in/emmanuel-chukwuemeka-87a67937b
PROFESSIONAL SUMMARY
Results-driven professional with expertise in Real Estate Acquisitions, Digital Marketing, and Technology. At
AdlersCapital, drove record performance with 1,500+ daily calls, 6+ consistent deal conversions, and built
comprehensive lead generation systems for wholesale real estate and private lending. Skilled in real estate data
analysis including comps, LTV, and ARV with a track record of closing profitable deals. Proven digital growth
strategist who scaled platforms to 21,000 followers in six days and generated 4 million YouTube views. Achieved
conversion rates up to 70% through marketing automation, CRM optimization, and AI-driven solutions. Excel at
building scalable systems that turn opportunities into measurable results.
PROFESSIONAL EXPERIENCE
01/2025 – Present
Miami, FL (Remote)
Acquisitions Associate
AdlersCapital
•Conduct high-volume outbound prospecting for wholesale real estate division,
achieving company record of 1,500+ calls per day while consistently converting 6+
prospects daily into active pipeline deals
•Serve dual role as Lead Generation Specialist, providing comprehensive lead data
infrastructure for entire organization across both wholesale real estate and private
lending divisions including DSCR loans, Bridge loans, and Refinancing
•Engineered and optimized proprietary lead extraction framework using Python,
spending 6+ hours on first day to significantly improve code efficiency and data
processing capabilities
•Execute end-to-end lead generation process including scraping data from real estate
websites, cross-referencing with county and state records, extracting phone numbers
from public and private databases, formatting data, and uploading to organizationwide CRM systems
•Maintain, purchase, and scrub all phone number databases used by Sales
Development Representatives across the organization
•Perform comprehensive real estate analysis including running comps, calculating
Loan-to-Value, After Repair Value, Long-Term ARV, and Long-Term Rental valuations for
client properties
•Manage multiple CRM platforms including Pipedrive, Slack, CallTools, and
AdlersCapitalCRM for seamless lead management and team coordination
•Work directly with CEO and Founder providing executive assistant support including
schedule management, reminders, and daily operational coordination
•Trusted with full system access and administrative credentials due to consistent
overperformance and record-breaking results achieved during first week
2025 Marketing Automation and Customer Acquisition Specialist
Global E-commerce Partnership
•Designed and implemented sophisticated influencer recruitment automation system
achieving industry-leading 70% conversion rate
•Managed high-volume email marketing campaigns with exceptional 80% open rate
across 700+ targeted prospects
•Created advanced automation workflows using Excel, Google Apps Script, web
scraping, and AI prompt engineering
•Developed compelling sales copy and email sequences that successfully bypassed
spam filters while maintaining deliverability
•Conducted comprehensive lead generation and qualification processes resulting in
significant partnership acquisitions
•Provided detailed campaign analytics and optimization recommendations based on
performance data
2024 – 2025 Customer Service and Business Development Representative
PleaseBoost.me (SMMA Platform)
•Managed comprehensive customer support operations using LiveAgent and Klaviyo
automation, handling high-volume inquiries across multiple channels including live
chat, contact forms, and email
•Negotiated complex partnership agreements with SMMA service providers, managing
pricing structures, profit percentages, and revenue sharing models worth thousands of
dollars
•Conducted strategic business development outreach to original service providers,
successfully onboarding new vendors and expanding platform service offerings
•Developed and maintained pricing strategies for social media services including likes,
subscribers, comments, and engagement packages while optimizing profit margins
•Created comprehensive customer relationship management systems tracking prospect
interactions, partnership negotiations, and ongoing vendor relationships
•Provided technical platform guidance and support to both customers and business
partners, ensuring seamless onboarding and continued satisfaction
2024 – Present Mobile Application Developer
Miraculous God Assembly Nigeria
•Developed comprehensive dual-application ecosystem including MiracuApp member
interface and MiracuApp Admin administrative dashboard
•Built sophisticated mobile applications using FlutterFlow combined with custom
coding for enhanced functionality and user experience
•Created intricate user workflows and database architecture serving multi-branch
organizational operations
•Implemented complex administrative features including user management, event
coordination, and communication systems
•Currently managing beta testing phases with active user feedback integration and
iterative development cycles
•Coordinated with multiple stakeholders to ensure applications meet diverse
operational requirements
2023 – Present Social Media Marketing Specialist and Content Creator
Multi-Platform Operations
•Achieved explosive YouTube channel growth from 0 to 500+ subscribers, 0 to 00+ watch
hours, and million total views using only 8 videos in 5 days
•Scaled Facebook page from 0 to 21,000 followers in 6 days with 1.3 million impressions
through strategic content and engagement optimization
•Grew TikTok account to 1,000+ followers within days using viral content strategies and
trend identification
•Implemented advanced Twitter growth strategies targeting verified accounts,
successfully converting prospects into company followers
•Developed comprehensive social media automation workflows and content
scheduling systems across multiple platforms
•Created and executed viral content campaigns that consistently achieved 1000%+
organic growth rates
2022 – Present Freelance Digital Solutions Developer
Various Clients
•Developed custom websites for educational institutions and individual clients using AIassisted development methodologies
•Created professional portfolio websites showcasing advanced design principles and
modern functionality
•Provided comprehensive digital consultation services including strategy development,
technical implementation, and ongoing support
•Managed multiple concurrent projects while maintaining quality standards and
meeting strict client deadlines
EDUCATION
2022 – 2026
Online Program
Bachelor of Arts in Philosophy, Politics, Economics and Law (PPEL)
University of Arizona
Current Enrolling GPA: 3.0/4.0
2013 – 2019 Secondary Education
Spring of Life Secondary School
2019 West African Examinations Council (WAEC) Certificate
Raymonds College, Enugu
TECHNICAL SKILLS
Real Estate and Financial Services
Wholesale real estate acquisition, prospecting, DSCR
loans, Bridge loans, Refinancing, real estate
comparative market analysis, property valuation
calculations including LTV ARV LTARV LTR, private
lending, real estate financing operations, FSBO
property owner outreach, negotiation, deal pipeline
management, conversion optimization
Programming and Development
Python programming, FlutterFlow no-code
development, coding integration, customization, AI
prompt engineering, automation, Google Apps Script,
workflow automation, web scraping, data extraction
techniques, database management, API integration,
real estate data analysis, CRM systems
Software and Platforms
Microsoft Office Suite including Advanced Excel Word
PowerPoint, Google Workspace including Sheets Docs
Drive Apps Script, CRM Systems including Zoho
Pipedrive AdlersCapitalCRM Salesforce,
Communication Tools including Slack CallTools Skype,
Klaviyo email automation platform, LiveAgent
customer service platform, social media management
tools, analytics, video editing, content creation
software
Digital Marketing and Growth
Social media marketing automation, optimization, viral
content creation, trend identification, email marketing
automation, Klaviyo, influencer recruitment,
partnership development, paid advertising campaign
management, conversion rate optimization, A/B
testing, SEO, organic growth strategies
Customer Service and Sales
Multi-channel customer support, LiveAgent, chat,
email, social media, high-volume customer interaction
management, sales conversion, relationship building,
business development, partnership negotiations, CRM
systems, customer data management, conflict
resolution, customer retention
PERSONAL INFORMATION
Date of Birth
October 10, 2002
Nationality
Nigerian
Languages
English (Native)
CERTIFICATIONS AND AWARDS
01/12/2024 Company Record Holder - Highest Daily Call Volume
AdlersCapital
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
