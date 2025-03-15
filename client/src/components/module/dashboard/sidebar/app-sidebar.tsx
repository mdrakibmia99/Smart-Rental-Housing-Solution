"use client";

import * as React from "react";
import {
  UserCog,
  Building,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  HandCoins,
  Send,
  // Settings,
  SquareTerminal,
  FileText, 
  BadgeCheck
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";
import Logo from "@/assets/logo/basaFinder-logo.png";
import Image from "next/image";
import { useUser } from "@/userContextApi/userProvider";

const adminData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "User management",
      url: "/admin/user-management",
      icon: UserCog,
    },
    {
      title: "House management",
      url: "/admin/house-management",
      icon: Building,
    },

    // {
    //   title: "Shop",
    //   url: "/user/shop/products",
    //   icon: UserCog,
    //   items: [
    //     {
    //       title: "Manage Products",
    //       url: "/user/shop/products",
    //     },
    //     {
    //       title: "Manage Categories",
    //       url: "/user/shop/category",
    //     },
    //     {
    //       title: "Manage Brands",
    //       url: "/user/shop/brand",
    //     },
    //     {
    //       title: "Manage Coupon",
    //       url: "/user/shop/manage-coupon",
    //     },
    //   ],
    // },

    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings,
    //   items: [
    //     {
    //       title: "Profile",
    //       url: "/profile",
    //     },
    //   ],
    // },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
const landlordData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/landlord/dashboard",
      icon: SquareTerminal,
      isActive: false,
    },
    {
      title: "House Listing management",
      url: "/landlord/house-management",
      icon: Building,
    },
    {
      title: "House Rental Requests",
      url: "/landlord/rental-request",
      icon: HandCoins,
    },

  
  ],

};
const tenantData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/tenant/dashboard",
      icon: SquareTerminal,
      isActive: false,
    },
    {
      title: "Submitted Rental Requests",
      url: "/tenant/submit-request",
      icon: FileText,
    },
    {
      title: "Approved Rental Requests",
      url: "/tenant/approved-request",
      icon:  BadgeCheck,
    },


  
  ],

};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {user}=useUser();
   const userRole= user?.role
    // Role অনুযায়ী data সেট করা
  let navData;
  if (userRole === "admin") {
    navData = adminData;
  } else if (userRole === "landlord") {
    navData = landlordData;
  } else {
    navData = tenantData; // Default tenant
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Image
                    src={Logo}
                    width={30}
                    height={30}
                    className="rounded-full"
                    alt="Dashboard logo"
                  />
                  {/* <Logo2/> */}
                </div>
                <div className="grid flex-1 text-left text-md leading-tight">
                  <h1>
                    Rental<span className="text-cyan-900">Hub</span>
                  </h1>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navData.navMain} />
        {/* <NavMain items={data.navSecondary} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
