# Notion Design Plan for Suzi Murphy

## 1. Executive Summary
**Goal:** Create a custom, modular Notion system to streamline licensing outreach, client intake, and project management.
**Core Philosophy:** "Modular & Scalable" - Build distinct databases for Clients, Contacts, and Communications that can be linked and viewed in various contexts.
**Foundation:** Integrate with Suzi's existing purchased dashboard template where possible.

## 2. System Architecture

### 2.1 Core Databases
The system will rely on three primary related databases:

1.  **`DB_Clients`** (The "Projects" or "Companies" e.g., Bold, Acme)
2.  **`DB_Contacts`** (Individuals e.g., Kevin, Steve at Acme)
3.  **`DB_Communications`** (Master Log of all touchpoints)

### 2.2 Database Schemas

#### **A. DB_Clients**
*Represents the companies or main projects.*
*   **Name:** Client Company Name.
*   **Status:** (Select) e.g., "Active", "Lead", "Archived", "Licensing Outreach".
*   **Tier/Type:** (Select) e.g., "Consultation", "Full Project".
*   **Relation:** Link to `DB_Contacts`.
*   **Rollup:** `Last Contact Date` (from Contacts -> Communications).
*   **Formula:** `Status Cloud` (Visual representation of progress based on child contacts).

#### **B. DB_Contacts**
*Represents the people you are reaching out to.*
*   **Name:** Person's Name.
*   **Company:** Relation to `DB_Clients`.
*   **Role/Title:** Text.
*   **Email:** Email address.
*   **Phone:** Phone number.
*   **LinkedIn URL:** URL.
*   **LinkedIn Status:** (Select) "Not Connected", "Request Sent", "Connected", "Engaged".
*   **Outreach Status:** (Select) "To Contact", "Contacted", "Meeting Scheduled", "Proposal Needed", "Dead/No Response".
*   **Relation:** Link to `DB_Communications`.

#### **C. DB_Communications** (The Master Log)
*Every email, call, or note goes here.*
*   **Date:** Date & Time.
*   **Type:** (Select) "Email", "Phone", "LinkedIn", "Meeting", "Note".
*   **Summary/Subject:** Text.
*   **Notes:** Rich Text (Body of the entry).
*   **Relation:** Link to `DB_Contacts` (Auto-populates Client via rollup/lookup).
*   **Outcome/Next Step:** (Select/Text) e.g., "Send Proposal", "Follow up in 2 weeks".

## 3. Dashboard Design

### 3.1 "Suzi’s Command Center" (Main Dashboard)
*   **Flash Info / Inbox:**
    *   Filtered view of `DB_Communications` where "Next Step" is not empty or Date is Today/Tomorrow.
    *   Filtered view of `DB_Clients` with Status = "Active" or "Lead" (New Intakes).
*   **Active Licensing Outreach:**
    *   Gallery or Board view of `DB_Clients` filtered by "Licensing Outreach".
    *   Shows the "Status Cloud" formula (e.g., "3 Contacts | 1 Meeting | Waiting").
*   **Quick Capture:**
    *   Buttons to: "New Client Intake", "Log Call", "Add Contact".

### 3.2 Client Detail Page (Template)
*When opening a Client record:*
1.  **Header:** Client Info, Website, Key Notes.
2.  **Contacts Module:**
    *   List view of `DB_Contacts` filtered for *this* client.
    *   Properties visible: Name, Role, Email, LinkedIn Status, Outreach Status.
3.  **Communication History:**
    *   List view of `DB_Communications` filtered for *contacts of this client*.
    *   Sorted by Date (Descending).

## 4. Workflows & Automation

### 4.1 Client Intake
*   **Trigger:** New Lead.
*   **Action:** Create new entry in `DB_Clients`.
*   **Details:** Select "Type" (e.g., Consultation).
*   **Result:** A fresh page with the standard template is generated.

### 4.2 Logging Outreach
*   **Method:** Open `DB_Contacts` entry -> Click "New Communication".
*   **Details:** Log the call/email.
*   **Result:** The `Last Contact Date` on the Client level updates automatically.

### 4.3 Status "Word Cloud"
*   **Logic:** A Formula on `DB_Clients` that checks linked `DB_Contacts`.
*   **Example Output:** `🟢 Connected: 2 | 🟡 Pending: 5 | 🔴 Dead: 1`
*   **Purpose:** Instant visual grasp of the campaign health for that company without opening sub-pages.

## 5. Implementation Roadmap (Estimated 7-10 Hours)

*   **Phase 1: Foundation (Hours 1-3):** Set up `DB_Clients`, `DB_Contacts`, `DB_Communications` with correct relations and rollups.
*   **Phase 2: Templating (Hours 3-6):** Build the "Client Detail" template and the "Command Center" dashboard views. Integration with purchased template.
*   **Phase 3: Data Migration Strategy (Hours 6-8):** Create "Import_DB" for spreadsheet ingestion; map fields.
*   **Phase 4: Refinement & Training (Hours 8-10):** Review with Suzi, tweak "Status Cloud" logic, final polish.
