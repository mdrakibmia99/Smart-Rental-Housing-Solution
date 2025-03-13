"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/services/AuthService";

import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constants";
import Logo from "@/assets/logo/basaFinder-logo.png";
import { useUser } from "@/userContextApi/userProvider";

export default function Navbar() {
  const { user, setIsLoading ,handleUser} = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    handleUser();
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };
  console.log(user)

  return (
    <header className="border-b bg-background w-full sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-5">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="BasaFinder Logo" width={40} height={40} />
          <span className="text-2xl font-bold">BasaFinder</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/listings" className="hover:text-primary transition">Listings</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center gap-4">
          {user?.email ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={`/profile`}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`/${user?.role}/dashboard`}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogOut} className="text-red-500">
                  <LogOut className="mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t p-4 absolute w-full left-0 top-16 shadow-md">
          <nav className="flex flex-col gap-4 text-center">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/listings" onClick={() => setIsOpen(false)}>Listings</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
          {user?.email ? (
            <div className="mt-4 flex flex-col items-center gap-3">
              <Link href="/profile" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">Profile</Button>
              </Link>
              <Button
                variant="destructive"
                className="w-full"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="mt-4 flex flex-col items-center gap-3">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
