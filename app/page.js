'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample data for tasks
const tasks = [
  { id: 1, title: 'Follow up with client A', priority: 'high' },
  { id: 2, title: 'Prepare sales report', priority: 'medium' },
  { id: 3, title: 'Schedule team meeting', priority: 'low' },
  { id: 4, title: 'Review new leads', priority: 'high' },
  { id: 5, title: 'Update CRM', priority: 'medium' },
];

// Sample performance data
const performanceData = [
  { name: 'Jan', sales: 4000, target: 5000 },
  { name: 'Feb', sales: 3000, target: 5000 },
  { name: 'Mar', sales: 5000, target: 5000 },
  { name: 'Apr', sales: 4500, target: 5000 },
  { name: 'May', sales: 6000, target: 5000 },
  { name: 'Jun', sales: 5500, target: 5000 },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome to Your Dashboard</h1>
        <p className="text-muted-foreground">Stay on top of your tasks and performance</p>
      </div>

      {/* Today's Tasks Carousel */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <Slider {...settings}>
            {tasks.map((task) => (
              <div key={task.id} className="px-2">
                <Card className={`${
                  task.priority === 'high' ? 'border-red-200' :
                  task.priority === 'medium' ? 'border-yellow-200' :
                  'border-green-200'
                }`}>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{task.title}</h3>
                    <Badge 
                      variant={task.priority === 'high' ? 'destructive' : 
                              task.priority === 'medium' ? 'warning' : 
                              'success'}
                      className="mt-2"
                    >
                      {task.priority} priority
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </CardContent>
      </Card>

      {/* Performance Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle>My Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={performanceData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-muted-foreground" />
                <YAxis className="text-muted-foreground" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="hsl(var(--primary))" name="Actual Sales" />
                <Bar dataKey="target" fill="hsl(var(--muted))" name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground">Current Month Sales</h3>
                <p className="text-2xl font-bold">$5,500</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground">Target Achievement</h3>
                <p className="text-2xl font-bold">110%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground">Year-to-Date</h3>
                <p className="text-2xl font-bold">$28,500</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
