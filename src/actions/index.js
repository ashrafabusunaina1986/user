"use server";

import db from "@/dbconfig";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

export async function fetchListOfProducts() {
  const api = await fetch("https://dummyjson.com/products");
  const result = await api.json();
  return result?.products;
}
//Add New User
export async function addNewUser(formData, PathToRevalidate) {
  try {
    await db();
    const user = await User.find({ email: formData.email });
    if (user && user.length > 0)
      return { success: false, user, message: "Email is already" };
    else {
      const addNewUser = await User.create(formData);
      if (addNewUser) {
        revalidatePath(PathToRevalidate);
        return {
          success: true,
          message: "New user is added",
        };
      } else
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

//fetch data user
export async function fetchDataUser() {
  try {
    await db();
    const getUsers = await User.find();
    if (getUsers && getUsers.length > 0)
      return {
        success: true,
        getUsers,
      };
    else
      return {
        success: false,
        message: "Users not found",
      };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
//delete user
export async function Del_user(id, PathToRevalidate) {
  try {
    await db();
    const deluser = await User.findByIdAndDelete({ _id: id });
    if (deluser) {
      revalidatePath(PathToRevalidate);
      return { success: true, message: "User is deleted" };
    } else return { success: false, message: "User is not deleted" };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
//update user

export async function EditUser(id, formData, PathToRevalidate) {
  try {
    await db();
    const user = await User.find({ email: formData.email });

    const updateUser = await User.updateOne({ _id: id }, formData, {
      new: true,
    });
    if (updateUser) {
      revalidatePath(PathToRevalidate);
      return {
        success: true,
        message: "user is updated",
      };
    } else
      return {
        success: false,
        message: " user is not updated",
      };
  } catch (error) {
    return {
      success: false,
      message: "wrong please try again",
    };
  }
}
