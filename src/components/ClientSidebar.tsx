
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  MessageSquare,
  FileBarChart,
  FilePlus,
  Settings
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: Briefcase, label: 'Projects', href: '#' },
  { icon: Users, label: 'Freelancers', href: '#' },
  { icon: MessageSquare, label: 'Messages', href: '#' },
  { icon: FileBarChart, label: 'Reports', href: '#' },
  { icon: FilePlus, label: 'Post a Job', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
];

const ClientSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start gap-2"
            asChild
          >
            <a href={item.href}>
              <item.icon className="h-5 w-5" />
              {item.label}
            </a>
          </Button>
        ))}
      </nav>
    </aside>
  );
};

export default ClientSidebar;
