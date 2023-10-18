"use client";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { Divide } from "lucide-react";
import { register } from "module";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

enum userRole {
  admin = "admin",
  user = "user",
  supeadmin = "superadmin",
}

interface IFormInput {
  firstName: string;
  lastName: string;
  role: userRole;
  contactNo: string;
  address: string;
}

const EditUserModel = ({ props }: { props: string }) => {
  // console.log(props, "");
  const { data, isLoading } = useGetSingleUserQuery(props);
  console.log(data, "hello edit");
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {console.log(data)};
  return (
    <div>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader className='mb-14 flex justify-center items-center'>
          <DialogTitle>Do You Want To Delete The User</DialogTitle>
          <DialogDescription>{data?.data?.firstName}</DialogDescription>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex gap-3 mb-2'>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input
                    {...register("firstName")}
                    defaultValue={data?.data?.firstName}
                  />
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input
                    {...register("lastName")}
                    defaultValue={data?.data?.lastName}
                  />
                </div>
              </div>

              <Label htmlFor='contactNo'>Contact No</Label>
              <Input
                className='mt-2 mb-2'
                {...register("contactNo")}
                defaultValue={data?.data?.contactNo}
              />
              <Label htmlFor='address'>Address</Label>
              <Input
                className='mt-2 mb-2'
                {...register("address")}
                defaultValue={data?.data?.address}
              />
              <Label htmlFor='address'>Role</Label>
              <Select
                {...register("role")}
                value={data?.data?.role}>
                <SelectTrigger className='w-[180px] mb-2 mt-2'>
                  <SelectValue placeholder='Select role' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Role</SelectLabel>
                    <SelectItem value='admin'>Admin</SelectItem>
                    <SelectItem value='user'>User</SelectItem>
                    <SelectItem value='superadmin'>Super Admin</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button type='submit'>Confirm</Button>
            </form>
          </div>
          {/* <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex gap-3 mb-2'>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Controller
                    name='firstName'
                    control={control}
                    render={({ field }) => (
                      <Input defaultValue={data?.data?.firstName} {...field} />
                    )}
                  />
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor='lastName'>First Name</Label>
                  <Controller
                    name='lastName'
                    control={control}
                    render={({ field }) => (
                      <Input defaultValue={data?.data?.lastName} {...field} />
                    )}
                  />
                </div>
              </div>

              <Label htmlFor='contactNo'>Contact No</Label>
              <Controller
                name='contactNo'
                control={control}
                render={({ field }) => (
                  <Input defaultValue={data?.data?.contactNo} {...field} />
                )}
              />
            </form>
          </div> */}
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default EditUserModel;
