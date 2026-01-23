"use client";

import { PortalLayout } from '@/components/portal/PortalLayout';
import { useDemo } from '@/contexts/DemoContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { announcements, chapters } from '@/data/mockData';
import { Bell, Plus, Calendar, Edit } from 'lucide-react';

export default function AnnouncementsPage() {
  const { demoUser, isNationalRole } = useDemo();
  const userChapter = chapters.find(c => c.id === demoUser?.chapterId);

  const filteredAnnouncements = isNationalRole()
    ? announcements
    : announcements.filter(a => a.scope === 'national' || a.chapterId === demoUser?.chapterId);

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Announcements
            </h1>
            <p className="text-muted-foreground">
              {isNationalRole() ? 'Manage all announcements' : 'National and chapter updates'}
            </p>
          </div>
          {isNationalRole() && (
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Announcement
            </Button>
          )}
        </div>

        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <Card key={announcement.id} className="card-hover">
              <CardContent className="py-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Bell className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{announcement.title}</h3>
                          <Badge variant={announcement.scope === 'national' ? 'default' : 'secondary'}>
                            {announcement.scope === 'national' ? 'National' : userChapter?.name || 'Chapter'}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {announcement.content}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {announcement.date}
                        </div>
                      </div>
                      {isNationalRole() && (
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
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
