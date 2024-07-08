import { fetchDataUser } from "@/actions";
import AddUser from "@/components/add-user";
import SingleUser from "@/components/single-user";

import React from "react";

export default async function UserManagement() {
  const users = (await fetchDataUser()).getUsers;
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h1>user managment</h1>
        <AddUser />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:font-medium sm:text-sm lg:grid-cols-3 gap-3 mt-10">
        {users && users.length > 0 ? (
          users.map((user) => <SingleUser user={user} />)
        ) : (
          <div className="text-3xl sm:text-xl sm:font-semibold  font-extrabold text-gray-100 rounded-full px-8 py-5 shadow-xl sm:px-5 sm:py-3 shadow-gray-500 w-max flex justify-center bg-gray-700">
            Users not found
          </div>
        )}
      </div>
    </div>
  );
}
