"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDemo, DemoRole } from "@/contexts/DemoContext";
import { DemoBanner } from "./DemoBanner";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
  Building2,
  CreditCard,
  Bell,
  FolderOpen,
  ClipboardList,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

type PortalLayoutProps = {
  children: ReactNode;
};

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const chapterRoles: DemoRole[] = [
  "ChapterAdmin",
  "ChapterPresident",
  "ChapterSecretary",
  "ChapterTreasurer",
];

const nationalNav: NavItem[] = [
  { href: "/portal/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/portal/chapters", label: "Manage Chapters", icon: Building2 },
  { href: "/portal/members", label: "Members", icon: Users },
  { href: "/portal/events", label: "Events", icon: Calendar },
  { href: "/portal/announcements", label: "Announcements", icon: Bell },
  { href: "/portal/finance", label: "Finance", icon: CreditCard },
  { href: "/portal/settings", label: "Settings", icon: Settings },
];

const chapterNav: NavItem[] = [
  { href: "/portal/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/portal/chapter", label: "My Chapter", icon: Building2 },
  { href: "/portal/members", label: "Chapter Members", icon: Users },
  { href: "/portal/documents", label: "Documents", icon: FolderOpen },
  { href: "/portal/minutes", label: "Meeting Minutes", icon: FileText },
  { href: "/portal/events", label: "Events", icon: Calendar },
  { href: "/portal/tasks", label: "Action Items", icon: ClipboardList },
];

const memberNav: NavItem[] = [
  { href: "/portal/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/portal/profile", label: "My Profile", icon: Users },
  { href: "/portal/chapter", label: "My Chapter", icon: Building2 },
  { href: "/portal/events", label: "Events", icon: Calendar },
  { href: "/portal/payments", label: "Payments", icon: CreditCard },
];

export function PortalLayout({ children }: PortalLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isDemoMode, demoUser, isNationalRole } = useDemo();

  // Redirect safely (no navigation during render)
  useEffect(() => {
    if (!isDemoMode) router.replace("/portal");
  }, [isDemoMode, router]);

  const navItems = useMemo<NavItem[]>(() => {
    if (isNationalRole()) return nationalNav;

    const role = demoUser?.role;
    if (role && chapterRoles.includes(role)) return chapterNav;

    return memberNav;
  }, [demoUser?.role, isNationalRole]);

  // While redirecting, don't render portal chrome
  if (!isDemoMode) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      <DemoBanner />

      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-4">
        <div className="container-wide mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm">Back to Site</span>
            </Link>
            <h1 className="font-display text-xl font-bold">Member Portal</h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-foreground/80">
              {demoUser?.name} ({demoUser?.role})
            </span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-120px)] bg-card border-r border-border p-4 hidden md:block">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-2 z-50">
          <div className="flex justify-around">
            {navItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center gap-1 px-2 py-1 rounded text-xs",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="truncate max-w-[60px]">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 pb-24 md:pb-6">{children}</main>
      </div>
    </div>
  );
}
