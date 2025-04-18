import { CalendarDays, Target, BarChart3, TrendingUp, Users, Clock } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";

export default function SalesAgentDashboard() {
  // Sample data - in a real app, this would come from an API or database
  const upcomingMeetings = [
    { id: 1, client: "Reliance Industries", contact: "Rajesh Sharma", time: "10:00 AM", date: "2023-06-12", location: "Mumbai" },
    { id: 2, client: "Tata Consultancy Services", contact: "Priya Patel", time: "2:30 PM", date: "2023-06-12", location: "Bengaluru" },
    { id: 3, client: "Infosys", contact: "Vikram Reddy", time: "9:15 AM", date: "2023-06-13", location: "Hyderabad" },
  ];
  
  const targets = {
    monthly: { current: 8500000, target: 12000000 },
    quarterly: { current: 24500000, target: 36000000 },
    deals: { closed: 12, target: 20 }
  };

  // Format numbers in lakhs and crores (Indian number format)
  const formatIndianNumber = (num) => {
    if (num >= 10000000) {
      return `₹${(num / 10000000).toFixed(1)} Cr`;
    } else if (num >= 100000) {
      return `₹${(num / 100000).toFixed(1)} L`;
    } else {
      return `₹${num.toLocaleString('en-IN')}`;
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Top Cards for KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex flex-col items-center">
            <Target className="h-8 w-8 mb-2 text-blue-500" />
            <p className="text-sm font-medium">Monthly</p>
            <p className="text-xl font-bold">{formatIndianNumber(targets.monthly.current)}</p>
            <p className="text-xs text-muted-foreground">
              of {formatIndianNumber(targets.monthly.target)} target
            </p>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex flex-col items-center">
            <BarChart3 className="h-8 w-8 mb-2 text-green-500" />
            <p className="text-sm font-medium">Quarterly</p>
            <p className="text-xl font-bold">{formatIndianNumber(targets.quarterly.current)}</p>
            <p className="text-xs text-muted-foreground">
              of {formatIndianNumber(targets.quarterly.target)} target
            </p>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex flex-col items-center">
            <TrendingUp className="h-8 w-8 mb-2 text-purple-500" />
            <p className="text-sm font-medium">Deals Closed</p>
            <p className="text-xl font-bold">{targets.deals.closed}</p>
            <p className="text-xs text-muted-foreground">
              of {targets.deals.target} target
            </p>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex flex-col items-center">
            <Users className="h-8 w-8 mb-2 text-orange-500" />
            <p className="text-sm font-medium">New Leads</p>
            <p className="text-xl font-bold">24</p>
            <p className="text-xs text-muted-foreground">
              +6 this week
            </p>
          </div>
        </Card>
      </div>
      
      {/* Upcoming Meetings */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CalendarDays className="mr-2 h-5 w-5" />
            Upcoming Meetings
          </CardTitle>
          <CardDescription>Your schedule for the next days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingMeetings.map((meeting) => (
              <div key={meeting.id} className="flex items-start justify-between border-b pb-4">
                <div>
                  <h3 className="font-medium">{meeting.client}</h3>
                  <p className="text-sm text-muted-foreground">{meeting.contact}</p>
                  <p className="text-xs text-muted-foreground">{meeting.location}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">{meeting.time}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{new Date(meeting.date).toLocaleDateString('en-IN')}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <button className="text-sm text-blue-500 hover:underline">View all meetings</button>
        </CardFooter>
      </Card>
      
      {/* Sales Pipeline */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="mr-2 h-5 w-5" />
            Sales Pipeline
          </CardTitle>
          <CardDescription>Your active deals by stage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Discovery</span>
                <span className="font-medium">8 deals</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: "20%" }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Proposal</span>
                <span className="font-medium">12 deals</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Negotiation</span>
                <span className="font-medium">15 deals</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: "37.5%" }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Closing</span>
                <span className="font-medium">5 deals</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: "12.5%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest sales activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="min-w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                ✓
              </div>
              <div>
                <p className="font-medium">Deal closed with Reliance Industries</p>
                <p className="text-sm text-muted-foreground">₹45 Lakhs - 2 hours ago</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="min-w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                📞
              </div>
              <div>
                <p className="font-medium">Call with Ananya from Infosys</p>
                <p className="text-sm text-muted-foreground">15 minutes - 4 hours ago</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="min-w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                📝
              </div>
              <div>
                <p className="font-medium">Proposal sent to Tata Consultancy Services</p>
                <p className="text-sm text-muted-foreground">Yesterday at 4:30 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <button className="text-sm text-blue-500 hover:underline">View all activity</button>
        </CardFooter>
      </Card>
    </div>
  );
}
