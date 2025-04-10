'use client';

import { useState } from 'react';
import { tasks, taskTypes, priorities } from '../data/tasks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, Wallet, Phone, Clock, FileText } from 'lucide-react';
import Link from 'next/link';

export default function TasksPage() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredTasks = tasks.filter(task => 
    filter === 'all' ? true : task.type === filter
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'priority') {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return 0;
  });

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

  return (
    <div className="min-h-screen  ">
      <div className="max-w-2xl mx-auto ">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Tasks</h1>
          <div className="flex gap-1">
            <Button
              variant={sortBy === 'date' ? 'default' : 'outline'}
              size="sm"
              className="h-7 px-2"
              onClick={() => setSortBy('date')}
            >
              Date
            </Button>
            <Button
              variant={sortBy === 'priority' ? 'default' : 'outline'}
              size="sm"
              className="h-7 px-2"
              onClick={() => setSortBy('priority')}
            >
              Priority
            </Button>
          </div>
        </div>

        {/* Task Type Filters */}
        <div className="flex flex-wrap gap-1 mb-12">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            className="h-7 px-2"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          {Object.entries(taskTypes).map(([key, label]) => (
            <Button
              key={key}
              variant={filter === key ? 'default' : 'outline'}
              size="sm"
              className="h-7 px-2"
              onClick={() => setFilter(key)}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Tasks List */}
        <Accordion type="single" collapsible className="space-y-4 ">
          {sortedTasks.map((task) => (
            <AccordionItem key={task.id} value={task.id} className="border-0">
              <Card className=" shadow-none ">
                <AccordionTrigger className="px-3 py-1 hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <div className="text-lg flex items-center justify-center p-3 rounded-full bg-gray-100">{getTaskTypeIcon(task.type)}</div>
                      <div>
                        <CardTitle className="text-sm font-medium">{task.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1 text-xs">
                          <span>{task.date}</span>
                          <span>•</span>
                          <span>{task.time}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={getPriorityVariant(task.priority)} className="text-xs">
                      {priorities[task.priority]}
                    </Badge>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <CardContent className="p-3 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Left Column */}
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Description</p>
                          <p className="text-xs">{task.description}</p>
                        </div>
                        
                        {task.location && (
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Location</p>
                            <p className="text-xs">{task.location}</p>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Client Details</p>
                          <div className="space-y-0.5">
                            <p className="text-sm font-medium">{task.client.name}</p>
                            <p className="text-xs text-muted-foreground">{task.client.contact}</p>
                            <p className="text-xs text-muted-foreground">{task.client.phone}</p>
                          </div>
                        </div>

                        {task.amount && (
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Amount</p>
                            <p className="text-lg font-semibold">₹{task.amount.toLocaleString()}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Task Actions */}
                    <div className="mt-4 flex justify-end gap-2">
                      <Button 
                        variant="outline"
                        size="sm"
                        className="h-7 px-2 text-xs"
                      >
                        Mark Complete
                      </Button>
                      <Link href={`/tasks/${task.id}`}>
                        <Button 
                          size="sm"
                          className="h-7 px-2 text-xs"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}