"use client";

import { PortalLayout } from '@/components/portal/PortalLayout';
import { useDemo } from '@/contexts/DemoContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { chapters } from '@/data/mockData';
import { Search, Plus, Download, Mail, Phone, Eye, EyeOff } from 'lucide-react';

// Mock member data
const mockMembers = [
  { id: '1', name: 'Dr. Emmanuel Obi', email: 'emmanuel.obi@email.com', phone: '(713) 555-0101', chapter: 'houston', role: 'ChapterPresident', status: 'Active', joined: '2020-03-15', showPhone: true, showEmail: true },
  { id: '2', name: 'Mrs. Adaeze Nwosu', email: 'adaeze.nwosu@email.com', phone: '(713) 555-0102', chapter: 'houston', role: 'ChapterSecretary', status: 'Active', joined: '2019-08-22', showPhone: false, showEmail: true },
  { id: '3', name: 'Mr. Chukwudi Eze', email: 'chukwudi.eze@email.com', phone: '(713) 555-0103', chapter: 'houston', role: 'ChapterTreasurer', status: 'Active', joined: '2021-01-10', showPhone: true, showEmail: false },
  { id: '4', name: 'Chief Obiora Anene', email: 'obiora.anene@email.com', phone: '(404) 555-0201', chapter: 'atlanta', role: 'ChapterPresident', status: 'Active', joined: '2018-05-20', showPhone: true, showEmail: true },
  { id: '5', name: 'Mrs. Ngozi Okoli', email: 'ngozi.okoli@email.com', phone: '(404) 555-0202', chapter: 'atlanta', role: 'ChapterSecretary', status: 'Active', joined: '2019-11-08', showPhone: true, showEmail: true },
  { id: '6', name: 'Mr. Ikenna Udeh', email: 'ikenna.udeh@email.com', phone: '(404) 555-0203', chapter: 'atlanta', role: 'Member', status: 'Expired', joined: '2022-02-14', showPhone: false, showEmail: false },
  { id: '7', name: 'Dr. Nnamdi Okafor', email: 'nnamdi.okafor@email.com', phone: '(202) 555-0301', chapter: 'dmv', role: 'ChapterPresident', status: 'Active', joined: '2017-09-05', showPhone: true, showEmail: true },
  { id: '8', name: 'Chief Uche Ogbonna', email: 'uche.ogbonna@email.com', phone: '(201) 555-0401', chapter: 'newyork', role: 'ChapterPresident', status: 'Active', joined: '2016-04-12', showPhone: true, showEmail: true },
];

export default function MembersPage() {
  const { demoUser, isNationalRole } = useDemo();

  const filteredMembers = isNationalRole() 
    ? mockMembers 
    : mockMembers.filter(m => m.chapter === demoUser?.chapterId);

  const getChapterName = (chapterId: string) => {
    return chapters.find(c => c.id === chapterId)?.name || chapterId;
  };

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              {isNationalRole() ? 'All Members' : 'Chapter Members'}
            </h1>
            <p className="text-muted-foreground">
              {filteredMembers.length} members total
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            {isNationalRole() && (
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Member
              </Button>
            )}
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search members..." className="pl-10" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    {isNationalRole() && <TableHead>Chapter</TableHead>}
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-3 h-3" />
                            {member.showEmail ? (
                              <span>{member.email}</span>
                            ) : (
                              <span className="text-muted-foreground flex items-center gap-1">
                                <EyeOff className="w-3 h-3" /> Hidden
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-3 h-3" />
                            {member.showPhone ? (
                              <span>{member.phone}</span>
                            ) : (
                              <span className="text-muted-foreground flex items-center gap-1">
                                <EyeOff className="w-3 h-3" /> Hidden
                              </span>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      {isNationalRole() && (
                        <TableCell>{getChapterName(member.chapter)}</TableCell>
                      )}
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {member.role.replace('Chapter', '')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={member.status === 'Active' ? 'default' : 'destructive'}>
                          {member.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{member.joined}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
}
