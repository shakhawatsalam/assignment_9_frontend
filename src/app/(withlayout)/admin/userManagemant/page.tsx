"use client";
import { DataTable } from "@/components/view/TableComponent";
import { columns } from "@/components/view/Usercolumns";
import { data } from "@/components/view/data/tasks";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import React, { useState } from "react";

// const Newdata = [
//   {
//     id: "68d2ff29-9cfa-4a2c-8aad-65a80f07c62c",
//     firstName: "jon",
//     lastName: "Karim",
//     email: "jon@Doe.com",
//     password: "$2b$12$B/9QcIKEZkhcPBT.0kF5OOyTHOQBN1BolrMoiIip0RufiPoHHef5m",
//     role: "user",
//     contactNo: "9448888217",
//     address: "Sydney, Australia",
//     profileImg: "user6.jpg",
//     createdAt: "2023-10-14T11:24:32.168Z",
//     updatedAt: "2023-10-14T11:24:32.168Z",
//   },
//   {
//     id: "7bdba6ae-3261-4732-ba40-a495e452a767",
//     firstName: "Alice",
//     lastName: "Smith",
//     email: "alice@example.com",
//     password: "$2b$12$QJhm1rCVV1UQNT20MYVQ2..kgqswWh1KKSVhP5XVz4g56IYAeAfuW",
//     role: "user",
//     contactNo: "1234567890",
//     address: "New York, USA",
//     profileImg: "user5.jpg",
//     createdAt: "2023-10-16T09:00:39.126Z",
//     updatedAt: "2023-10-16T09:00:39.126Z",
//   },
//   {
//     id: "d67be74b-46b0-465d-a4bc-c1092e641b47",
//     firstName: "Bob",
//     lastName: "Johnson",
//     email: "bob@example.com",
//     password: "$2b$12$Ty1Q6/R.AackwifqNGpSwOop0ICLj27PslXlGbLIxvAMI1Kct528i",
//     role: "user",
//     contactNo: "9876543210",
//     address: "Los Angeles, USA",
//     profileImg: "user4.jpg",
//     createdAt: "2023-10-16T09:00:50.697Z",
//     updatedAt: "2023-10-16T09:00:50.697Z",
//   },
//   {
//     id: "f7463f85-623a-4d70-9ab5-c51f4dd0447b",
//     firstName: "Sarah",
//     lastName: "Wilson",
//     email: "sarah@example.com",
//     password: "$2b$12$Akh1.3LVSRSAHz7jW8VkEuv3fSU7VF4.RwgMYhQ6ZMf607Yv/Zxxq",
//     role: "user",
//     contactNo: "5555555555",
//     address: "Chicago, USA",
//     profileImg: "user3.jpg",
//     createdAt: "2023-10-16T09:01:02.563Z",
//     updatedAt: "2023-10-16T09:01:02.563Z",
//   },
//   {
//     id: "43ab0d84-3d39-4d34-b534-1b724cc69bef",
//     firstName: "David",
//     lastName: "Brown",
//     email: "david@example.com",
//     password: "$2b$12$X71P3nWO5MIinNalFgyZ.OT0/0iBMdARMkPE34kYhr08fu2JAgACm",
//     role: "user",
//     contactNo: "1111111111",
//     address: "Houston, USA",
//     profileImg: "user2.jpg",
//     createdAt: "2023-10-16T09:01:22.881Z",
//     updatedAt: "2023-10-16T09:01:22.881Z",
//   },
//   {
//     id: "f3283eae-6752-4621-9d1c-0ad0c0e766a6",
//     firstName: "Emily",
//     lastName: "Davis",
//     email: "emily@example.com",
//     password: "$2b$12$u.bc4/im.JAZJZQ2LSOUpu61icLrmKtzd0ADsNROaEiCDhiYpF/tG",
//     role: "user",
//     contactNo: "9999999999",
//     address: "San Francisco, USA",
//     profileImg: "user1.jpg",
//     createdAt: "2023-10-16T09:01:36.450Z",
//     updatedAt: "2023-10-16T09:01:36.450Z",
//   },
//   {
//     id: "92700d42-6848-4512-b5b6-43727619a1fb",
//     firstName: "Michael",
//     lastName: "Lee",
//     email: "michael@example.com",
//     password: "$2b$12$w.k8S9aRMXicJcu6ewUmsOjowBq.2lJvAt2E/8k.IKFF9sSG8gvXO",
//     role: "user",
//     contactNo: "7777777777",
//     address: "Miami, USA",
//     profileImg: "user7.jpg",
//     createdAt: "2023-10-16T09:01:47.657Z",
//     updatedAt: "2023-10-16T09:01:47.657Z",
//   },
// ];

const UserManagement = () => {
  // * 🚀🚀🚀 Setting Query Data
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = limit;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  // console.log(query);

  // * 🚀🚀🚀 Getting All Data
  const { data, isLoading } = useGetAllUserQuery({});
  const mainData = data?.data || {};
  if (isLoading) {
    return (
      <div className='w-[100vw] h-[100vw] flex justify-center items-center'>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className='p-10'>
      <h1>This Is User Management Page</h1>
      <DataTable
        columns={columns}
        data={mainData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setLimit={setLimit}
        setPage={setPage}
      />
    </div>
  );
};

export default UserManagement;
