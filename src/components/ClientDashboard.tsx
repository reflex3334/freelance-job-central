
import React from 'react';
import MainSidebar from './MainSidebar';
import ProjectList from './ProjectList';
import AddProject from './AddProject';

const ClientDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <MainSidebar />
      <main className="flex-1 overflow-auto bg-pink-50 p-6">
        <div className="container mx-auto space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Client Dashboard</h1>
          <ProjectList />
          <AddProject />
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
