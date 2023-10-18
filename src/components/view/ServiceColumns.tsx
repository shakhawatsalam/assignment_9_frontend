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

type ServiceData = {
  id: string;
  title: string;
  price: number;
  availability: string;
};

import React, { useState } from "react";
// import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import DeleteUserModel from "./DeleteUserModel";
import EditUserModel from "./EditUserModel";
import Link from "next/link";
import DeleteServiceModal from "./DeleteServiceModal";

const Servicecolumns = (): ColumnDef<ServiceData>[] => {
  const columns: ColumnDef<ServiceData>[] = [
    // * This is Select Column End
    {
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Title' />
      ),
      cell: ({ row }) => (
        <div className='w-[80px]'>{row.getValue("title")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Price' />
      ),
      cell: ({ row }) => (
        <div className='w-[80px]'>{row.getValue("price")}</div>
      ),
    },
    {
      accessorKey: "availability",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='availability' />
      ),
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='max-w-[500px] truncate font-medium'>
              <Badge>{row.getValue("availability")}</Badge>{" "}
            </span>
          </div>
        );
      },
      enableSorting: false,
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
              <Link href={`/admin/serviceManagemant/edit/${row.original.id}`}>
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

export default Servicecolumns;
