"use client";
import Link from "next/link";
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { events, chapters } from '@/data/mockData';
import { Calendar, MapPin, Clock, Users, DollarSign, ArrowLeft, Ticket } from 'lucide-react';

export default function EventsPage() {
  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Events & Gatherings
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Join us at community events, cultural celebrations, and gatherings. Connect with fellow members and experience the richness of our heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Upcoming Events</h2>
            <div className="flex gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">All Events</Badge>
              <Badge variant="secondary" className="cursor-pointer">National</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Chapter</Badge>
            </div>
          </div>

          <div className="space-y-6">
            {sortedEvents.map((event) => {
              const chapter = event.chapterId ? chapters.find(c => c.id === event.chapterId) : null;
              
              return (
                <Card key={event.id} className="card-hover overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Date Badge */}
                    <div className="lg:w-32 bg-primary text-primary-foreground p-4 lg:p-6 flex lg:flex-col items-center lg:items-center justify-center text-center">
                      <div className="font-display text-3xl lg:text-4xl font-bold">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm lg:text-base uppercase ml-2 lg:ml-0">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                      <div className="text-sm opacity-80 ml-2 lg:ml-0 lg:mt-1">
                        {new Date(event.date).getFullYear()}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant={event.type === 'national' ? 'default' : 'secondary'}>
                          {event.type === 'national' ? 'National Event' : `${chapter?.city} Chapter`}
                        </Badge>
                        {event.memberPrice === 0 && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Free for Members
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {event.location}
                        </div>
                        {event.memberPrice !== undefined && (
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-primary" />
                            <span>
                              Members: ${event.memberPrice} | Non-members: ${event.nonMemberPrice}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <Link href={`/events/${event.id}`}>
                        <Button variant="default" className="gap-2">
                          <Ticket className="w-4 h-4" />
                          View Details & Register
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}