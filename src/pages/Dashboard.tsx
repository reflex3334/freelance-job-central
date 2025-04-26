
import React from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardNav from '@/components/DashboardNav';
import FreelancerDashboard from '@/components/FreelancerDashboard';
import ClientDashboard from '@/components/ClientDashboard';
import PostJobForm from '@/components/PostJobForm';

const Dashboard = () => {
  // In a real app, this would come from authentication
  const [userType] = React.useState<'freelancer' | 'client'>('freelancer');

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav userType={userType} />
      <div className="container mx-auto px-4 py-8">
        {userType === 'client' ? (
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="post-job">Post a Job</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
              <ClientDashboard />
            </TabsContent>
            <TabsContent value="post-job">
              <PostJobForm />
            </TabsContent>
          </Tabs>
        ) : (
          <FreelancerDashboard />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
