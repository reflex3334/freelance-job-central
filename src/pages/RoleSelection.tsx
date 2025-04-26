
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">Choose Your Role</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate('/freelancer-registration')}
          >
            <CardHeader>
              <CardTitle>Join as a Freelancer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Find exciting projects and showcase your skills to clients worldwide.</p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate('/client-registration')}
          >
            <CardHeader>
              <CardTitle>Join as a Client</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Post projects and find talented freelancers to bring your ideas to life.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
