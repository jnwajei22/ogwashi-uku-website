"use client";

import { useRouter } from "next/navigation";
import { useDemo, DemoRole } from "@/contexts/DemoContext";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, LogOut } from "lucide-react";

const roleLabels: Record<DemoRole, string> = {
  NationalAdmin: "National Admin",
  NationalPresident: "National President",
  NationalSecretary: "National Secretary",
  NationalTreasurer: "National Treasurer",
  ChapterAdmin: "Chapter Admin",
  ChapterPresident: "Chapter President",
  ChapterSecretary: "Chapter Secretary",
  ChapterTreasurer: "Chapter Treasurer",
  Member: "Member",
};

export function DemoBanner() {
  const router = useRouter();
  const { isDemoMode, demoUser, exitDemoMode, setDemoRole } = useDemo();

  if (!isDemoMode) return null;

  const handleExitDemo = () => {
    exitDemoMode();
    router.push("/portal");
  };

  return (
    <div className="bg-amber-500/90 text-amber-950 py-2 px-4">
      <div className="container-wide mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-sm font-medium">
            Demo Mode — not connected to real authentication
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">Role:</span>

            <Select
              value={demoUser?.role}
              onValueChange={(value) => setDemoRole(value as DemoRole)}
            >
              <SelectTrigger className="h-8 w-[160px] bg-white/90 border-amber-600 text-amber-950">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                {Object.entries(roleLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* No variant/size props until ui/button.tsx is fixed */}
          <Button
            onClick={handleExitDemo}
            className="h-9 px-3 text-sm bg-white/90 border border-amber-600 text-amber-950 hover:bg-white inline-flex items-center"
          >
            <LogOut className="w-4 h-4 mr-1" />
            Exit Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
