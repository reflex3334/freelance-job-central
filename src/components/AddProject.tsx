
import React from 'react';
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const AddProject = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Card className="bg-white p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Add New Project</h2>
      <form className="space-y-4">
        <div>
          <Input
            placeholder="Project Name"
            className="max-w-sm border-gray-200 focus:border-gray-300 focus:ring-gray-200"
          />
        </div>
        <div>
          <Select defaultValue="not-started">
            <SelectTrigger className="max-w-sm">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="not-started">Not Started</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "max-w-sm w-full justify-start text-left font-normal border-gray-200",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a due date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          Add Project
        </Button>
      </form>
    </Card>
  );
};

export default AddProject;
