"use client";
import { useEmailView } from "@/app/client/handlers/emailViewHandler";
import { formatDate, daysAgo } from "@/utils/dateUtils"; 
import replyWindow from "@/app/client/components/panels/replyWindow";
import Icon from "@/components/Icon"; 
import ReplyWindow from "@/app/client/components/panels/replyWindow";

export default function EmailViewer() {
  // Context to manage email view state
  const { selectedEmail, emails } = useEmailView();
  // Count unread emails -> Move to utils later 
  const unread = emails.filter(email => !email.isRead).length;


  return (
    <section className="flex-1 flex flex-col bg-bunny-blush p-6">
      <div className="w-full flex-none flex items-start gap-3 px-3 py-2 bg-berry-mauve rounded-lg mb-4">
        <Icon name="email-client/icons8-inbox-50" className="w-10 h-10 text-white" />
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-bold font-sans text-white">inbox</h2> {/* Active Selected Action */}
          <p className="text-xs text-white opacity-80">
            {emails.length} emails • {unread} unread
          </p>
        </div>
      </div>


      <div className="flex-1 space-y-4 overflow-y-auto">
        {selectedEmail ? (
          <div className=" p-4 rounded-lg">
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
            <pre className="mt-1 whitespace-pre-wrap text-gray-800">{selectedEmail.body}</pre>

            <ReplyWindow selectedEmail={selectedEmail} /> {/* Reply Window */}
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
}