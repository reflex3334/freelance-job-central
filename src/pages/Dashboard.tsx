
import React, { useEffect, useState } from 'react';
import DashboardNav from '@/components/DashboardNav';
import FreelancerDashboard from '@/components/FreelancerDashboard';
import ClientDashboard from '@/components/ClientDashboard';
import { SidebarProvider } from "@/components/ui/sidebar";

const Dashboard = () => {
  const [userType, setUserType] = useState<'freelancer' | 'client'>('client');
  
  useEffect(() => {
    // Get the user type from localStorage
    const storedUserType = localStorage.getItem('userType') as 'freelancer' | 'client';
    console.log("User type from localStorage:", storedUserType);
    
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

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
