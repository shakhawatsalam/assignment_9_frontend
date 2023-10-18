"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";



interface IFormInput {
  firstName: string;
  lastName: string;
  contactNo: string;
  address: string;
  role: string;
}

const UserEditPage = ({ params }: { params: any }) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleUserQuery(id);
  const [updateUser] = useUpdateUserMutation();

  const form = useForm<IFormInput>();
  const userData = data;
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const updatedData = {
      firstName: data.firstName || (userData?.data?.firstName ?? ""),
      lastName: data.lastName || (userData?.data?.lastName ?? ""),
      contactNo: data.contactNo || (userData?.data?.contactNo ?? ""),
      address: data.address || (userData?.data?.address ?? ""),
      role: data.role || (userData?.data?.role ?? ""),
    };
    try {
      console.log(updatedData);
      await updateUser({ id, body: updatedData });
    } catch (err) {
      console.log(err);
    }
    // form.reset();
  };
  return (
    <div className='flex justify-center mt-20'>
      <div className='w-[500px] border p-11'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='flex gap-3'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder={data?.data?.firstName} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>lastName</FormLabel>
                    <FormControl>
                      <Input placeholder={data?.data?.lastName} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='contactNo'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact No</FormLabel>
                  <FormControl>
                    <Input placeholder={data?.data?.contactNo} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address No</FormLabel>
                  <FormControl>
                    <Input placeholder={data?.data?.address} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a verified email to display' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='admin'>Admin</SelectItem>
                      <SelectItem value='superadmin'>Super Admin</SelectItem>
                      <SelectItem value='user'>User</SelectItem>
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

export default UserEditPage;
