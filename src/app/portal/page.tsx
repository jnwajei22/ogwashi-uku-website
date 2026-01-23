"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { membershipTypes } from "@/data/mockData";
import { useDemo } from "@/contexts/DemoContext";
import { Lock, CheckCircle, Play } from "lucide-react";

export default function PortalPage() {
  const { isDemoMode, enterDemoMode } = useDemo();
  const router = useRouter();

  useEffect(() => {
    if (isDemoMode) {
      router.push("/portal/dashboard");
    }
  }, [isDemoMode, router]);

  const handleEnterDemo = () => {
    enterDemoMode();
    router.push("/portal/dashboard");
  };

  return (
    <SiteLayout>
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide mx-auto px-4 md:px-6 text-center">
          <Lock className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Member Portal
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Access your membership dashboard, chapter resources, and exclusive member benefits.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Login Form */}
            <Card className="max-w-md mx-auto w-full">
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Access your member account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>

                <Button variant="default" className="w-full">
                  Sign In
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  <Link href="#" className="text-primary hover:underline">
                    Forgot password?
                  </Link>
                </p>

                {/* Demo Mode Button */}
                <div className="border-t pt-4">
                  <Button
                    variant="outline"
                    className="w-full border-dashed border-amber-500 text-amber-700 hover:bg-amber-50"
                    onClick={handleEnterDemo}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Enter Demo Portal
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Preview all portal features without authentication
                  </p>
                </div>

                <div className="border-t pt-4 text-center">
                  <p className="text-sm text-muted-foreground">Not a member yet?</p>
                  <Button variant="outline" className="mt-2 w-full">
                    Create Account
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Membership Options */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Membership Options</h2>
              <div className="space-y-4">
                {membershipTypes.map((type) => (
                  <Card key={type.id} className="card-hover">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{type.name}</h3>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          ${type.price}
                          <span className="text-sm font-normal">/yr</span>
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {type.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
