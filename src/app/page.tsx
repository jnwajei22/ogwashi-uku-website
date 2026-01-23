import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ArrowRight, Heart, Users, GraduationCap, Building, Clock, ChevronRight } from 'lucide-react';
import { events, announcements, impactProjects, chapters } from '@/data/mockData';

// Impact highlight data
const impactStats = [
  { icon: Users, label: 'Active Members', value: '500+' },
  { icon: Building, label: 'Chapters Nationwide', value: '4' },
  { icon: GraduationCap, label: 'Scholarships Awarded', value: '$200K+' },
  { icon: Heart, label: 'Lives Impacted', value: '10,000+' },
];

export default function HomePage() {
  const upcomingEvents = events.slice(0, 3);
  const latestAnnouncements = announcements.slice(0, 3);
  const featuredProjects = impactProjects.filter(p => p.status === 'active').slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-pattern.jpg)" }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container-wide mx-auto px-4 md:px-6 py-24 md:py-32 text-center">
          <div className="max-w-4xl mx-auto stagger-children">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 backdrop-blur-sm">
              Uniting Our Community Across America
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Preserving Heritage,{' '}
              <span className="text-secondary">Building Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              The Ogwashi-Uku USA Association unites indigenes across America to preserve our rich cultural heritage, support our homeland, and empower the next generation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/portal">
                <Button variant="hero" size="xl" className="min-w-[200px]">
                  Join / Renew Membership
                </Button>
              </Link>
              <Link href="/donate">
                <Button variant="heroOutline" size="xl" className="min-w-[200px] gap-2">
                  <Heart className="w-5 h-5" />
                  Make a Donation
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(60 20% 99%)"
            />
          </svg>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-background -mt-1">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground">
                Join us at our community gatherings and celebrations
              </p>
            </div>
            <Link href="/events">
              <Button variant="outline" className="gap-2">
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="card-hover overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-primary to-green-500" />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={event.type === 'national' ? 'default' : 'secondary'}>
                      {event.type === 'national' ? 'National' : 'Chapter'}
                    </Badge>
                    {event.memberPrice === 0 && <Badge variant="outline">Free for Members</Badge>}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        month: 'long', 
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Link href={`/events/${event.id}`}>
                    <Button variant="subtle" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Our Impact
              </h2>
              <p className="text-muted-foreground">
                Making a difference in our community and homeland
              </p>
            </div>
            <Link href="/impact">
              <Button variant="outline" className="gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="card-hover">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{project.category}</Badge>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Outcomes:</p>
                    <ul className="space-y-1">
                      {project.outcomes.slice(0, 2).map((outcome, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="section-padding bg-accent">
        <div className="container-wide mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Latest Announcements
            </h2>
            <p className="text-muted-foreground">
              Stay updated with the latest news from our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {latestAnnouncements.map((announcement) => (
              <Card key={announcement.id} className="bg-card card-hover">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(announcement.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <CardTitle className="text-lg">{announcement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {announcement.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Our Chapters
            </h2>
            <p className="text-muted-foreground">
              Find your local chapter and get connected
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
            {chapters.map((chapter) => (
              <Link key={chapter.id} href={`/chapters/${chapter.id}`}>
                <Card className="text-center card-hover cursor-pointer h-full">
                  <CardContent className="pt-6 pb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {chapter.city}
                    </h3>
                    <p className="text-sm text-muted-foreground">{chapter.state}</p>
                    <p className="text-xs text-secondary font-medium mt-2">
                      {chapter.memberCount} members
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/chapters">
              <Button variant="outline" className="gap-2">
                View All Chapters
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient py-16 md:py-24 px-4 md:px-6">
          <div className="container-wide mx-auto text-center relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Join Our Community Today
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Become a member and help us preserve our heritage while building a brighter future for our community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/portal">
                <Button variant="hero" size="lg">
                  Become a Member
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="heroOutline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
