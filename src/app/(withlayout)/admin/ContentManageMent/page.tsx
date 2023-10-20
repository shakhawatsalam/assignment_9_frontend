"use client";
import TimeSelector from "@/components/TimeSelector";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import AdminCalender from "@/components/view/AdminCalender";
import {
  useAlldaysQuery,
  useOpeningHoursUpdateMutation,
} from "@/redux/api/dayApi";
import { capitalize, weekdayIndexToName } from "@/utils/helpers";
import { useEffect, useState } from "react";

interface DayInfo {
  name: string;
  openTime: string | undefined; // You can use a more specific type if needed, e.g., "string" for a valid time format
  closeTime: string | undefined; // You can use a more specific type if needed
}
[];
const ContentManageMent = () => {
  const [openingHoursUpdate] = useOpeningHoursUpdateMutation();
  const [enabled, setEnabled] = useState<boolean>(true);
  const { data, isLoading } = useAlldaysQuery({});
  const [saveOpeningHrs, setSaveOpeningHrs] = useState<DayInfo[]>([]);
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
        <AdminCalender />
      )}
    </div>
  );
};

export default ContentManageMent;
