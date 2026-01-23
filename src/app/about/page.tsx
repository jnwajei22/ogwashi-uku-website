"use client";
import Link from "next/link";
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { nationalLeaders } from '@/data/mockData';
import { Users, Target, BookOpen, Award, FileText, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Unity',
    description: 'Bringing together Ogwashi-Uku indigenes across America as one family.',
  },
  {
    icon: Target,
    title: 'Service',
    description: 'Committed to serving our community both in America and our homeland.',
  },
  {
    icon: BookOpen,
    title: 'Heritage',
    description: 'Preserving and promoting our rich cultural traditions for future generations.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Striving for excellence in all our initiatives and community programs.',
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About Our Association
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Learn about our mission, history, and the dedicated leaders who guide our community forward.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Ogwashi-Uku USA Association is dedicated to uniting indigenes of Ogwashi-Uku living in the United States of America. We work together to preserve our rich cultural heritage, support development initiatives in our homeland, and empower our members and their families to thrive in America.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Founded on the principles of unity, service, and cultural preservation, we serve as a bridge connecting our community across generations and continents. Through our programs, events, and charitable initiatives, we strive to make a lasting positive impact both in America and in Ogwashi-Uku.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/impact">
                  <Button variant="default" size="lg" className="gap-2">
                    See Our Impact
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/chapters">
                  <Button variant="outline" size="lg">
                    Find Your Chapter
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-accent rounded-2xl p-8 md:p-12">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To be the premier organization for Ogwashi-Uku indigenes in America, recognized for our commitment to cultural preservation, community development, and the empowerment of our members.
              </p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-tight mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our History
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-4">
              The Ogwashi-Uku USA Association was established in the early 1990s by a group of dedicated indigenes who recognized the need for a formal organization to unite our growing community in America.
            </p>
            <p className="mb-4">
              What began as informal gatherings in living rooms has grown into a nationally recognized nonprofit organization with chapters across the United States. Over the decades, we have successfully executed numerous projects in Ogwashi-Uku, awarded hundreds of scholarships, and created a thriving community network.
            </p>
            <p>
              Today, we continue to build on the legacy of our founders, adapting to the needs of our community while staying true to our mission of unity, service, and cultural preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              National Leadership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated leaders guide the association with wisdom, integrity, and a deep commitment to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalLeaders.map((leader, index) => (
              <Card key={leader.name} className="card-hover text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-green-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-display font-bold text-primary-foreground">
                      {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium">
                    {leader.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Constitution Section */}
      <section id="constitution" className="section-padding bg-accent">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Constitution & Bylaws
            </h2>
            <p className="text-muted-foreground mb-8">
              Our constitution and bylaws provide the framework for our organization's governance, membership, and operations. These documents ensure transparency, accountability, and democratic participation in all association matters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="default" size="lg" className="gap-2">
                <FileText className="w-4 h-4" />
                Download Constitution (PDF)
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <FileText className="w-4 h-4" />
                Download Bylaws (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our community and be part of something meaningful. Together, we can preserve our heritage and build a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portal">
              <Button variant="default" size="lg">
                Become a Member
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
