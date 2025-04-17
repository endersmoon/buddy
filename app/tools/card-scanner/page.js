export default function CardScannerPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Card Scanner</h1>
      <div className="bg-white p-6 rounded-lg border">
        <p className="text-muted-foreground mb-4">Upload an image of a visiting card to extract contact information.</p>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-muted-foreground">Drag and drop an image here or click to upload</p>
        </div>
      </div>
    </div>
  );
} 