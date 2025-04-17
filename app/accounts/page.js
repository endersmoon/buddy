'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PhoneCall, PlusIcon } from 'lucide-react';

let NewAccount = () => {
  return (
    <div className='bg-white p-3 border rounded-lg  gap-3  w-full'>
      <div className='flex items-center gap-3 pb-2 border-b'>
        <div className='w-[60px] h-[60px] bg-gray-200 rounded' />
        <div>
          <h1 className='text-lg font-semibold'>Larsen & Toubro</h1>
          <p className='text-sm text-gray-500'>Engineering & Construction</p>
        </div>
      </div>
      <div className='flex  items-center justify-between gap-3 mt-3'>
        <div className='flex items-center gap-2 '>
          <div className='w-[40px] h-[40px] bg-gray-200 rounded-full ' />
          <div>
            <h1 className=' text-sm font-mediums'>Kashish Sharma</h1>
            <p className='text-xs text-gray-500'>Human Resource Department</p>
          </div>
        </div>
        <Button variant='outline' size='sm' className={'rounded-full'}>
          <PhoneCall className='w-4 h-4' />
         Call
        </Button>
      </div>
    </div>
  );
};

let ExistingAccount = () => {
  return (
    <div className='bg-white p-3 border rounded-lg  w-full'>
      <h1>Existing Account</h1>
    </div>
  );
};

let RenewalAccount = () => {
  return (
    <div className='bg-white p-3 border rounded-lg  w-full'>
      <h1>Renewal Account</h1>
    </div>
  );
};

export default function AccountsPage() {
  return (
    <div className=' p-6  '>
      <h1 className='text-2xl font-bold text-gray-900 mb-6'>Accounts</h1>

      <Tabs
        defaultValue='new'
        className='w-full
        '>
        <TabsList className=' w-fit'>
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
