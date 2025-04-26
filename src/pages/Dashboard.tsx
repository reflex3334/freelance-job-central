
import React from 'react';
import DashboardNav from '@/components/DashboardNav';
import FreelancerDashboard from '@/components/FreelancerDashboard';
import ClientDashboard from '@/components/ClientDashboard';
import { SidebarProvider } from "@/components/ui/sidebar";

const Dashboard = () => {
  // In a real app, this would come from authentication
  const [userType] = React.useState<'freelancer' | 'client'>('client');

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
