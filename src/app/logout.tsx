"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  //   return <Button onClick={() => authClient.signOut()}>Logout</Button>;
  return <Button onClick={handleLogout}>Logout</Button>;
};
