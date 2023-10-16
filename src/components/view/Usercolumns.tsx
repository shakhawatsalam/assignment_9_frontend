"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { labels, priorities, statuses } from "./data/data";
import { Task } from "./data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

type UserData = {
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

export const columns: ColumnDef<UserData>[] = [
  // * This is Select Column
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label='Select all'
  //       className='translate-y-[2px]'
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label='Select row'
  //       className='translate-y-[2px]'
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
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
      // const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className='flex space-x-2'>
          {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
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
    // cell: ({ row }) => {
    //   const status = statuses.find(
    //     (status) => status.value === row.getValue("contactNo")
    //   );

    //   if (!status) {
    //     return null;
    //   }

    //   return (
    //     <div className='flex w-[100px] items-center'>
    //       {status.icon && (
    //         <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />
    //       )}
    //       <span>{status.label}</span>
    //     </div>
    //   );
    // },
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);

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
    // cell: ({ row }) => {
    //   const priority = priorities.find(
    //     (priority) => priority.value === row.getValue("priority")
    //   );

    //   if (!priority) {
    //     return null;
    //   }

    //   return (
    //     <div className='flex items-center'>
    //       {priority.icon && (
    //         <priority.icon className='mr-2 h-4 w-4 text-muted-foreground' />
    //       )}
    //       <span>{priority.label}</span>
    //     </div>
    //   );
    // },
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
    // cell: ({ row }) => {
    //   const priority = priorities.find(
    //     (priority) => priority.value === row.getValue("priority")
    //   );

    //   if (!priority) {
    //     return null;
    //   }

    //   return (
    //     <div className='flex items-center'>
    //       {priority.icon && (
    //         <priority.icon className='mr-2 h-4 w-4 text-muted-foreground' />
    //       )}
    //       <span>{priority.label}</span>
    //     </div>
    //   );
    // },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];
