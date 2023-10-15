"use client";
import { GanttChartSquare, UserSquare } from "lucide-react";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const SideBarItems = [
    {
      icon: <UserSquare />,
      text: "Profile",
      //   active: true,
      //   alert: true,
      link: "/admin/profile",
      key: 0,
    },
    {
      icon: <GanttChartSquare />,
      text: "Booking Management",
      //   active: true,
      //   alert: true,
      link: "/admin/bookingManageMent/",
      key: 1,
    },
    {
      icon: <GanttChartSquare />,
      text: "Content Management",
      //   active: true,
      //   alert: true,
      link: "/admin/ContentManageMent/",
      key: 2,
    },
    {
      icon: <GanttChartSquare />,
      text: "Service Management",
      //   active: true,
      //   alert: true,
      link: "/admin/serviceManagemant/",
      key: 3,
    },
    {
      icon: <GanttChartSquare />,
      text: "User Management",
      //   active: true,
      //   alert: true,
      link: "/admin/userManagemant/",
      key: 4,
    },
  ];

  //   if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  //   else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  //   else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  //   else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  //   else {
  //     return SideBarItems;
  //   }
  return SideBarItems;
};
