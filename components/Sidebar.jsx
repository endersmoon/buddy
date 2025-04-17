"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MoreVerticalIcon } from "lucide-react";
import { navItems } from "@/app/config/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const dummyUser = {
  name: "Arjun Goley",
  email: "arjun@naukri.com",
  avatar: "https://github.com/shadcn.png"
};

export function AppSidebar({ className }) {
  const pathname = usePathname();

  return (
    <Sidebar className={cn(
      "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
      className
    )}>
      <SidebarHeader>
        <div className="flex items-center justify-center p-4">
          <h1 className="text-xl font-bold">Buddy</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton 
                  asChild 
                  isActive={pathname === item.path}
                  className="data-[active=true]:text-background data-[active=true]:bg-black"
                >
                  <a href={item.path}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        
          <SidebarMenuButton
            size="lg"
            className="w-full data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={dummyUser.avatar} alt={dummyUser.name} />
              <AvatarFallback className="rounded-lg">AG</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{dummyUser.name}</span>
              <span className="truncate text-xs text-muted-foreground">
                {dummyUser.email}
              </span>
            </div>
            <MoreVerticalIcon className="ml-auto size-4" />
          </SidebarMenuButton>
        
      </SidebarFooter>
    </Sidebar>
  );
} 