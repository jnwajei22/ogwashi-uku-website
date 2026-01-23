"use client";
import Link from "next/link";
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { chapters } from '@/data/mockData';
import { MapPin, Users, Calendar, Mail, ArrowRight, ArrowLeft, Clock } from 'lucide-react';

export default function ChaptersPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Chapters
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Find your local chapter and connect with the Ogwashi-Uku community near you. Each chapter hosts regular meetings, cultural events, and community service activities.
            </p>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {chapters.map((chapter) => (
              <Card key={chapter.id} className="card-hover overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-green-500" />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-1">{chapter.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {chapter.city}, {chapter.state}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      <Users className="w-3 h-3 mr-1" />
                      {chapter.memberCount} members
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{chapter.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{chapter.meetingSchedule}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <a href={`mailto:${chapter.contactEmail}`} className="text-primary hover:underline">
                        {chapter.contactEmail}
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-sm text-foreground mb-3">Chapter Officers</h4>
                    <div className="space-y-2">
                      {chapter.officers.slice(0, 3).map((officer) => (
                        <div key={officer.name} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{officer.name}</span>
                          <span className="text-secondary font-medium">{officer.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/chapters/${chapter.id}`} className="block mt-6">
                    <Button variant="outline" className="w-full gap-2">
                      View Chapter Details
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Start a Chapter CTA */}
      <section className="section-padding bg-accent">
        <div className="container-wide mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Don't See Your City?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            If there's no chapter in your area and you're interested in starting one, we'd love to hear from you. Reach out to learn about the requirements and support we provide for new chapters.
          </p>
          <Link href="/contact">
            <Button variant="default" size="lg">
              Contact Us About Starting a Chapter
            </Button>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}


