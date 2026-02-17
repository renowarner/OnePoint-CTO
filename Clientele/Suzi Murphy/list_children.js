const NOTION_TOKEN = 'ntn_k66990810537QbAzhsJdKx425nxWtKFWuw7xX8Tj4mjezf';
const PARENT_ID = '30218f4b-dd5d-8057-8fd5-fbe28748e92b'; // Testing Builds

async function listChildren() {
  try {
    const response = await fetch(`https://api.notion.com/v1/blocks/${PARENT_ID}/children`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    });

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}

listChildren();