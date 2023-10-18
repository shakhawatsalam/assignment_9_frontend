"use client";
import {
  useAddServiceMutation,
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

enum ServiceAvailabality {
  upcomming,
  available,
}
const formSchema = z.object({
  title: z.string({
    required_error: "title is Required.",
  }),
  description: z.string({
    required_error: "description is Required.",
  }),
  image: z.string({
    required_error: "title is Required.",
  }),
  price: z.string({
    required_error: "title is Required.",
  }),
  availability: z.string({
    required_error: "title is Required.",
  }),
});

interface IFormInput {
  title: string;
  description: string;
  image: string;
  price: number;
  availability: ServiceAvailabality;
}

const ServiceCreatePage = () => {
  const form = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
  });

  const { reset } = form;
  const [addService] = useAddServiceMutation();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const numPrice = data.price;
    const updatedData = {
      title: data.title,
      description: data.description,
      image: data.image,
      price: Number(numPrice),
      availability: data.availability,
    };
    try {
      const addedData = await addService(updatedData);
      console.log(addedData);
      // if (!!addedData) {
      //   console.log(!!addedData);
      //   reset();
      // }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='flex justify-center mt-20'>
      <div className='w-[500px] border p-11'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-5xl'> Create Service</h1>
              <FormDescription>Fill Up Ass fields</FormDescription>
            </div>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='Title' {...field} />
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
                    <Input placeholder='description' {...field} />
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
                    <Input placeholder='image.link' {...field} />
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
                    <Input placeholder='Price' {...field} />
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

export default ServiceCreatePage;
