export default function PersonSearchPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Person Search</h1>
      <div className="bg-white p-6 rounded-lg border">
        <p className="text-muted-foreground mb-4">Search for a person and get their information.</p>
        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-4 border rounded-lg"
            placeholder="Enter person's name or email..."
          />
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
} 