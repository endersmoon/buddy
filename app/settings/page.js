export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">Settings Overview</h2>
          <p className="text-muted-foreground">Configure your application settings here.</p>
        </div>
      </div>
    </div>
  );
} 