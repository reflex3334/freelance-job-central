
import React from 'react';
import { Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const projects = [
  {
    id: 1,
    name: "Mobile App Development",
    status: "In Progress",
    dueDate: "2024-05-15",
  },
  {
    id: 2,
    name: "Website Redesign",
    status: "Not Started",
    dueDate: "2024-06-01",
  },
];

const ProjectList = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Current Projects</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-600">Project Name</TableHead>
            <TableHead className="text-gray-600">Status</TableHead>
            <TableHead className="text-gray-600">Due Date</TableHead>
            <TableHead className="text-gray-600">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>
                <Select defaultValue={project.status}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Not Started">Not Started</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{project.dueDate}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="gap-2">
                  <Eye className="h-4 w-4" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ProjectList;
