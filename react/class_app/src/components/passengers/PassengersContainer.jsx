import LoadingPassengers from "./LoadingPassengers";
import Passengers from "./Passengers";

const PassengersContainer = ({ passengers, current, limit, isLoading}) => {
  if (isLoading)
    return <LoadingPassengers limit={limit} />;
  else 
    return <Passengers passengers={passengers && passengers[current]} />;
};

export default PassengersContainer;
