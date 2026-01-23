"use client";

import { PortalLayout } from '@/components/portal/PortalLayout';
import { useDemo } from '@/contexts/DemoContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { events, chapters } from '@/data/mockData';
import { Calendar, MapPin, Clock, Users, Plus, Edit } from 'lucide-react';

export default function PortalEventsPage() {
  const { demoUser, isNationalRole } = useDemo();
  const userChapter = chapters.find(c => c.id === demoUser?.chapterId);

  const filteredEvents = isNationalRole()
    ? events
    : events.filter(e => e.type === 'national' || e.chapterId === demoUser?.chapterId);

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Events
            </h1>
            <p className="text-muted-foreground">
              {isNationalRole() ? 'Manage all events' : `${userChapter?.name} and national events`}
            </p>
          </div>
          {(isNationalRole() || ['ChapterAdmin', 'ChapterPresident', 'ChapterSecretary'].includes(demoUser?.role || '')) && (
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{event.title}</CardTitle>
                    <div className="flex gap-2 mt-2">
                      <Badge variant={event.type === 'national' ? 'default' : 'secondary'}>
                        {event.type}
                      </Badge>
                      {event.memberPrice !== undefined && event.memberPrice < event.nonMemberPrice && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Member discount
                        </Badge>
                      )}
                    </div>
                  </div>
                  {isNationalRole() && (
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Member: </span>
                    <span className="font-semibold text-primary">
                      {event.memberPrice === 0 ? 'Free' : `$${event.memberPrice}`}
                    </span>
                    <span className="text-muted-foreground mx-2">|</span>
                    <span className="text-muted-foreground">Non-member: </span>
                    <span>
                      {event.nonMemberPrice === 0 ? 'Free' : `$${event.nonMemberPrice}`}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1">
                    RSVP
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
