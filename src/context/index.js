"use client";
import { addNewFormControlsInintial } from "@/utils";
import { createContext, useState } from "react";

export const UserContextState = createContext();

export default function UserProvider({ children }) {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [dataFormControls, setDataFormControls] = useState(
    addNewFormControlsInintial
  );
  const [open, setOpen] = useState(false);
  return (
    <UserContextState.Provider
      value={{
        open,
        setOpen,
        currentUserId,
        setCurrentUserId,
        dataFormControls,
        setDataFormControls,
      }}
    >
      {children}
    </UserContextState.Provider>
  );
}
