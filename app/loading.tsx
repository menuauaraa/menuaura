export default function Loading() {
  return (
    <div className="fixed inset-0 bg-dark-950 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-primary-500/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-500 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-gradient">MenuAura</h2>
        <p className="text-gray-400 mt-2">Loading...</p>
      </div>
    </div>
  );
}
