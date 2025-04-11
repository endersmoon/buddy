'use client';

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, Mail, Phone } from "lucide-react";

// Sample client data with enhanced information
const clients = [
  {
    id: 1,
    name: 'Acme Corp',
    type: 'existing',
    status: 'active',
    logo: 'https://picsum.photos/seed/acme/200/200',
    industry: 'Technology',
    sector: 'Software',
    companySize: '1000-5000',
    location: 'San Francisco, CA',
    headquarters: 'San Francisco, CA',
    tags: ['stocks went up', 'news event'],
    contactPerson: {
      name: 'Lisa Thompson',
      role: 'HR Manager',
      email: 'lisa.thompson@acmecorp.com',
      phone: '+1 (415) 555-0123'
    }
  },
  {
    id: 2,
    name: 'TechStart',
    type: 'new',
    status: 'pending',
    logo: 'https://picsum.photos/seed/techstart/200/200',
    industry: 'FinTech',
    sector: 'Financial Services',
    companySize: '100-500',
    location: 'New York, NY',
    headquarters: 'New York, NY',
    tags: ['competitor event', 'stock event'],
    contactPerson: {
      name: 'Robert Chen',
      role: 'HR Director',
      email: 'robert.chen@techstart.com',
      phone: '+1 (212) 555-0123'
    }
  },
  {
    id: 3,
    name: 'Global Solutions',
    type: 'renewal',
    status: 'active',
    logo: 'https://picsum.photos/seed/global/200/200',
    industry: 'Consulting',
    sector: 'Professional Services',
    companySize: '5000+',
    location: 'London, UK',
    headquarters: 'London, UK',
    tags: ['news event'],
    contactPerson: {
      name: 'Emma Wilson',
      role: 'Head of HR',
      email: 'emma.wilson@globalsolutions.com',
      phone: '+44 20 5555 0123'
    }
  },
  {
    id: 4,
    name: 'Innovate Inc',
    type: 'new',
    status: 'pending',
    logo: 'https://picsum.photos/seed/innovate/200/200',
    industry: 'Healthcare',
    sector: 'Medical Technology',
    companySize: '500-1000',
    location: 'Boston, MA',
    headquarters: 'Boston, MA',
    tags: ['stocks went up'],
    contactPerson: {
      name: 'James Rodriguez',
      role: 'HR Business Partner',
      email: 'james.r@innovateinc.com',
      phone: '+1 (617) 555-0123'
    }
  },
  {
    id: 5,
    name: 'Future Systems',
    type: 'existing',
    status: 'inactive',
    logo: 'https://picsum.photos/seed/future/200/200',
    industry: 'Manufacturing',
    sector: 'Industrial',
    companySize: '1000-5000',
    location: 'Chicago, IL',
    headquarters: 'Chicago, IL',
    tags: ['competitor event'],
    contactPerson: {
      name: 'Patricia Lee',
      role: 'HR Manager',
      email: 'patricia.lee@futuresystems.com',
      phone: '+1 (312) 555-0123'
    }
  },
];

const typeOptions = ['all', 'new', 'existing', 'renewal'];
const statusOptions = ['all', 'active', 'pending', 'inactive'];

export default function AccountsPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredClients = clients.filter(client => {
    const typeMatch = selectedType === 'all' || client.type === selectedType;
    const statusMatch = selectedStatus === 'all' || client.status === selectedStatus;
    return typeMatch && statusMatch;
  });

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Client Accounts</h1>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="w-full sm:w-48">
            <label className="block text-sm font-medium mb-1">Client Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 border rounded-md bg-white"
            >
              {typeOptions.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-48">
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full p-2 border rounded-md bg-white"
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Client Cards List */}
      <div className="space-y-4">
        {filteredClients.map(client => (
          <div key={client.id} className="border rounded-lg bg-white">
            <Accordion type="single" collapsible>
              <AccordionItem value={client.id.toString()}>
                <AccordionTrigger className="px-4 hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {client.logo ? (
                        <img 
                          src={client.logo} 
                          alt={`${client.name} logo`} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.querySelector('.fallback-icon').style.display = 'block';
                          }}
                        />
                      ) : null}
                      <Building2 className="w-5 h-5 text-gray-600 fallback-icon hidden" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="font-semibold">{client.name}</h2>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          client.status === 'active' ? 'bg-green-100 text-green-800' :
                          client.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {client.industry} • {client.location}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 space-y-4">
                    {/* Company Details */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Sector</p>
                        <p className="text-sm font-medium">{client.sector}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Company Size</p>
                        <p className="text-sm font-medium">{client.companySize}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Headquarters</p>
                        <p className="text-sm font-medium">{client.headquarters}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Client Type</p>
                        <p className="text-sm font-medium">
                          {client.type.charAt(0).toUpperCase() + client.type.slice(1)}
                        </p>
                      </div>
                    </div>

                    {/* HR Contact */}
                    <div className="border-t pt-4">
                      <h3 className="text-sm font-medium mb-2">HR Contact</h3>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">{client.contactPerson.name}</p>
                        <p className="text-xs text-muted-foreground">{client.contactPerson.role}</p>
                        <div className="flex items-center gap-2 text-xs text-blue-600">
                          <Mail className="w-3 h-3" />
                          <a href={`mailto:${client.contactPerson.email}`} className="hover:underline">
                            {client.contactPerson.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Phone className="w-3 h-3" />
                          <a href={`tel:${client.contactPerson.phone}`} className="hover:text-gray-900">
                            {client.contactPerson.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {client.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
} 