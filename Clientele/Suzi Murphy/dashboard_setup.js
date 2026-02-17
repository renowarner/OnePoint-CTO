const NOTION_TOKEN = 'ntn_k66990810537QbAzhsJdKx425nxWtKFWuw7xX8Tj4mjezf';
const PAGE_ID = '30218f4bdd5d81d9a8aaff79cf6a4ff3';

async function setupDashboard() {
  const blocks = [
    {
      object: 'block',
      type: 'heading_1',
      heading_1: { rich_text: [{ text: { content: '📈 Suzi Murphy: Outreach Dashboard' } }] }
    },
    {
      object: 'block',
      type: 'callout',
      callout: {
        rich_text: [{ text: { content: 'This dashboard provides a high-level view of your outreach status. Use the databases below to log new communications.' } }],
        icon: { emoji: '💡' },
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
      heading_2: { rich_text: [{ text: { content: '🎯 Key Metrics' } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ text: { content: 'Below is your outreach activity log. Pin important views here for quick access.' } }] }
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
      console.log('Dashboard setup complete!');
    } else {
      console.error('Error:', data);
    }
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}

setupDashboard();