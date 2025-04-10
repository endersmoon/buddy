'use client';

import { useParams } from 'next/navigation';
import { tasks } from '../../data/tasks';
import { clients } from '../../data/clients';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Wallet, Phone, Clock, FileText, MapPin, User, Mail, PhoneCall, IndianRupee, Building2, TrendingUp, Users, Briefcase, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ClientDetailsPage() {
  const params = useParams();
  const clientId = params.id;
  
  // Find client details
  const client = clients.find(c => c.id === clientId);
  
  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg">Client not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Find all tasks for this client
  const clientTasks = tasks.filter(task => task.client.name.toLowerCase().replace(/\s+/g, '-') === clientId);

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
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{client.name}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{client.contact}</span>
                <span>•</span>
                <span>{client.phone}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" size="sm">
              <PhoneCall className="w-4 h-4 mr-2" />
              Call
            </Button>
          </div>
        </div>

        {/* Sales History */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              Sales History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {client.salesHistory.map((sale, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{sale.description}</p>
                    <p className="text-sm text-muted-foreground">{sale.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    <span className="font-semibold">{sale.amount.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hiring Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Hiring Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Monthly Hires Chart */}
              <div>
                <h3 className="font-medium mb-2">Monthly Hires</h3>
                <div className="flex gap-4">
                  {client.hiringTrends.monthlyHires.map((month, index) => (
                    <div key={index} className="flex-1">
                      <div className="h-32 bg-gray-100 rounded-t-lg flex items-end">
                        <div 
                          className="w-full bg-indigo-500 rounded-t-lg transition-all"
                          style={{ height: `${(month.hires / 20) * 100}%` }}
                        />
                      </div>
                      <p className="text-center text-sm mt-2">{month.month}</p>
                      <p className="text-center font-medium">{month.hires}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Distribution */}
              <div>
                <h3 className="font-medium mb-2">Department Distribution</h3>
                <div className="space-y-2">
                  {client.hiringTrends.departments.map((dept, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-32">{dept.name}</div>
                      <div className="flex-1 h-4 bg-gray-100 rounded-full">
                        <div 
                          className="h-full bg-indigo-500 rounded-full"
                          style={{ width: `${dept.percentage}%` }}
                        />
                      </div>
                      <div className="w-12 text-right">{dept.percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insights */}
              <div>
                <h3 className="font-medium mb-2">Key Insights</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {client.hiringTrends.insights.map((insight, index) => (
                    <li key={index}>{insight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="w-5 h-5" />
              Company Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* CEO */}
              <div>
                <h3 className="font-medium mb-2">Leadership</h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium">{client.companyStructure.ceo.name}</p>
                  <p className="text-sm text-muted-foreground">{client.companyStructure.ceo.role}</p>
                  <p className="text-sm text-muted-foreground">{client.companyStructure.ceo.email}</p>
                </div>
              </div>

              {/* Departments */}
              <div>
                <h3 className="font-medium mb-2">Departments</h3>
                <div className="space-y-4">
                  {client.companyStructure.departments.map((dept, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium">{dept.name}</p>
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground">{dept.head.name} - {dept.head.role}</p>
                        <p className="text-sm text-muted-foreground">{dept.head.email}</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-medium">Teams:</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {dept.teams.map((team, teamIndex) => (
                            <Badge key={teamIndex} variant="outline">{team}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Postings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Job Postings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {client.jobPostings.map((job, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{job.title}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.platform}</span>
                      </div>
                    </div>
                    <Badge variant={job.status === 'Active' ? 'default' : 'secondary'}>
                      {job.status}
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Posted: {job.postedDate}</span>
                    <Link href={job.url} target="_blank" className="text-indigo-600 hover:underline">
                      <LinkIcon className="w-4 h-4 inline mr-1" />
                      View Posting
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tasks Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Tasks</h2>
          <div className="space-y-4">
            {clientTasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-gray-100">
                        {getTaskTypeIcon(task.type)}
                      </div>
                      <div>
                        <Link href={`/tasks/${task.id}`} className="font-medium hover:underline">
                          {task.title}
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{task.date}</span>
                          <span>•</span>
                          <span>{task.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getPriorityVariant(task.priority)}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </Badge>
                      <Link href={`/tasks/${task.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 