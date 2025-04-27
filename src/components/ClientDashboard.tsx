
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainSidebar from './MainSidebar';
import ProjectList from './ProjectList';
import { Button } from '@/components/ui/button';
import { FilePlus } from 'lucide-react';

const ClientDashboard = () => {
  const navigate = useNavigate();
  
  const handlePostJobClick = () => {
    navigate('/dashboard/post-job');
  };

  return (
    <div className="flex min-h-screen w-full">
      <MainSidebar />
      <main className="flex-1 overflow-auto bg-pink-50 p-6">
        <div className="container mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Client Dashboard</h1>
            <Button 
              onClick={handlePostJobClick}
              className="bg-pink-600 hover:bg-pink-700 flex items-center gap-2"
            >
              <FilePlus className="h-5 w-5" />
              Post a New Job
            </Button>
          </div>
          
          <ProjectList />
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
