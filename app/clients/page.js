'use client';

import { clients } from '../data/clients';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ClientsPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Clients</h1>
          <Badge variant="outline">{clients.length} Clients</Badge>
        </div>

        <div className="space-y-2">
          {clients.map((client) => (
            <Link 
              key={client.id} 
              href={`/clients/${client.id}`}
              className="block"
            >
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gray-100">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">{client.name}</h2>
                        <p className="text-sm text-muted-foreground">{client.contact}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 