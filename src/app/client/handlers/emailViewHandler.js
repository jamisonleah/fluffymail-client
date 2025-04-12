"use client";

import { createContext, useContext, useState } from "react";
import emails from "@/data/emails"; // adjust path as needed
const EmailViewContext = createContext();

export function EmailViewProvider({ children }) {
  const [selectedEmail, setSelectedEmail] = useState(null);
  return (
    <EmailViewContext.Provider value={{ selectedEmail, setSelectedEmail, emails}}>
      {children}
    </EmailViewContext.Provider>
  );
}

export function useEmailView() {
  const context = useContext(EmailViewContext);
  if (!context) throw new Error("useEmailView must be used within EmailViewProvider");
  return context;
}
