"use client";
import BookingColumns from "@/components/view/BookingColumns";
import Servicecolumns from "@/components/view/ServiceColumns";
import { DataTable } from "@/components/view/TableComponent";
import Usercolumns from "@/components/view/Usercolumns";
import { useAllBookingQuery } from "@/redux/api/bookingApi";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import React from "react";

const BookingManageMent = () => {
  // * 🚀🚀🚀 Getting All Data
  const { data, isLoading } = useAllBookingQuery({});
  console.log(data?.data);
  const mainData = data?.data || {};

  return (
    <div className='p-10'>
      <h1>This Is Service Management Page</h1>
      <DataTable columns={BookingColumns()} data={mainData} />
    </div>
  );
};

export default BookingManageMent;
