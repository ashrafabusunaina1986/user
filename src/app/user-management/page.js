import { fetchDataUser } from "@/actions";
import AddUser from "@/components/add-user";
import SingleUser from "@/components/single-user";

import React from "react";

export default async function UserManagement() {
  const users = (await fetchDataUser()).getUsers;
  return (
    <div className="p-10">
      <div className="flex flex-col gap-10 sm:flex-row sm:justify-between md:flex-row  md:justify-between lg:flex-row lg:justify-between">
        <h1>user managment</h1>
        <AddUser />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:font-medium sm:text-sm lg:grid-cols-3 gap-3 mt-10">
        {users && users.length > 0 ? (
          users.map((user) => <SingleUser user={user} />)
        ) : (
          <div className="text-xl font-semibold sm:font-extrabold md:font-extrabold lg:font-extrabold sm:text-3xl md:text-3xl lg:text-3xl text-gray-100 rounded-full px-5 py-3 sm:px-8 md:px-8 lg:px-8 sm:py-5 md:py-5 lg:py-5 shadow-xl  shadow-gray-500 w-max flex justify-center bg-gray-700">
            Users not found
          </div>
        )}
      </div>
    </div>
  );
}
