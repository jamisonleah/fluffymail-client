"use client";
import { useEmailView } from "@/app/client/handlers/emailViewHandler";
import { useState, useEffect } from "react";

export default function EmailEditor() {
  const { selectedEmail } = useEmailView();

  // Form state based on selected draft
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  // Update form state when a new draft is selected
  useEffect(() => {
    if (selectedEmail?.isDraft) {
      setTo((selectedEmail.to || []).join(", "));
      setSubject(selectedEmail.subject || "");
      setBody(selectedEmail.body || "");
    }
  }, [selectedEmail]);

  return (
    <section className="w-full mx-2 mb-10 bg-bunny-blush p-4 rounded-lg overflow-y-auto">
      <h2 className="text-lg font-bold mb-4 text-velvet-gray">Draft Editor</h2>

      {selectedEmail?.isDraft ? (
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-800 mb-1">To:</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-2 rounded bg-white text-gray-800"
              placeholder="example@fluffymail.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1">Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 rounded bg-white text-gray-800"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1">Body:</label>
            <textarea
              rows={10}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full p-4 rounded bg-white text-gray-800"
              placeholder="Write your email..."
            />
          </div>

          <button
            type="button"
            className="bg-blueberry-sky text-gray-800 px-6 py-2 rounded-lg hover:bg-blueberry-sky/80"
            onClick={() => alert("Draft saved! (not implemented yet)")}
          >
            Save Draft
          </button>
        </form>
      ) : (
        <p className="text-gray-800/80">No draft selected to edit.</p>
      )}
    </section>
  );
}

  