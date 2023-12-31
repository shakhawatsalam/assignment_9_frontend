"use client";
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
  title: string;
  description: string;
  image: string;
  price: number;
  availability: ServiceAvailabality;
}

const ServiceEditPage = ({ params }: { params: any }) => {
  const { id } = params;
  const form = useForm<IFormInput>();
  const { reset } = form;
  const { data, isLoading } = useGetSingleServiceQuery(id);
  const [updateService] = useUpdateServiceMutation();

  const userData = data;
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const numPrice = data.price;
    const updatedData = {
      title: data.title || (userData?.data?.title ?? ""),
      description: data.description || (userData?.data?.description ?? ""),
      image: data.image || (userData?.data?.image ?? ""),
      price: Number(numPrice) || (userData?.data?.price ?? ""),
      availability: data.availability || (userData?.data?.availability ?? ""),
    };
    try {
      console.log(updatedData);
      const update = await updateService({ id, body: updatedData });
      if (!!update) {
        console.log(!!update);
        reset();
      }
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
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder={data?.data?.title} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder={data?.data?.description} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Link</FormLabel>
                  <FormControl>
                    <Input placeholder={data?.data?.image} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder={data?.data?.price} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='availability'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
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
                      <SelectItem value='upcomming'>upcomming</SelectItem>
                      <SelectItem value='available'>available</SelectItem>
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

export default ServiceEditPage;
