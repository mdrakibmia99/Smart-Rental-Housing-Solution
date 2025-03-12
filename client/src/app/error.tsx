"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type ErrorProps = {
  error: Error & { digest?: string }; // Error object with optional digest property
  reset: () => void; // Function to retry the page load
};

export default function Error({ error, reset }: ErrorProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">Oops! Something went wrong.</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {error?.message || "An unexpected error occurred. Please try again later."}
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <Button onClick={() => reset()} className="bg-blue-600 hover:bg-blue-700 text-white">
            Try Again
          </Button>
          <Link href={pathname.startsWith("/dashboard") ? "/dashboard" : "/"}>
            <Button variant="outline">Go to {pathname.startsWith("/dashboard") ? "Dashboard" : "Home"}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
