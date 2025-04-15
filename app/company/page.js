"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { Progress } from "@/components/ui/progress.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { 
  Building2, 
  Users, 
  Globe, 
  Calendar, 
  Link, 
  Share2, 
  Building, 
  TrendingUp, 
  Newspaper, 
  DollarSign, 
  Target, 
  Briefcase, 
  Clock, 
  UserCircle, 
  BarChart3, 
  Settings, 
  RefreshCw 
} from "lucide-react";

export default function CompanyProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/company-logo.png" alt="Company Logo" />
              <AvatarFallback>CO</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Company Name</h1>
              <p className="text-sm text-gray-500">Last updated: 2 hours ago</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="basic" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Basic
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Business
            </TabsTrigger>
            <TabsTrigger value="recruitment" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Recruitment
            </TabsTrigger>
            <TabsTrigger value="decision-makers" className="flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              Decision Makers
            </TabsTrigger>
            <TabsTrigger value="solutions" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Solutions
            </TabsTrigger>
            <TabsTrigger value="sales" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Sales
            </TabsTrigger>
          </TabsList>

          {/* Basic Information Section */}
          <TabsContent value="basic">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Company Name</p>
                        <p className="font-medium">Acme Corporation</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Industry</p>
                        <p className="font-medium">Technology</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Company Size</p>
                        <p className="font-medium">500-1000 employees</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Headquarters</p>
                        <p className="font-medium">San Francisco, CA</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Founded</p>
                        <p className="font-medium">2010</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Website</p>
                        <a href="#" className="font-medium text-blue-600 hover:underline">www.acme.com</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Business Intelligence Section */}
          <TabsContent value="business">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Business Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="revenue" className="w-full">
                    <TabsList>
                      <TabsTrigger value="revenue">Revenue</TabsTrigger>
                      <TabsTrigger value="growth">Growth</TabsTrigger>
                      <TabsTrigger value="news">News</TabsTrigger>
                    </TabsList>
                    <TabsContent value="revenue" className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Annual Revenue</p>
                          <p className="font-medium">$100M - $500M</p>
                        </div>
                      </div>
                      <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Revenue Chart Placeholder</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="growth" className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Growth Trajectory</p>
                          <p className="font-medium">15% YoY</p>
                        </div>
                      </div>
                      <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Growth Chart Placeholder</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="news" className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Newspaper className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Recent News</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">• Company raised $50M in Series C funding</p>
                        <p className="text-sm">• Expanded to European market</p>
                        <p className="text-sm">• Launched new product line</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Recruitment Information Section */}
          <TabsContent value="recruitment">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recruitment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Team Size by Department</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Engineering</span>
                          <span>250</span>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Sales</span>
                          <span>150</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Marketing</span>
                          <span>75</span>
                        </div>
                        <Progress value={30} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Hiring Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500">Time to Fill</p>
                        <p className="font-medium">45 days</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500">Hiring Budget</p>
                        <p className="font-medium">$2M</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Key Decision Makers Section */}
          <TabsContent value="decision-makers">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Decision Makers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatar-1.png" alt="John Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-500">Chief Technology Officer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatar-2.png" alt="Jane Smith" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jane Smith</p>
                        <p className="text-sm text-gray-500">Head of Talent Acquisition</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Organizational Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Current Solutions Section */}
          <TabsContent value="solutions">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Solutions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">ATS System</p>
                        <p className="text-sm text-gray-500">Greenhouse</p>
                      </div>
                      <Badge variant="outline">Renewal: 2024-12-31</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">HRIS System</p>
                        <p className="text-sm text-gray-500">Workday</p>
                      </div>
                      <Badge variant="outline">Renewal: 2025-06-30</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Satisfaction Ratings</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>ATS System</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>HRIS System</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sales Activity Section */}
          <TabsContent value="sales">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sales Stage</p>
                        <p className="text-sm text-gray-500">Proposal</p>
                      </div>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Relationship Strength</p>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Recent Interactions</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                        <div>
                          <p className="font-medium">Product Demo</p>
                          <p className="text-sm text-gray-500">2024-04-10</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                        <div>
                          <p className="font-medium">Initial Meeting</p>
                          <p className="text-sm text-gray-500">2024-04-05</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
