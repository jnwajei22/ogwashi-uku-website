"use client";

import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { chapters } from '@/data/mockData';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Calendar,
  Download,
  CreditCard,
  Gift,
  Ticket
} from 'lucide-react';

// Mock financial data
const revenueBySource = [
  { source: 'Membership Dues', amount: 24500, percentage: 54 },
  { source: 'Donations', amount: 12300, percentage: 27 },
  { source: 'Event Tickets', amount: 6430, percentage: 14 },
  { source: 'Other', amount: 2000, percentage: 5 },
];

const chapterBreakdown = chapters.map((chapter, idx) => ({
  chapter: chapter.name,
  dues: 4500 + (idx * 1200),
  donations: 2000 + (idx * 800),
  events: 1200 + (idx * 400),
  total: 7700 + (idx * 2400),
}));

const recentTransactions = [
  { id: '1', date: '2024-03-15', type: 'Membership', description: 'Individual Annual - John Okonkwo', amount: 100, status: 'Completed' },
  { id: '2', date: '2024-03-14', type: 'Donation', description: 'Scholarship Fund Contribution', amount: 500, status: 'Completed' },
  { id: '3', date: '2024-03-14', type: 'Event', description: 'Annual Gala Ticket x2', amount: 300, status: 'Completed' },
  { id: '4', date: '2024-03-13', type: 'Membership', description: 'Family Annual - Eze Family', amount: 150, status: 'Completed' },
  { id: '5', date: '2024-03-12', type: 'Donation', description: 'General Fund', amount: 250, status: 'Pending' },
];

export default function FinancePage() {
  const totalRevenue = revenueBySource.reduce((acc, item) => acc + item.amount, 0);

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Finance Overview
            </h1>
            <p className="text-muted-foreground">
              Revenue tracking and financial reports
            </p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">YTD Revenue</p>
                  <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Membership Dues</p>
                  <p className="text-2xl font-bold">$24,500</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Gift className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Donations</p>
                  <p className="text-2xl font-bold">$12,300</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Ticket className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Event Revenue</p>
                  <p className="text-2xl font-bold">$6,430</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Revenue by Source */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Revenue by Source
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {revenueBySource.map((item) => (
                  <div key={item.source}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.source}</span>
                      <span className="font-medium">${item.amount.toLocaleString()} ({item.percentage}%)</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chapter Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Revenue by Chapter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Chapter</TableHead>
                      <TableHead className="text-right">Dues</TableHead>
                      <TableHead className="text-right">Donations</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chapterBreakdown.map((row) => (
                      <TableRow key={row.chapter}>
                        <TableCell className="font-medium">{row.chapter}</TableCell>
                        <TableCell className="text-right">${row.dues.toLocaleString()}</TableCell>
                        <TableCell className="text-right">${row.donations.toLocaleString()}</TableCell>
                        <TableCell className="text-right font-medium">${row.total.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{tx.type}</Badge>
                      </TableCell>
                      <TableCell>{tx.description}</TableCell>
                      <TableCell className="text-right font-medium">${tx.amount}</TableCell>
                      <TableCell>
                        <Badge variant={tx.status === 'Completed' ? 'default' : 'secondary'}>
                          {tx.status}
                        </Badge>
                      </TableCell>
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
