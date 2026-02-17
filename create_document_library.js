import dotenv from 'dotenv';
dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const PARENT_PAGE_ID = process.env.NOTION_CRM_PAGE_ID;
const CLIENTS_DB_ID = process.env.NOTION_CLIENTS_DB_ID;

async function createDocumentLibrary() {
  if (!NOTION_TOKEN || !PARENT_PAGE_ID || !CLIENTS_DB_ID) {
    console.error('Missing environment variables. Please check your .env file.');
    return;
  }

  try {
    const response = await fetch('https://api.notion.com/v1/databases', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { type: 'page_id', page_id: PARENT_PAGE_ID },
        title: [{ type: 'text', text: { content: 'Document Library' } }],
        properties: {
          'Document Name': { title: {} },
          'Client': {
            relation: {
              database_id: CLIENTS_DB_ID,
              single_property: {}
            }
          },
          'Type': {
            select: {
              options: [
                { name: 'Legal (NDA/MSA)', color: 'red' },
                { name: 'Audit Report', color: 'blue' },
                { name: '90-Day Roadmap', color: 'green' },
                { name: 'Technical Spec', color: 'purple' },
                { name: 'Other', color: 'gray' }
              ]
            }
          },
          'File': { files: {} },
          'Created Date': { created_time: {} },
          'Status': {
            select: {
              options: [
                { name: 'Draft', color: 'gray' },
                { name: 'Pending Signature', color: 'orange' },
                { name: 'Finalized', color: 'green' }
              ]
            }
          }
        }
      })
    });

    const data = await response.json();
    if (data.id) {
      console.log('Document Library Created:', data.id);
    } else {
      console.error('Failed to create database:', data);
    }
  } catch (error) {
    console.error('Error creating Document Library:', error);
  }
}

createDocumentLibrary();