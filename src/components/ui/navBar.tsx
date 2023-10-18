"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { getUserInfo, isLoggedIn } from "@/service/auth.service";
import { useSelector } from "react-redux";
import { IAuth } from "@/redux/features/user/userSlice";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}>
      <Link
        href='/examples/dashboard'
        className='text-sm font-medium transition-colors hover:text-primary'>
        About Us
      </Link>
      <Link
        href='/register'
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
        Register
      </Link>
      <Link
        href='/login'
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
        Log In
      </Link>
    </nav>
  );
}
