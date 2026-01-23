"use client";
import { PortalLayout } from '@/components/portal/PortalLayout';
import { useDemo } from '@/contexts/DemoContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { announcements, events, chapters } from '@/data/mockData';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Calendar, 
  CreditCard, 
  Bell,
  Building2,
  TrendingUp
} from 'lucide-react';
import Link from "next/link";


export default function DashboardPage() {
  const { demoUser, isNationalRole } = useDemo();
  
  const userChapter = chapters.find(c => c.id === demoUser?.chapterId);
  const upcomingEvents = events.slice(0, 3);
  const recentAnnouncements = announcements.slice(0, 3);

  return (
    <PortalLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            Welcome back, {demoUser?.name}
          </h1>
          <p className="text-muted-foreground">
            {isNationalRole() 
              ? 'You have access to all national administration features.'
              : `Member of ${userChapter?.name || 'your chapter'}`
            }
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Membership</p>
                  <p className="text-xl font-bold text-green-600">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Expires</p>
                  <p className="text-xl font-bold">Dec 31, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {isNationalRole() ? (
            <>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Members</p>
                      <p className="text-xl font-bold">197</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <TrendingUp className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">YTD Revenue</p>
                      <p className="text-xl font-bold">$45,230</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Building2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Chapter</p>
                      <p className="text-xl font-bold">{userChapter?.city || 'N/A'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <CreditCard className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Member Type</p>
                      <p className="text-xl font-bold">Individual</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Announcements */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Recent Announcements
                </CardTitle>
                <Link href="/portal/announcements">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAnnouncements.map((announcement) => (
                <div key={announcement.id} className="border-b last:border-0 pb-3 last:pb-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-medium text-sm">{announcement.title}</h4>
                    <Badge variant={announcement.scope === 'national' ? 'default' : 'secondary'} className="text-xs">
                      {announcement.scope}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{announcement.content}</p>
                  <p className="text-xs text-muted-foreground mt-1">{announcement.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Events
                </CardTitle>
                <Link href="/portal/events">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-b last:border-0 pb-3 last:pb-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <Badge variant={event.type === 'national' ? 'default' : 'outline'} className="text-xs">
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                  <p className="text-xs text-muted-foreground mt-1">{event.date} • {event.time}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline">Renew Membership</Button>
              <Button variant="outline">Update Profile</Button>
              <Button variant="outline">View Documents</Button>
              {isNationalRole() && (
                <>
                  <Button variant="outline">Create Announcement</Button>
                  <Button variant="outline">Add Event</Button>
                  <Button variant="outline">Export Reports</Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
}
