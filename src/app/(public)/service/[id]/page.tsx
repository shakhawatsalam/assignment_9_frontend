/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import CalendarForm from "@/components/view/CalendarForm";
import { OPENING_HOURS_INTERVAL, now } from "@/constants/config";
import { useAlldaysQuery } from "@/redux/api/dayApi";
import { useRouter } from "next/navigation";
import { getOpeningTimes, roundToNearestMinutes } from "@/utils/helpers";
// import { now, OPENING_HOURS_INTERVAL } from "src/app/constants/config";
import { string } from "zod";
import { format, formatISO, isBefore, parse } from "date-fns";
import { useAddCloseDaysMutation } from "@/redux/api/closeDaysApi";
import { DateTime } from "@/utils/types";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import GetAllCloseDays from "@/components/GetAllCloseDays";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// *  day's type
type Day = {
  id: string;
  name: string; // monday, tuesday
  dayOfWeek: number;
  openTime: string;
  closeTime: string;
};

interface CalendarProps {
  days: Day[];
  closedDays: string[]; // as ISO strings
}

const ServiceDeatilsPage = () => {
  const [dialog, setDialog] = useState();
  const router = useRouter();
  const [addCloseDays] = useAddCloseDaysMutation();
  const { data, isLoading } = useAlldaysQuery({});
  const days = data?.data;
  // Determine if today is closed
  const today = days?.find((d: any) => d.dayOfWeek === now.getDay());
  const rounded = roundToNearestMinutes(now, OPENING_HOURS_INTERVAL);
  const closing = parse(today?.closeTime!, "kk:mm", now);
  const tooLate = !isBefore(rounded, closing);
  // if (tooLate) closedDays.push(formatISO(new Date().setHours(0, 0, 0, 0)));
  useEffect(() => {
    if (tooLate) {
      const data = formatISO(new Date().setHours(0, 0, 0, 0));
      addCloseDays(data);
    }
  }, [tooLate, addCloseDays]);

  const [date, setDate] = useState<DateTime>({
    justDate: null,
    dateTime: null,
  });
  console.log(date.justDate);

  useEffect(() => {
    if (date.dateTime) {
      localStorage.setItem("selectedTime", date.dateTime.toISOString());
      // router.push("/");
      DialogPrimitive.Trigger;
    }
  }, [date.dateTime, router]);
  const times = date.justDate && getOpeningTimes(date.justDate, days);

  const DatabaseclosedDays = GetAllCloseDays()?.data;

  // Function to check if a date is in the past
  const isDateInPast = (date: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Remove time part for accurate comparison
    return date < today;
  };

  // Function to check if a date is closed
  const isDateClosed = (date: any) => {
    const closedDays: any[] = [];
    const a = DatabaseclosedDays?.map((e: any) => {
      const dateObject = new Date(e.date);
      closedDays.push(dateObject);
    });
    const isClosed = closedDays.some(
      (closedDate) => closedDate.toDateString() === date.toDateString()
    );
    return isClosed;
  };
  return (
    <div className='py-32 h-[80vh] text-center xl:text-left '>
      <Dialog>
        {/* avatar Img  */}
        <div className='invisible xl:visible absolute bottom-0 -left-[370px]'></div>
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
          {/* text  */}
          <div className='flex-1 flex flex-col justify-center border'>
            <h2 className='text-5xl font-semibold mb-10 '>
              Captivating <span className='text-gray-500'>stories</span> birth
              magnificent design
            </h2>
            <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
              10 years ago, I began freelancing as a Developer. Since then, I've
              done remote work for agencies, consulted for startups, and
              collaborated on digital products for business and consumer use.
            </p>
            {/* counters  */}
          </div>
          {/* info  */}
          <div className='flex flex-col justify-center items-center w-full xl:max-w-[48%] '>
            {" "}
            {date.justDate ? (
              <div className='flex max-w-lg flex-wrap gap-4'>
                {times?.map((time, i) => (
                  <div className='rounded-sm  p-2' key={`time-${i}`}>
                    <DialogTrigger>
                      <Button
                        onClick={() =>
                          setDate((prev) => ({ ...prev, dateTime: time }))
                        }
                        type='button'>
                        {format(time, "kk:mm")}
                      </Button>
                    </DialogTrigger>
                  </div>
                ))}
              </div>
            ) : (
              <Calendar
                mode='single'
                disabled={(date) => isDateClosed(date) || isDateInPast(date)}
                onDayClick={(date) =>
                  setDate((prev) => ({ ...prev, justDate: date }))
                }
                className='rounded-md border'
              />
            )}
          </div>
        </div>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceDeatilsPage;
