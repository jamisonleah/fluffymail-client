"use client";
import Icon from "@/components/Icon"; // adjust path as needed
import { useEmailView } from "@/app/client/handlers/emailViewHandler";


export function SecondaryButton({ children, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2 bg-blueberry-sky text-white px-3 py-1 rounded-lg shadow hover:bg-blueberry-sky-hover"
    >
      {icon && (
        <Icon name={icon} size={35} className="inline-block" />
      )}
      <span className="">{children}</span>
    </button>
  );
}


export function PrimaryFolderButton({ children, onClick, icon, mailbox }) {
  const { mailBox, setMailBox, setMode, setSelectedEmail } = useEmailView();
  const handleModeChange = () => {
    if (mailbox === "drafts") {
      console.log("drafts");
      setMode("edit");
    }
    else {
      console.log("list");
      setMode("list");
    }
    setMailBox(mailbox);
    setSelectedEmail(null);
  };

  return (

    
    <button
      className={`w-full flex items-center gap-2 text-gray-800 px-3 py-1 rounded-lg shadow hover:bg-raspberry-jam ${mailBox===mailbox ? "bg-raspberry-jam" : "bg-baby-pink"}`}
      onClick={() => handleModeChange()}
    >
      {icon && (
        <Icon name={icon} size={35} className="inline-block" />
      )}
      
      <span className="">{children}</span>
    </button>
  );
}
export function TertiaryButton({ children, onClick }) {
  return (
    <button
      className="bg-berry-mauve text-white px-4 py-2 rounded shadow hover:bg-blueberry-sky"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function FolderButton({ children, onClick, icon, mailbox }) {
  const { mailBox, setMailBox, setMode, setSelectedEmail } = useEmailView();
  const handleModeChange = () => {
    if (mailbox === "drafts") {
      console.log("drafts");
      setMode("edit");
    }
    else {
      console.log("list");
      setMode("list");
    }
    setMailBox(mailbox);
    setSelectedEmail(null);
  };
  
  return (
    <button
      className={`w-full flex items-center gap-2  px-3 rounded-lg hover:text-berry-mauve ${mailbox===mailbox ? "text-berry-mauve" : "text-raspberry-jam"}`}
      onClick={() => handleModeChange()}
    >
      {icon && (
        <Icon name={`email-client/icons8-${icon}-folder-50`}  size={35} className="inline-block" />
      )}
      <span className="">{children}</span>
    </button>
  );
}