/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

export const registerUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const result = await res.json();

        if (result?.success) {
            (await cookies()).set("accessToken", result?.data?.accessToken);
            (await cookies()).set("refreshToken", result?.data?.refreshToken);
        }

        return result;
    } catch (error: any) {
        return Error(error);
    }
};

export const loginUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        const result = await res.json();

        if (result?.success) {
            (await cookies()).set("accessToken", result?.data?.accessToken);
            (await cookies()).set("refreshToken", result?.data?.refreshToken);
        }
        return result
    } catch (error: any) {
        return Error(error);
    }
}

export const getCurrentUserDetails = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value;
    if (accessToken) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/me`,
            {
                next: {
                    tags: ["USER"]
                },
                method: "GET",
                headers: {
                    Authorization: accessToken,
                },
            }
        )
        const data = await res.json()
        return data?.data;
    } else {
        return null;
    }
};
export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value;
    let decodedData = null;
  
    if (accessToken) {
      decodedData = await jwtDecode(accessToken);
      return decodedData;
    } else {
      return null;
    }
  };

export const logout = async () => {
    (await cookies()).delete("accessToken");
    (await cookies()).delete("refreshToken");
};

export const updateProfile = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/update-profile`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: (await cookies()).get("accessToken")!.value,
            },
            body: JSON.stringify(userData),
        })
        const result = await res.json();
        revalidateTag("USER")
        return result
    } catch (error: any) {
        return Error(error);
    }
}
export const updatePassword = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/update-password`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: (await cookies()).get("accessToken")!.value,
            },
            body: JSON.stringify(userData),
        })
        const result = await res.json();
        revalidateTag("USER")
        return result
    } catch (error: any) {
        return Error(error);
    }
}