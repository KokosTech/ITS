const Passengers = ({ passengers }) => (
  <div className="flex flex-col sm:w-96 max-w-sm p-2 w-full space-y-2">
    {passengers?.map((passenger) => {
      return (
        <div
          key={passenger?._id}
          className="w-full rounded-xl flex items-center justify-between space-x-2 bg-slate-900 p-2"
        >
          <p className="text-xl font-bold">{passenger?.name}</p>
          <p className="bg-slate-700 w-12 h-10 p-2 text-right flex items-center justify-center rounded-lg font-black">
            {passenger?.trips || "-"}
          </p>
        </div>
      );
    })}
  </div>
);

export default Passengers;
