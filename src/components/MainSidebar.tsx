
import React from 'react';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  MessageSquare,
  FileBarChart,
  FilePlus,
  Settings,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: Briefcase, label: 'Projects', href: '#' },
  { icon: Users, label: 'Freelancers', href: '#' },
  { icon: MessageSquare, label: 'Messages', href: '#' },
  { icon: FileBarChart, label: 'Reports', href: '#' },
  { icon: FilePlus, label: 'Post a Job', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
];

const MainSidebar = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="z-50">
        <SidebarContent>
          <SidebarGroup>
            <div className="px-4 py-2">
              <SidebarTrigger />
            </div>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild tooltip={item.label}>
                      <a href={item.href} className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};

export default MainSidebar;
