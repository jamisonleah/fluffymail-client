"use client";
import { useEmailView } from "@/app/client/handlers/emailViewHandler";
import EmailEditor from "./emailEditor";
import Icon from "@/components/Icon"; 
import ReadWriteViewer from "./readWriteViewer";
export default function EmailViewer() {
  // Context to manage email view state
  // Count unread emails -> Move to utils later 
  const { selectedEmail, emails, mailBox, mode } = useEmailView();
  const unread = emails.filter(email => !email.isRead).length;
  // count unread emails with folder
  const unreadInFolder = emails.filter(email => !email.isRead && email.folder === mailBox).length;
  // Count emails in folder
  const emailsInFolder = emails.filter(email => email.folder === mailBox).length;
  return (
    <section className="w-1/2 h-full"> 
        <div className="w-full flex items-start gap-3 px-3 py-2 bg-berry-mauve rounded-lg mb-4">
          <Icon name="email-client/icons8-inbox-50" className="w-10 h-10 text-white" />
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold font-sans text-white">{mailBox}</h2> 
            <p className="text-xs text-white opacity-80">
              {emailsInFolder} emails • {unreadInFolder} unread
            </p>
          </div>
        </div>
    { mode === "list" ? <ReadWriteViewer /> : <EmailEditor /> }
    </section>
  ); 
}