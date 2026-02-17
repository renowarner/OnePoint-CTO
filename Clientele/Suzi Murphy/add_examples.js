const NOTION_TOKEN = 'ntn_k66990810537QbAzhsJdKx425nxWtKFWuw7xX8Tj4mjezf';
const DB_CLIENTS_ID = '30418f4b-dd5d-8119-85c4-f745305ca2ee';
const DB_CONTACTS_ID = '30418f4b-dd5d-81f3-9385-fa00a3dfb8f3';
const DB_COMMS_ID = '30418f4b-dd5d-81ac-adeb-d925d4268ebb';

async function addExamples() {
  try {
    // 1. Add Client
    console.log('Adding Example Client...');
    const clientRes = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { database_id: DB_CLIENTS_ID },
        properties: {
          'Name': { title: [{ text: { content: 'Bold' } }] },
          'Status': { select: { name: 'Active' } },
          'Tier/Type': { select: { name: 'Full Project' } }
        }
      })
    });
    const clientData = await clientRes.json();
    const clientId = clientData.id;

    // 2. Add Contact
    console.log('Adding Example Contact...');
    const contactRes = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { database_id: DB_CONTACTS_ID },
        properties: {
          'Name': { title: [{ text: { content: 'JD' } }] },
          'Company': { relation: [{ id: clientId }] },
          'LinkedIn Status': { select: { name: 'Connected' } },
          'Outreach Status': { select: { name: 'Contacted' } }
        }
      })
    });
    const contactData = await contactRes.json();
    const contactId = contactData.id;

    // 3. Add Communication
    console.log('Adding Example Communication...');
    await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { database_id: DB_COMMS_ID },
        properties: {
          'Subject/Date': { title: [{ text: { content: 'Intake Call - Feb 11' } }] },
          'Date': { date: { start: '2026-02-11' } },
          'Type': { select: { name: 'Meeting' } },
          'Contact': { relation: [{ id: contactId }] },
          'Notes': { rich_text: [{ text: { content: 'Discussed licensing strategy for new micro-business suite.' } }] }
        }
      })
    });

    console.log('Examples added successfully!');
  } catch (error) {
    console.error('Error adding examples:', error);
  }
}

addExamples();