import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
function SingleUser({ user }) {
  return (
    <Card key={user._id} className="p-6">
      <CardContent>
        <CardTitle className="mb-5 sm:text-sm font-normal ">{user.email}</CardTitle>
        <CardDescription>
          Name:{user.firstname + " " + user.lastname}
          Address:{user.address}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default SingleUser;
