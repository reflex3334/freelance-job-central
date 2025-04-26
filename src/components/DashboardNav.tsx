
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Bell, User, Search } from 'lucide-react';

interface DashboardNavProps {
  userType: 'freelancer' | 'client';
}

const DashboardNav = ({ userType }: DashboardNavProps) => {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-purple-600">FreelanceHub</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
