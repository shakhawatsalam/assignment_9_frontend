"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { useDeleteUserMutation, useGetSingleUserQuery } from "@/redux/api/userApi";

const DeleteUserModel = ({ props }: { props: string }) => {
  console.log(props, "delete");
  const { data, isLoading } = useGetSingleUserQuery(props);
  console.log(data, "hello delete");
  // if (isLoading) {
  //   return <div>loaing</div>
  // }
  const [deleteUser] = useDeleteUserMutation();
  return (
    <div>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader className='mb-14 flex justify-center items-center'>
          <DialogTitle>Do You Want To Delete The User</DialogTitle>
          <DialogDescription>
            {data?.data?.firstName}
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <DialogFooter>
            <Button onClick={() => deleteUser(props)} size={"icon"}>
              <Trash />
            </Button>
          </DialogFooter>
        </DialogClose>
      </DialogContent>
    </div>
  );
};

export default DeleteUserModel;
