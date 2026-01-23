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
import { CreditCard, Download, Receipt, CheckCircle } from 'lucide-react';

// Mock payment history
const paymentHistory = [
  { id: '1', date: '2024-01-15', description: 'Annual Membership Renewal', amount: 100, status: 'Completed', type: 'Membership' },
  { id: '2', date: '2023-12-20', description: 'Annual Fundraising Gala - 2 tickets', amount: 300, status: 'Completed', type: 'Event' },
  { id: '3', date: '2023-11-10', description: 'Scholarship Fund Donation', amount: 200, status: 'Completed', type: 'Donation' },
  { id: '4', date: '2023-08-15', description: '2023 National Convention', amount: 75, status: 'Completed', type: 'Event' },
  { id: '5', date: '2023-01-20', description: 'Annual Membership Renewal', amount: 100, status: 'Completed', type: 'Membership' },
];

export default function PaymentsPage() {
  const totalPaid = paymentHistory.reduce((acc, p) => acc + p.amount, 0);

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            Payment History
          </h1>
          <p className="text-muted-foreground">
            View your transactions and download receipts
          </p>
        </div>

        {/* Summary Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Membership Status</p>
                  <p className="text-xl font-bold text-green-600">Active</p>
                  <p className="text-sm text-muted-foreground">Expires Dec 31, 2024</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm text-muted-foreground">Total Contributions</p>
                <p className="text-2xl font-bold">${totalPaid.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment History Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="text-muted-foreground">{payment.date}</TableCell>
                      <TableCell className="font-medium">{payment.description}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{payment.type}</Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium">${payment.amount}</TableCell>
                      <TableCell>
                        <Badge variant="default">{payment.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Receipt className="w-4 h-4 mr-2" />
                          Receipt
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Download All */}
        <div className="flex justify-end">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download All Receipts
          </Button>
        </div>
      </div>
    </PortalLayout>
  );
}
