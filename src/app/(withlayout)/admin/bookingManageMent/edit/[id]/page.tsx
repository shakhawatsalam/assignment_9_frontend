"use client";
import {
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
} from "@/redux/api/bookingApi";
import React from "react";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
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
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";

enum ServiceAvailabality {
  upcomming,
  available,
}

interface IFormInput {
  bookingStatus: string;
}

const BookingManageMentPage = ({ params }: { params: any }) => {
  const { data, isLoading } = useGetSingleBookingQuery(params.id);
  const { id } = params;
  const [updateBooking] = useUpdateBookingMutation();
  const form = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const lolo = { id: id, body: data };
      console.log(lolo.body);
      // console.log(data);
      const update = await updateBooking({ id, body: data });
      // console.log(update);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='flex justify-center mt-20'>
      <div className='w-[500px] border p-11'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='bookingStatus'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    //   defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='approved'>Approved</SelectItem>
                      <SelectItem value='canceled'>Cancled</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BookingManageMentPage;
