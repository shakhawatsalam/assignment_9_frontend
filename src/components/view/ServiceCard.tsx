import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { BaggageClaim, ShoppingCart } from "lucide-react";

const ServiceCard = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <div className='border mt-7 rounded-sm overflow-hidden'>
            <Image width={300} height={700} src={"/oilchange.jpg"} alt='' />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant={"default"} size={"lg"}>
            <ShoppingCart />
          </Button>
          <Button variant={"default"} size={"lg"}>
            Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ServiceCard;
