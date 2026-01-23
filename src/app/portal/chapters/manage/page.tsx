"use client";

import { PortalLayout } from '@/components/portal/PortalLayout';
import { useDemo } from '@/contexts/DemoContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { chapters } from '@/data/mockData';
import { Building2, Users, Mail, Plus, Edit, Eye } from 'lucide-react';
import Link from "next/link";

export default function ChapterManagePage() {
  const { isNationalRole } = useDemo();

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              {isNationalRole() ? 'Manage Chapters' : 'Chapters'}
            </h1>
            <p className="text-muted-foreground">
              {isNationalRole() 
                ? 'View and manage all association chapters'
                : 'View chapter information'
              }
            </p>
          </div>
          {isNationalRole() && (
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Chapter
            </Button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      {chapter.name}
                    </CardTitle>
                    <CardDescription>{chapter.city}, {chapter.state}</CardDescription>
                  </div>
                  <Badge variant="outline">{chapter.memberCount} members</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {chapter.description}
                </p>
                
                <div className="text-sm">
                  <p className="font-medium mb-1">Meeting Schedule</p>
                  <p className="text-muted-foreground">{chapter.meetingSchedule}</p>
                </div>

                <div className="text-sm">
                  <p className="font-medium mb-2">Officers</p>
                  <div className="space-y-1">
                    {chapter.officers.map((officer, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-3 h-3" />
                        <span>{officer.name}</span>
                        <span className="text-xs">({officer.title})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  {chapter.contactEmail}
                </div>

                <div className="flex gap-2 pt-2">
                  <Link href={`/portal/chapters/${chapter.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </Link>
                  {isNationalRole() && (
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
