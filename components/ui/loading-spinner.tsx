export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-amber-200 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-4 h-4 bg-amber-600 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Inner statuette icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-8 bg-amber-600 rounded-t-full opacity-60 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
