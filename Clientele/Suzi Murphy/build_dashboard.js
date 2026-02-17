const NOTION_TOKEN = 'ntn_k66990810537QbAzhsJdKx425nxWtKFWuw7xX8Tj4mjezf';
const PAGE_ID = '30218f4bdd5d81d9a8aaff79cf6a4ff3'; // Suzi Murphy Outreach Page

async function buildDashboard() {
  const blocks = [
    {
      object: 'block',
      type: 'heading_1',
      heading_1: { rich_text: [{ text: { content: '📁 Client Communication Dashboard' } }] }
    },
    {
      object: 'block',
      type: 'callout',
      callout: {
        rich_text: [{ text: { content: 'Tracking all interactions, follow-ups, and relationship status for Suzi Murphy.' } }],
        icon: { emoji: '💼' },
        color: 'gray_background'
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
      heading_2: { rich_text: [{ text: { content: '🔔 Priority Follow-ups' } }] }
    },
    {
      object: 'block',
      type: 'paragraph',
      paragraph: { rich_text: [{ text: { content: 'Check this section daily for P0 and P1 actions that are overdue or due today.' } }] }
    },
    {
      object: 'block',
      type: 'divider',
      divider: {}
    },
    {
      object: 'block',
      type: 'heading_2',
      heading_2: { rich_text: [{ text: { content: '📝 Interaction History' } }] }
    },
    {
      object: 'block',
      type: 'paragraph',
      paragraph: { rich_text: [{ text: { content: 'The master database below tracks every touchpoint across LinkedIn and Email.' } }] }
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
      console.log('Template-inspired layout complete!');
    } else {
      console.error('Error:', data);
    }
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}

buildDashboard();
