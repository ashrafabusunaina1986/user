"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "../ui/dialog";
import { addNewFormControlsInintial, formControls } from "@/utils";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { addNewUser } from "@/actions";

function AddUser() {
  const [open, setOpen] = useState(false);
  const [dataFormControls, setDataFormControls] = useState(
    addNewFormControlsInintial
  );
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const disableSaveHandler = () => {
    return Object.keys(dataFormControls).every(
      (item) => dataFormControls[item].trim() !== ""
    );
  };
  async function AddNewUserHandler() {
    setLoading(true);
    const NewUser = await addNewUser(dataFormControls);

    if (NewUser.success) {
      setOpen(false);
      setErrors(null);
      setDataFormControls(addNewFormControlsInintial);
    } else {
      setErrors(NewUser.message);
    }
    setLoading(false);
  }
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Add New User</Button>
      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
          setDataFormControls(addNewFormControlsInintial);
          setErrors(null);
        }}
      >
        <DialogContent>
          <form action={AddNewUserHandler}>
            <DialogTitle>Add New User</DialogTitle>

            <div className="p-5">
              {errors ? (
                <div className="mb-2 px-3 py-2 bg-red-300 shadow-sm w-max rounded-xl shadow-red-500">
                  {errors}
                </div>
              ) : null}
              {formControls.map((item) => (
                <div className="mb-5" key={item.id}>
                  <Label>{item.name}</Label>
                  <Input
                    type={item.type}
                    name={item.id}
                    id={item.id}
                    placeholder={item.placeholder}
                    onChange={(e) =>
                      setDataFormControls({
                        ...dataFormControls,
                        [item.id]: e.target.value,
                      })
                    }
                    value={dataFormControls[item.id]}
                  />
                </div>
              ))}
              <button></button>
            </div>
            <DialogFooter>
              <Button
                disabled={!disableSaveHandler()}
                className=" disabled:opacity-45"
                type="submit"
              >
                {loading ? (
                  <div className="w-5 h-5 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
                ) : (
                  "Save"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddUser;
