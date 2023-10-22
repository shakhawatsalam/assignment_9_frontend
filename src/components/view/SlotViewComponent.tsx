import { useGetAllSlotsQuery } from "@/redux/api/timeSlotApi";
import { formatISO } from "date-fns";
import { LucideGalleryHorizontal } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Slot } from "@radix-ui/react-slot";

const SlotViewComponent = ({ selectedDate }: any) => {
  const convertedDateTime = selectedDate && selectedDate.toISOString();

  const { data, isLoading } = useGetAllSlotsQuery(convertedDateTime || {});
  const slots = data && data?.data;
  return (
    <div className='grid grid-cols-4 align-middle content-center max-w-lg  gap-3  min-h-[0px]'>
      {slots?.map((slot: any, id: any) => (
        <>
          <Button className='m-0' size={"sm"} key={id}>
            {slot.startTime}
          </Button>
        </>
      ))}
    </div>
  );
};

export default SlotViewComponent;
