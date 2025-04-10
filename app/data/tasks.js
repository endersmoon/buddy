export const tasks = [
  {
    id: 1,
    title: "Client Meeting - Tech Solutions Inc",
    type: "meeting",
    status: "pending",
    priority: "high",
    date: "2024-03-25",
    time: "14:00",
    location: "Tech Solutions Inc, Bangalore",
    description: "Initial meeting with Tech Solutions Inc to discuss Naukri.com enterprise package",
    client: {
      name: "Tech Solutions Inc",
      contact: "Rahul Sharma",
      phone: "+91 9876543210",
      email: "rahul@techsolutions.com"
    }
  },
  {
    id: 2,
    title: "Payment Collection - Global Finance Corp",
    type: "payment",
    status: "pending",
    priority: "medium",
    date: "2024-03-26",
    time: "11:00",
    location: "Global Finance Corp, Mumbai",
    description: "Collect quarterly subscription payment",
    amount: 100000,
    client: {
      name: "Global Finance Corp",
      contact: "Vikram Mehta",
      phone: "+91 8765432109",
      email: "vikram@globalfinance.com"
    }
  },
  {
    id: 3,
    title: "Follow-up Call - Healthcare Innovations",
    type: "callback",
    status: "pending",
    priority: "low",
    date: "2024-03-27",
    time: "15:30",
    description: "Follow up on previous meeting and discuss package upgrade",
    client: {
      name: "Healthcare Innovations",
      contact: "Dr. Priya Malhotra",
      phone: "+91 7654321098",
      email: "priya@healthcareinnovations.com"
    }
  },
  {
    id: 4,
    title: "Scheduled Demo - Retail Giants",
    type: "meeting",
    status: "pending",
    priority: "high",
    date: "2024-03-28",
    time: "10:00",
    location: "Retail Giants, Delhi",
    description: "Product demo and pricing discussion",
    client: {
      name: "Retail Giants",
      contact: "Amita Singh",
      phone: "+91 6543210987",
      email: "amita@retailgiants.com"
    }
  },
  {
    id: 5,
    title: "Quarterly Review - Tech Solutions Inc",
    type: "meeting",
    status: "pending",
    priority: "medium",
    date: "2024-03-29",
    time: "13:00",
    location: "Tech Solutions Inc, Bangalore",
    description: "Quarterly performance review and future roadmap discussion",
    client: {
      name: "Tech Solutions Inc",
      contact: "Rahul Sharma",
      phone: "+91 9876543210",
      email: "rahul@techsolutions.com"
    }
  },
  {
    id: 6,
    title: "Payment Collection - Healthcare Innovations",
    type: "payment",
    status: "pending",
    priority: "high",
    date: "2024-03-30",
    time: "14:30",
    location: "Healthcare Innovations, Hyderabad",
    description: "Collect monthly subscription payment",
    amount: 75000,
    client: {
      name: "Healthcare Innovations",
      contact: "Dr. Priya Malhotra",
      phone: "+91 7654321098",
      email: "priya@healthcareinnovations.com"
    }
  },
  {
    id: 7,
    title: "Follow-up Call - Global Finance Corp",
    type: "callback",
    status: "pending",
    priority: "medium",
    date: "2024-03-31",
    time: "16:00",
    description: "Discuss new compliance features",
    client: {
      name: "Global Finance Corp",
      contact: "Vikram Mehta",
      phone: "+91 8765432109",
      email: "vikram@globalfinance.com"
    }
  },
  {
    id: 8,
    title: "Scheduled Demo - Retail Giants",
    type: "meeting",
    status: "pending",
    priority: "high",
    date: "2024-04-01",
    time: "11:00",
    location: "Retail Giants, Mumbai",
    description: "E-commerce platform demo",
    client: {
      name: "Retail Giants",
      contact: "Amita Singh",
      phone: "+91 6543210987",
      email: "amita@retailgiants.com"
    }
  }
];

export const taskTypes = {
  meeting: "Meeting",
  payment: "Payment Collection",
  callback: "Callback",
  scheduled: "Scheduled Call"
};

export const priorities = {
  high: "High",
  medium: "Medium",
  low: "Low"
}; 