"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

// props
interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  // Check if the current pathname exactly matches the href or is the same as the home route
  const isActive = pathname === href;

  const onClick = () => {
    router.push(href);
  };

  return (
    <Button
      variant={"primaryBtn"}
      onClick={onClick}
      type="button"
      className={cn(isActive ? "text-emerald-500" : "text-gray-900")} // Apply emerald color only if active
    >
      <div className="flex items-center">
        <Icon
          size={25}
          className={cn(isActive ? "text-emerald-500" : "text-gray-900")} // Apply emerald color only if active
        />
        <span className="ml-2">{label}</span>
      </div>
    </Button>
  );
};
