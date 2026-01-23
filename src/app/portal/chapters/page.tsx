"use client";

import Link from "next/link";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemo } from "@/contexts/DemoContext";
import { chapters } from "@/data/mockData";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Building2, MapPin, Users, Mail, ArrowRight, Settings } from "lucide-react";

export default function PortalChaptersPage() {
  const { demoUser, isNationalRole } = useDemo();

  const userChapter = chapters.find((c) => c.id === demoUser?.chapterId);

  // National can see all. Chapter role can see their own (fallback: show all if none set).
  const visibleChapters = isNationalRole()
    ? chapters
    : userChapter
      ? [userChapter]
      : chapters;

  return (
    <PortalLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-1">Chapters</h1>
            <p className="text-muted-foreground">
              {isNationalRole()
                ? "Browse and manage all association chapters."
                : `Your chapter information and officers${userChapter ? ` — ${userChapter.name}` : ""}.`}
            </p>
          </div>

        </div>

        {/* Quick highlight for chapter users */}
        {!isNationalRole() && userChapter && (
          <Card className="border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Your Chapter
              </CardTitle>
              <CardDescription>Here’s the chapter tied to your demo account.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="font-semibold text-lg">{userChapter.name}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {userChapter.city}, {userChapter.state}
                </div>
              </div>
              <Link href={`/portal/chapters/${userChapter.id}`}>
                <Button variant="default" className="gap-2">
                  View Details <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Chapter list */}
        <div className="grid md:grid-cols-2 gap-6">
          {visibleChapters.map((chapter) => (
            <Card key={chapter.id} className="card-hover overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-green-500" />
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl">{chapter.name}</CardTitle>
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

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">{chapter.description}</p>

                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href={`mailto:${chapter.contactEmail}`}
                    className="text-primary hover:underline"
                  >
                    {chapter.contactEmail}
                  </a>
                </div>

                <div className="pt-2">
                  <Link href={`/portal/chapters/${chapter.id}`}>
                    <Button variant="outline" className="w-full gap-2">
                      View Chapter <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* National footer CTA */}
        {isNationalRole() && (
          <Card>
            <CardContent className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-semibold">Need to add or edit chapters?</div>
                <div className="text-sm text-muted-foreground">
                  Use the management page to create, update, and organize chapters.
                </div>
              </div>
              <Link href="/portal/chapters/manage">
                <Button variant="default" className="gap-2">
                  <Settings className="w-4 h-4" />
                  Go to Manage Chapters
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </PortalLayout>
  );
}
