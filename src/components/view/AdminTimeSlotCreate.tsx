// import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Separator } from "../ui/separator";
import { TimePicker } from "./TimePicker";
import SlotViewComponent from "./SlotViewComponent";

const AdminTimeSlotCreate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // * Disabled Past Days
  // Function to check if a date is in the past
  const isDateInPast = (date: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Remove time part for accurate comparison
    return date < today;
  };

  return (
    <div className='flex items-center justify-evenly  h-[500px]'>
      <div>
        <Calendar
          className=' border rounded-sm mb-2'
          disabled={(date) => isDateInPast(date)}
          selected={selectedDate!}
          onDayClick={(date) => {
            setSelectedDate(date);
          }}></Calendar>
        <Separator />
        <div className='mt-2'>
          <TimePicker selectedDate={selectedDate} />

          {/* <Button>Create</Button> */}
        </div>
      </div>
      <div className=''>
        <SlotViewComponent selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default AdminTimeSlotCreate;
