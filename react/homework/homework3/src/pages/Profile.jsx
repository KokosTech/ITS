import { useUserContext } from "../contexts/userContext";

const Profile = () => {
  const { user, logOut } = useUserContext();

  return (
    <div className="flex p-5 w-full items-center justify-center">
      <div className="flex flex-col w-full sm:w-3/5 md:w-1/2 lg:w-2/5 max-w-lg p-5 rounded-xl space-y-5 bg-gray-900 text-white">
        <h1 className="font-bold text-center text-xl">Profile</h1>
        <div className="space-y-2">
          {Object.entries(user).map(([key, value]) => (
            <div key={key} className="flex flex-col space-y-2">
              <p className="text-gray-500">{key}</p>
              <p className="w-full p-2 rounded-lg bg-gray-800 text-gray-100">
                {value}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={logOut}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
