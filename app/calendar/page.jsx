import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MeetingCard = ({ date, time, title, type, participants, status }) => {
  const statusColors = {
    upcoming: 'text-blue-500',
    pending: 'text-yellow-500',
    recurring: 'text-green-500',
    past: 'text-gray-500',
    cancelled: 'text-red-500'
  };

  const getDateDisplay = (dateStr) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [day, dateNum] = dateStr.split(' ');
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    
    const meetingDate = new Date(currentYear, currentMonth, parseInt(dateNum));
    
    if (meetingDate.toDateString() === today.toDateString()) {
      return { day: 'Today', date: dateNum };
    } else if (meetingDate.toDateString() === tomorrow.toDateString()) {
      return { day: 'Tomorrow', date: dateNum };
    }
    return { day, date: dateNum };
  };

  const dateDisplay = getDateDisplay(date);

  return (
    <div className='border rounded-lg p-4 mb-4 hover:shadow-md transition-shadow'>
      <div className='flex items-start justify-between'>
        <div className='flex gap-6'>
          <div className={statusColors[status]}>
            <div className='text-sm'>{dateDisplay.day}</div>
            <div className='text-2xl font-bold'>{dateDisplay.date}</div>
          </div>

          <div className='space-y-2'>
            <div>
              <h3 className='font-medium'>{title}</h3>
            </div>
            <div className='flex items-center gap-2 text-gray-600'>
              <Clock className='w-4 h-4' />
              <span>{time}</span>
            </div>
            <div className='flex items-center gap-2 text-gray-600'>
              <MapPin className='w-4 h-4' />
              <span>{type}</span>
            </div>
            <div className='flex -space-x-2 mt-2'>
              {participants.map((participant, index) => (
                <div
                  key={index}
                  className='w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center'>
                  {participant.initial}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Button variant='ghost' size='icon'>
          <MoreVertical className='w-4 h-4' />
        </Button>
      </div>
    </div>
  );
};

let Calendar = () => {
  const dummyMeetings = {
    upcoming: [
      { date: 'Thu 20', time: '09:00 - 09:30', title: 'Bajaj Finserv - Renewal Meeting', type: 'Online', participants: [{ initial: 'P' }, { initial: 'L' }], status: 'upcoming' },
      { date: 'Thu 20', time: '11:00 - 12:00', title: 'Tata Motors - New Project Discussion', type: 'In-Person', participants: [{ initial: 'R' }, { initial: 'S' }, { initial: 'M' }], status: 'upcoming' },
      { date: 'Thu 20', time: '14:30 - 15:30', title: 'Infosys - Quarterly Review', type: 'Online', participants: [{ initial: 'N' }, { initial: 'A' }, { initial: 'K' }], status: 'upcoming' },
      { date: 'Fri 21', time: '10:00 - 11:00', title: 'Reliance Industries - Partnership Proposal', type: 'Hybrid', participants: [{ initial: 'M' }, { initial: 'D' }, { initial: 'A' }], status: 'upcoming' },
      { date: 'Fri 21', time: '15:00 - 16:00', title: 'HDFC Bank - Digital Transformation', type: 'Online', participants: [{ initial: 'S' }, { initial: 'R' }, { initial: 'P' }], status: 'upcoming' }
    ],
    pending: [
      { date: 'Sat 22', time: '10:00 - 11:00', title: 'Wipro - Cloud Migration Strategy', type: 'Online', participants: [{ initial: 'A' }, { initial: 'K' }, { initial: 'P' }], status: 'pending' },
      { date: 'Mon 24', time: '14:00 - 15:00', title: 'Mahindra & Mahindra - EV Project Review', type: 'In-Person', participants: [{ initial: 'R' }, { initial: 'V' }, { initial: 'S' }], status: 'pending' },
      { date: 'Tue 25', time: '11:30 - 12:30', title: 'ICICI Bank - Fintech Integration', type: 'Hybrid', participants: [{ initial: 'M' }, { initial: 'D' }, { initial: 'R' }], status: 'pending' }
    ],
    recurring: [
      { date: 'Mon 24', time: '09:00 - 10:00', title: 'TCS - Weekly Team Sync', type: 'Online', participants: [{ initial: 'S' }, { initial: 'K' }, { initial: 'M' }], status: 'recurring' },
      { date: 'Wed 26', time: '15:00 - 16:00', title: 'Adani Group - Project Status Update', type: 'Hybrid', participants: [{ initial: 'G' }, { initial: 'A' }, { initial: 'P' }], status: 'recurring' },
      { date: 'Fri 28', time: '11:00 - 12:00', title: 'L&T - Monthly Review', type: 'In-Person', participants: [{ initial: 'R' }, { initial: 'N' }, { initial: 'S' }], status: 'recurring' }
    ],
    past: [
      { date: 'Wed 19', time: '10:00 - 11:00', title: 'Jio Platforms - AI Integration', type: 'Online', participants: [{ initial: 'M' }, { initial: 'A' }, { initial: 'K' }], status: 'past' },
      { date: 'Tue 18', time: '14:00 - 15:00', title: 'Asian Paints - Marketing Strategy', type: 'In-Person', participants: [{ initial: 'R' }, { initial: 'S' }, { initial: 'P' }], status: 'past' },
      { date: 'Mon 17', time: '11:30 - 12:30', title: 'ITC Limited - Product Launch', type: 'Hybrid', participants: [{ initial: 'S' }, { initial: 'D' }, { initial: 'M' }], status: 'past' }
    ],
    cancelled: [
      { date: 'Sun 16', time: '10:00 - 11:00', title: 'Maruti Suzuki - Supply Chain Review', type: 'In-Person', participants: [{ initial: 'R' }, { initial: 'K' }, { initial: 'M' }], status: 'cancelled' },
      { date: 'Sat 15', time: '14:00 - 15:00', title: 'Bharti Airtel - Network Upgrade', type: 'Online', participants: [{ initial: 'S' }, { initial: 'P' }, { initial: 'R' }], status: 'cancelled' },
      { date: 'Fri 14', time: '11:30 - 12:30', title: 'HUL - Brand Strategy', type: 'Hybrid', participants: [{ initial: 'M' }, { initial: 'D' }, { initial: 'A' }], status: 'cancelled' }
    ]
  };

  return (
    <div className='p-6 '>
      <div className='text-2xl font-bold mb-2'>Meetings</div>
      <Tabs defaultValue='upcoming' className='l'>
        <TabsList className='w-fit'>
          <TabsTrigger value='upcoming'>Upcoming</TabsTrigger>
          <TabsTrigger value='pending'>Pending</TabsTrigger>
          <TabsTrigger value='recurring'>Recurring</TabsTrigger>
          <TabsTrigger value='past'>Past</TabsTrigger>
          <TabsTrigger value='cancelled'>Cancelled</TabsTrigger>
        </TabsList>
        <TabsContent value='upcoming' className='mt-4 flex-1 overflow-auto'>
          {dummyMeetings.upcoming.map((meeting, index) => (
            <MeetingCard key={index} {...meeting} />
          ))}
        </TabsContent>
        <TabsContent value='pending' className='mt-4 flex-1 overflow-auto'>
          {dummyMeetings.pending.map((meeting, index) => (
            <MeetingCard key={index} {...meeting} />
          ))}
        </TabsContent>
        <TabsContent value='recurring' className='mt-4 flex-1 overflow-auto'>
          {dummyMeetings.recurring.map((meeting, index) => (
            <MeetingCard key={index} {...meeting} />
          ))}
        </TabsContent>
        <TabsContent value='past' className='mt-4 flex-1 overflow-auto'>
          {dummyMeetings.past.map((meeting, index) => (
            <MeetingCard key={index} {...meeting} />
          ))}
        </TabsContent>
        <TabsContent value='cancelled' className='mt-4 flex-1 overflow-auto'>
          {dummyMeetings.cancelled.map((meeting, index) => (
            <MeetingCard key={index} {...meeting} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Calendar;
