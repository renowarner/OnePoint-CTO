import dotenv from 'dotenv';
dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DOC_LIB_DB_ID = process.env.NOTION_DOC_LIB_DB_ID;
const ACME_CLIENT_ID = '307adfcc-fe61-810d-b604-eec7b4e295f9';

async function createExampleDocument() {
  if (!NOTION_TOKEN || !DOC_LIB_DB_ID) {
    console.error('Missing environment variables. Please check your .env file.');
    return;
  }

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { database_id: DOC_LIB_DB_ID },
        properties: {
          'Document Name': { title: [{ text: { content: 'Mutual NDA - Acme Corp' } }] },
          'Client': { relation: [{ id: ACME_CLIENT_ID }] },
          'Type': { select: { name: 'Legal (NDA/MSA)' } },
          'Status': { select: { name: 'Finalized' } }
        }
      })
    });

    const data = await response.json();
    console.log('Example Document Entry Created:', data.id);
  } catch (error) {
    console.error('Error creating document entry:', error);
  }
}

createExampleDocument();