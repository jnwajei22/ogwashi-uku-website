import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { chapters } from "@/data/mockData";
import { MapPin, Users, Mail, ArrowLeft, Clock } from "lucide-react";

export default async function ChapterDetailPage({
  params,
}: {
  params: Promise<{ chapterId: string }> | { chapterId: string };
}) {
  const { chapterId } = await params;
  const chapter = chapters.find((c) => c.id === chapterId);

  if (!chapter) {
    return (
      <SiteLayout>
        <section className="section-padding bg-background min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Chapter Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The chapter you're looking for doesn't exist.
            </p>
            <Link href="/chapters">
              <Button variant="default">View All Chapters</Button>
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
            href="/chapters"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Chapters
          </Link>

          <div className="max-w-3xl">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              <MapPin className="w-3 h-3 mr-1" />
              {chapter.city}, {chapter.state}
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {chapter.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              {chapter.description}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter Info */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About This Chapter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {chapter.description} Our chapter is committed to fostering
                    unity among Ogwashi-Uku indigenes in the {chapter.city} area,
                    preserving our cultural heritage, and supporting both our
                    local community and our homeland.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Chapter Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {chapter.officers.map((officer) => (
                      <div
                        key={officer.name}
                        className="p-4 rounded-lg bg-accent"
                      >
                        <h4 className="font-semibold text-foreground">
                          {officer.name}
                        </h4>
                        <p className="text-sm text-secondary font-medium">
                          {officer.title}
                        </p>
                        {officer.email && (
                          <a
                            href={`mailto:${officer.email}`}
                            className="text-sm text-muted-foreground hover:text-primary mt-1 block"
                          >
                            {officer.email}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Meeting Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-accent">
                    <Clock className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        {chapter.meetingSchedule}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        All members are welcome to attend
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Contact This Chapter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href={`mailto:${chapter.contactEmail}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {chapter.contactEmail}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      {chapter.memberCount} active members
                    </span>
                  </div>

                  <Button variant="default" className="w-full mt-4">
                    Contact Chapter
                  </Button>

                  <Link href="/portal" className="block">
                    <Button variant="outline" className="w-full">
                      Join This Chapter
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
