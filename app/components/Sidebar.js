'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, Settings, Menu, ListTodo } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navItems } from '@/app/config/navigation';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const pathname = usePathname();

  const NavItems = () => (
    <nav className="flex-1 px-2 space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
              pathname === item.path
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className={cn(
              "h-4 w-4",
              pathname === item.path
                ? "text-foreground"
                : "text-muted-foreground group-hover:text-foreground"
            )} />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      

      {/* Desktop Sidebar */}
      <div className={cn(
        "hidden sm:flex sm:flex-col sm:w-64 sm:fixed sm:inset-y-0 sm:border-r sm:border-gray-200 bg-white"
      )}>
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-xl font-bold text-gray-900">BUDDY</span>
          </div>
          <NavItems />
        </div>
      </div>
    </>
  );
} 