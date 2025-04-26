
import React from 'react';
import DashboardNav from '@/components/DashboardNav';
import FreelancerDashboard from '@/components/FreelancerDashboard';
import ClientDashboard from '@/components/ClientDashboard';
import { SidebarProvider } from "@/components/ui/sidebar";

const Dashboard = () => {
  // Get the user type from localStorage, default to 'client' if not set
  const [userType] = React.useState<'freelancer' | 'client'>(() => 
    (localStorage.getItem('userType') as 'freelancer' | 'client') || 'client'
  );

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-gray-50 w-full">
        <DashboardNav userType={userType} />
        {userType === 'client' ? (
          <ClientDashboard />
        ) : (
          <FreelancerDashboard />
        )}
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
