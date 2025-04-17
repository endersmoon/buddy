export default function ToolsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tools</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">Card Scanner</h2>
          <p className="text-muted-foreground">Scan visiting cards and extract contact information</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">Meeting notes</h2>
          <p className="text-muted-foreground">Take meeting notes and summarize them</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">Person search</h2>
          <p className="text-muted-foreground">Search for a person and get their information</p>
        </div>
     

      </div>
    </div>
  );
} 