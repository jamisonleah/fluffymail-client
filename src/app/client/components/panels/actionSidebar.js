"use client";

import { PrimaryFolderButton, SecondaryButton, FolderButton } from "@/app/client/components/assets/cuteButtons";
export default function ActionSidebar() {
  return (
      <aside className="w-1/4 bg-bunny-blush  border-r-2 pr-4 border-cotton-candy">
        <h2 className="text-lg  text-raspberry-jam">By DreadDev </h2>
        <div className="w-full border-b-2 py-1 border-cotton-candy mb-4"></div>

        <SecondaryButton
          onClick={() => alert("Creating new message")}
          icon='email-client/icons8-new-message-50'
        >
          create new message
        </SecondaryButton>
        <div className="w-full border-b-2 py-1 border-cotton-candy my-4"></div>
        <h3 className="text-lg mb-2 text-berry-mauve">Mailbox</h3>
        <ul className="space-y-2">
          <li> 
            <PrimaryFolderButton 
              onClick={() => alert("Mail sent!")}
              icon='email-client/icons8-inbox-50' 
              mailbox="inbox"
            >
              inbox
            </PrimaryFolderButton>
          </li>
          <li>
            <PrimaryFolderButton 
              onClick={() => alert("Draft saved!")}
              icon='email-client/icons8-compose-50' 
              mailbox="drafts"
            >
              drafts
            </PrimaryFolderButton>
          </li>
          <li>
            <PrimaryFolderButton 
              onClick={() => alert("Sent!")}
              icon='email-client/icons8-paper-plane-50' 
              mailbox="sent"
            >
              sent
            </PrimaryFolderButton>
          </li>
          <li>
            <PrimaryFolderButton
              onClick={() => alert("Spam emptied!")}
              icon='email-client/icons8-spam-can-50'
              mailbox="spam"
            >
              spam
            </PrimaryFolderButton>
          </li>
          <li>
            <PrimaryFolderButton 
              onClick={() => alert("Trash emptied!")}
              icon='email-client/icons8-trash-50' 
              mailbox="trash"
            >
              trash
            </PrimaryFolderButton>
          </li>
        </ul>
        <h3 className="text-lg mb-2 text-berry-mauve">Folders</h3>
        <ul className="space-y-2">
          <li> 
            <FolderButton 
              onClick={() => alert("Folder opened!")}
              icon='favorite' 
              mailbox="favorites"
            >
              favorites
            </FolderButton>
          </li>
          <li>
            <FolderButton 
              onClick={() => alert("Created new folder!")}
              icon='add' 
            >
              new folder
            </FolderButton>
          </li>
          </ul>

      </aside>
  );
}
