"use client";

import { useParams } from "next/navigation";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemo } from "@/contexts/DemoContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { chapters, events, announcements } from "@/data/mockData";
import {
  Building2,
  Users,
  Calendar,
  Bell,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";

export default function ChapterDetailPage() {
  const params = useParams<{ chapterId?: string }>();
  const chapterId = params?.chapterId;

  const { demoUser, isNationalRole, canAccessChapter } = useDemo();

  // Use URL param or user's chapter
  const activeChapterId = chapterId || demoUser?.chapterId;
  const chapter = chapters.find((c) => c.id === activeChapterId);

  if (!chapter) {
    return (
      <PortalLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold">Chapter not found</h1>
        </div>
      </PortalLayout>
    );
  }

  if (!isNationalRole() && !canAccessChapter(chapter.id)) {
    return (
      <PortalLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p className="text-muted-foreground">
            You don't have access to this chapter.
          </p>
        </div>
      </PortalLayout>
    );
  }

  const chapterEvents = events.filter((e) => e.chapterId === chapter.id);
  const chapterAnnouncements = announcements.filter((a) => a.chapterId === chapter.id);

  return (
    <PortalLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
              <Building2 className="w-7 h-7 text-primary" />
              {chapter.name}
            </h1>
            <p className="text-muted-foreground">
              {chapter.city}, {chapter.state}
            </p>
          </div>
          <Badge variant="outline" className="text-lg px-4 py-1">
            {chapter.memberCount} members
          </Badge>
        </div>

        {/* Chapter Info Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-muted-foreground">{chapter.description}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Meeting Schedule
                  </h3>
                  <p className="text-muted-foreground">{chapter.meetingSchedule}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact
                  </h3>
                  <p className="text-muted-foreground">{chapter.contactEmail}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="officers" className="space-y-4">
          <TabsList>
            <TabsTrigger value="officers">Officers</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
          </TabsList>

          <TabsContent value="officers">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Chapter Officers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {chapter.officers.map((officer, idx) => (
                    <div key={idx} className="p-4 rounded-lg border bg-card">
                      <p className="font-semibold">{officer.name}</p>
                      <p className="text-sm text-muted-foreground">{officer.title}</p>
                      {officer.email && (
                        <p className="text-sm text-primary mt-1">{officer.email}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Chapter Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                {chapterEvents.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No upcoming chapter events
                  </p>
                ) : (
                  <div className="space-y-4">
                    {chapterEvents.map((event) => (
                      <div key={event.id} className="p-4 rounded-lg border">
                        <h4 className="font-semibold">{event.title}</h4>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Chapter Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                {chapterAnnouncements.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No chapter announcements
                  </p>
                ) : (
                  <div className="space-y-4">
                    {chapterAnnouncements.map((announcement) => (
                      <div key={announcement.id} className="p-4 rounded-lg border">
                        <h4 className="font-semibold">{announcement.title}</h4>
                        <p className="text-muted-foreground mt-1">{announcement.content}</p>
                        <p className="text-sm text-muted-foreground mt-2">{announcement.date}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  );
}
