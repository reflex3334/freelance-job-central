
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ClientRegistrationForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      companyWebsite: '',
      location: '',
      projectType: '',
      projectDescription: '',
      budgetRange: '',
      timeline: '',
      preferredSkills: '',
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // In a real app, you would save this data to your backend
    navigate('/dashboard');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+1 234 567 8900" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Company Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyWebsite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Website (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="City, Country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="mobile-app">Mobile App</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="content">Content Writing</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Briefly describe your project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budgetRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget Range</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10000+">$10,000+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Timeline</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 2-3 months" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferredSkills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Skills</FormLabel>
              <FormControl>
                <Textarea placeholder="What skills are you looking for in a freelancer?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Complete Registration</Button>
      </form>
    </Form>
  );
};

export default ClientRegistrationForm;
