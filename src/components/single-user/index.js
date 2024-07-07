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
      <CardTitle className="mb-5  ">
        {user.firstname + " " + user.lastname}
      </CardTitle>
      <CardDescription>{user.email}</CardDescription>
      <CardContent className="mt-5 -ms-5">{user.address}</CardContent>
    </Card>
  );
}

export default SingleUser;
