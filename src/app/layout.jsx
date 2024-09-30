"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // If the user lands on "/", redirect them to "/en"
    if (window.location.pathname === "/") {
      router.replace("/en");
    }
  }, [router]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
