import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events, chapters } from "@/data/mockData";
import { Calendar, MapPin, ArrowLeft, Ticket } from "lucide-react";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }> | { eventId: string };
}) {
  const { eventId } = await params;

  const event = events.find((e) => e.id === eventId);
  const chapter = event?.chapterId ? chapters.find((c) => c.id === event.chapterId) : null;

  if (!event) {
    return (
      <SiteLayout>
        <section className="section-padding bg-background min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-6">The event you're looking for doesn't exist.</p>
            <Link href="/events">
              <Button variant="default">View All Events</Button>
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide mx-auto px-4 md:px-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Events
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                {event.type === "national" ? "National Event" : `${chapter?.city} Chapter`}
              </Badge>

              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                <Calendar className="w-3 h-3 mr-1" />
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </Badge>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About This Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-accent">
                    <Calendar className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-accent">
                    <MapPin className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{event.location}</p>
                      <p className="text-sm text-muted-foreground">View on map</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Register for This Event</CardTitle>
                  <CardDescription>Secure your spot today</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {event.memberPrice !== undefined && (
                    <>
                      <div className="p-4 rounded-lg border border-primary bg-primary/5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">Member Price</span>
                          <span className="text-2xl font-bold text-primary">
                            {event.memberPrice === 0 ? "FREE" : `$${event.memberPrice}`}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {event.memberPrice === 0 ? "Included with membership" : "Exclusive member rate"}
                        </p>
                      </div>

                      <div className="p-4 rounded-lg border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">Non-Member Price</span>
                          <span className="text-2xl font-bold text-muted-foreground">${event.nonMemberPrice}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">General admission</p>
                      </div>
                    </>
                  )}

                  <Button variant="gold" className="w-full" size="lg">
                    <Ticket className="w-4 h-4 mr-2" />
                    Purchase Tickets
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Not a member yet?{" "}
                    <Link href="/portal" className="text-primary hover:underline">
                      Join today
                    </Link>{" "}
                    and save on event tickets!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
