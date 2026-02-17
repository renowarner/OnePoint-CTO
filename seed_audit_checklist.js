import dotenv from 'dotenv';
dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const AUDIT_DB_ID = process.env.NOTION_AUDIT_DB_ID;

const standardAuditItems = [
  // Friction & Process
  { item: 'Map manual data transfer points', category: 'Operations' },
  { item: 'Identify redundant software/subscriptions', category: 'Operations' },
  { item: 'Document existing workflows', category: 'Operations' },
  
  // Infrastructure & Access
  { item: 'Google Workspace / Microsoft 365 Admin Review', category: 'Infrastructure' },
  { item: 'Domain / DNS Management (Cloudflare/GoDaddy)', category: 'Infrastructure' },
  { item: 'Website Hosting & CMS (WordPress/Webflow)', category: 'Infrastructure' },
  { item: 'CRM / Lead Capture (HubSpot/Pipedrive)', category: 'Infrastructure' },
  { item: 'Payment Processor (Stripe/PayPal)', category: 'Infrastructure' },
  { item: 'Automation Platforms (Zapier/Make)', category: 'Infrastructure' },

  // Security & Operations
  { item: 'Technical SEO Audit', category: 'Operations' },
  { item: 'Tracking Pixel / Analytics Verification', category: 'Security' },
  { item: 'User Access & Admin Rights Review', category: 'Security' },
  { item: 'Backup & Disaster Recovery Verification', category: 'Security' }
];

async function seedAuditChecklist() {
  if (!NOTION_TOKEN || !AUDIT_DB_ID) {
    console.error('Missing environment variables. Please check your .env file.');
    return;
  }

  for (const item of standardAuditItems) {
    try {
      const response = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_TOKEN}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          parent: { database_id: AUDIT_DB_ID },
          properties: {
            'Audit Item': { title: [{ text: { content: item.item } }] },
            'Category': { select: { name: item.category } },
            'Status': { select: { name: 'Not Started' } }
          }
        })
      });
      const data = await response.json();
      console.log(`Added: ${item.item}`);
    } catch (error) {
      console.error(`Error adding ${item.item}:`, error);
    }
  }
}

seedAuditChecklist();