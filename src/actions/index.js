"use server";

import db from "@/dbconfig";
import User from "@/models/user";

export async function fetchListOfProducts() {
  const api = await fetch("https://dummyjson.com/products");
  const result = await api.json();
  return result?.products;
}
//Add New User
export async function addNewUser(formData) {
  try {
    await db();
    const user = await User.find({ email: formData.email });
    if (user && user.length > 0)
      return { success: false, user, message: "Email is already" };
    else {
      const addNewUser = await User.create(formData);
      if (addNewUser)
        return {
          success: true,
          message: "New user is added",
        };
      else
        return {
          success: false,
          message: "New user is not added",
        };
    }
  } catch (error) {
    return {
      success: false,
      message: "wrong please try again",
    };
  }
}
