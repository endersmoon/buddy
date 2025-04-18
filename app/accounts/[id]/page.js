'use client';

import { companiesData } from '../../data/companies';
import { Button } from '@/components/ui/button';
import { PhoneCall, Mail, Calendar, Users, Wallet, AlertCircle, Building, Globe, Clock, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { use } from 'react';

export default function CompanyDetails({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const companyId = parseInt(unwrappedParams.id);

  // Find the company by ID
  const company = Object.values(companiesData)
    .flat()
    .find(comp => comp.id === companyId);

  if (!company) {
    return <div>Company not found</div>;
  }

  const { details, quickStats } = company;

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h1 className='text-2xl font-bold'>{company.companyName}</h1>
          <p className='text-gray-500'>{company.industry}</p>
        </div>
        <Button variant='outline' className='rounded-full'>
          <PhoneCall className='w-4 h-4 mr-2' />
          Call {company.contactName}
        </Button>
      </div>

      <Tabs defaultValue='overview' className='w-full'>
        <TabsList className='w-fit'>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='decisionMakers'>Decision Makers</TabsTrigger>
          <TabsTrigger value='interactions'>Interactions</TabsTrigger>
          <TabsTrigger value='requirements'>Requirements</TabsTrigger>
        </TabsList>

        <TabsContent value='overview' className='mt-6'>
          <div className='grid grid-cols-1 gap-6'>
            <div className='bg-white p-6 rounded-lg border'>
              <h2 className='text-lg font-semibold mb-4'>Company Information</h2>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Building className='w-5 h-5 text-gray-500' />
                  <div>
                    <p className='text-sm text-gray-500'>Headquarters</p>
                    <p className='font-medium'>{details.companyInfo.headquarters}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Globe className='w-5 h-5 text-gray-500' />
                  <div>
                    <p className='text-sm text-gray-500'>Website</p>
                    <p className='font-medium'>{details.companyInfo.website}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Users className='w-5 h-5 text-gray-500' />
                  <div>
                    <p className='text-sm text-gray-500'>Employees</p>
                    <p className='font-medium'>{details.companyInfo.employeeCount}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Wallet className='w-5 h-5 text-gray-500' />
                  <div>
                    <p className='text-sm text-gray-500'>Revenue</p>
                    <p className='font-medium'>{details.companyInfo.revenue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg border'>
              <h2 className='text-lg font-semibold mb-4'>Key Information</h2>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Calendar className='w-5 h-5 text-gray-500' />
                  <div>
                    <p className='text-sm text-gray-500'>Decision Timeline</p>
                    <p className='font-medium'>{details.timeline.decision}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Clock className='w-5 h-5 text-gray-500' />
                  <div>
                    <p className='text-sm text-gray-500'>Implementation</p>
                    <p className='font-medium'>{details.timeline.implementation}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <AlertCircle className='w-5 h-5 text-gray-500' />
                  <div>
                    <p className='text-sm text-gray-500'>Pain Points</p>
                    <div className='flex flex-wrap gap-2 mt-1'>
                      {details.painPoints.map((point, index) => (
                        <span key={index} className='bg-gray-100 px-2 py-1 rounded text-sm'>
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value='decisionMakers' className='mt-6'>
          <div className='bg-white p-6 rounded-lg border'>
            <h2 className='text-lg font-semibold mb-4'>Decision Makers</h2>
            <div className='space-y-4'>
              {details.decisionMakers.map((person, index) => (
                <div key={index} className='border-b pb-4 last:border-b-0'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className='font-medium'>{person.name}</h3>
                      <p className='text-sm text-gray-500'>{person.role} - {person.department}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      person.influence === 'Very High' ? 'bg-red-100 text-red-800' :
                      person.influence === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {person.influence} Influence
                    </span>
                  </div>
                  <div className='flex gap-4 mt-2'>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                      <PhoneCall className='w-4 h-4' />
                      {person.contact}
                    </div>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                      <Mail className='w-4 h-4' />
                      {person.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value='interactions' className='mt-6'>
          <div className='bg-white p-6 rounded-lg border'>
            <h2 className='text-lg font-semibold mb-4'>Previous Interactions</h2>
            <div className='space-y-4'>
              {details.previousInteractions.map((interaction, index) => (
                <div key={index} className='border-b pb-4 last:border-b-0'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className='font-medium'>{interaction.type}</h3>
                      <p className='text-sm text-gray-500'>{interaction.date}</p>
                    </div>
                    <span className='px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs'>
                      {interaction.attendees.length} attendees
                    </span>
                  </div>
                  <div className='mt-2'>
                    <p className='text-sm'><span className='font-medium'>Outcome:</span> {interaction.outcome}</p>
                    <p className='text-sm mt-1'><span className='font-medium'>Next Steps:</span> {interaction.nextSteps}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value='requirements' className='mt-6'>
          <div className='bg-white p-6 rounded-lg border'>
            <h2 className='text-lg font-semibold mb-4'>Requirements & Stakeholders</h2>
            <div className='space-y-6'>
              <div>
                <h3 className='font-medium mb-3'>Key Requirements</h3>
                <div className='flex flex-wrap gap-2'>
                  {details.requirements.map((req, index) => (
                    <span key={index} className='bg-green-100 px-3 py-1 rounded-full text-sm'>
                      {req}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className='font-medium mb-3'>Stakeholders</h3>
                <div className='space-y-3'>
                  {details.stakeholders.map((stakeholder, index) => (
                    <div key={index} className='flex justify-between items-center'>
                      <div>
                        <p className='font-medium'>{stakeholder.name}</p>
                        <p className='text-sm text-gray-500'>{stakeholder.concerns}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        stakeholder.influence === 'High' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {stakeholder.influence} Influence
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 