"use client";

import { PortalLayout } from '@/components/portal/PortalLayout';
import { useDemo } from '@/contexts/DemoContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Plus, 
  Search, 
  Calendar, 
  User,
  Download,
  Eye
} from 'lucide-react';
import { chapters } from '@/data/mockData';

// Mock meeting minutes
const mockMinutes = [
  { 
    id: '1', 
    title: 'Monthly General Meeting', 
    date: '2024-01-06', 
    content: 'Meeting called to order at 4:00 PM. Attendance: 32 members present. Approval of previous minutes. Treasury report: Current balance $12,450. Discussed upcoming cultural night planning. New member introductions. Meeting adjourned at 6:30 PM.',
    createdBy: 'Mrs. Adaeze Nwosu',
    tags: ['general', 'monthly'],
    hasFile: true
  },
  { 
    id: '2', 
    title: 'Executive Committee Meeting', 
    date: '2023-12-20', 
    content: 'Emergency meeting regarding end-of-year activities. Budget review for 2024. Officer nominations discussed. Community outreach planning for Q1.',
    createdBy: 'Mrs. Adaeze Nwosu',
    tags: ['executive', 'planning'],
    hasFile: false
  },
  { 
    id: '3', 
    title: 'Monthly General Meeting', 
    date: '2023-12-02', 
    content: 'December meeting with 28 members present. Holiday celebration planning finalized. Scholarship committee update. Year-end financial summary.',
    createdBy: 'Mrs. Adaeze Nwosu',
    tags: ['general', 'monthly'],
    hasFile: true
  },
  { 
    id: '4', 
    title: 'Special Planning Session', 
    date: '2023-11-15', 
    content: 'Planning session for 2024 national convention participation. Budget allocation for travel and accommodations. Volunteer sign-up.',
    createdBy: 'Dr. Emmanuel Obi',
    tags: ['planning', 'convention'],
    hasFile: false
  },
  { 
    id: '5', 
    title: 'Monthly General Meeting', 
    date: '2023-11-04', 
    content: 'November meeting with 35 members present. New member orientation. Community service project update. Thanksgiving celebration plans.',
    createdBy: 'Mrs. Adaeze Nwosu',
    tags: ['general', 'monthly'],
    hasFile: true
  },
];

export default function MinutesPage() {
  const { demoUser } = useDemo();
  const userChapter = chapters.find(c => c.id === demoUser?.chapterId);

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Meeting Minutes
            </h1>
            <p className="text-muted-foreground">
              {userChapter?.name} meeting records and notes
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Minutes
          </Button>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="py-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search meeting minutes..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">All Tags</Button>
                <Button variant="outline" size="sm">This Year</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Minutes List */}
        <div className="space-y-4">
          {mockMinutes.map((minutes) => (
            <Card key={minutes.id} className="card-hover">
              <CardContent className="py-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{minutes.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {minutes.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {minutes.createdBy}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {minutes.content}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {minutes.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 lg:flex-col">
                    <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    {minutes.hasFile && (
                      <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                        <Download className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
