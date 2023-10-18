"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";

// import { DataTableViewOptions } from "@/components/data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Button } from "../ui/button";
import { DataTableViewOptions } from "./data-table-view-options";
import { useState } from "react";
import Link from "next/link";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbarForService<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2 justify-between'>
        <Input
          placeholder='Filter tasks...'
          value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
          onChange={(event: any) =>
            table.getColumn("id")?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
        <Link href={"/admin/serviceManagemant/create"}>
          <Button size={"sm"}>Create Service</Button>
        </Link>
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
