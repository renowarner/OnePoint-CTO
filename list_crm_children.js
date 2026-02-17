import dotenv from 'dotenv';
dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const CRM_PAGE_ID = process.env.NOTION_CRM_PAGE_ID;

async function listPageChildren() {
  if (!NOTION_TOKEN || !CRM_PAGE_ID) {
    console.error('Missing environment variables. Please check your .env file.');
    return;
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/blocks/${CRM_PAGE_ID}/children`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    });

    const data = await response.json();
    if (data.results && data.results.length > 0) {
      console.log('Found children on CRM page:');
      data.results.forEach(block => {
        console.log(`- [${block.type}] (ID: ${block.id})`);
      });
    } else {
      console.log('The CRM page is currently empty.');
    }
  } catch (error) {
    console.error('Error fetching page children:', error);
  }
}

listPageChildren();