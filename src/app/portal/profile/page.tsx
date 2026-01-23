"use client";

import { PortalLayout } from '@/components/portal/PortalLayout';
import { useDemo } from '@/contexts/DemoContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { chapters } from '@/data/mockData';
import { User, Mail, Phone, Building2, Shield, Save } from 'lucide-react';

export default function ProfilePage() {
  const { demoUser } = useDemo();
  const userChapter = chapters.find(c => c.id === demoUser?.chapterId);

  return (
    <PortalLayout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            My Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your personal information and privacy settings
          </p>
        </div>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </CardTitle>
            <CardDescription>Update your contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Demo" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="User" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={demoUser?.email} />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue="123 Main Street, Houston, TX 77001" />
            </div>
          </CardContent>
        </Card>

        {/* Membership Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Membership Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Chapter</Label>
                <p className="text-sm text-muted-foreground mt-1">{userChapter?.name}</p>
              </div>
              <div>
                <Label>Membership Type</Label>
                <p className="text-sm text-muted-foreground mt-1">Individual Annual</p>
              </div>
              <div>
                <Label>Member Since</Label>
                <p className="text-sm text-muted-foreground mt-1">March 15, 2020</p>
              </div>
              <div>
                <Label>Expiration Date</Label>
                <p className="text-sm text-muted-foreground mt-1">December 31, 2024</p>
              </div>
            </div>
            <Button variant="outline">Renew Membership</Button>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Privacy Settings
            </CardTitle>
            <CardDescription>Control what information is visible to other members</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="showEmail" className="font-medium">Show email in directory</Label>
                <p className="text-sm text-muted-foreground">Allow other members to see your email</p>
              </div>
              <Switch id="showEmail" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="showPhone" className="font-medium">Show phone in directory</Label>
                <p className="text-sm text-muted-foreground">Allow other members to see your phone number</p>
              </div>
              <Switch id="showPhone" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emailNotifications" className="font-medium">Email notifications</Label>
                <p className="text-sm text-muted-foreground">Receive updates about events and announcements</p>
              </div>
              <Switch id="emailNotifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </PortalLayout>
  );
}
