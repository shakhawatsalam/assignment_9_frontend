"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { isLoggedIn } from "@/service/auth.service";
import dynamic from "next/dynamic";
const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const user = isLoggedIn();


  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}>
      <Link
        href='/examples/dashboard'
        className='text-sm font-medium transition-colors hover:text-primary'>
        About Us
      </Link>
      {/* <Link
        href='/register'
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
        Register
      </Link> */}
      <div>
        {!user && (
          <Link
            href='/login'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};
export default MainNav;
