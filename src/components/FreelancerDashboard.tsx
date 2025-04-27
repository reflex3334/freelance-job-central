
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Briefcase, ChartBar, Users } from 'lucide-react';
import MainSidebar from './MainSidebar';

const FreelancerDashboard = () => {
  return (
    <div className="flex min-h-screen w-full">
      <MainSidebar />
      <main className="flex-1 overflow-auto bg-purple-50 p-6">
        <div className="container mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-purple-900">Freelancer Workspace</h1>
            <Button className="bg-purple-600 hover:bg-purple-700">Find New Projects</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">$1,234</p>
                <p className="text-sm opacity-85">This month</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm opacity-85">In progress</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-violet-500 to-violet-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Job Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm opacity-85">Overall rating</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Profile Views</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">156</p>
                <p className="text-sm opacity-85">Last 30 days</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-purple-900">Project {i}</h3>
                        <p className="text-sm text-purple-600">Due in {i} days</p>
                      </div>
                      <Button variant="outline" className="border-purple-200 hover:bg-purple-100">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                  Recent Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
                        <Users className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-purple-900">Client {i}</h3>
                        <p className="text-sm text-purple-600">New message about Project {i}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FreelancerDashboard;

