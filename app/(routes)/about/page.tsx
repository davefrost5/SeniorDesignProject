"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We strive to create innovative solutions that make a difference in people's lives.
                Our commitment to excellence drives everything we do.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary" />
                    <span>Innovation at our core</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary" />
                    <span>Customer-first approach</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary" />
                    <span>Sustainable practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our diverse team brings together expertise from various fields to deliver
                  exceptional results.
                </p>
                <Button variant="outline">
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}