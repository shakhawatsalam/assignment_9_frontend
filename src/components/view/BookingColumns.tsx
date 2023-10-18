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
type timeSlot = {
  id: string;
  startTime: string;
  createdAt: string;
  updatedAt: string;
};
type bookingData = {
  id: string;
  user: UserData;
  service: ServiceData;
  bookingStatus: string;
  slot: timeSlot;
};

import React, { useState } from "react";
// import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import DeleteUserModel from "./DeleteUserModel";
import EditUserModel from "./EditUserModel";
import Link from "next/link";
import DeleteServiceModal from "./DeleteServiceModal";
import { UserData } from "./Usercolumns";
import { ServiceData } from "./ServiceColumns";

const BookingColumns = (): ColumnDef<bookingData>[] => {
  const columns: ColumnDef<bookingData>[] = [
    // * This is Select Column End
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Booking Id' />
      ),
      cell: ({ row }) => <div className='w-[80px]'>{row.getValue("id")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "bookingStatus",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='bookingStatus' />
      ),
        cell: ({ row }) => (
          <div className='flex space-x-2 justify-center items-center'>
            <span className='max-w-[500px] truncate font-medium'>
             <Badge>{row.getValue("bookingStatus")}</Badge>{" "}
            </span>
         </div>
       
      ),
    },
    {
      accessorKey: "user",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='user name' />
      ),
      cell: ({ row }) => {
        const user: UserData = row.getValue("user");
        return <div className='w-[80px]'>{user.firstName}</div>;
      },
    },
    {
      accessorKey: "service",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Service' />
      ),
      cell: ({ row }) => {
        const service: ServiceData = row.getValue("service");
        return <div className='w-[80px]'>{service.title}</div>;
      },
    },
    {
      accessorKey: "slot",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='slot' />
      ),
      cell: ({ row }) => {
        const slot: timeSlot = row.getValue("slot");
        return <div className='w-[80px]'>{slot.startTime}</div>;
      },
    },
    // {
    //   accessorKey: "availability",
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title='availability' />
    //   ),
    //   cell: ({ row }) => {
    //     return (
    //       <div className='flex space-x-2'>
    //         <span className='max-w-[500px] truncate font-medium'>
    //           <Badge>{row.getValue("availability")}</Badge>{" "}
    //         </span>
    //       </div>
    //     );
    //   },
    //   enableSorting: false,
    // },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Booking Date' />
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
              <Link href={`/admin/bookingManageMent/edit/${row.original.id}`}>
                <Button variant='outline'>Edit Service</Button>
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
                  <Button variant='outline'>Delete Service</Button>
                </DialogTrigger>
                <DeleteServiceModal props={id!} />
              </Dialog>
            </div>
            {/* <div>
              <Dialog>
                <DialogTrigger asChild onClick={() => setID(row.original.id)}>
                  <Button variant='outline'>Edit User</Button>
                </DialogTrigger>
                <EditUserModel props={id!} />
              </Dialog>
            </div> */}
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

export default BookingColumns;
