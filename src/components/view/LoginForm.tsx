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
import Link from "next/link";
// import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { getUserInfo, storeUserInfo } from "@/service/auth.service";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useDispatch } from "react-redux";
import { logInUser } from "@/redux/features/user/userSlice";

const formSchema = z.object({
  email: z.string({
    required_error: "title is Required.",
  }),
  password: z.string({
    required_error: "description is Required.",
  }),
});
interface IFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [userLogin] = useUserLoginMutation();
  const dispatch = useDispatch();

  const form = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const res = await userLogin({ body: data }).unwrap();

      if (res?.data) {
        router.push("/");
      }
      await storeUserInfo({ accessToken: res?.data });
      const userInfo = await getUserInfo();
      console.log(userInfo);
      dispatch(logInUser(userInfo));
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
              <CardTitle className='text-2xl'>Login</CardTitle>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className='grid gap-4'>
              {/* <div className='grid grid-cols-2 gap-6'>
            <Button variant='outline'>
              <Icons.gitHub className='mr-2 h-4 w-4' />
              Github
            </Button>
            <Button variant='outline'>
              <Icons.google className='mr-2 h-4 w-4' />
              Google
            </Button>
          </div> */}
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
              <div className='grid gap-2'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder='email' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid gap-2'>
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder='' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <CardDescription>
                {/* <Link href={'/register'}>If you Don`t have account Please Register</Link> */}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button className='w-full' type='submit'>
                Log In
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
