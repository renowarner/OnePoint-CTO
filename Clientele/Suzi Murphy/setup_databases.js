const NOTION_TOKEN = 'ntn_k66990810537QbAzhsJdKx425nxWtKFWuw7xX8Tj4mjezf';
const PARENT_PAGE_ID = '30418f4b-dd5d-8190-9e3c-efcda80434a3';

async function createDatabases() {
  try {
    // 1. Create DB_Clients
    console.log('Creating DB_Clients...');
    const clientsRes = await fetch('https://api.notion.com/v1/databases', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { page_id: PARENT_PAGE_ID },
        title: [{ text: { content: 'DB_Clients' } }],
        properties: {
          'Name': { title: {} },
          'Status': {
            select: {
              options: [
                { name: 'Active', color: 'green' },
                { name: 'Lead', color: 'blue' },
                { name: 'Archived', color: 'gray' },
                { name: 'Licensing Outreach', color: 'purple' }
              ]
            }
          },
          'Tier/Type': {
            select: {
              options: [
                { name: 'Consultation', color: 'yellow' },
                { name: 'Full Project', color: 'orange' }
              ]
            }
          }
        }
      })
    });
    const clientsData = await clientsRes.json();
    const dbClientsId = clientsData.id;

    // 2. Create DB_Contacts
    console.log('Creating DB_Contacts...');
    const contactsRes = await fetch('https://api.notion.com/v1/databases', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { page_id: PARENT_PAGE_ID },
        title: [{ text: { content: 'DB_Contacts' } }],
        properties: {
          'Name': { title: {} },
          'Role/Title': { rich_text: {} },
          'Email': { email: {} },
          'Phone': { phone_number: {} },
          'LinkedIn URL': { url: {} },
          'LinkedIn Status': {
            select: {
              options: [
                { name: 'Not Connected', color: 'gray' },
                { name: 'Request Sent', color: 'blue' },
                { name: 'Connected', color: 'green' },
                { name: 'Engaged', color: 'purple' }
              ]
            }
          },
          'Outreach Status': {
            select: {
              options: [
                { name: 'To Contact', color: 'gray' },
                { name: 'Contacted', color: 'blue' },
                { name: 'Meeting Scheduled', color: 'yellow' },
                { name: 'Proposal Needed', color: 'orange' },
                { name: 'Dead/No Response', color: 'red' }
              ]
            }
          },
          'Company': {
            relation: {
              database_id: dbClientsId,
              type: 'dual_property',
              dual_property: {
                synced_property_name: 'Contacts',
                synced_property_id: 'contacts_sync'
              }
            }
          }
        }
      })
    });
    const contactsData = await contactsRes.json();
    const dbContactsId = contactsData.id;

    // 3. Create DB_Communications
    console.log('Creating DB_Communications...');
    const commsRes = await fetch('https://api.notion.com/v1/databases', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { page_id: PARENT_PAGE_ID },
        title: [{ text: { content: 'DB_Communications' } }],
        properties: {
          'Subject/Date': { title: {} },
          'Date': { date: {} },
          'Type': {
            select: {
              options: [
                { name: 'Email', color: 'orange' },
                { name: 'Phone', color: 'green' },
                { name: 'LinkedIn', color: 'blue' },
                { name: 'Meeting', color: 'purple' },
                { name: 'Note', color: 'gray' }
              ]
            }
          },
          'Notes': { rich_text: {} },
          'Outcome/Next Step': { rich_text: {} },
          'Contact': {
            relation: {
              database_id: dbContactsId,
              type: 'dual_property',
              dual_property: {
                synced_property_name: 'Communications',
                synced_property_id: 'comms_sync'
              }
            }
          }
        }
      })
    });
    const commsData = await commsRes.json();

    console.log('Databases created successfully!');
  } catch (error) {
    console.error('Error creating databases:', error);
  }
}

createDatabases();