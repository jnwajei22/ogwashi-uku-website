"use client";

import { PortalLayout } from '@/components/portal/PortalLayout';
import { useDemo } from '@/contexts/DemoContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { chapters } from '@/data/mockData';
import { ClipboardList, Plus, Calendar, User } from 'lucide-react';

// Mock action items
const mockTasks = [
  { id: '1', title: 'Finalize venue booking for cultural night', assignee: 'Dr. Emmanuel Obi', dueDate: '2024-04-01', status: 'pending', priority: 'high' },
  { id: '2', title: 'Send reminder emails for membership renewal', assignee: 'Mrs. Adaeze Nwosu', dueDate: '2024-03-25', status: 'pending', priority: 'medium' },
  { id: '3', title: 'Prepare financial report for Q1', assignee: 'Mr. Chukwudi Eze', dueDate: '2024-04-15', status: 'pending', priority: 'high' },
  { id: '4', title: 'Update chapter bylaws document', assignee: 'Dr. Emmanuel Obi', dueDate: '2024-04-30', status: 'pending', priority: 'low' },
  { id: '5', title: 'Coordinate with national for convention registration', assignee: 'Mrs. Adaeze Nwosu', dueDate: '2024-05-01', status: 'completed', priority: 'medium' },
  { id: '6', title: 'Order supplies for next meeting', assignee: 'Mr. Chukwudi Eze', dueDate: '2024-03-20', status: 'completed', priority: 'low' },
];

const priorityColors = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-amber-100 text-amber-800 border-amber-200',
  low: 'bg-green-100 text-green-800 border-green-200',
};

export default function TasksPage() {
  const { demoUser } = useDemo();
  const userChapter = chapters.find(c => c.id === demoUser?.chapterId);

  const pendingTasks = mockTasks.filter(t => t.status === 'pending');
  const completedTasks = mockTasks.filter(t => t.status === 'completed');

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Action Items
            </h1>
            <p className="text-muted-foreground">
              {userChapter?.name} leadership tasks and to-dos
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
        </div>

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5" />
              Pending Tasks ({pendingTasks.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingTasks.map((task) => (
              <div 
                key={task.id} 
                className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
              >
                <Checkbox id={`task-${task.id}`} className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <label 
                      htmlFor={`task-${task.id}`}
                      className="font-medium cursor-pointer"
                    >
                      {task.title}
                    </label>
                    <Badge className={priorityColors[task.priority as keyof typeof priorityColors]}>
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {task.assignee}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Due: {task.dueDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Completed Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">
              Completed ({completedTasks.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {completedTasks.map((task) => (
              <div 
                key={task.id} 
                className="flex items-start gap-4 p-4 rounded-lg border bg-muted/30"
              >
                <Checkbox id={`task-${task.id}`} checked className="mt-1" />
                <div className="flex-1">
                  <label 
                    htmlFor={`task-${task.id}`}
                    className="font-medium line-through text-muted-foreground cursor-pointer"
                  >
                    {task.title}
                  </label>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {task.assignee}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
}
