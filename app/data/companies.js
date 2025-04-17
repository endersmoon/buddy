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
    {
      id: 2,
      companyName: "Tata Consultancy Services",
      industry: "IT Services",
      contactName: "Ananya Gupta",
      department: "HR Director",
      quickStats: {
        budget: "₹ 75 Cr",
        decisionMaker: "Ananya Gupta",
        timeline: "Q1 2024",
        painPoints: ["Digital Transformation", "Skill Gap"],
        companySize: "600,000+ employees"
      },
      details: {
        companyInfo: {
          founded: 1968,
          headquarters: "Mumbai, Maharashtra",
          revenue: "₹ 2.4 Lakh Cr",
          employeeCount: "600,000+",
          website: "www.tcs.com"
        },
        decisionMakers: [
          {
            name: "Ananya Gupta",
            role: "HR Director",
            department: "Human Resources",
            contact: "+91 98765 43212",
            email: "ananya.gupta@tcs.com",
            influence: "Very High"
          },
          {
            name: "Rajesh Gopinathan",
            role: "CEO",
            department: "Executive",
            contact: "+91 98765 43213",
            email: "rajesh.gopinathan@tcs.com",
            influence: "Very High"
          }
        ],
        budget: {
          annual: "₹ 75 Cr",
          quarterly: "₹ 18.75 Cr",
          lastYearSpend: "₹ 65 Cr",
          growth: "15%"
        },
        painPoints: [
          "Digital Transformation",
          "Skill Gap in Emerging Technologies",
          "Employee Upskilling",
          "Global Talent Management"
        ],
        timeline: {
          decision: "Q1 2024",
          implementation: "Q2 2024",
          review: "Q3 2024"
        },
        competitors: [
          "Infosys",
          "Wipro",
          "Accenture"
        ],
        previousInteractions: [
          {
            date: "2024-01-10",
            type: "Meeting",
            attendees: ["Ananya Gupta", "Rajesh Gopinathan"],
            outcome: "Strategic partnership discussed",
            nextSteps: "Technical evaluation by Feb 15"
          },
          {
            date: "2024-01-25",
            type: "Demo",
            attendees: ["Ananya Gupta", "IT Team"],
            outcome: "Product demonstration completed",
            nextSteps: "Pricing discussion"
          }
        ],
        requirements: [
          "Enterprise Learning Platform",
          "Skills Assessment Tools",
          "Career Path Planning",
          "Global Compliance Management"
        ],
        stakeholders: [
          {
            name: "HR Leadership",
            influence: "Very High",
            concerns: "Scalability, ROI"
          },
          {
            name: "IT Security",
            influence: "High",
            concerns: "Data Privacy, Compliance"
          },
          {
            name: "Business Units",
            influence: "Medium",
            concerns: "User Adoption, Training"
          }
        ]
      },
      stats: [
        { value: 'Plan Active', label: 'Status' },
        { value: '2 months ago', label: 'Last Purchase Date' },
        { value: '₹ 5 Lakh', label: 'Ticket Size' }
      ],
      showCallButton: true
    },
    {
      id: 3,
      companyName: "HDFC Bank",
      industry: "Banking & Financial Services",
      contactName: "Vikram Singh",
      department: "Operations Manager",
      quickStats: {
        budget: "₹ 45 Cr",
        decisionMaker: "Vikram Singh",
        timeline: "Q2 2024",
        painPoints: ["Process Automation", "Customer Experience"],
        companySize: "150,000+ employees"
      },
      details: {
        companyInfo: {
          founded: 1994,
          headquarters: "Mumbai, Maharashtra",
          revenue: "₹ 1.2 Lakh Cr",
          employeeCount: "150,000+",
          website: "www.hdfcbank.com"
        },
        decisionMakers: [
          {
            name: "Vikram Singh",
            role: "Operations Manager",
            department: "Operations",
            contact: "+91 98765 43214",
            email: "vikram.singh@hdfcbank.com",
            influence: "High"
          },
          {
            name: "Sashidhar Jagdishan",
            role: "CEO",
            department: "Executive",
            contact: "+91 98765 43215",
            email: "sashidhar.jagdishan@hdfcbank.com",
            influence: "Very High"
          }
        ],
        budget: {
          annual: "₹ 45 Cr",
          quarterly: "₹ 11.25 Cr",
          lastYearSpend: "₹ 40 Cr",
          growth: "12.5%"
        },
        painPoints: [
          "Process Automation",
          "Customer Experience",
          "Operational Efficiency",
          "Compliance Management"
        ],
        timeline: {
          decision: "Q2 2024",
          implementation: "Q3 2024",
          review: "Q4 2024"
        },
        competitors: [
          "ICICI Bank",
          "Axis Bank",
          "SBI"
        ],
        previousInteractions: [
          {
            date: "2024-01-20",
            type: "Meeting",
            attendees: ["Vikram Singh", "IT Team"],
            outcome: "Requirements gathering completed",
            nextSteps: "Solution architecture review"
          },
          {
            date: "2024-02-01",
            type: "Workshop",
            attendees: ["Operations Team", "IT Team"],
            outcome: "Process mapping completed",
            nextSteps: "Implementation planning"
          }
        ],
        requirements: [
          "Process Automation Platform",
          "Customer Service Tools",
          "Compliance Management System",
          "Analytics Dashboard"
        ],
        stakeholders: [
          {
            name: "Operations Team",
            influence: "High",
            concerns: "Efficiency, Training"
          },
          {
            name: "IT Security",
            influence: "High",
            concerns: "Data Security, Integration"
          },
          {
            name: "Customer Service",
            influence: "Medium",
            concerns: "User Experience, Training"
          }
        ]
      },
      stats: [
        { value: 'Plan Active', label: 'Status' },
        { value: '3 months ago', label: 'Last Purchase Date' },
        { value: '₹ 3.5 Lakh', label: 'Ticket Size' }
      ],
      showCallButton: true
    }
  ],
  renewal: [
    {
      id: 4,
      companyName: "Adani Group",
      industry: "Infrastructure & Energy",
      contactName: "Meera Desai",
      department: "HR Business Partner",
      quickStats: {
        budget: "₹ 60 Cr",
        decisionMaker: "Meera Desai",
        timeline: "Q2 2024",
        painPoints: ["Talent Management", "Digital Transformation"],
        companySize: "200,000+ employees"
      },
      details: {
        companyInfo: {
          founded: 1988,
          headquarters: "Ahmedabad, Gujarat",
          revenue: "₹ 1.5 Lakh Cr",
          employeeCount: "200,000+",
          website: "www.adanigroup.com"
        },
        decisionMakers: [
          {
            name: "Meera Desai",
            role: "HR Business Partner",
            department: "Human Resources",
            contact: "+91 98765 43216",
            email: "meera.desai@adanigroup.com",
            influence: "High"
          },
          {
            name: "Gautam Adani",
            role: "Chairman",
            department: "Executive",
            contact: "+91 98765 43217",
            email: "gautam.adani@adanigroup.com",
            influence: "Very High"
          }
        ],
        budget: {
          annual: "₹ 60 Cr",
          quarterly: "₹ 15 Cr",
          lastYearSpend: "₹ 55 Cr",
          growth: "9%"
        },
        painPoints: [
          "Talent Management",
          "Digital Transformation",
          "Employee Engagement",
          "Performance Management"
        ],
        timeline: {
          decision: "Q2 2024",
          implementation: "Q3 2024",
          review: "Q4 2024"
        },
        competitors: [
          "Reliance Industries",
          "Tata Group",
          "JSW Group"
        ],
        previousInteractions: [
          {
            date: "2024-01-05",
            type: "Review Meeting",
            attendees: ["Meera Desai", "HR Team"],
            outcome: "Current system evaluation",
            nextSteps: "Feature enhancement discussion"
          },
          {
            date: "2024-01-20",
            type: "Demo",
            attendees: ["IT Team", "HR Team"],
            outcome: "New features demonstrated",
            nextSteps: "Pricing negotiation"
          }
        ],
        requirements: [
          "Advanced HR Analytics",
          "Employee Engagement Platform",
          "Performance Management System",
          "Learning Management System"
        ],
        stakeholders: [
          {
            name: "HR Leadership",
            influence: "High",
            concerns: "ROI, User Experience"
          },
          {
            name: "IT Team",
            influence: "High",
            concerns: "Integration, Security"
          },
          {
            name: "Business Units",
            influence: "Medium",
            concerns: "Adoption, Training"
          }
        ]
      },
      stats: [
        { value: 'in 15 days', label: 'Renewal', highlight: true },
        { value: '2 months ago', label: 'Last Purchase Date' },
        { value: '₹ 7 Lakh', label: 'Ticket Size' }
      ],
      showCallButton: true
    },
    {
      id: 5,
      companyName: "Wipro",
      industry: "Information Technology",
      contactName: "Arjun Reddy",
      department: "Operations Lead",
      quickStats: {
        budget: "₹ 40 Cr",
        decisionMaker: "Arjun Reddy",
        timeline: "Q2 2024",
        painPoints: ["Process Optimization", "Cost Efficiency"],
        companySize: "250,000+ employees"
      },
      details: {
        companyInfo: {
          founded: 1945,
          headquarters: "Bangalore, Karnataka",
          revenue: "₹ 90,000 Cr",
          employeeCount: "250,000+",
          website: "www.wipro.com"
        },
        decisionMakers: [
          {
            name: "Arjun Reddy",
            role: "Operations Lead",
            department: "Operations",
            contact: "+91 98765 43218",
            email: "arjun.reddy@wipro.com",
            influence: "High"
          },
          {
            name: "Thierry Delaporte",
            role: "CEO",
            department: "Executive",
            contact: "+91 98765 43219",
            email: "thierry.delaporte@wipro.com",
            influence: "Very High"
          }
        ],
        budget: {
          annual: "₹ 40 Cr",
          quarterly: "₹ 10 Cr",
          lastYearSpend: "₹ 35 Cr",
          growth: "14%"
        },
        painPoints: [
          "Process Optimization",
          "Cost Efficiency",
          "Quality Management",
          "Resource Utilization"
        ],
        timeline: {
          decision: "Q2 2024",
          implementation: "Q3 2024",
          review: "Q4 2024"
        },
        competitors: [
          "TCS",
          "Infosys",
          "HCL Technologies"
        ],
        previousInteractions: [
          {
            date: "2024-01-15",
            type: "Review Meeting",
            attendees: ["Arjun Reddy", "Operations Team"],
            outcome: "Current system performance review",
            nextSteps: "Feature enhancement discussion"
          },
          {
            date: "2024-01-30",
            type: "Workshop",
            attendees: ["IT Team", "Operations Team"],
            outcome: "New features demonstrated",
            nextSteps: "Implementation planning"
          }
        ],
        requirements: [
          "Process Automation Tools",
          "Quality Management System",
          "Resource Management Platform",
          "Analytics Dashboard"
        ],
        stakeholders: [
          {
            name: "Operations Team",
            influence: "High",
            concerns: "Efficiency, Training"
          },
          {
            name: "IT Security",
            influence: "High",
            concerns: "Security, Integration"
          },
          {
            name: "Quality Team",
            influence: "Medium",
            concerns: "Compliance, Reporting"
          }
        ]
      },
      stats: [
        { value: 'in 30 days', label: 'Renewal', highlight: true },
        { value: '1 month ago', label: 'Last Purchase Date' },
        { value: '₹ 4 Lakh', label: 'Ticket Size' }
      ],
      showCallButton: true
    }
  ]
}; 