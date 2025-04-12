
import ActionSidebar from "@/app/client/components/panels/actionSidebar";
import EmailList from "@/app/client/components/panels/emailList";
import FluffyHeader from "@/app/client/components/assets/fluffyheader";
import EmailViewer from "@/app/client/components/panels/emailViewer";
import { EmailViewProvider } from "@/app/client/handlers/emailViewHandler";
export default function ClientPage() {

  return (
<EmailViewProvider>
  <div className="min-h-screen flex items-center justify-center bg-cotton-candy">
    <main className="w-full max-w-11/12 max-h-11/12 h-[90vh] rounded-2xl shadow-2xl bg-bunny-blush text-white overflow-hidden flex flex-col">
      <FluffyHeader />

      <div className="p-2 h-full flex">
        <ActionSidebar />
        <EmailList />
        <EmailViewer />
      </div>
    </main>
  </div>
</EmailViewProvider>


  );
}
