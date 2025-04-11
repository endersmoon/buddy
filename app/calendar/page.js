export default function CalendarPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">Calendar Overview</h2>
          <p className="text-muted-foreground">View and manage your schedule here.</p>
        </div>
      </div>
    </div>
  );
} 