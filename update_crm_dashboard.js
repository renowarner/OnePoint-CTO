import dotenv from 'dotenv';
dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const CRM_PAGE_ID = process.env.NOTION_CRM_PAGE_ID;

// Note: Notion API requires public URLs for images. 
// Since these are local files, I will set the page title and structure first.
// If you have these hosted anywhere, we can update the URLs.
// For now, I'll use placeholders or simply set the text-based styling.

async function updateCRMToDashboard() {
  if (!NOTION_TOKEN || !CRM_PAGE_ID) {
    console.error('Missing environment variables. Please check your .env file.');
    return;
  }

  try {
    // 1. Update Page Icon and Cover (Using external URLs if possible, or just setting title)
    await fetch(`https://api.notion.com/v1/pages/${CRM_PAGE_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        icon: { type: 'emoji', emoji: '🚀' }, // Temporary icon until hosted image is available
        properties: {
          title: { title: [{ text: { content: 'OnePoint CTO | Command Center' } }] }
        }
      })
    });

    // 2. Add Dashboard Elements (Header, Description, and Views)
    const blocks = [
      {
        object: 'block',
        type: 'heading_1',
        heading_1: {
          rich_text: [{ type: 'text', text: { content: 'OnePoint CTO CRM' } }]
        }
      },
      {
        object: 'block',
        type: 'callout',
        callout: {
          rich_text: [{ type: 'text', text: { content: 'Welcome to the OnePoint Command Center. This dashboard synchronizes client lifecycles with the OnePoint Audit framework: Audit → Integrate → Scale.' } }],
          icon: { emoji: '🎯' },
          color: 'blue_background'
        }
      },
      {
        object: 'block',
        type: 'heading_2',
        heading_2: {
          rich_text: [{ type: 'text', text: { content: 'Active Workflows' } }]
        }
      },
      {
        object: 'block',
        type: 'column_list',
        column_list: {
          children: [
            {
              object: 'block',
              type: 'column',
              column: {
                children: [
                  {
                    object: 'block',
                    type: 'paragraph',
                    paragraph: {
                      rich_text: [{ type: 'text', text: { content: '📊 ', annotations: { bold: true } }, href: null }, { type: 'text', text: { content: 'Manage Clients' } }]
                    }
                  }
                ]
              }
            },
            {
              object: 'block',
              type: 'column',
              column: {
                children: [
                  {
                    object: 'block',
                    type: 'paragraph',
                    paragraph: {
                      rich_text: [{ type: 'text', text: { content: '📋 ', annotations: { bold: true } }, href: null }, { type: 'text', text: { content: 'Audit Status' } }]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        object: 'block',
        type: 'divider',
        divider: {}
      }
    ];

    await fetch(`https://api.notion.com/v1/blocks/${CRM_PAGE_ID}/children`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ children: blocks })
    });

    console.log('Dashboard layout updated!');

  } catch (error) {
    console.error('Error updating dashboard:', error);
  }
}

updateCRMToDashboard();