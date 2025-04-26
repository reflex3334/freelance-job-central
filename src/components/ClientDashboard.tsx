
import React from 'react';
import MainSidebar from './MainSidebar';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import { SidebarProvider } from "@/components/ui/sidebar";

const ClientDashboard = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <MainSidebar />
        <main className="flex-1 overflow-auto bg-pink-50 p-6">
          <div className="container mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Client Dashboard</h1>
            <ProjectList />
            <AddProject />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ClientDashboard;
