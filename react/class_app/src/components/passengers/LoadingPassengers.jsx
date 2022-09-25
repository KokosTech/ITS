const LoadingPassengers = ({ limit }) => (
  <div class="rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex flex-col items-center justify-center space-x-2">
        {Array.from({length: limit}, (_, index) => (
            <div class="w-96 h-14 bg-slate-900 rounded-lg">
              ...
            </div>
        ))}
    </div>
  </div>
);

export default LoadingPassengers;
