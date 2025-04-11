'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/app/config/navigation';

export default function BottomBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border sm:hidden">
      <div className="flex justify-around items-center h-20">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                pathname === item.path
                  ? 'text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className={`flex flex-col items-center ${pathname === item.path ? 'bg-black px-4 py-2 rounded-md' : ''}`}>
                <Icon className="h-5 w-5" />
                <span className="text-xs mt-1.5 font-medium">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
} 