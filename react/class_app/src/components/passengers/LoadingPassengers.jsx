const LoadingPassengers = ({ limit }) => (
  <div class="rounded-md max-w-sm p-2 w-full mx-auto">
    <div class="animate-pulse flex flex-col items-center justify-center space-y-2">
        {Array.from({length: limit}, (_, index) => (
            <div class="w-96 h-14 bg-slate-900 rounded-xl">
            </div>
        ))}
    </div>
  </div>
);

export default LoadingPassengers;
