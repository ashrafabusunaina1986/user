"use client";
import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Del_user, EditUser } from "@/actions";
import { UserContextState } from "@/context";
function SingleUser({ user }) {
  const { setCurrentUserId, setOpen, setDataFormControls } =
    useContext(UserContextState);
  async function Del_Handler(id) {
    const del = await Del_user(id, "/user-management");
  }

  return (
    <Card key={user._id} className="p-6">
      <CardTitle className="mb-5  ">
        {user.firstname + " " + user.lastname}
      </CardTitle>
      <CardDescription>{user.email}</CardDescription>
      <CardContent className="mt-5 -ms-5">{user.address}</CardContent>
      <CardFooter>
        <div className="flex items-center gap-4 mx-auto">
          <Button
            onClick={() => {
              setCurrentUserId(user._id);
              setOpen(true);
              setDataFormControls({
                firstname: user.firstname,
                lastname: user.lastname,
                address: user.address,
              });
            }}
          >
            Edit
          </Button>
          <Button onClick={() => Del_Handler(user._id)}>Delete</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SingleUser;
