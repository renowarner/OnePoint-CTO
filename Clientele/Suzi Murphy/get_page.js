const NOTION_TOKEN = 'ntn_k66990810537QbAzhsJdKx425nxWtKFWuw7xX8Tj4mjezf';
const PAGE_ID = '30218f4bdd5d81d9a8aaff79cf6a4ff3';

async function getPage() {
  try {
    const response = await fetch(`https://api.notion.com/v1/pages/${PAGE_ID}`, {
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

getPage();