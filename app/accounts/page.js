'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EyeIcon, PhoneCall, Calendar, Users, Wallet, AlertCircle } from 'lucide-react';
import { companiesData } from '../data/companies';
import Link from 'next/link';

// Reusable AccountCard component
const AccountCard = ({ 
  companyName = "Larsen & Toubro", 
  industry = "Engineering & Construction",
  contactName = "Kashish Sharma",
  department = "Human Resource Department",
  quickStats = {},
  stats = [],
  showCallButton = true,
  id
}) => {
  return (
    <div className='bg-white p-3 border rounded-lg w-full'>
      <div className='flex items-center justify-between gap-3 pb-2 border-b'>
        <div className='flex items-center gap-3'>
          <div className='w-[60px] h-[60px] bg-gray-200 rounded' />
          <div>
            <h1 className='text-lg font-semibold'>{companyName}</h1>
            <p className='text-sm text-gray-500'>{industry}</p>
          </div>
        </div>
        <Link href={`/accounts/${id}`}>
          <Button variant='outline' size='sm' className='rounded-full'>
            <EyeIcon className='w-4 h-4' />
            View Details
          </Button>
        </Link>
      </div>

      {/* Quick Stats Section */}
      <div className='grid grid-cols-2 gap-3 mt-3 pb-3 border-b'>
        <div className='flex items-center gap-2'>
          <Wallet className='w-4 h-4 text-gray-500' />
          <div>
            <p className='text-sm font-medium'>Budget</p>
            <p className='text-xs text-gray-500'>{quickStats.budget || 'Not specified'}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Users className='w-4 h-4 text-gray-500' />
          <div>
            <p className='text-sm font-medium'>Decision Maker</p>
            <p className='text-xs text-gray-500'>{quickStats.decisionMaker || contactName}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Calendar className='w-4 h-4 text-gray-500' />
          <div>
            <p className='text-sm font-medium'>Timeline</p>
            <p className='text-xs text-gray-500'>{quickStats.timeline || 'Not specified'}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <AlertCircle className='w-4 h-4 text-gray-500' />
          <div>
            <p className='text-sm font-medium'>Pain Points</p>
            <p className='text-xs text-gray-500'>
              {quickStats.painPoints?.slice(0, 2).join(', ') || 'Not specified'}
            </p>
          </div>
        </div>
      </div>

      {stats.length > 0 && (
        <div className='grid grid-cols-3 gap-3 mt-3 pb-3 border-b'>
          {stats.map((stat, index) => (
            <div key={index} className='flex flex-col gap-1'>
              <p className={`text-sm font-medium ${stat.highlight ? 'text-orange-500' : ''}`}>
                {stat.value}
              </p>
              <h1 className='text-xs font-medium text-muted-foreground'>{stat.label}</h1>
            </div>
          ))}
        </div>
      )}

      <div className='flex items-center justify-between gap-3 mt-3'>
        <div className='flex items-center gap-2'>
          <div className='w-[40px] h-[40px] bg-gray-200 rounded-full' />
          <div>
            <h1 className='text-sm font-medium'>{contactName}</h1>
            <p className='text-xs text-gray-500'>{department}</p>
          </div>
        </div>
        {showCallButton && (
          <Button variant='outline' size='sm' className='rounded-full'>
            <PhoneCall className='w-4 h-4' />
            Call
          </Button>
        )}
      </div>
    </div>
  );
};

// Specific account type components
const NewAccount = () => (
  <div className='space-y-4'>
    {companiesData.new.map((company, index) => (
      <AccountCard key={index} {...company} />
    ))}
  </div>
);

const RenewalAccount = () => (
  <div className='space-y-4'>
    {companiesData.renewal.map((company, index) => (
      <AccountCard key={index} {...company} />
    ))}
  </div>
);

const ExistingAccount = () => (
  <div className='space-y-4'>
    {companiesData.existing.map((company, index) => (
      <AccountCard key={index} {...company} />
    ))}
  </div>
);

export default function AccountsPage() {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold text-gray-900 mb-6'>Accounts</h1>

      <Tabs defaultValue='new' className='w-full'>
        <TabsList className='w-fit'>
          <TabsTrigger value='new'>New</TabsTrigger>
          <TabsTrigger value='existing'>Existing</TabsTrigger>
          <TabsTrigger value='renewal'>Renewal</TabsTrigger>
        </TabsList>

        <TabsContent value='new' className='mt-6 w-full'>
          <NewAccount />
        </TabsContent>

        <TabsContent value='existing' className='mt-6'>
          <ExistingAccount />
        </TabsContent>

        <TabsContent value='renewal' className='mt-6'>
          <RenewalAccount />
        </TabsContent>
      </Tabs>
    </div>
  );
}
