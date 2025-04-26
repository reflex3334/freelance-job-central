
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PostJobForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Post a New Job</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input id="title" placeholder="e.g., Frontend Developer Needed" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your project requirements..."
              rows={5}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="mobile">Mobile Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <Input id="budget" type="number" placeholder="Enter amount in USD" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Required Skills</Label>
            <Input id="skills" placeholder="e.g., React, TypeScript, Node.js" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Project Duration</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="less-than-1">Less than 1 month</SelectItem>
                <SelectItem value="1-3">1-3 months</SelectItem>
                <SelectItem value="3-6">3-6 months</SelectItem>
                <SelectItem value="more-than-6">More than 6 months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">Post Job</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PostJobForm;
