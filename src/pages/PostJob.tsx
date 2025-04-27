
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import DashboardNav from '@/components/DashboardNav';
import PostJobForm from '@/components/PostJobForm';
import MainSidebar from '@/components/MainSidebar';
import { SidebarProvider } from "@/components/ui/sidebar";

const PostJob = () => {
  const navigate = useNavigate();
  
  const handleFormSubmit = (formData: any) => {
    console.log("Job posted:", formData);
    
    // Save form data (could be stored in context/state/localStorage)
    localStorage.setItem('postedJob', JSON.stringify(formData));
    
    // Switch user type to freelancer after posting a job
    localStorage.setItem('userType', 'freelancer');
    
    // Show success toast
    toast.success("Job posted successfully! Redirecting to Freelancer Dashboard...");
    
    // Redirect to freelancer dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-gray-50 w-full">
        <DashboardNav userType="client" />
        <div className="flex min-h-screen w-full">
          <MainSidebar />
          <main className="flex-1 overflow-auto p-6">
            <div className="container mx-auto max-w-3xl">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">Post a New Job</h1>
              <PostJobForm onSubmit={handleFormSubmit} />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PostJob;
