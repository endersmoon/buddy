'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/app/config/navigation';
import { cn } from '@/lib/utils';

export default function BottomBar() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border sm:hidden px-2'
      )}>
      <div className='flex justify-between items-center h-20 gap-2'>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full',
                isActive
                  ? 'text-white'
                  : 'text-muted-foreground hover:text-foreground'
              )}>
              <div
                className={cn(
                  'flex flex-col w-[68px] items-center',
                  isActive && 'bg-black px-3 py-2 rounded'
                )}>
                <Icon className='h-5 w-5' />
                <span className='text-xs mt-1.5 font-medium'>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
