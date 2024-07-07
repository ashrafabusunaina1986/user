import AddUser from "@/components/add-user";
import React from "react";

export default function UserManagement() {
  return (
    <div className="p-20">
      <div className="flex justify-between">
        <h1>user managment</h1>
        <AddUser/>
      </div>
    </div>
  );
}
