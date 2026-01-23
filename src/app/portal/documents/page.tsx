"use client";

import { PortalLayout } from '@/components/portal/PortalLayout';
import { useDemo } from '@/contexts/DemoContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Folder, 
  FileText, 
  Download, 
  Upload, 
  Calendar,
  User,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { chapters } from '@/data/mockData';

// Mock documents
const mockDocuments = [
  { id: '1', title: 'Chapter Constitution', category: 'Constitution/Bylaws', fileUrl: '#', uploadedBy: 'Dr. Emmanuel Obi', createdAt: '2023-01-15', tags: ['official', 'governance'] },
  { id: '2', title: 'Meeting Minutes - January 2024', category: 'Minutes', fileUrl: '#', uploadedBy: 'Mrs. Adaeze Nwosu', createdAt: '2024-01-08', tags: ['minutes', 'meeting'] },
  { id: '3', title: 'Meeting Minutes - December 2023', category: 'Minutes', fileUrl: '#', uploadedBy: 'Mrs. Adaeze Nwosu', createdAt: '2023-12-10', tags: ['minutes', 'meeting'] },
  { id: '4', title: 'Q4 2023 Financial Report', category: 'Financials', fileUrl: '#', uploadedBy: 'Mr. Chukwudi Eze', createdAt: '2024-01-20', tags: ['finance', 'quarterly'] },
  { id: '5', title: 'Annual Fundraising Flyer', category: 'Flyers', fileUrl: '#', uploadedBy: 'Mrs. Adaeze Nwosu', createdAt: '2024-02-01', tags: ['event', 'marketing'] },
  { id: '6', title: 'New Member Welcome Letter Template', category: 'Templates', fileUrl: '#', uploadedBy: 'Dr. Emmanuel Obi', createdAt: '2023-06-15', tags: ['template', 'onboarding'] },
];

const categories = [
  { name: 'All Documents', icon: Folder, count: mockDocuments.length },
  { name: 'Minutes', icon: FileText, count: 2 },
  { name: 'Financials', icon: FileText, count: 1 },
  { name: 'Constitution/Bylaws', icon: FileText, count: 1 },
  { name: 'Flyers', icon: FileText, count: 1 },
  { name: 'Templates', icon: FileText, count: 1 },
];

export default function DocumentsPage() {
  const { demoUser } = useDemo();
  const userChapter = chapters.find(c => c.id === demoUser?.chapterId);

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Documents Library
            </h1>
            <p className="text-muted-foreground">
              {userChapter?.name} chapter documents and resources
            </p>
          </div>
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            Upload Document
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Categories */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.name}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm hover:bg-muted transition-colors text-left"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      {cat.name}
                    </span>
                    <Badge variant="secondary" className="text-xs">{cat.count}</Badge>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          {/* Documents List */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search documents..." className="pl-10" />
            </div>

            <div className="space-y-3">
              {mockDocuments.map((doc) => (
                <Card key={doc.id} className="card-hover">
                  <CardContent className="py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{doc.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Folder className="w-3 h-3" />
                              {doc.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {doc.uploadedBy}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {doc.createdAt}
                            </span>
                          </div>
                          <div className="flex gap-1 mt-2">
                            {doc.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
