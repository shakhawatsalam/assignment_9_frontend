"use client";
import Servicecolumns from "@/components/view/ServiceColumns";
import { DataTable } from "@/components/view/TableComponent";
import Usercolumns from "@/components/view/Usercolumns";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import React from "react";

const ServiceManagement = () => {
  // * 🚀🚀🚀 Getting All Data
  const { data, isLoading } = useGetAllServicesQuery({});
  const mainData = data?.data?.data || {};


  return (
    <div className='p-10'>
      <h1>This Is Service Management Page</h1>
      <DataTable columns={Servicecolumns()} data={mainData} />
    </div>
  );
};

export default ServiceManagement;
