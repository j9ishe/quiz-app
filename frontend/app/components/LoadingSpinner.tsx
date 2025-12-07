export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      <p className="mt-4 text-gray-600 text-lg">Loading quiz...</p>
    </div>
  );
}

