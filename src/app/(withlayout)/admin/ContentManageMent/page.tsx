"use client";
import {
  useAlldaysQuery,
  useOpeningHoursUpdateMutation,
} from "@/redux/api/dayApi";
import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { capitalize, weekdayIndexToName } from "@/utils/helpers";
import { formatISO } from "date-fns";
import GetAllCloseDays from "@/components/GetAllCloseDays";
import { Calendar } from "@/components/ui/calendar";
import TimeSelector from "@/components/TimeSelector";
import { DashIcon } from "@radix-ui/react-icons";
import {
  useAddCloseDaysMutation,
  useDeleteClosedayMutation,
  useDeleteServiceMutation,
} from "@/redux/api/closeDaysApi";

interface DayInfo {
  name: string;
  openTime: string | undefined; // You can use a more specific type if needed, e.g., "string" for a valid time format
  closeTime: string | undefined; // You can use a more specific type if needed
}
[];
const ContentManageMent = () => {
  const [openingHoursUpdate] = useOpeningHoursUpdateMutation();
  const [addCloseDays] = useAddCloseDaysMutation();
  const [deleteCloseday] = useDeleteClosedayMutation();
  const [enabled, setEnabled] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const { data, isLoading } = useAlldaysQuery({});
  const [saveOpeningHrs, setSaveOpeningHrs] = useState<DayInfo[]>([]);
  const [openDays, setOpenDays] = useState<Date | null>(null);
  const [closeDays, setCloseDays] = useState<Date | null>(null);
  const days = data?.data;

  // Non-null-assertions because if days are less than 7, an error is thrown previously
  const [openingHrs, setOpeningHrs] = useState<DayInfo[]>([]);

  // * update Slot

  const updateSlot = async () => {
    // const data = {
    //   id: "ba666a24-eb3e-44e7-9ab9-0dab7658ddc6",
    //   name: "friday",
    //   openTime: "9:00",
    //   closeTime: "16:00",
    // };
    // // console.log(data);
    // openingHoursUpdate({ body: data });
    if (saveOpeningHrs) {
      await saveOpeningHrs.map(async (e) => openingHoursUpdate({ body: e }));
    }
  };

  useEffect(() => {
    if (days) {
      const newOpeningHrs = [
        {
          name: "sunday",
          openTime: days[0]?.openTime,
          closeTime: days[0]?.closeTime,
        },
        {
          name: "monday",
          openTime: days[1]?.openTime,
          closeTime: days[1]?.closeTime,
        },
        {
          name: "tuesday",
          openTime: days[2]?.openTime,
          closeTime: days[2]?.closeTime,
        },
        {
          name: "wednesday",
          openTime: days[3]?.openTime,
          closeTime: days[3]?.closeTime,
        },
        {
          name: "thursday",
          openTime: days[4]?.openTime,
          closeTime: days[4]?.closeTime,
        },
        {
          name: "friday",
          openTime: days[5]?.openTime,
          closeTime: days[5]?.closeTime,
        },
        {
          name: "saturday",
          openTime: days[6]?.openTime,
          closeTime: days[6]?.closeTime,
        },
      ];

      // Update the state directly with the newOpeningHrs array
      setOpeningHrs(newOpeningHrs);
    }
  }, [days]);

  const DatabaseclosedDays = GetAllCloseDays()?.data;

  const closedDays: any[] = [];

  const a = DatabaseclosedDays?.map((e: any) => {
    closedDays.push(e.date);
  });

  const dayIsClosed =
    selectedDate && closedDays?.includes(formatISO(selectedDate));
  const Closedayssss = async () => {
    if (dayIsClosed) {
      deleteCloseday({ data: selectedDate });
    } else {
      addCloseDays({ data: selectedDate });
    }
  };

  // Curried for easier usage
  function _changeTime(day: any) {
    return function (time: string, type: "openTime" | "closeTime") {
      const index = openingHrs.findIndex(
        (x: any) => x.name === weekdayIndexToName(day.dayOfWeek)
      );
      const newOpeningHrs = [...openingHrs];
      newOpeningHrs[index]![type] = time;
      setOpeningHrs(newOpeningHrs);
    };
  }
  const dayClass = (date: any) => {
    const isoDate = date.toISOString();
    return closedDays?.includes(isoDate) ? true : false;
  };

  return (
    <div className='mx-auto max-w-xl'>
      <div className='mt-6 flex justify-center gap-6'>
        <p className={`${!enabled ? "font-medium" : ""}`}>Opening times</p>
        <Switch
          // checked={enabled}
          onCheckedChange={() => setEnabled((prevEnabled) => !prevEnabled)}
        />

        <p className={`${enabled ? "font-medium" : ""}`}>Opening days</p>
      </div>
      {/* hello world  */}
      {!enabled ? (
        // Opening times options
        <div className='my-12 flex flex-col gap-8'>
          {days?.map((day: any) => {
            const changeTime = _changeTime(day);
            return (
              <div className='grid grid-cols-3 place-items-center' key={day.id}>
                <h3 className='font-semibold'>
                  {capitalize(weekdayIndexToName(day.dayOfWeek)!)}
                </h3>
                <div className='mx-4'>
                  <TimeSelector
                    type='openTime'
                    changeTime={changeTime}
                    selected={
                      openingHrs[
                        openingHrs.findIndex(
                          (x) => x.name === weekdayIndexToName(day.dayOfWeek)
                        )
                      ]?.openTime
                    }
                  />
                </div>
                <div className='mx-4'>
                  <TimeSelector
                    type='closeTime'
                    changeTime={changeTime}
                    selected={
                      openingHrs[
                        openingHrs.findIndex(
                          (x) => x.name === weekdayIndexToName(day.dayOfWeek)
                        )
                      ]?.closeTime
                    }
                  />
                </div>
              </div>
            );
          })}

          <Button
            onClick={() => {
              const withId = openingHrs.map((day) => ({
                ...day,
                id: days[days.findIndex((d: any) => d.name === day.name)]!.id,
              }));
              setSaveOpeningHrs(withId);
              updateSlot();
            }}>
            Save
          </Button>
        </div>
      ) : (
        // Opening days options
        <div className='mt-6 flex flex-col items-center gap-6'>
          <Calendar
            mode='single'
            // disabled={(date) => isDateClosed(date) || isDateInPast(date)}
            onDayClick={(date) => {
              setSelectedDate(date);
            }}
            modifiers={{
              customClass: (date) => dayClass(date),
            }}
            className='rounded-md border'
            modifiersStyles={{
              customClass: {
                color: "red", // You can customize the styles here
              },
            }}
          />

          <Button
            onClick={() => {
              if (dayIsClosed) setOpenDays({ date: selectedDate });
              else if (selectedDate) setCloseDays({ date: selectedDate });
              Closedayssss();
            }}
            disabled={!selectedDate}>
            {dayIsClosed ? "Open shop this day" : "Close shop this day"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ContentManageMent;
