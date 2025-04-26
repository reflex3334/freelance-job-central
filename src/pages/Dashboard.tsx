
import React from 'react';
import DashboardNav from '@/components/DashboardNav';
import FreelancerDashboard from '@/components/FreelancerDashboard';
import ClientDashboard from '@/components/ClientDashboard';

const Dashboard = () => {
  // In a real app, this would come from authentication
  const [userType] = React.useState<'freelancer' | 'client'>('client');

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav userType={userType} />
      {userType === 'client' ? (
        <ClientDashboard />
      ) : (
        <FreelancerDashboard />
      )}
    </div>
  );
};

export default Dashboard;
