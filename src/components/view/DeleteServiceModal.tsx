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
import { useDeleteServiceMutation } from "@/redux/api/serviceApi";

const DeleteServiceModal = ({ props }: { props: string }) => {
  const [deleteService] = useDeleteServiceMutation();
  return (
    <div>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader className='mb-14 flex justify-center items-center'>
          <DialogTitle>Do You Want To Delete The Service</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <DialogFooter>
            <Button onClick={() => deleteService(props)} size={"icon"}>
              <Trash />
            </Button>
          </DialogFooter>
        </DialogClose>
      </DialogContent>
    </div>
  );
};

export default DeleteServiceModal;
