"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  LinkProps & {
    className?: string;
    activeClassName?: string;
    exact?: boolean; // if true, only active on exact match
  };

const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, exact = true, href, ...props }, ref) => {
    const pathname = usePathname();

    const current = normalize(pathname || "/");
    const target =
      typeof href === "string"
        ? normalize(href)
        : normalize(href.pathname ?? "/");

    const isActive = exact ? current === target : current.startsWith(target);

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
