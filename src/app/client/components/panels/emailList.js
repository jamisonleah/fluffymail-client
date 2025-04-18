"use client";

import SearchBar from "@/app/client/components/assets/searchbar";
import EmailCard from "@/app/client/components/assets/emailCard";
import { useEmailView } from "@/app/client/handlers/emailViewHandler";

export default function EmailList() {
  const { selectedEmail, setSelectedEmail, emails, mailBox, mode, drafts } = useEmailView();

  const emailList = emails.filter((email) => email.folder === mailBox);
  const dateOrderemails = emailList.sort((a, b) => new Date(b.date) - new Date(a.date));
  const dateOrderDrafts = drafts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const clickDebugger = (email) => {
    setSelectedEmail(email);
    console.log("Email clicked:", email, selectedEmail);
  }
  return (
    <section className="w-1/3 mx-2 mb-10 bg-bunny-blush p-4 border-r border-gray-300 overflow-y-auto">
      <SearchBar placeholder="Search emails..." />
      <h2 className="text-lg font-bold mb-4 text-velvet-gray">Emails</h2>
      <ul className="space-y-4">
        {mode === "list" && dateOrderemails.map((email, index) => (
          <EmailCard
            key={index}
            email={email}
            onClick={() => setSelectedEmail(email)}
            selectedEmail={selectedEmail}
          >
          </EmailCard>
        ))}
        {mode === "edit" && dateOrderDrafts.map((email, index) => (
          <EmailCard
            key={index}
            email={email}
            onClick={() => setSelectedEmail(email)}
            selectedEmail={selectedEmail}
          >
          </EmailCard>
        ))}
      </ul>
    </section>
  )

}