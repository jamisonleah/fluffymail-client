"use client";

import { createContext, useContext, useState } from "react";
import emails from "@/data/emails"; 
import drafts from "@/data/drafts";
const EmailViewContext = createContext();

export function EmailViewProvider({ children }) {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [mailBox, setMailBox] = useState("inbox");
  const [mode, setMode] = useState("list");

  const contextValue = {
    selectedEmail, 
    emails,
    mailBox, 
    mode, 
    drafts,
    setMode, 
    setMailBox,
    setSelectedEmail
  };

  return (
    <EmailViewContext.Provider value={contextValue}>
      {children}
    </EmailViewContext.Provider>
  );
}

export function useEmailView() {
  const context = useContext(EmailViewContext);
  if (!context) throw new Error("useEmailView must be used within EmailViewProvider");
  return context;
}
