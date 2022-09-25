const LoadingPassengers = ({ limit }) => (
  <div class="rounded-md max-w-sm w-full mx-auto">
    <div class="animate-pulse flex flex-col items-center justify-center space-y-2 sm:w-96 w-full max-w-sm p-2">
      {Array.from({ length: limit }, (_, index) => (
        <div class="w-full h-14 bg-slate-900 rounded-xl"></div>
      ))}
    </div>
  </div>
);

export default LoadingPassengers;
