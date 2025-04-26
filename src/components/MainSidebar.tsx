
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
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Briefcase, label: 'Projects', href: '#projects' },
  { icon: Users, label: 'Freelancers', href: '#freelancers' },
  { icon: MessageSquare, label: 'Messages', href: '#messages' },
  { icon: FileBarChart, label: 'Reports', href: '#reports' },
  { icon: FilePlus, label: 'Post a Job', href: '#post-job' },
  { icon: Settings, label: 'Settings', href: '#settings' },
];

const MainSidebar = () => {
  const pathname = window.location.pathname;

  return (
    <Sidebar className="z-50 bg-white">
      <SidebarContent>
        <SidebarGroup>
          <div className="px-4 py-2">
            <SidebarTrigger />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton 
                    asChild 
                    tooltip={item.label}
                    data-active={pathname === item.href}
                  >
                    <a 
                      href={item.href} 
                      className={cn(
                        "flex items-center gap-2 transition-colors",
                        pathname === item.href && "text-primary font-medium"
                      )}
                    >
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
  );
};

export default MainSidebar;
