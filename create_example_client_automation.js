import dotenv from 'dotenv';
dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const CLIENTS_DB_ID = process.env.NOTION_CLIENTS_DB_ID;
const AUDIT_DB_ID = process.env.NOTION_AUDIT_DB_ID;

async function createExampleClientAndAudit() {
  if (!NOTION_TOKEN || !CLIENTS_DB_ID || !AUDIT_DB_ID) {
    console.error('Missing environment variables. Please check your .env file.');
    return;
  }

  try {
    // 1. Create the Example Client
    const clientResponse = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { database_id: CLIENTS_DB_ID },
        properties: {
          'Client Name': { title: [{ text: { content: 'Acme Corp (Example)' } }] },
          'Status': { select: { name: 'Audit in Progress' } },
          'Company': { rich_text: [{ text: { content: 'Acme Innovations' } }] },
          'Email': { email: 'contact@acme.example' },
          'Consult Notes': { rich_text: [{ text: { content: 'Initial interest in AI automation and SaaS consolidation.' } }] }
        }
      })
    });

    const client = await clientResponse.json();
    console.log(`Created Example Client: ${client.id}`);

    // 2. Fetch the "Master" Audit items (those not yet linked to a client)
    const masterItemsResponse = await fetch(`https://api.notion.com/v1/databases/${AUDIT_DB_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filter: {
          property: 'Client',
          relation: { is_empty: true }
        }
      })
    });

    const masterItems = await masterItemsResponse.json();
    console.log(`Found ${masterItems.results.length} master audit items to clone.`);

    // 3. Clone and link items to the new client
    for (const item of masterItems.results) {
      const itemName = item.properties['Audit Item'].title[0].plain_text;
      const category = item.properties['Category'].select.name;

      await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_TOKEN}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          parent: { database_id: AUDIT_DB_ID },
          properties: {
            'Audit Item': { title: [{ text: { content: `${itemName} - Acme Corp` } }] },
            'Category': { select: { name: category } },
            'Status': { select: { name: 'Not Started' } },
            'Client': { relation: [{ id: client.id }] }
          }
        })
      });
      console.log(`Cloned and linked: ${itemName}`);
    }

    console.log('Successfully set up example client with linked audit checklist!');

  } catch (error) {
    console.error('Error during setup:', error);
  }
}

createExampleClientAndAudit();