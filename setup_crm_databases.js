import dotenv from 'dotenv';
dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const PARENT_PAGE_ID = process.env.NOTION_CRM_PAGE_ID;

async function createDatabases() {
  if (!NOTION_TOKEN || !PARENT_PAGE_ID) {
    console.error('Missing environment variables. Please check your .env file.');
    return;
  }

  try {
    // 1. Create Clients Database
    const clientsDbResponse = await fetch('https://api.notion.com/v1/databases', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { type: 'page_id', page_id: PARENT_PAGE_ID },
        title: [{ type: 'text', text: { content: 'Clients' } }],
        properties: {
          'Client Name': { title: {} },
          'Status': {
            select: {
              options: [
                { name: 'Lead', color: 'gray' },
                { name: 'Initial Consult', color: 'blue' },
                { name: 'Audit in Progress', color: 'orange' },
                { name: 'Audit Complete', color: 'green' },
                { name: 'Active Client', color: 'purple' },
                { name: 'Closed', color: 'red' }
              ]
            }
          },
          'Company': { rich_text: {} },
          'Email': { email: {} },
          'Phone': { phone_number: {} },
          'Consult Notes': { rich_text: {} },
          'Last Contact': { date: {} }
        }
      })
    });

    const clientsDb = await clientsDbResponse.json();
    console.log('Clients Database Created:', clientsDb.id);

    // 2. Create Audit Checklist Database
    const auditDbResponse = await fetch('https://api.notion.com/v1/databases', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { type: 'page_id', page_id: PARENT_PAGE_ID },
        title: [{ type: 'text', text: { content: 'Audit Checklist' } }],
        properties: {
          'Audit Item': { title: {} },
          'Status': {
            select: {
              options: [
                { name: 'Not Started', color: 'gray' },
                { name: 'In Progress', color: 'blue' },
                { name: 'Pass', color: 'green' },
                { name: 'Fail', color: 'red' },
                { name: 'N/A', color: 'default' }
              ]
            }
          },
          'Category': {
            select: {
              options: [
                { name: 'Security', color: 'red' },
                { name: 'Infrastructure', color: 'orange' },
                { name: 'Compliance', color: 'blue' },
                { name: 'Operations', color: 'green' }
              ]
            }
          },
          'Client': {
            relation: {
              database_id: clientsDb.id,
              single_property: {}
            }
          },
          'Observations': { rich_text: {} },
          'Recommendations': { rich_text: {} }
        }
      })
    });

    const auditDb = await auditDbResponse.json();
    console.log('Audit Checklist Database Created:', auditDb.id);

  } catch (error) {
    console.error('Error creating databases:', error);
  }
}

createDatabases();