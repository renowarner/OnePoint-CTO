import dotenv from 'dotenv';
dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const CONTACTS_DB_ID = process.env.NOTION_CONTACTS_DB_ID;
const ACME_CLIENT_ID = '307adfcc-fe61-810d-b604-eec7b4e295f9';

async function createExampleContact() {
  if (!NOTION_TOKEN || !CONTACTS_DB_ID) {
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
        parent: { database_id: CONTACTS_DB_ID },
        properties: {
          'Name': { title: [{ text: { content: 'John Smith' } }] },
          'Role/Title': { rich_text: [{ text: { content: 'Director of IT' } }] },
          'Email': { email: 'jsmith@acme.example' },
          'Phone Number': { phone_number: '+1-555-0123' },
          'Client': { relation: [{ id: ACME_CLIENT_ID }] }
        }
      })
    });

    const data = await response.json();
    console.log('Example Contact Created:', data.id);
  } catch (error) {
    console.error('Error creating contact:', error);
  }
}

createExampleContact();