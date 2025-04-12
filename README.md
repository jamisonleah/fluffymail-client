# 📬 BunnyMail — Cozy Email Client UI

**BunnyMail** is a playful, Bunny themed, OS-style email client UI designed for a secure mail experience. This front-end portion is part of a larger project that includes an Ansible-provisioned secure mail server. The UI is intentionally soft, approachable, and designed with clarity, accessibility, and delight in mind.

---

## UI Technologies Used

- **Next.js App Router**
- **TailwindCSS** (with custom theme colors like `berry-mauve`, `bunny-blush`, and `blueberry-sky`)
- **Google Fonts:** `Livvic` (primary) and `Lobster` (decorative)
- **SVG Icon Library:** Custom icons from [Cute Color/Icon8](https://icons8.com/icons/dusk), added manually to `/public/icons/`

---

## UX Features

- Scrollable email list and viewer panes with sticky folder header
- Navigation-style sidebar with hoverable folder buttons
- Styled message viewer with sender info, timestamp, and reply controls
- Reply window at the bottom of each email (optional rich text support)
- Context-based email selection with smooth transitions (via React Context)
- Search bar with embedded icon inside the input field
- OS-window-like UI container centered with consistent padding and shadow

---

## 📁 File Structure (Front-End)
```bash




```
## 🧪 Dev Tips

- Use `yarn dev` to run locally.
- All icons live in `/public/icons/` — referenced as `name="email-client/icons8-inbox-50"` in `<Icon />` components.
- Customize email data inside `data/emails.js`. Will be replaced with a real API call in the future.
- Use context (`EmailViewHandler`) to manage which email is selected and viewed.
- Styling is done via Tailwind with a custom color palette (`globals.css`).

---

## 📌 To-Do

- [ ] Add folder switching (Inbox, Sent, Trash, etc.)
- [ ] Drag-and-drop support for attachments
- [ ] Implement personal secure mail server
- [ ] Add a settings page for system logs and configs
- [ ] Add rich text editor for composing emails
---

Made with 🧡 and a lot of carrots.
