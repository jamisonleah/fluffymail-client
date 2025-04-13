"use client";
import { useEmailView } from "@/app/client/handlers/emailViewHandler";
import { formatDate, daysAgo } from "@/utils/dateUtils"; 
import Icon from "@/components/Icon"; 
import ReplyWindow from "@/app/client/components/panels/replyWindow";
export default function ReadWriteViewer() {
  const { selectedEmail, emails, mailBox } = useEmailView();
  const unread = emails.filter(email => !email.isRead).length;
  // count unread emails with folder
  const unreadInFolder = emails.filter(email => !email.isRead && email.folder === mailBox).length;
  // Count emails in folder
  const emailsInFolder = emails.filter(email => email.folder === mailBox).length;
  return (
    <section className="w-full h-full bg-bunny-blush p-6">
    {/* This container handles scrolling */}
    <div className="h-full overflow-y-auto pr-2 space-y-4">
      {selectedEmail ? (
        <div className="p-4 rounded-lg">
          <div className="w-full flex items-start gap-3 mb-5">
            <Icon name={selectedEmail.sender.avatar} size={75} />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold font-sans text-gray-800">
                  {selectedEmail.sender.name}
                </p>
                <p className="text-sm text-berry-mauve opacity-80">
                  &lt;{selectedEmail.sender.email}&gt;
                </p>
              </div>
              <p className="text-xs text-berry-mauve opacity-80">
                {formatDate(selectedEmail.date)} • {daysAgo(selectedEmail.date)}
              </p>
            </div>
          </div>
  
          <h3 className="text-xl font-bold text-berry-mauve">{selectedEmail.subject}</h3>
          <pre className="mt-1 whitespace-pre-wrap text-gray-800">
            {selectedEmail.body}
          </pre>
  
          <ReplyWindow selectedEmail={selectedEmail} />
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <Icon name="kawaii/kawaii-bunny" className="w-16 h-16 mx-auto mb-4" />
          No email selected
        </div>
      )}
    </div>
  </section>
  
  )
};