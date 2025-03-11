"use client";

import UserProvider from "@/userContextApi/userProvider";
import StoreProvider from "./StoreProviders";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>
    <StoreProvider>{children}</StoreProvider>
  </UserProvider>;
};

export default Providers;