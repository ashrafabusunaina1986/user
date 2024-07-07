import { fetchDataUser } from "@/actions";
import AddUser from "@/components/add-user";
import SingleUser from "@/components/single-user";

import React from "react";

export default async function UserManagement() {
  const users = (await fetchDataUser()).getUsers;
  return (
    <div className="p-20">
      <div className="flex justify-between">
        <h1>user managment</h1>
        <AddUser />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
        {users.map((user) => (
          <SingleUser user={user} />
        ))}
      </div>
    </div>
  );
}
