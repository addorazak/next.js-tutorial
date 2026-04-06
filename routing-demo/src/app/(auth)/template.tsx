"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState("");
  const pathname = usePathname();
  return (
    <div>
      <input
        title="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            href={link.href}
            key={link.name}
            className={`mr-4 ${isActive ? "font-bold" : "text-blue-500"}`}
          >
            {link.name}
          </Link>
        );
      })}

      {children}
    </div>
  );
}
