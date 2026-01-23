"use client";
import { useState } from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { donationFunds } from '@/data/mockData';
import { Heart, DollarSign, CreditCard, CheckCircle, Repeat } from 'lucide-react';

const presetAmounts = [25, 50, 100, 250, 500, 1000];

export default function DonatePage() {
  const [selectedFund, setSelectedFund] = useState(donationFunds[0].id);
  const [donationType, setDonationType] = useState<'one-time' | 'recurring'>('one-time');
  const [amount, setAmount] = useState<number | ''>('');
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount(value ? parseFloat(value) : '');
  };

  const finalAmount = amount || 0;

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Make a Donation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Your generosity helps us preserve our cultural heritage, support development in Ogwashi-Uku, and empower the next generation through scholarships and programs.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Donation Type */}
              <Card>
                <CardHeader>
                  <CardTitle>Donation Type</CardTitle>
                  <CardDescription>Choose how you'd like to give</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        donationType === 'one-time'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <DollarSign className={`w-6 h-6 mb-2 ${donationType === 'one-time' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <div className="font-medium text-foreground">One-Time</div>
                      <div className="text-sm text-muted-foreground">Make a single donation</div>
                    </button>
                    <button
                      onClick={() => setDonationType('recurring')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        donationType === 'recurring'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Repeat className={`w-6 h-6 mb-2 ${donationType === 'recurring' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <div className="font-medium text-foreground">Monthly</div>
                      <div className="text-sm text-muted-foreground">Give every month</div>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Fund Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select a Fund</CardTitle>
                  <CardDescription>Choose where your donation will have the most impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedFund} onValueChange={setSelectedFund} className="space-y-3">
                    {donationFunds.map((fund) => (
                      <label
                        key={fund.id}
                        className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedFund === fund.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <RadioGroupItem value={fund.id} className="mt-1" />
                        <div>
                          <div className="font-medium text-foreground">{fund.name}</div>
                          <div className="text-sm text-muted-foreground">{fund.description}</div>
                        </div>
                      </label>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Amount Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Donation Amount</CardTitle>
                  <CardDescription>Select or enter your donation amount</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset}
                        onClick={() => handleAmountClick(preset)}
                        className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                          amount === preset && !customAmount
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:border-primary text-foreground'
                        }`}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="pl-10 h-12 text-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Donor Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Information</CardTitle>
                  <CardDescription>We'll send you a receipt for your tax-deductible donation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
                  <CardTitle className="text-primary-foreground">Donation Summary</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Fund</span>
                    <span className="font-medium text-foreground">
                      {donationFunds.find(f => f.id === selectedFund)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium text-foreground capitalize">
                      {donationType === 'recurring' ? 'Monthly' : 'One-Time'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="text-2xl font-bold text-primary">
                      ${finalAmount.toLocaleString()}
                      {donationType === 'recurring' && <span className="text-sm font-normal">/mo</span>}
                    </span>
                  </div>

                  <Button variant="gold" size="lg" className="w-full gap-2" disabled={!finalAmount}>
                    <CreditCard className="w-4 h-4" />
                    Complete Donation
                  </Button>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Secure, encrypted payment
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    Ogwashi-Uku USA Association is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent allowed by law.
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
