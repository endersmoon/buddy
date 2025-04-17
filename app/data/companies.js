export const companiesData = {
  new: [
    {
      id: 1,
      companyName: "Reliance Industries",
      industry: "Conglomerate",
      contactName: "Priya Sharma",
      department: "HR Manager",
      // Quick view fields
      quickStats: {
        budget: "₹ 50 Cr",
        decisionMaker: "Priya Sharma",
        timeline: "Q2 2024",
        painPoints: ["Talent Acquisition", "Employee Retention"],
        companySize: "250,000+ employees"
      },
      // Detailed information
      details: {
        companyInfo: {
          founded: 1966,
          headquarters: "Mumbai, Maharashtra",
          revenue: "₹ 8.3 Lakh Cr",
          employeeCount: "250,000+",
          website: "www.ril.com"
        },
        decisionMakers: [
          {
            name: "Priya Sharma",
            role: "HR Manager",
            department: "Human Resources",
            contact: "+91 98765 43210",
            email: "priya.sharma@ril.com",
            influence: "High"
          },
          {
            name: "Rajesh Kumar",
            role: "CFO",
            department: "Finance",
            contact: "+91 98765 43211",
            email: "rajesh.kumar@ril.com",
            influence: "Very High"
          }
        ],
        budget: {
          annual: "₹ 50 Cr",
          quarterly: "₹ 12.5 Cr",
          lastYearSpend: "₹ 45 Cr",
          growth: "11%"
        },
        painPoints: [
          "Talent Acquisition in Tech Sector",
          "Employee Retention",
          "Training & Development",
          "Performance Management"
        ],
        timeline: {
          decision: "Q2 2024",
          implementation: "Q3 2024",
          review: "Q4 2024"
        },
        competitors: [
          "Tata Group",
          "Adani Group",
          "JSW Group"
        ],
        previousInteractions: [
          {
            date: "2024-01-15",
            type: "Meeting",
            attendees: ["Priya Sharma", "Rajesh Kumar"],
            outcome: "Initial requirements discussed",
            nextSteps: "Proposal submission by Feb 1"
          },
          {
            date: "2024-01-30",
            type: "Call",
            attendees: ["Priya Sharma"],
            outcome: "Clarified budget constraints",
            nextSteps: "Schedule demo"
          }
        ],
        requirements: [
          "Cloud-based HRMS",
          "AI-powered recruitment",
          "Employee engagement tools",
          "Analytics dashboard"
        ],
        stakeholders: [
          {
            name: "HR Team",
            influence: "Medium",
            concerns: "User-friendliness, Training"
          },
          {
            name: "IT Team",
            influence: "High",
            concerns: "Integration, Security"
          },
          {
            name: "Finance Team",
            influence: "High",
            concerns: "ROI, Cost-effectiveness"
          }
        ]
      },
      stats: [],
      showCallButton: true
    },
    // ... Add other companies with similar structure
  ],
  existing: [
    // ... Add existing companies
  ],
  renewal: [
    // ... Add renewal companies
  ]
}; 