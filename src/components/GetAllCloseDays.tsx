import { useGetClosedaysQuery } from "@/redux/api/closeDaysApi";
import React from "react";

const GetAllCloseDays = () => {
  const { data, isLoading } = useGetClosedaysQuery({});

  return data;
};

export default GetAllCloseDays;
