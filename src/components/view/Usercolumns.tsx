/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";


import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";
import { getRandomValues } from "crypto";
import { useDeleteUserMutation } from "@/redux/api/userApi";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  contactNo: string;
  address: string;
  profileImg: string;
  createdAt: string;
  updatedAt: string;
};

import React, { useState } from "react";
// import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import DeleteUserModel from "./DeleteUserModel";
import EditUserModel from "./EditUserModel";
import Link from "next/link";

const Usercolumns = (): ColumnDef<UserData>[] => {
  // const [deleteUser] = useDeleteUserMutation();

  const columns: ColumnDef<UserData>[] = [
    // * This is Select Column End
    {
      accessorKey: "firstName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='First Name' />
      ),
      cell: ({ row }) => (
        <div className='w-[80px]'>{row.getValue("firstName")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "lastName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Last Name' />
      ),
      cell: ({ row }) => (
        <div className='w-[80px]'>{row.getValue("lastName")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Email' />
      ),
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='max-w-[500px] truncate font-medium'>
              {row.getValue("email")}
            </span>
          </div>
        );
      },
      enableSorting: false,
    },
    {
      accessorKey: "contactNo",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Contact No' />
      ),
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
            <span className='max-w-[500px] truncate font-medium'>
              {row.getValue("contactNo")}
            </span>
          </div>
        );
      },
      enableSorting: false,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Created At' />
      ),

      cell: ({ row }) => {
        const created_At = row.getValue("createdAt");
        const formatted = new Date(created_At as string).toLocaleDateString();
        return (
          <div className='flex space-x-2'>
            <span className='max-w-[500px] truncate font-medium'>
              {formatted}
            </span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "updatedAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Updated At' />
      ),
      cell: ({ row }) => {
        const updated_At = row.getValue("updatedAt");
        const formatted = new Date(updated_At as string).toLocaleDateString();
        return (
          <div className='flex space-x-2'>
            <span className='max-w-[500px] truncate font-medium'>
              {formatted}
            </span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "",
      header: "Edit User",
      cell: ({ row }) => {
        const [id, setID] = useState<string>();
        return (
          <div className='flex gap-5'>
            {/* <div>
              <Dialog>
                <DialogTrigger asChild onClick={() => setID(row.original.id)}>
                  <Button variant='outline'>Delete User</Button>
                </DialogTrigger>
                <DeleteUserModel props={id!} />
              </Dialog>
            </div> */}
            <div>
              {/* <Dialog> */}
              {/* <DialogTrigger asChild onClick={() => setID(row.original.id)}> */}
              <Link href={`/admin/userManagemant/edit/${row.original.id}`}>
                <Button variant='outline'>Edit User</Button>
              </Link>
              {/* </DialogTrigger> */}
              {/* <EditUserModel props={id!} /> */}
              {/* </Dialog> */}
            </div>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "",
      header: "Delete User",
      cell: ({ row }) => {
        const [id, setID] = useState<string>();
        return (
          <div className='flex gap-5'>
            <div>
              <Dialog>
                <DialogTrigger asChild onClick={() => setID(row.original.id)}>
                  <Button variant='outline'>Delete User</Button>
                </DialogTrigger>
                <DeleteUserModel props={id!} />
              </Dialog>
            </div>
            <div>
              <Dialog>
                <DialogTrigger asChild onClick={() => setID(row.original.id)}>
                  <Button variant='outline'>Edit User</Button>
                </DialogTrigger>
                <EditUserModel props={id!} />
              </Dialog>
            </div>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
  ];
  return columns;
};

export default Usercolumns;
