const NOTION_TOKEN = 'ntn_k66990810537QbAzhsJdKx425nxWtKFWuw7xX8Tj4mjezf';
const PAGE_ID = '30418f4b-dd5d-8190-9e3c-efcda80434a3'; // Post meeting test

async function buildDashboard() {
  const blocks = [
    {
      object: 'block',
      type: 'heading_1',
      heading_1: { rich_text: [{ text: { content: '🚀 Suzi Murphy: Outreach Command Center' } }] }
    },
    {
      object: 'block',
      type: 'callout',
      callout: {
        rich_text: [{ text: { content: 'This is the modular structure for tracking Clients, Contacts, and Communications. Each tier is linked to allow for deep reporting.' } }],
        icon: { emoji: '🏗️' },
        color: 'blue_background'
      }
    },
    {
      object: 'block',
      type: 'divider',
      divider: {}
    },
    {
      object: 'block',
      type: 'heading_2',
      heading_2: { rich_text: [{ text: { content: '📁 Navigation' } }] }
    },
    {
      object: 'block',
      type: 'paragraph',
      paragraph: {
        rich_text: [
          { text: { content: '1. ' }, annotations: { bold: true } },
          { text: { content: 'Clients' }, annotations: { italic: true } },
          { text: { content: ': High-level project status.\n' } },
          { text: { content: '2. ' }, annotations: { bold: true } },
          { text: { content: 'Contacts' }, annotations: { italic: true } },
          { text: { content: ': Individual stakeholders at target companies.\n' } },
          { text: { content: '3. ' }, annotations: { bold: true } },
          { text: { content: 'Communications' }, annotations: { italic: true } },
          { text: { content: ': Master log of all touchpoints.' } }
        ]
      }
    }
  ];

  try {
    const response = await fetch(`https://api.notion.com/v1/blocks/${PAGE_ID}/children`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ children: blocks })
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Dashboard content added!');
    } else {
      console.error('Error:', data);
    }
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}

buildDashboard();