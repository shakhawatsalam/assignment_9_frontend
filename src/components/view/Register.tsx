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
import { Toaster } from "@/components/ui/toaster";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { useToast } from "@/components/ui/use-toast";

// import { Icons } from "@/components/icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUserRegisterMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/service/auth.service";

const formSchema = z.object({
  firstName: z.string({
    required_error: "First Name is Required.",
  }),
  lastName: z.string({
    required_error: "Last Name is Required.",
  }),
  email: z.string({
    required_error: "Email is Required.",
  }),
  password: z.string({
    required_error: "Password is Required.",
  }),
  contactNo: z.string({
    required_error: "Contact No is Required.",
  }),
  address: z.string({
    required_error: "Address is Required.",
  }),
  profileImg: z.string({
    required_error: "Profile Image is Required.",
  }),
});
interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contactNo: string;
  address: string;
  profileImg: string;
}

const Register = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [userRegister] = useUserRegisterMutation();

  const form = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log({ body: data });
    try {
      const res = await userRegister({ body: data }).unwrap();
      if (!!res) {
        router.push("/login");
      }
      //   storeUserInfo({ accessToken: res?.accessToken });
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <Card>
            <CardHeader className='space-y-1'>
              <CardTitle className='text-2xl'>Create an account</CardTitle>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className='grid gap-4'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <span className='w-full border-t' />
                </div>
                <div className='relative flex justify-center text-xs uppercase'>
                  <span className='bg-background px-2 text-muted-foreground'>
                    Or continue with
                  </span>
                </div>
              </div>
              <div className='flex gap-3'>
                <FormField
                  control={form.control}
                  name='firstName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder='' {...field} />
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
                        <Input placeholder='' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid gap-2'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder='' type='email' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder='' type='password' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='contactNo'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact No</FormLabel>
                      <FormControl>
                        <Input placeholder='' {...field} />
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
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder='' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='profileImg'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile Image</FormLabel>
                      <FormControl>
                        <Input placeholder='' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className='w-full' type='submit'>
                Register
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default Register;
