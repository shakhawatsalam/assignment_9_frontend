"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { formatISO } from "date-fns";
import { useAddTimeslotMutation } from "@/redux/api/timeSlotApi";

const FormSchema = z.object({
  time: z.string({
    required_error: "Please select time slot",
  }),
});

export function TimePicker({ selectedDate }: any) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [addTimeslot] = useAddTimeslotMutation();
  // const [selectedTime, setSelectedTime] = useState(null);
  // console.log(selectedTime);
  const times = [
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 AM",
  ];

  function onSubmit(Timedata: any) {
    console.log(selectedDate, "hello")
    const formatedDate = formatISO(selectedDate);
    const data = {
      startTime: Timedata.time,
      date: formatedDate,
    };

    addTimeslot({ ...data });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full  items-center justify-between'>
        <div>
          <FormField
            control={form.control}
            name='time'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Select Slot' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className='max-h-[180px]'>
                    {times.map((time, index) => (
                      <SelectItem key={index} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Form>
  );
}
