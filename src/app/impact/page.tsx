"use client";
import Link from "next/link";
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { impactProjects } from '@/data/mockData';
import { CheckCircle, Clock, Calendar, ArrowRight, Target, ChevronRight } from 'lucide-react';

const statusConfig = {
  active: { label: 'Active', className: 'bg-green-100 text-green-700 border-green-200' },
  completed: { label: 'Completed', className: 'bg-blue-100 text-blue-700 border-blue-200' },
  upcoming: { label: 'Upcoming', className: 'bg-amber-100 text-amber-700 border-amber-200' },
};

export default function ImpactPage() {
  const activeProjects = impactProjects.filter(p => p.status === 'active');
  const completedProjects = impactProjects.filter(p => p.status === 'completed');
  const upcomingProjects = impactProjects.filter(p => p.status === 'upcoming');

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Impact
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Through collective effort and dedication, we're making a meaningful difference in the lives of our community members and in our homeland of Ogwashi-Uku.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            <div className="text-center p-6 rounded-2xl bg-primary text-primary-foreground">
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">{impactProjects.length}</div>
              <div className="text-sm text-primary-foreground/80">Total Projects</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-accent">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">{activeProjects.length}</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-accent">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">{completedProjects.length}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-secondary text-secondary-foreground">
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">$500K+</div>
              <div className="text-sm text-secondary-foreground/80">Total Invested</div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="section-padding bg-muted/50 -mt-16">
        <div className="container-wide mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Active Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProjects.map((project) => (
              <Card key={project.id} className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge className={statusConfig[project.status].className}>
                      {statusConfig[project.status].label}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                      <Target className="w-4 h-4 text-primary" />
                      Goal
                    </div>
                    <p className="text-sm text-muted-foreground">{project.goal}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Key Outcomes
                    </div>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, index) => (
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

      {/* Completed Projects */}
      {completedProjects.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-wide mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Completed Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project) => (
                <Card key={project.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <Badge className={statusConfig[project.status].className}>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {statusConfig[project.status].label}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Final Outcomes
                      </div>
                      <ul className="space-y-1">
                        {project.outcomes.map((outcome, index) => (
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
      )}

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container-wide mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Support Our Mission
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Your contribution helps us continue making a positive impact in our community and homeland. Every donation makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/donate">
              <Button variant="gold" size="lg" className="gap-2">
                Make a Donation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/portal">
              <Button variant="outline" size="lg">
                Become a Member
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
