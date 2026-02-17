import pandas as pd
import requests
import json

NOTION_TOKEN = 'ntn_k66990810537QbAzhsJdKx425nxWtKFWuw7xX8Tj4mjezf'
DATABASE_ID = '30218f4bdd5d8140989bd1683d8c3a89'

def import_excel_to_notion():
    # Load the Excel file
    file_path = 'Active Projects/Suzi Murphy/CLIENT_NAME_INVENTION_YEAR.xlsx'
    df = pd.read_excel(file_path, header=None)
    
    # Data starts from index 3 (Row 4)
    # Row 1 (index 1) has some headers
    # Row 2 (index 2) has other headers
    
    headers = {
        "Authorization": f"Bearer {NOTION_TOKEN}",
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
    }

    for index, row in df.iloc[3:].iterrows():
        # Map columns based on observed structure
        company = str(row[1]) if pd.notna(row[1]) else ""
        website = str(row[2]) if pd.notna(row[2]) else ""
        summary = str(row[3]) if pd.notna(row[3]) else ""
        contact_name = str(row[4]) if pd.notna(row[4]) else ""
        linkedin = str(row[5]) if pd.notna(row[5]) else ""
        email = str(row[6]) if pd.notna(row[6]) else ""
        phone = str(row[7]) if pd.notna(row[7]) else ""
        status = str(row[9]) if pd.notna(row[9]) else ""
        stage = str(row[10]) if pd.notna(row[10]) else ""

        if not company and not contact_name:
            continue

        # Build Notion Page Properties
        properties = {
            "Name": {"title": [{"text": {"content": company if company else contact_name}}]},
            "Company": {"rich_text": [{"text": {"content": company}}]},
            "Contact Name": {"rich_text": [{"text": {"content": contact_name}}]},
        }

        if website.startswith("http"):
            properties["Website"] = {"url": website}
        if linkedin.startswith("http"):
            properties["LinkedIn"] = {"url": linkedin}
        if email and "@" in email:
            properties["Email"] = {"email": email}
        if phone:
            # Simple cleanup for phone numbers
            properties["Phone"] = {"phone_number": phone}
        if summary:
            properties["Summary"] = {"rich_text": [{"text": {"content": summary}}]}
        
        # Select fields need to match options exactly
        valid_statuses = ["Non-Responsive", "Engaged", "Initial Communication Sent"]
        if status in valid_statuses:
            properties["Excel Status"] = {"select": {"name": status}}
            
        valid_stages = ["Direct Communication", "Follow Up (Bi-Weekly)"]
        if stage in valid_stages:
            properties["Communication Stage"] = {"select": {"name": stage}}

        # Create the page
        payload = {
            "parent": {"database_id": DATABASE_ID},
            "properties": properties
        }
        
        response = requests.post("https://api.notion.com/v1/pages", headers=headers, data=json.dumps(payload))
        if response.status_code == 200:
            print(f"Imported: {company or contact_name}")
        else:
            print(f"Error importing {company or contact_name}: {response.text}")

if __name__ == "__main__":
    import_excel_to_notion()
