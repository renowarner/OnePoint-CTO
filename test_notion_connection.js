import dotenv from 'dotenv';
dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;

async function listAccessibleObjects() {
  if (!NOTION_TOKEN) {
    console.error('Missing environment variables. Please check your .env file.');
    return;
  }

  try {
    const response = await fetch('https://api.notion.com/v1/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    if (data.results && data.results.length > 0) {
      console.log('Successfully connected! Found the following objects:');
      data.results.forEach(obj => {
        const title = obj.properties?.title?.title?.[0]?.plain_text || 
                      obj.properties?.Name?.title?.[0]?.plain_text || 
                      'Untitled';
        console.log(`- [${obj.object}] ${title} (ID: ${obj.id})`);
      });
    } else {
      console.log('Connected, but no pages or databases are shared with this integration yet.');
    }
  } catch (error) {
    console.error('Error connecting to Notion:', error);
  }
}

listAccessibleObjects();