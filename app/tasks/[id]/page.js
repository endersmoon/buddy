'use client';

import { useParams } from 'next/navigation';
import { tasks } from '../../data/tasks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Wallet, Phone, Clock, FileText, MapPin, User, Mail, PhoneCall, IndianRupee } from 'lucide-react';
import Link from 'next/link';

export default function TaskDetailsPage() {
  const params = useParams();
  const taskId = parseInt(params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg">Task not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getTaskTypeIcon = (type) => {
    switch (type) {
      case 'meeting':
        return <Calendar className="w-5 h-5" />;
      case 'payment':
        return <Wallet className="w-5 h-5" />;
      case 'callback':
        return <Phone className="w-5 h-5" />;
      case 'scheduled':
        return <Clock className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getPriorityVariant = (priority) => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-gray-100">
              {getTaskTypeIcon(task.type)}
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{task.title}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{task.date}</span>
                <span>•</span>
                <span>{task.time}</span>
              </div>
            </div>
          </div>
          <Badge variant={getPriorityVariant(task.priority)}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </Badge>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Task Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Description</p>
                  <p>{task.description}</p>
                </div>
                
                {task.location && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <p>{task.location}</p>
                    </div>
                  </div>
                )}

                {task.amount && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Amount</p>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4" />
                      <p className="text-xl font-semibold">₹{task.amount.toLocaleString()}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Client Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Company Name</p>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <Link 
                      href={`/clients/${task.client.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:underline"
                    >
                      {task.client.name}
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Contact Person</p>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <p>{task.client.contact}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" />
                    <p>{task.client.phone}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <p>{task.client.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Mark Complete</Button>
          <Button>Edit Task</Button>
        </div>
      </div>
    </div>
  );
} 