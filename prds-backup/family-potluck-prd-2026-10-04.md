---
BACKUP NOTICE: Point-in-time snapshot backup created 2026-10-04 for Two Birds Innovation.
STATUS: Static archive snapshot (may be stale).
LIVE SOURCE OF TRUTH: The live, active documents are maintained in Notion and git at twobirds-kramerica/two-birds-portfolio.
CANONICAL REPO PATH: two-birds-portfolio/docs/PRD-design-context.md
NOTION REFERENCE: https://app.notion.com/p/3f0a09cf876a81bea061d731d950cf0d?pvs=204
---

# Product Design Context & Design PRD: Family Potluck Organizer

> **Audience**: UI/UX Designers, Product Designers, and Design Systems Engineers who have never seen this codebase before.  
> **Repository**: `twobirds-kramerica/two-birds-portfolio` (`family-potluck/`)  
> **Production URL**: [https://family-potluck.twobirdsinnovation.workers.dev](https://family-potluck.twobirdsinnovation.workers.dev)  
> **API Backend**: [https://potluck-api.twobirdsinnovation.workers.dev](https://potluck-api.twobirdsinnovation.workers.dev)  
> **Locale & Language**: Canadian English throughout (*favourite*, *colour*, *centre*, *organize*).

---

## 1. Purpose and Event Context

### What the Site Is For
Family Potluck Organizer is a zero-friction, no-login web application engineered to coordinate family holiday meals, potluck dinners, picnics, and reunions. It eliminates chaotic "who is bringing what" group text threads, duplicate casseroles, forgotten staples, and complex spreadsheet sign-ups.

Guests open a link on any smartphone or browser, view the master gathering menu, and claim dishes in seconds with just their name. Organizers receive instant, consolidated visibility into feast coverage, dietary restrictions, and remaining menu gaps.

### Who It Serves
The product serves a multi-generational family collective ranging from:
1. **Grandparents and Older Relatives (65+ years old)**: Users who may have lower digital literacy, visual impairments, tremor, or small mobile screens. They must never encounter login screens, multi-step verification codes, passwords, app installs, or confusing nested modals.
2. **Family Guests & Contributors**: Tech-comfortable siblings, cousins, and in-laws who want to claim an item quickly, see what others are bringing, or propose custom dishes.
3. **Event Co-Hosts (e.g. Cheryl & Norm)**: Non-technical family members hosting the feast at their home who need to update arrival times, coordinate dishes, manage RSVPs on behalf of relatives who phone or text, and print or review attendee lists.
4. **Platform Lead / Super Admin (Aaron)**: The family's operations and technical coordinator who provisions events, maintains master dish templates, archives concluded feasts, and safeguards data sovereignty.

### When It Is Used
The application operates across four distinct phases of a family gathering's lifecycle:
1. **Announcement & Discovery (2 to 4 weeks prior)**: The Super Admin initializes the gathering (e.g. Canadian Thanksgiving or Family Christmas), seeds classic menu items, and delegates hosting to the local host family. A shareable link is distributed via SMS, WhatsApp, or email.
2. **Commitment & Dish Assignment (1 to 2 weeks prior)**: Family members browse categories (Appetizers & Drinks, Main & Sides, Desserts, Other), claim pre-listed staples, or suggest new recipes. The host monitors the **Feast Coverage** progress bar.
3. **Coordination & Adjustments (Days leading up to event)**: Guests adjust their quantities or cancel using saved browser edit keys. Hosts add entries for offline elders who RSVP'd by phone. Host address and phone number are revealed if the host enables the public contact toggle.
4. **Execution & Archival (Day of event & post-event)**: Relatives check arrival instructions and addresses while en route. After the feast concludes, the Super Admin archives the event to lock edits while keeping all dish history intact to clone into next year's gathering.

---

## 2. Roles and Permissions Matrix

| Dimension | End User (Guest) | Sub Admin (Event Co-Host) | Super Admin (System Lead) |
|---|---|---|---|
| **Identity** | Any family attendee | Designated host (e.g. Cheryl & Norm) | Aaron Patzalek |
| **Authentication** | None (pure URL access) | Scoped token via URL hash fragment | Master server passphrase |
| **Credential Storage** | `localStorage` (`potluckEditKeys`, `potluckName`) | `sessionStorage` (`potluckHostToken`, `potluckHostEvent`) | `sessionStorage` (`potluckAdminPass`) |
| **Session Scope** | Current browser device | Single assigned event | Global across all events |
| **Event Metadata** | View-only (address hidden unless published) | Edit date, time, address, contact, instructions, publish toggle | Full edit across all events |
| **Dish Claims** | Claim open items; edit/delete own claims on same device | Add, edit, or remove claims on *anyone's* behalf | Add, edit, or remove claims on *anyone's* behalf |
| **Menu Structure** | Add custom dishes to "Other" or existing categories | Add, edit, reorder, delete master dishes and either/or pairs | Add, edit, reorder, delete master dishes and either/or pairs |
| **Event Lifecycle** | Browse active gatherings via nav pill switcher | Scoped strictly to one event; cannot archive | Create events, clone past menus, archive events, export JSON backup |
| **Host Invites** | Volunteer to host if event has no host | Cannot invite other hosts | Generate, copy, and revoke private host links |
| **Infrastructure** | None | None | Cloudflare Workers, KV, server secrets |

### Detailed Role Definitions

#### 1. End User (Family Guest)
- **Who they are**: Any invited family member opening the public link.
- **How they log in**: They **never** log in. The application is completely open for viewing and claiming. When a guest submits a claim, the server returns a private cryptographic `editKey`. The frontend automatically persists this key in `localStorage.potluckEditKeys` and remembers their name in `localStorage.potluckName`.
- **What they can do**:
  - View event banner, host byline, greeting, date, time, and arrival notes.
  - View location address and host phone *only* if the organizer checked "Show address and phone number to guests".
  - Monitor the real-time **Feast Coverage** progress bar (e.g., "14 of 16 dishes covered (2 still needed)").
  - Browse categorized menu items and either/or paired choices (e.g., "Green beans or Peas").
  - Claim an available dish by typing their name and optional note.
  - Choose one of 4 quick-add seasonal suggestions (e.g. "Garden Salad & Veggies", "Kid-Friendly Treats") or propose a custom dish under any category.
  - Edit or delete their own prior claims directly from the page (as long as they use the same browser/device).
  - Volunteer their home if the event displays "Looking for a Host Family!".
  - Switch between active gatherings using the top event navigation pill bar.
- **What they cannot do**:
  - Alter event details, dates, or host settings.
  - View or tamper with other guests' claims.
  - Add or delete dishes from the organizer's master list (custom dishes are appended as guest-submitted items).
  - View archived past gatherings.

#### 2. Sub Admin (Event Co-Host / Organizer)
- **Who they are**: Non-technical family hosts (such as Cheryl & Norm) running a specific holiday meal at their residence.
- **How they log in**: They access a private link sent to them by the Super Admin containing a secure token in the URL hash fragment: `admin.html#host=TOKEN&event=ID`. The boot script (`family-potluck/admin-boot.js`) immediately stores the token in `sessionStorage` (`potluckHostToken` and `potluckHostEvent`), clears the hash from the browser address bar via `history.replaceState` (to prevent accidental exposure or bookmark leaks), and attaches `X-Host-Token` to subsequent API calls.
- **What they can do**:
  - Customize event date, arrival time, street address, host phone, greeting message, and arrival notes.
  - Toggle the "Show address and phone number to guests" visibility switch.
  - Review and accept "Volunteer Host Offers" submitted by relatives.
  - Send the guest link to family using the "Message your family" card (supporting native OS Web Share, Android Chrome contact picker, SMS `sms:`, email `mailto:?bcc=`, and one-tap clipboard copy).
  - Customize the menu: add dishes, edit dish names/notes, adjust required quantities ("How many can bring this"), establish either/or choices, and delete items.
  - Manage sign-ups on anyone's behalf: record dishes for offline relatives who called or texted, edit existing claims, or cancel claims without needing an edit key.
- **What they cannot do**:
  - Access, view, or modify any other family gathering (the top event switcher is completely hidden; the API enforces event isolation).
  - Create new events or clone menus.
  - Archive or delete events (the "4. Next event / backup" tab is removed from the DOM and blocked on the API).
  - Download raw JSON database backups.
  - Issue or revoke host links for other users.

#### 3. Super Admin (Platform Lead / Aaron)
- **Who they are**: Aaron Patzalek, platform architect and family systems lead.
- **How they log in**: Enters the server secret passphrase at the `admin.html` login gate. Verified via `POST /api/admin/verify`, stored in tab `sessionStorage` (`potluckAdminPass`), and transmitted via `X-Admin-Passphrase`.
- **What they can do**:
  - Everything the Sub Admin can do, across **all** family gatherings.
  - Switch between any active or archived event using the sticky top bar switcher.
  - Create new events from scratch or clone the menu schema from a prior feast without copying stale guest claims ("Start from a past event's menu").
  - Archive concluded events to hide them from the guest picker while preserving permanent records.
  - Export and download full JSON database backups of all events, menu items, and sign-ups.
  - Generate, copy, and revoke single-event host invite links for Sub Admins.
  - Rotate server passphrases directly via Cloudflare Dashboard or Wrangler CLI.

---

## 3. Screen Inventory per Role

### Public / End User Screens & States

```
+-----------------------------------------------------------------------+
|  [🍂 Family Gatherings: 🍂 Family Thanksgiving 2026 | 🎄 Family Christmas 2026]  |
+-----------------------------------------------------------------------+
|  HERO: 🍂 Canadian Thanksgiving 2026                                   |
|  Family Thanksgiving 2026                                             |
|  Hosted with love by Cheryl & Norm                                    |
|  "Welcome to our family Thanksgiving! Pick a favourite dish..."      |
|  [📅 Oct 12, 2026] [⏰ 4:00 p.m.] [📍 123 Maple St] [📞 555-0199]      |
|  [Arrival notes callout box...]                                       |
+-----------------------------------------------------------------------+
|  FEAST PROGRESS: 14 of 16 dishes covered (2 still needed) [======---] |
+-----------------------------------------------------------------------+
|  HINT: Tap "I will bring this" on anything you would like to cover.   |
+-----------------------------------------------------------------------+
|  MENU SECTION: 🦃 Main & Sides                                        |
|  +-----------------------------------------------------------------+  |
|  | [Icon] Roast Turkey                1 / 1 claimed (Full) [ Full ]|  |
|  |        ✓ Uncle Bob - 22 lb butterball                           |  |
|  +-----------------------------------------------------------------+  |
|  | [Icon] Homemade Gravy              0 / 1 claimed   [I'll bring] |  |
|  +-----------------------------------------------------------------+  |
|  | EITHER/OR CHOICE: Green Beans or Peas                           |  |
|  | [Icon] Green Beans (0/1) [I'll bring] | [Icon] Peas (0/1) [...] |  |
+-----------------------------------------------------------------------+
|  BRING SOMETHING NOT ON THE LIST (Alternate Suggestions Grid)         |
|  [🥗 Garden Salad] [🥖 Artisan Bread] [🧁 Kids Treats] [☕ Coffee]    |
|  [ ✨ I'll bring something completely different ]                     |
+-----------------------------------------------------------------------+
|  FOOTER: Made with care in St. Thomas, Ontario by Two Birds Innovation |
+-----------------------------------------------------------------------+
```

1. **Guest Home View (Populated State)**:
   - File: `family-potluck/index.html` + `family-potluck/app.js`.
   - Desktop: Capped at `max-width: 760px`, centered, generous margins (`page-narrow`).
   - Mobile (390px): Edge-to-edge card layout with 1rem gutters, zero horizontal overflow.
   - Dynamic Theme Engine: Inspects event type and title to apply themed CSS variables (`thanksgiving`, `christmas`, `summer`, `spring`, `wedding`, or `general`).
2. **Event Switcher Pill Bar**:
   - Renders above hero when two or more active events exist.
   - Active gathering highlighted with theme primary pill.
3. **Hero Header**:
   - Seasonal tag pill, Serif title, host byline, greeting message, metadata pills (calendar, clock, map pin, telephone), and arrival notes hint box.
4. **Volunteer Host Callout (Unassigned Host State)**:
   - When `event.host` is blank (e.g. Christmas 2026), renders a prominent card: "🏡 Looking for a Host Family!".
   - Expanding state: Clicking "Volunteer to Host" reveals fields: *Name*, *Proposed location/city*, *Hosting notes (capacity, amenities)*, and *Submit Host Offer*.
5. **Feast Coverage Progress Bar**:
   - Header: "X of Y dishes covered (Z still needed)".
   - Animated visual track showing percentage completion.
6. **Menu Section & Item Cards**:
   - Category header with themed emoji icon (`🥂 Appetizers & Drinks`, `🦃 Main & Sides`, `🥧 Desserts`, `🍂 Other`).
   - Dish row: Food emoji avatar, dish title, capacity badge (`0 / 1 claimed`, `Open for all`, or `Full`), preparation notes, and action button.
   - Claims listing: Existing contributors displayed as green badges (`✓ Name – Details`).
7. **Inline Dish Claim Form (Interactive State)**:
   - Expands inline directly inside the selected dish card when "I'll bring this" is tapped.
   - Fields: Name (auto-recalled from previous session), optional Details, error alert container, "Save" (primary), "Cancel" (secondary).
8. **Either/Or Paired Choice Card**:
   - Renders linked alternative dishes side-by-side (e.g. "Green beans or Peas") to prevent duplicate grocery purchases.
9. **Own-Claim Edit / Remove State**:
   - For claims matching an `editKey` in `localStorage`, renders inline "Edit" and "Remove" buttons next to the guest's badge.
   - Clicking "Edit" opens the inline edit form; clicking "Remove" prompts native confirmation before deleting.
10. **"Bring Something Not on the List" Section**:
    - **4 Symmetrical Alternate Suggestion Cards**: 2x2 grid on mobile (390px), 4x1 grid on desktop (760px+). Offers pre-composed shortcuts:
      - 🥗 *Garden Salad & Veggies* (Sides)
      - 🥖 *Artisan Breads & Loaves* (Sides)
      - 🧁 *Kid-Friendly Treats* (Desserts)
      - ☕ *Coffee, Tea & Creamers* (Drinks)
    - Tapping "+ Bring this" prefills the submission form with category, name, and notes.
    - **Custom Dish Banner Button**: "✨ I'll bring something completely different" opens a blank addition form with category pill selectors.
11. **Toast Notification System**:
    - Bottom-floating pill (`.notice.notice-ok` / `.notice.notice-error`) confirming actions with auto-dismiss after 6 seconds.
12. **Public Error / Network Failure State**:
    - Renders a clean card: "Could not load the event" with plain error text and a "Try again" button.

---

### Admin Passphrase Gate Screens (`admin.html`)

1. **Gate Default State**:
   - Centered card (`page-narrow`): Title "Family Potluck Admin", explanatory helper, password input with placeholder "Enter organizer passphrase".
   - **Show/Hide Password Button**: Inline toggle (`👁️ Show` / `🙈 Hide`) switching input type between `password` and `text`.
   - Primary submit button: "Unlock organizer panel".
2. **Gate Error State**:
   - Red notice banner: `"Unauthorized (Need help? Expand the recovery instructions below.)"`.
3. **Gate Recovery Drawer (`#details-forgot-pass`)**:
   - Collapsible accordion explaining local secret location, 30-second Cloudflare Dashboard rotation steps, Wrangler CLI commands, and co-host guidance.
4. **Gate Role Guidance Drawer (`#details-admin-roles`)**:
   - Side-by-side 2-column card grid comparing Super Admin vs Event Co-Host capabilities.

---

### Authenticated Admin Dashboard (`admin.html` after login)

1. **Top Sticky Bar**:
   - Left: "Family Potluck Organizer" title.
   - Center/Right: Event Switcher buttons (Super Admin only; hidden in Host Mode), "View guest page", "Copy guest link", "Log out" / "Sign out".
2. **"How this works" Onboarding Drawer**:
   - Collapsible panel detailing the 5-step operational workflow.
3. **Tab 1: "1. Event details"**:
   - **Event Information Card**: Form fields for Greeting, Host name, Date, Time, Address, Contact, Arrival instructions, and the "Show address and phone number to guests" checkbox.
   - **Volunteer Host Offers Card**: Visible only when volunteers exist. Shows applicant name, location, notes, timestamp, and an "Accept as host" one-click assignment button.
   - **Message Your Family Card**: Pre-composed invitation message, native OS Share trigger, Android Chrome contacts picker, SMS group button, Mailto BCC button, and clipboard copy.
   - **Host Invite Card (Super Admin only)**: Form to generate or revoke private sub-admin tokens for event co-hosts with a pre-written welcome message.
4. **Tab 2: "2. Menu"**:
   - **Add Item Card**: Fields for Dish name, Category select, Note, "How many can bring this" (1 to 99), Sort order, and Either/or pair identifier.
   - **Master Menu Table/List**: Categorized dishes with real-time sign-up counts, capacity status, inline "Edit" row toggle, and "Delete" (with confirmation).
5. **Tab 3: "3. Who's bringing what"**:
   - **Add on Someone's Behalf Card**: Dropdown of menu items, Person's name, Details note, "Add claim" button.
   - **Claims by Item Card List**: Grouped display of all attendee sign-ups per dish with direct organizer delete and edit controls.
6. **Tab 4: "4. Next event / backup" (Super Admin only; hidden in Host Mode)**:
   - **Create New Event Form**: Event ID slug, Event display title, Year, Type tag, and "Start from a past event's menu" dropdown selector.
   - **Archive Event Card**: One-click action to hide the gathering from public pickers while safeguarding all historical data.
   - **Backup All Data Card**: "Download backup JSON" button generating a timestamped JSON file containing the full KV document store.

---

## 4. Core User Flows (Step by Step)

### Flow A: Guest Claims an Existing Menu Dish
1. **Guest arrives**: Opens event link (e.g. `?event=thanksgiving-2026`).
2. **Page loads**: Fetches `/api/events/thanksgiving-2026`, renders categories and progress.
3. **Selects dish**: Taps "I'll bring this" on "Homemade Gravy".
4. **Form expands**: Card dynamically reveals Name and optional Details inputs. Name is prefilled from previous visit if available.
5. **Enters details**: Types "Aunt Linda" and "Giblet gravy, gluten-free" &rarr; taps "Save".
6. **Confirmation**: POST request returns 200 OK with `assignment.id` and `assignment.editKey`. Edit key is saved to `localStorage`.
7. **Instant update**: Toast appears ("You are bringing Homemade Gravy."), form collapses, and card renders "✓ Aunt Linda – Giblet gravy, gluten-free".

### Flow B: Guest Edits or Cancels Their Dish
1. Guest revisits the potluck page on the same phone.
2. The page inspects `localStorage.potluckEditKeys` and identifies the matching assignment ID.
3. The guest sees **Edit** and **Remove** buttons beside their name.
4. **To update**: Tapping "Edit" opens the inline form; submitting sends `PUT /api/events/:id/assignments/:aid` with header `X-Edit-Key`.
5. **To delete**: Tapping "Remove" triggers browser confirmation; confirming sends `DELETE /api/events/:id/assignments/:aid` with header `X-Edit-Key`.
6. The UI refreshes without full page reload; the dish slot opens back up for other relatives.

### Flow C: Guest Proposes a Custom Dish
1. Guest scrolls to the bottom section: "Bring something not on the list".
2. Guest either taps a popular shortcut (e.g. "🥗 Garden Salad & Veggies") or taps "✨ I'll bring something completely different".
3. An inline addition form expands with category selector pills (*Appetizers & Drinks*, *Main & Sides*, *Desserts*, *Other*).
4. Guest fills in item name, note, their name, and details, then taps "Save".
5. Submits `POST /api/events/:id/claim` with a `newItem` payload.
6. The server dynamically appends the item to the event's master item list and assigns it to the guest.
7. The new item immediately renders in its respective category section for all attendees.

### Flow D: Relative Volunteers to Host
1. Relative opens an unassigned event (e.g. `?event=christmas-2026`).
2. A banner displays: "🏡 Looking for a Host Family!".
3. Relative clicks "Volunteer to Host" and enters their name, proposed location (e.g., "Uncle Bob's house in London"), and amenities notes (e.g., "Seats 18 comfortably, double oven").
4. Form submits `POST /api/events/:id/volunteer-host`.
5. Success toast confirms: "Thank you! Your hosting offer has been submitted to Aaron."
6. Inside the admin panel, the offer appears in the "Volunteer Host Offers" queue for the Super Admin to accept with one click.

### Flow E: Event Co-Host (Sub Admin) Operates an Event
1. Host opens their private invite URL (`admin.html#host=TOKEN&event=thanksgiving-2026`).
2. Script stashes token into `sessionStorage`, strips the hash, and loads the dashboard.
3. Host opens "1. Event details" to adjust dinner time from 4:00 p.m. to 4:30 p.m., checks "Show address and phone number to guests", and clicks "Save event details".
4. Host opens "Message your family", taps "Copy message", and pastes it into the family group chat.
5. Grandma calls on the landline to say she's bringing homemade rolls. Host opens "3. Who's bringing what", selects "Dinner rolls", types "Grandma B", and clicks "Add claim".

### Flow F: Super Admin Provisions Next Year's Feast
1. Aaron signs into `admin.html` with the master passphrase.
2. Selects "4. Next event / backup" tab.
3. Enters ID `thanksgiving-2027`, Name `Family Thanksgiving 2027`, Year `2027`, Type `thanksgiving`.
4. Selects "Start from a past event's menu (optional)" &rarr; chooses `Family Thanksgiving 2026`.
5. Clicks "Create new event". The API duplicates all menu items, categories, slot counts, and either/or pairs without any of last year's guest claims.
6. Switches back to `thanksgiving-2026`, clicks "Archive this event" to freeze it, and switches to the new 2027 gathering.

---

## 5. Design System & Token Inventory

Extracted directly from `family-potluck/style.css`:

### 1. Typography Tokens
```css
--font-serif: 'Playfair Display', Georgia, Cambria, 'Times New Roman', serif;
--font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font: var(--font-sans);
```
- **Editorial / Headings**: `'Playfair Display'` (weights 600, 700; italic 400). Evokes festive warmth, printed holiday invitations, and cookbooks.
- **Body & UI Controls**: `'Plus Jakarta Sans'` (weights 400, 500, 600, 700). High x-height, clear apertures, highly legible at small sizes.
- **Base Font Sizes**:
  - Guest View (`.page-narrow`): `1.1875rem` (19px base font) to ensure older eyes do not struggle.
  - Admin View (`.page-wide`): `1.0625rem` (17px base font) for information density.
  - Form Inputs / Buttons: `0.95em` to `1em`.
  - Helper & Meta Text: `0.75em` to `0.85em`.

### 2. Spacing, Radii & Elevations
- **Border Radius**:
  - Standard cards & topbar: `--radius: 12px;`
  - Buttons, inputs, inline badges: `--radius-sm: 8px;`
  - Status pills & tag badges: `border-radius: 999px;` (pill shape).
- **Shadows**:
  - Subtle card resting: `--shadow-sm: 0 2px 6px rgba(56, 30, 20, 0.05);`
  - Elevation / Focus / Notice: `--shadow-md: 0 6px 20px rgba(56, 30, 20, 0.08);`
  - Card hover state: `--shadow-hover: 0 10px 28px rgba(56, 30, 20, 0.12);`
- **Transitions**: `--transition: 0.2s ease;`

### 3. Touch Target Architecture
- **Guest Touch Targets**: Every interactive button on `.page-narrow` enforces `min-height: 56px;` (exceeding WCAG 2.5.5 touch target criteria) for elderly thumb tapping.
- **Admin Touch Targets**: Enforces `min-height: 48px;` (desktop/tablet compact density: `min-height: 38px;` on `.btn-small`).
- **Form Inputs**: Enforces `min-height: 44px;` with 2px borders and prominent focus rings (`outline: 3px solid var(--focus-ring); outline-offset: 2px;`).

### 4. Dynamic Color Palettes (Light & Dark)

#### Core Autumn Harvest / Thanksgiving Palette (Default)
| Token | Light Hex | Dark Hex | Role |
|---|---|---|---|
| `--bg` | `#fcf9f5` | `#231812` | Main page canvas background |
| `--bg-card` | `#ffffff` | `#2e1f18` | Elevated card surfaces |
| `--bg-topbar` | `#381e14` | `#381a0e` | Sticky top navigation bar |
| `--bg-input` | `#fffdfa` | `#38271e` | Form input backgrounds |
| `--bg-hint` | `#fdf5ea` | `#3d2a1c` | Guidance & instruction callouts |
| `--bg-details`| `#faf1e4` | `#38271e` | Collapsible accordion interiors |
| `--text` | `#2c1a11` | `#f5ebe1` | Primary body and heading text |
| `--text-muted`| `#6e5849` | `#c8b7a6` | Subtitles, dish notes, timestamps |
| `--primary` | `#b84914` | `#d9682b` | Primary buttons, active states, branding |
| `--primary-hover`| `#9c3c0d` | `#eb7a3d` | Button active/hover state |
| `--secondary` | `#7c5c48` | `#b39b85` | Secondary actions, border outlines |
| `--border` | `#e8ded2` | `#4d382b` | Structural dividers & card borders |
| `--accent-gold`| `#c27803` | `#e5931a` | Progress fills, special highlights |
| `--danger` | `#ad281e` | `#e25b52` | Destructive actions, full dish badges |
| `--ok` | `#28683b` | `#48a860` | Success badges, claimed checkmarks |
| `--focus-ring`| `#d97706` | `#eb8538` | Keyboard focus indicator |

#### Seasonal Theme Variations
The CSS dynamically swaps CSS custom properties via `[data-theme="..."]`:
1. **Christmas / Holiday (`data-theme="christmas"`)**:
   - Primary: `#9e2a2b` (Festive cranberry)
   - Secondary: `#1a4d2e` (Evergreen)
   - Accent: `#c68a16` (Warm candle gold)
   - Topbar: `#163b27`
2. **Summer Gathering / BBQ (`data-theme="summer"`)**:
   - Primary: `#0284c7` (Summer sky blue)
   - Secondary: `#b45309` (Amber smoke)
   - Topbar: `#0f172a`
3. **Spring / Easter (`data-theme="spring"`)**:
   - Primary: `#2d6a4f` (Spring meadow)
   - Secondary: `#744d73` (Lilac blossom)
   - Topbar: `#1b4332`
4. **Formal / Wedding (`data-theme="wedding"`)**:
   - Primary: `#475569` (Slate)
   - Secondary: `#9a7b4f` (Champagne gold)
   - Topbar: `#1e2430`

### 5. Layout Breakpoints & Grid System
- `max-width: 760px`: Narrow single-column container for guest flow (`.page-narrow`).
- `max-width: 1100px`: Wide multi-column container for admin productivity (`.page-wide`).
- Breakpoint `600px`: Switches admin role guidance cards from 1 column to 2 columns.
- Breakpoint `720px`: Switches `.grid-2` to 2 columns, `.grid-3` to 3 columns, and tabs to horizontal row.
- Breakpoint `760px`: Switches alternate suggestion grid from 2 columns to 4 columns.
- Motion safety: `@media (prefers-reduced-motion: reduce)` disables all animations and transitions.

---

## 6. Why It Looks This Way (Inferred Intent)

Every design choice in this application reflects deliberate ergonomic constraints:

1. **Warm Earthy Palette over Sterile Corporate Blue `[INFERRED]`**: The warm autumn harvest tones (burnt orange, warm cream, wood bark brown) were chosen to feel like a Thanksgiving dining room or handwritten recipe card rather than a SaaS corporate project tracker.
2. **Oversized Typography & Touch Targets `[INFERRED]`**: The 19px base font and 56px guest tap targets were engineered specifically for older relatives (65+) who frequently operate mobile phones with zoomed fonts, without reading glasses, or with reduced dexterity.
3. **No Passwords or Accounts for Guests `[INFERRED]`**: Any sign-up barrier (passwords, email magic links, SMS 2FA) causes instant drop-off and confusion among non-technical relatives. Using URL routing and silent `localStorage` edit keys ensures zero onboarding friction.
4. **Dual-Layer Admin (Passphrase vs Scoped Hash-Link) `[INFERRED]`**: The Super Admin needs to delegate event management to family co-hosts (Cheryl & Norm) without giving them master server access or requiring them to create Cloudflare accounts. The hash-token URL acts as an invisible single-purpose key.
5. **In-Place Inline Accordions over Modals `[INFERRED]`**: Modal popups frequently break on mobile browsers (viewport zoom issues, hidden scrollbars, backdrop scroll leaks). Expanding claim forms directly inside the dish card preserves vertical reading context.
6. **Either/Or Choice Grouping `[INFERRED]`**: In family gatherings, having both green beans and peas leads to duplicate vegetable dishes while someone forgets the rolls. Grouping them visually prevents wasted grocery expenses.
7. **Intentional Menu Exclusions (Rule of Tradition) `[INFERRED]`**: Comments explicitly note that the default family Thanksgiving menu deliberately excludes relish trays, mustard trays, and ice cream because they violate specific family dinner traditions.

---

## 7. Aaron's Styling Judgments

> *Note for external design tools and contractors: The following block represents locked creator intent.*

```markdown
[I WILL FILL IN: colors I chose and why, tone, things I insisted on, things I rejected]
```

---

## 8. Blunt UX / UI / Accessibility Critique

An honest, unfiltered design critique of the current implementation:

### 1. Visual Hierarchy & Information Density
- **Hero Area Overload**: The top hero card contains a badge, title, host byline, greeting message, 4 metadata pills, an instructions callout box, and potentially an unassigned host banner. On mobile, this pushes the actual menu dishes below the initial 800px viewport fold. Users must scroll significantly before seeing a single dish to claim.
- **Card-Inside-Card Fatigue**: In the Admin view, forms are wrapped in `.card`, containing `.grid-2` fields, followed by another `.card` for sharing, another `.card` for host invite, and another `.card` for volunteers. It creates visual noise and heavy border nesting.

### 2. Typography & Contrast Deficiencies
- **Subtle Muted Text**: `--text-muted: #6e5849` on `--bg: #fcf9f5` has a contrast ratio of approximately `4.8:1`. While passing WCAG AA for normal text, it is borderline for seniors reading under bright sunlight or on dim mobile screens.
- **Full Badge Contrast**: The "Full" dish badge (`.badge-full`) uses `--danger: #ad281e` on `--bg-badge-full: #edf7ee`. Putting red text on a faint mint-green background creates chromatic aberration and poor contrast for red-green colour-blind individuals.
- **Overreliance on Emoji Avatars**: Dish icons are rendered as raw Unicode emojis (🦃, 🥧, 🥖). On Windows, Android, and iOS, these render with vastly different art styles, line weights, and visual baselines, occasionally misaligning with the serif dish titles.

### 3. Mobile Usability & Ergonomics
- **Admin Table Scrolling**: In `admin-menu.js` and `admin-claims.js`, row actions ("Edit", "Delete") sit in flex-wrap containers. On a 390px phone, if a dish name is long, the buttons wrap into awkward second lines, causing jagged row heights.
- **Form Cancellation Friction**: When an inline form is expanded on mobile, the "Save" and "Cancel" buttons are grouped horizontally at the bottom. If the keyboard opens, it can obscure the buttons, and tapping outside does not cancel the edit.
- **Lack of Sticky Feedback**: While the guest page has a sticky topbar on admin, the guest page has no persistent indicator of what dishes you have personally claimed as you scroll down a 40-item list. A floating "My Dishes (2)" anchor would improve peace of mind.

### 4. Accessibility (a11y) Weaknesses
- **Status Announcements**: While `.notice` uses `role="status"` or `role="alert"`, dynamic inline form expansion does not announce `aria-expanded` states to screen readers.
- **Color-Dependent State**: Full dishes are indicated primarily through grayed styling and a small badge. Screen readers receive the disabled button state, but visual scan relies heavily on low-contrast pill badges.

---

## 9. Technical & Operational Constraints

1. **Edge Deployment on Cloudflare Workers Assets**:
   - The entire front end is static HTML, CSS, and vanilla ES6 JavaScript.
   - **Hard Rule**: No Node frameworks (no React, Vue, Next.js, Svelte, Angular, Vite, or Webpack) in production. Code must execute natively in evergreen browsers without build-step compilation.
2. **Data Persistence on Cloudflare Workers KV**:
   - The back end is a lightweight Cloudflare Worker (`potluck-api`) interfacing with KV storage.
   - Storage schema stores each event as a unified JSON document (`potluck:event:<id>`).
   - KV is eventually consistent. While writes take effect quickly, rapid concurrent writes could encounter race conditions; the app relies on optimistic local updates.
3. **Zero-Code Operational Ownership**:
   - The primary organizer (and invited hosts) must never be expected to write code, edit JSON files, run terminal commands, or manage databases to run an event. Everything must be manageable via browser UI.
4. **Mobile-First Reality**:
   - Over 85% of family engagement occurs on mobile devices via SMS links. Desktop is primarily used by the organizer during initial setup.
5. **Canadian English Spelling Standards**:
   - All public and admin copy must strictly use Canadian English conventions (*favourite*, *flavour*, *colour*, *centre*, *organize*, *kilometre*).

---

## 10. Open Questions for the Designer

1. **Guest Confirmation & Reminders**: Should guests be offered an optional "Add to Apple/Google Calendar" button or "Text me my edit link" utility, or does adding phone/email collection erode the beloved "zero-login" trust?
2. **Sticky "My Plate" Summary**: Should mobile guests have a sticky bottom drawer or floating badge showing summary cards of items they have claimed so far?
3. **Dietary Filter System**: Currently, dietary restrictions (gluten-free, nut allergy, vegan) are typed as freeform text notes. Would a top-level filter bar (e.g. `[Gluten-Free] [Vegetarian] [Nut-Free]`) help families with severe allergies, or does it overcomplicate dish submission?
4. **Admin Mobile IA**: Should the Admin view adopt a bottom tab bar on mobile instead of the current top horizontal scroll tabs?
5. **Printable Feast Manifest**: Organizers frequently want a physical paper sheet on the kitchen island during the dinner. Should we design a dedicated print stylesheet (`@media print`) that formats the menu as a clean, two-column checklist?

---

## 11. Visual Evidence & Screenshot Archive

All screenshots were captured live via Playwright at **390px** (mobile) and **1280px** (desktop) and are saved in `docs/screens/` (and mirrored in `family-potluck/docs/screens/`):

### Public & Guest Screens
- **`enduser-home-390.png`** / **`enduser-home-1280.png`**: Full default Thanksgiving feast page showing hero, progress bar, categorized dishes, either/or choices, alternate suggestion grid, and footer.
- **`enduser-claim-form-390.png`** / **`enduser-claim-form-1280.png`**: Interactive state showing the inline dish claim form expanded inside a menu card.
- **`enduser-custom-dish-390.png`** / **`enduser-custom-dish-1280.png`**: Custom dish proposal form expanded with category button pills.
- **`enduser-volunteer-host-390.png`** / **`enduser-volunteer-host-1280.png`**: Christmas 2026 gathering showing the unassigned host banner and the volunteer host submission form.
- **`enduser-error-390.png`** / **`enduser-error-1280.png`**: Clean error card state displayed when navigating to a non-existent or invalid event ID.

### Admin Passphrase Gate Screens
- **`admin-gate-390.png`** / **`admin-gate-1280.png`**: Admin sign-in gate showing passphrase input, show/hide password toggle, and closed recovery accordions.
- **`admin-gate-error-390.png`** / **`admin-gate-error-1280.png`**: Failed authentication error alert banner referencing recovery options.
- **`admin-gate-help-expanded-390.png`** / **`admin-gate-help-expanded-1280.png`**: Admin gate with both "Forgot your passphrase" and "Super Admin vs Event Host" comparison drawers fully expanded.

### Authenticated Admin Screens Requiring Aaron's Capture
Because the AI agent operates under strict security governance (Rule 15 and the Aaron-Input Contract no-broker corollary prohibiting agents from holding or decrypting secrets), the following authenticated internal screens could not be captured by the automated crawler and are queued for Aaron to capture:
1. **`admin-tab1-details-390.png`** / **`admin-tab1-details-1280.png`**: Super Admin Tab 1 (Event Information, Volunteer Host Offers queue, Share Card, Host Invite generator).
2. **`admin-tab2-menu-390.png`** / **`admin-tab2-menu-1280.png`**: Super Admin Tab 2 (Master menu builder, dish rows, inline edit state).
3. **`admin-tab3-claims-390.png`** / **`admin-tab3-claims-1280.png`**: Super Admin Tab 3 (Add on behalf form, item claims breakdown).
4. **`admin-tab4-nextevent-390.png`** / **`admin-tab4-nextevent-1280.png`**: Super Admin Tab 4 (Create new event, clone past menu, archive event, download backup).
5. **`subadmin-hostmode-390.png`** / **`subadmin-hostmode-1280.png`**: Event Host view via private link (showing tabs 1-3 without event switcher or tab 4).
