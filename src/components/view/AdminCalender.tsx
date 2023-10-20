import {
  useAddCloseDaysMutation,
  useDeleteClosedayMutation,
} from "@/redux/api/closeDaysApi";
import { formatISO } from "date-fns";
import { useState } from "react";
import GetAllCloseDays from "../GetAllCloseDays";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

const AdminCalender = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [addCloseDays] = useAddCloseDaysMutation();
  const [deleteCloseday] = useDeleteClosedayMutation();

  const DBclosedDays = GetAllCloseDays()?.data;
  const closeDays =
    DBclosedDays && DBclosedDays?.map((closeday: any) => closeday.date);
  const isDayClose =
    closeDays &&
    closeDays.some((dateStr: string) => {
      const date = new Date(dateStr);

      return date.getTime() === selectedDate?.getTime();
    });

  const dayClass = (date: any) => {
    const isoDate = date.toISOString();
    return closeDays?.includes(isoDate) ? true : false;
  };

  // * handle Close and Selected Date
  const handleCandODays = (date: any, action: string) => {
    const formatedDate = formatISO(date);
    if (action === "open") {
      deleteCloseday({ date: formatedDate });
    } else {
      addCloseDays({ date: formatedDate });
    }
  };
  // * Disabled Past Days

  // Function to check if a date is in the past
  const isDateInPast = (date: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Remove time part for accurate comparison
    return date < today;
  };

  return (
    <div>
      <div className='mt-6 flex flex-col items-center gap-6'>
        <Calendar
          mode='single'
          disabled={(date) => isDateInPast(date)}
          onDayClick={(date) => {
            setSelectedDate(date);
          }}
          modifiers={{
            customClass: (date) => dayClass(date),
          }}
          className='rounded-md border'
          modifiersStyles={{
            customClass: {
              color: "white",
              background: "#2f3542", // You can customize the styles here
            },
          }}
        />
        {isDayClose ? (
          <Button
            onClick={() => handleCandODays(selectedDate, "open")}
            disabled={!selectedDate}>
            Open Shop This Day
          </Button>
        ) : (
          <Button
            onClick={() => handleCandODays(selectedDate, "close")}
            disabled={!selectedDate}>
            Close Shop This Day
          </Button>
        )}
        {/*  */}
      </div>
    </div>
  );
};

export default AdminCalender;
