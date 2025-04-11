'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/app/config/navigation';

export default function BottomBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 sm:hidden">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`${
                pathname === item.path
                  ? 'text-primary'
                  : 'text-gray-500 hover:text-gray-700'
              } flex flex-col items-center py-2 px-4`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
} 